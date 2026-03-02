import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Zap, Shield, Globe, Cpu, Database, TrendingUp } from "lucide-react";

interface LoaderProps {
    onComplete: () => void;
}

const NFT_FACTS = [
    "Scanning blockchain for rare Pika-DNA...",
    "Evolving smart contracts for maximum power...",
    "Decrypting encrypted Pokedex entries...",
    "Optimizing Pika-Arena battle protocols...",
    "Establishing secure connection to the Neon District...",
];

const NFT_ICONS = [
    { icon: Globe, label: "On-Chain" },
    { icon: Shield, label: "Secure" },
    { icon: Zap, label: "Electric" },
    { icon: Database, label: "Immutable" },
    { icon: TrendingUp, label: "Market" },
    { icon: Cpu, label: "AI-Driven" },
];

import mascot from "../assets/mascot.png";

const Loader = ({ onComplete }: LoaderProps) => {
    const [progress, setProgress] = useState(0);
    const [currentFact, setCurrentFact] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((oldProgress) => {
                if (oldProgress >= 100) {
                    clearInterval(timer);
                    setTimeout(onComplete, 500);
                    return 100;
                }
                const diff = Math.random() * 10;
                return Math.min(oldProgress + diff, 100);
            });
        }, 200);

        const factTimer = setInterval(() => {
            setCurrentFact((prev) => (prev + 1) % NFT_FACTS.length);
        }, 2000);

        return () => {
            clearInterval(timer);
            clearInterval(factTimer);
        };
    }, [onComplete]);

    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -20, transition: { duration: 0.8, ease: "easeInOut" } }}
            className="fixed inset-0 z-[100] bg-background flex items-center justify-center p-6 overflow-hidden"
        >
            <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.05) 1px, transparent 0)', backgroundSize: '40px 40px' }} />

            <div className="max-w-md w-full pika-box p-8 md:p-12 relative flex flex-col items-center">
                {/* Top Icon - Reverted to Cartoon Head */}
                <motion.div
                    animate={{
                        y: [0, -10, 0]
                    }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="w-24 h-24 mb-8 bg-primary/5 rounded-2xl flex items-center justify-center border border-primary/20 shadow-[0_0_30px_rgba(252,211,77,0.2)] p-2"
                >
                    <img
                        src="https://img.icons8.com/color/512/pokemon.png"
                        alt="Pika"
                        className="w-full h-full object-contain"
                    />
                </motion.div>

                {/* Status Text */}
                <h2 className="text-2xl font-black font-outfit italic tracking-tight text-white mb-2 uppercase">Initialising...</h2>
                <div className="h-6 flex items-center justify-center mb-8">
                    <AnimatePresence mode="wait">
                        <motion.p
                            key={currentFact}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="text-xs text-white/40 font-mono text-center tracking-tight"
                        >
                            {NFT_FACTS[currentFact]}
                        </motion.p>
                    </AnimatePresence>
                </div>

                {/* Progress Bar Container */}
                <div className="w-full mb-8">
                    <div className="flex justify-between items-end mb-2">
                        <span className="text-[10px] font-mono text-white/30 uppercase tracking-widest">System Load</span>
                        <span className="text-sm font-bold font-mono text-primary">{Math.round(progress)}%</span>
                    </div>
                    <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
                        <motion.div
                            className="h-full bg-gradient-to-r from-primary/50 to-primary shadow-[0_0_10px_rgba(252,211,77,0.5)]"
                            style={{ width: `${progress}%` }}
                        />
                    </div>
                </div>

                {/* Icons Grid */}
                <div className="grid grid-cols-3 gap-6 mb-10">
                    {NFT_ICONS.map((item, index) => (
                        <motion.div
                            key={item.label}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 0.4, scale: 1 }}
                            whileHover={{ opacity: 1, color: '#FDE047' }}
                            className="flex flex-col items-center gap-2 group cursor-default"
                        >
                            <div className="p-3 bg-white/5 rounded-xl border border-white/5 group-hover:border-primary/30 transition-colors">
                                <item.icon className="w-4 h-4" />
                            </div>
                            <span className="text-[9px] font-mono uppercase tracking-tighter">{item.label}</span>
                        </motion.div>
                    ))}
                </div>

                {/* Skip Button */}
                <button
                    onClick={onComplete}
                    className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/20 hover:text-primary transition-colors cursor-pointer"
                >
                    Skip Intro
                </button>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-10 left-10 font-mono text-[10px] text-white/10 hidden md:block">
                BUILD_ID: PIKA_001_GEN<br />
                PROTOCOL: ERC-721_MOD<br />
                ENCRYPTION: AES-256-PIKA
            </div>
            <div className="absolute bottom-10 right-10 font-mono text-[10px] text-white/10 hidden md:block text-right">
                MEMORY: 64MB_VRAM<br />
                CPU_CORES: 8_QUAD<br />
                STATUS: STABLE
            </div>
        </motion.div>
    );
};

export default Loader;
