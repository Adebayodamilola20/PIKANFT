import { motion } from "framer-motion";
import { useState } from "react";
import ApplicationModal from "./ApplicationModal";
import { Sparkles, Zap } from "lucide-react";

interface HeroProps {
    onApplyClick?: () => void;
}

const Hero = ({ onApplyClick }: HeroProps) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleApplyClick = () => {
        setIsModalOpen(true);
        onApplyClick?.();
    };

    return (
        <>
            <section
                id="hero"
                className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
            >
                {/* Animated Background Elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse" />
                    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-blue/10 rounded-full blur-[150px]" />
                </div>

                {/* Floating Particles */}
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-primary/30 rounded-full"
                        initial={{ 
                            x: Math.random() * window.innerWidth, 
                            y: Math.random() * window.innerHeight,
                            scale: Math.random() * 0.5 + 0.5
                        }}
                        animate={{
                            y: [null, Math.random() * window.innerHeight],
                            x: [null, Math.random() * window.innerWidth],
                        }}
                        transition={{
                            duration: Math.random() * 10 + 10,
                            repeat: Infinity,
                            repeatType: "reverse",
                        }}
                    />
                ))}

                <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="mb-8 inline-flex items-center gap-2 px-6 py-3 rounded-full border border-primary/30 bg-gradient-to-r from-primary/10 to-secondary/10 backdrop-blur-xl"
                    >
                        <Sparkles className="w-4 h-4 text-primary animate-pulse" />
                        <span className="text-primary font-bold text-sm uppercase tracking-wider">Genesis Collection</span>
                        <Zap className="w-4 h-4 text-primary animate-pulse" />
                    </motion.div>

                    {/* Main Title */}
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-6xl md:text-8xl lg:text-9xl font-black font-outfit tracking-tighter leading-none mb-6"
                    >
                        <span className="bg-gradient-to-r from-primary via-primary-light to-secondary bg-clip-text text-transparent glow-text">
                            PIKA
                        </span>
                        <br />
                        <span className="text-white">NFT</span>
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="max-w-2xl text-xl md:text-2xl text-white/80 mb-12 font-medium leading-relaxed"
                    >
                        Electric pixel art creatures living on Ethereum.
                        <br />
                        <span className="text-primary">Join the spark. Own the future.</span>
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="flex flex-col sm:flex-row gap-4"
                    >
                        <button
                            onClick={handleApplyClick}
                            className="group relative px-10 py-5 bg-gradient-to-r from-primary to-primary-dark text-black font-black text-lg overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(255,215,0,0.5)]"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-primary-light to-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                            <span className="relative flex items-center gap-2">
                                <Zap className="w-5 h-5 fill-current" />
                                APPLY NOW
                            </span>
                        </button>
                        
                        <a
                            href="#gallery"
                            className="px-10 py-5 border-2 border-primary/50 text-white font-bold text-lg backdrop-blur-xl hover:bg-primary/10 hover:border-primary transition-all"
                        >
                            VIEW COLLECTION
                        </a>
                    </motion.div>

                    {/* Stats */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="mt-20 grid grid-cols-3 gap-8 md:gap-16"
                    >
                        <div className="text-center">
                            <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-primary/20 to-yellow-500/20 flex items-center justify-center">
                                <Zap className="w-6 h-6 text-primary" />
                            </div>
                            <div className="text-white/60 text-sm uppercase tracking-wider">Electric</div>
                        </div>
                        <div className="text-center">
                            <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-primary/20 to-yellow-500/20 flex items-center justify-center">
                                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <div className="text-white/60 text-sm uppercase tracking-wider">On-Chain</div>
                        </div>
                        <div className="text-center">
                            <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-primary/20 to-yellow-500/20 flex items-center justify-center">
                                <Sparkles className="w-6 h-6 text-primary" />
                            </div>
                            <div className="text-white/60 text-sm uppercase tracking-wider">Limited</div>
                        </div>
                    </motion.div>
                </div>

                {/* Floating Mascot */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                    className="absolute bottom-10 right-10 md:right-20 lg:right-32 w-48 h-48 md:w-64 md:h-64 pointer-events-none"
                >
                    <motion.div
                        animate={{ 
                            y: [0, -20, 0],
                            rotate: [0, 5, -5, 0]
                        }}
                        transition={{ 
                            duration: 4, 
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="relative w-full h-full"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-full blur-3xl animate-pulse" />
                        <img
                            src="https://img.icons8.com/color/512/pokemon.png"
                            alt="Pika"
                            className="relative z-10 w-full h-full object-contain drop-shadow-[0_0_30px_rgba(255,215,0,0.6)]"
                        />
                    </motion.div>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.2 }}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2"
                >
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2"
                    >
                        <div className="w-1 h-2 bg-primary rounded-full" />
                    </motion.div>
                </motion.div>
            </section>

            <ApplicationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </>
    );
};

export default Hero;
