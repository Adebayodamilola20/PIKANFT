import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Zap } from "lucide-react";

import mascot from "../assets/mascot.png";

const Hero = () => {
    const containerRef = useRef(null);
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);

    return (
        <section
            ref={containerRef}
            id="hero"
            className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden"
        >
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-4 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-bold uppercase tracking-widest"
                >
                    <Zap className="w-3 h-3 fill-primary" />
                    Genesis Collection Phase 1
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-6xl md:text-8xl lg:text-9xl font-extrabold font-outfit tracking-tighter leading-none mb-6 italic"
                >
                    PIKANFT:<br />
                    <span className="text-primary italic">THE GENESIS</span><br />
                    SEED.
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="max-w-xl text-lg text-white/60 mb-10 font-medium"
                >
                    Institutional-grade digital assets powered by a high-frequency electric protocol.
                    Genesis distribution limited to 9,999 unique units.
                </motion.p>

                <div className="flex flex-col sm:flex-row gap-4">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-10 py-4 bg-primary text-black font-black text-lg rounded-2xl shadow-[0_8px_0_0_#EAB308] flex items-center gap-3 active:translate-y-[4px] active:shadow-none transition-all"
                    >
                        START ADVENTURE
                    </motion.button>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-10 py-4 bg-transparent border-2 border-white/10 hover:border-white/20 text-white font-bold text-lg rounded-2xl backdrop-blur-sm transition-all"
                    >
                        VIEW COLLECTION
                    </motion.button>
                </div>
            </div>

            {/* Floating Mascot */}
            <motion.div
                style={{ y: y1 }}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="absolute bottom-10 right-10 md:right-20 lg:right-40 w-48 h-48 md:w-80 md:h-80 opacity-60 pointer-events-none"
            >
                <div className="relative w-full h-full animate-float">
                    <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl animate-pulse" />
                    <img
                        src="https://img.icons8.com/color/512/pokemon.png"
                        alt="Pika"
                        className="relative z-10 w-full h-full object-contain"
                    />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
