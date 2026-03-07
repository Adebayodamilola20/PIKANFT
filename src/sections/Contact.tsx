import { motion } from "framer-motion";
import { Send, CheckCircle2 } from "lucide-react";
import { useState, useRef } from "react";
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');
    const form = useRef<HTMLFormElement>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!form.current) return;

        setStatus('sending');

        try {
            const result = await emailjs.sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID',
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID',
                form.current,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY'
            );

            if (result.text === 'OK') {
                setStatus('success');
            } else {
                setStatus('idle');
                alert("Something went wrong. Please try again.");
            }
        } catch (error) {
            console.error('EmailJS Error:', error);
            setStatus('idle');
            alert("Failed to send message. Please check your EmailJS configuration.");
        }
    };

    return (
        <section id="contact" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto pika-box p-8 md:p-16 relative">
                    <div className="absolute top-0 right-0 p-4 font-mono text-[10px] text-white/20 uppercase tracking-widest">
                        Transmission Protocol v2.4
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <motion.h2
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: true }}
                                className="text-4xl md:text-5xl font-black font-outfit tracking-tighter italic mb-6"
                            >
                                JOIN THE<br />
                                <span className="text-primary">WHITELIST.</span>
                            </motion.h2>
                            <p className="text-white/50 mb-8 font-medium">
                                Establish your coordinates. Be the first to know when the next generation of Cyber-Pikas are ready for deployment.
                            </p>

                            <div className="space-y-4">
                                <div className="flex items-center gap-3 text-sm text-white/70">
                                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                    Follow pikanfts on X and turn on post notifications ⚡
                                </div>
                                <div className="flex items-center gap-3 text-sm text-white/70">
                                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                    Tag 2 Poké-pals ⚡ and drop your link in the comments!
                                </div>
                                <div className="flex items-center gap-3 text-sm text-white/70">
                                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                    Quote a pika post and paste your link below
                                </div>
                            </div>
                        </div>

                        <div>
                            {status === 'success' ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="flex flex-col items-center justify-center text-center py-12"
                                >
                                    <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6">
                                        <CheckCircle2 className="w-10 h-10" />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-2">ACCESS GRANTED</h3>
                                    <p className="text-white/40">Your coordinates have been established.</p>
                                </motion.div>
                            ) : (
                                <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                                    <div>
                                        <label className="block text-[10px] font-mono uppercase tracking-[0.2em] text-white/40 mb-2">Twitter / X Link</label>
                                        <input
                                            type="text"
                                            name="twitter_link"
                                            placeholder="https://x.com/pika_master/status/..."
                                            required
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-primary/50 transition-colors text-white placeholder:text-white/20"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-[10px] font-mono uppercase tracking-[0.2em] text-white/40 mb-2">Eth wallet</label>
                                        <input
                                            type="text"
                                            name="eth_wallet"
                                            placeholder="0x..."
                                            required
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-primary/50 transition-colors text-white placeholder:text-white/20"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-[10px] font-mono uppercase tracking-[0.2em] text-white/40 mb-2">Tag 2 Poké-pals Link</label>
                                        <input
                                            type="text"
                                            name="poke_pals_link"
                                            placeholder="https://x.com/..."
                                            required
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-primary/50 transition-colors text-white placeholder:text-white/20"
                                        />
                                    </div>
                                    <button
                                        disabled={status === 'sending'}
                                        className="w-full py-4 bg-primary text-black font-black text-sm uppercase tracking-widest rounded-xl shadow-[0_4px_0_0_#EAB308] hover:bg-primary-dark transition-all flex items-center justify-center gap-3 disabled:opacity-50"
                                    >
                                        {status === 'sending' ? 'ESTABLISHING...' : (
                                            <>
                                                <Send className="w-4 h-4" />
                                                SUBMIT DATA
                                            </>
                                        )}
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
