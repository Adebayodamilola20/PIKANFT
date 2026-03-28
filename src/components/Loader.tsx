import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface LoaderProps {
    onComplete: () => void;
}

const LOADING_TEXTS = [
    "INITIALIZING BLOCKCHAIN...",
    "LOADING PIXEL DATA...",
    "CONNECTING TO ETHEREUM...",
    "PREPARING PIKA ASSETS...",
];

const Loader = ({ onComplete }: LoaderProps) => {
    const [progress, setProgress] = useState(0);
    const [currentText, setCurrentText] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((oldProgress) => {
                if (oldProgress >= 100) {
                    clearInterval(timer);
                    setTimeout(onComplete, 300);
                    return 100;
                }
                const diff = Math.random() * 15;
                return Math.min(oldProgress + diff, 100);
            });
        }, 150);

        const textTimer = setInterval(() => {
            setCurrentText((prev) => (prev + 1) % LOADING_TEXTS.length);
        }, 1500);

        return () => {
            clearInterval(timer);
            clearInterval(textTimer);
        };
    }, [onComplete]);

    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
            className="fixed inset-0 z-[100] bg-black flex items-center justify-center p-6"
        >
            <div className="max-w-md w-full flex flex-col items-center">
                {/* Pixel Mascot */}
                <motion.div
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-24 h-24 mb-12 relative"
                >
                    <div className="absolute inset-0 bg-primary/20 blur-2xl" />
                    <img
                        src="https://img.icons8.com/color/512/pokemon.png"
                        alt="Loading"
                        className="relative z-10 w-full h-full object-contain"
                        style={{ imageRendering: 'pixelated' }}
                    />
                </motion.div>

                {/* Loading Text */}
                <div className="h-6 mb-8">
                    <motion.p
                        key={currentText}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="text-xs text-white/60 font-mono uppercase tracking-wider text-center"
                    >
                        {LOADING_TEXTS[currentText]}
                    </motion.p>
                </div>

                {/* Progress Bar */}
                <div className="w-full mb-4">
                    <div className="h-1 w-full bg-white/10 overflow-hidden">
                        <motion.div
                            className="h-full bg-white"
                            style={{ width: `${progress}%` }}
                            transition={{ duration: 0.3 }}
                        />
                    </div>
                </div>

                {/* Percentage */}
                <div className="text-white/40 text-xs font-mono">
                    {Math.round(progress)}%
                </div>

                {/* Skip Button */}
                <button
                    onClick={onComplete}
                    className="mt-12 text-[10px] font-mono uppercase tracking-[0.3em] text-white/20 hover:text-white/60 transition-colors"
                >
                    Skip
                </button>
            </div>
        </motion.div>
    );
};

export default Loader;
