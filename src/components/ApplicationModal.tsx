import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, ArrowLeft, ExternalLink, CheckCircle2, AlertCircle } from "lucide-react";
import { useState } from "react";
import emailjs from '@emailjs/browser';

interface ApplicationModalProps {
    isOpen: boolean;
    onClose: () => void;
}

type Step = 1 | 2 | 3 | 4;

const ApplicationModal = ({ isOpen, onClose }: ApplicationModalProps) => {
    const [step, setStep] = useState<Step>(1);
    const [xUsername, setXUsername] = useState("");
    const [walletAddress, setWalletAddress] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState("");
    const [tasksCompleted, setTasksCompleted] = useState({
        follow: false,
        tag: false,
        quote: false,
    });

    // Validation functions
    const validateXUsername = (username: string): boolean => {
        // Remove @ if present
        const cleanUsername = username.replace('@', '').trim();
        
        // X username rules: 1-15 characters, alphanumeric and underscore only
        const usernameRegex = /^[a-zA-Z0-9_]{1,15}$/;
        
        if (!cleanUsername) {
            setError("Please enter your X username");
            return false;
        }
        
        if (!usernameRegex.test(cleanUsername)) {
            setError("Invalid X username. Must be 1-15 characters (letters, numbers, underscore only)");
            return false;
        }
        
        setError("");
        return true;
    };

    const validateWalletAddress = (address: string): boolean => {
        // Ethereum address validation: starts with 0x, followed by 40 hex characters
        const ethAddressRegex = /^0x[a-fA-F0-9]{40}$/;
        
        if (!address.trim()) {
            setError("Please enter your wallet address");
            return false;
        }
        
        if (!ethAddressRegex.test(address)) {
            setError("Invalid Ethereum address. Must start with 0x followed by 40 hex characters");
            return false;
        }
        
        setError("");
        return true;
    };

    const handleNext = () => {
        setError("");
        
        if (step === 1) {
            if (!validateXUsername(xUsername)) {
                return;
            }
        }
        
        if (step === 2) {
            if (!Object.values(tasksCompleted).every(Boolean)) {
                setError("Please complete all tasks before proceeding");
                return;
            }
        }
        
        if (step === 3) {
            if (!validateWalletAddress(walletAddress)) {
                return;
            }
        }
        
        if (step < 4) {
            setStep((step + 1) as Step);
        }
    };

    const handleBack = () => {
        setError("");
        if (step > 1) {
            setStep((step - 1) as Step);
        }
    };

    const handleSubmit = async () => {
        if (!validateWalletAddress(walletAddress)) {
            return;
        }

        setIsSubmitting(true);
        setError("");

        try {
            // Clean username
            const cleanUsername = xUsername.replace('@', '').trim();
            
            // EmailJS configuration
            const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
            const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
            const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

            if (!PUBLIC_KEY || !SERVICE_ID || !TEMPLATE_ID) {
                throw new Error("Email service not configured. Please contact support.");
            }

            const templateParams = {
                to_name: "Pika Team",
                from_name: `@${cleanUsername}`,
                x_username: `@${cleanUsername}`,
                wallet_address: walletAddress,
                x_profile_link: `https://x.com/${cleanUsername}`,
                submission_time: new Date().toLocaleString(),
                message: `New whitelist application from @${cleanUsername}\n\nWallet: ${walletAddress}\n\nTasks Completed:\n✓ Follow @pikajpegs\n✓ Tag 2 friends\n✓ Quote tweet\n\nPlease verify:\n1. User follows @pikajpegs\n2. User tagged friends in comments\n3. User quoted the pinned post with "pika"\n\nX Profile: https://x.com/${cleanUsername}`,
            };

            const result = await emailjs.send(
                SERVICE_ID,
                TEMPLATE_ID,
                templateParams,
                PUBLIC_KEY
            );

            if (result.text === 'OK') {
                setStep(4);
            } else {
                throw new Error("Failed to submit application");
            }
        } catch (err: any) {
            console.error('Submission error:', err);
            setError(err.message || "Failed to submit application. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleClose = () => {
        setStep(1);
        setXUsername("");
        setWalletAddress("");
        setTasksCompleted({ follow: false, tag: false, quote: false });
        onClose();
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={handleClose}
                        className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4"
                    >
                        <div className="relative w-full max-w-md bg-black border-2 border-white/20 rounded-none shadow-2xl">
                            {/* Close Button */}
                            <button
                                onClick={handleClose}
                                className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors z-10"
                            >
                                <X className="w-5 h-5" />
                            </button>

                            {/* Content */}
                            <div className="p-8">
                                {/* Step 1: Username */}
                                {step === 1 && (
                                    <motion.div
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                    >
                                        <div className="mb-6">
                                            <p className="text-white/40 text-xs uppercase tracking-wider mb-2">step 1/3</p>
                                            <h2 className="text-2xl font-bold text-white mb-4">your x username</h2>
                                            <p className="text-white/60 text-sm">Enter your X (Twitter) username so we can verify you completed the tasks</p>
                                        </div>

                                        <div className="mb-6">
                                            <input
                                                type="text"
                                                value={xUsername}
                                                onChange={(e) => {
                                                    setXUsername(e.target.value);
                                                    setError("");
                                                }}
                                                placeholder="@username or username"
                                                className={`w-full bg-white/5 border ${error ? 'border-red-500' : 'border-white/20'} px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-primary/50 transition-colors`}
                                            />
                                            {error && (
                                                <div className="flex items-center gap-2 mt-2 text-red-500 text-xs">
                                                    <AlertCircle className="w-3 h-3" />
                                                    <span>{error}</span>
                                                </div>
                                            )}
                                            <p className="text-white/40 text-xs mt-2">Must be a valid X username (1-15 characters)</p>
                                        </div>

                                        <button
                                            onClick={handleNext}
                                            className="w-full bg-white text-black font-bold py-3 px-6 hover:bg-white/90 transition-colors flex items-center justify-center gap-2"
                                        >
                                            next <ArrowRight className="w-4 h-4" />
                                        </button>
                                    </motion.div>
                                )}

                                {/* Step 2: Tasks */}
                                {step === 2 && (
                                    <motion.div
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                    >
                                        <div className="mb-6">
                                            <p className="text-white/40 text-xs uppercase tracking-wider mb-2">step 2/3</p>
                                            <h2 className="text-2xl font-bold text-white mb-2">complete these tasks to apply:</h2>
                                            <p className="text-white/60 text-sm">We'll verify these tasks using your X username</p>
                                        </div>

                                        <div className="space-y-4 mb-6">
                                            {/* Task 1 */}
                                            <div className="border border-white/20 p-4 bg-white/5">
                                                <div className="flex items-start justify-between mb-3">
                                                    <div className="flex items-start gap-3">
                                                        <span className="text-white/60 font-mono text-sm">1</span>
                                                        <p className="text-white text-sm">follow @pikajpegs on X & turn on notis</p>
                                                    </div>
                                                    <input
                                                        type="checkbox"
                                                        checked={tasksCompleted.follow}
                                                        onChange={(e) => {
                                                            setTasksCompleted({ ...tasksCompleted, follow: e.target.checked });
                                                            setError("");
                                                        }}
                                                        className="mt-1 w-4 h-4 accent-primary cursor-pointer"
                                                    />
                                                </div>
                                                <a
                                                    href="https://x.com/pikajpegs"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-primary text-xs hover:underline flex items-center gap-1"
                                                >
                                                    go to 𝕏 <ExternalLink className="w-3 h-3" />
                                                </a>
                                            </div>

                                            {/* Task 2 */}
                                            <div className="border border-white/20 p-4 bg-white/5">
                                                <div className="flex items-start justify-between mb-3">
                                                    <div className="flex items-start gap-3">
                                                        <span className="text-white/60 font-mono text-sm">2</span>
                                                        <p className="text-white text-sm">tag 2 frens in the comments</p>
                                                    </div>
                                                    <input
                                                        type="checkbox"
                                                        checked={tasksCompleted.tag}
                                                        onChange={(e) => {
                                                            setTasksCompleted({ ...tasksCompleted, tag: e.target.checked });
                                                            setError("");
                                                        }}
                                                        className="mt-1 w-4 h-4 accent-primary cursor-pointer"
                                                    />
                                                </div>
                                                <a
                                                    href="https://x.com/pikajpegs"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-primary text-xs hover:underline flex items-center gap-1"
                                                >
                                                    go to 𝕏 <ExternalLink className="w-3 h-3" />
                                                </a>
                                            </div>

                                            {/* Task 3 */}
                                            <div className="border border-white/20 p-4 bg-white/5">
                                                <div className="flex items-start justify-between mb-3">
                                                    <div className="flex items-start gap-3">
                                                        <span className="text-white/60 font-mono text-sm">3</span>
                                                        <p className="text-white text-sm">quote the pinned post with a bullish caption containing "pika"</p>
                                                    </div>
                                                    <input
                                                        type="checkbox"
                                                        checked={tasksCompleted.quote}
                                                        onChange={(e) => {
                                                            setTasksCompleted({ ...tasksCompleted, quote: e.target.checked });
                                                            setError("");
                                                        }}
                                                        className="mt-1 w-4 h-4 accent-primary cursor-pointer"
                                                    />
                                                </div>
                                                <a
                                                    href="https://x.com/pikajpegs"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-primary text-xs hover:underline flex items-center gap-1"
                                                >
                                                    go to 𝕏 <ExternalLink className="w-3 h-3" />
                                                </a>
                                            </div>
                                        </div>

                                        {error && (
                                            <div className="flex items-center gap-2 mb-4 text-red-500 text-xs bg-red-500/10 border border-red-500/20 p-3">
                                                <AlertCircle className="w-4 h-4" />
                                                <span>{error}</span>
                                            </div>
                                        )}

                                        <div className="flex gap-3">
                                            <button
                                                onClick={handleBack}
                                                className="flex-1 bg-white/10 text-white font-bold py-3 px-6 hover:bg-white/20 transition-colors flex items-center justify-center gap-2"
                                            >
                                                <ArrowLeft className="w-4 h-4" /> back
                                            </button>
                                            <button
                                                onClick={handleNext}
                                                className="flex-1 bg-white text-black font-bold py-3 px-6 hover:bg-white/90 transition-colors flex items-center justify-center gap-2"
                                            >
                                                next <ArrowRight className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </motion.div>
                                )}

                                {/* Step 3: Wallet */}
                                {step === 3 && (
                                    <motion.div
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                    >
                                        <div className="mb-6">
                                            <p className="text-white/40 text-xs uppercase tracking-wider mb-2">step 3/3</p>
                                            <h2 className="text-2xl font-bold text-white mb-4">wallet addy</h2>
                                            <p className="text-white/60 text-sm">Enter your Ethereum wallet address for the whitelist</p>
                                        </div>

                                        <div className="mb-6">
                                            <input
                                                type="text"
                                                value={walletAddress}
                                                onChange={(e) => {
                                                    setWalletAddress(e.target.value);
                                                    setError("");
                                                }}
                                                placeholder="0x..."
                                                className={`w-full bg-white/5 border ${error ? 'border-red-500' : 'border-white/20'} px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-primary/50 transition-colors font-mono text-sm`}
                                            />
                                            {error && (
                                                <div className="flex items-center gap-2 mt-2 text-red-500 text-xs">
                                                    <AlertCircle className="w-3 h-3" />
                                                    <span>{error}</span>
                                                </div>
                                            )}
                                            <p className="text-white/40 text-xs mt-2">Must be a valid Ethereum address (0x + 40 hex characters)</p>
                                        </div>

                                        <div className="flex gap-3">
                                            <button
                                                onClick={handleBack}
                                                disabled={isSubmitting}
                                                className="flex-1 bg-white/10 text-white font-bold py-3 px-6 hover:bg-white/20 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                                            >
                                                <ArrowLeft className="w-4 h-4" /> back
                                            </button>
                                            <button
                                                onClick={handleSubmit}
                                                disabled={isSubmitting}
                                                className="flex-1 bg-white text-black font-bold py-3 px-6 hover:bg-white/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                            >
                                                {isSubmitting ? 'submitting...' : 'submit'}
                                            </button>
                                        </div>
                                    </motion.div>
                                )}

                                {/* Step 4: Success */}
                                {step === 4 && (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="text-center py-8"
                                    >
                                        <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                                            <CheckCircle2 className="w-8 h-8 text-primary" />
                                        </div>
                                        <h2 className="text-2xl font-bold text-white mb-2">welcome to the community!</h2>
                                        <p className="text-white/60 mb-4">your application has been submitted</p>
                                        <div className="bg-white/5 border border-white/10 p-4 mb-8 text-left">
                                            <p className="text-white/60 text-sm mb-2">We'll verify:</p>
                                            <ul className="text-white/80 text-xs space-y-1">
                                                <li>✓ You follow @pikajpegs</li>
                                                <li>✓ You tagged 2 friends</li>
                                                <li>✓ You quoted with "pika"</li>
                                            </ul>
                                            <p className="text-white/40 text-xs mt-3">Check your X DMs for confirmation!</p>
                                        </div>
                                        <button
                                            onClick={handleClose}
                                            className="bg-white text-black font-bold py-3 px-8 hover:bg-white/90 transition-colors"
                                        >
                                            close
                                        </button>
                                    </motion.div>
                                )}
                            </div>

                            {/* Footer tagline */}
                            {step !== 4 && (
                                <div className="border-t border-white/20 px-8 py-4 bg-white/5">
                                    <p className="text-white/40 text-xs text-center">make pixels great again</p>
                                </div>
                            )}
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default ApplicationModal;
