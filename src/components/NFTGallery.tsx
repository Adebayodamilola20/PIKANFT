import { motion } from "framer-motion";
import { PIKA_DATA } from "../constants";

const NFTGallery = () => {
    return (
        <section id="gallery" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <div>
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            className="text-primary font-mono text-sm font-bold uppercase tracking-[0.3em] mb-4"
                        >
                            Asset Classes
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-6xl font-black font-outfit tracking-tighter italic"
                        >
                            GENESIS<br />
                            <span className="text-primary">DISTRIBUTION.</span>
                        </motion.h2>
                    </div>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="max-w-md text-white/50 text-right font-medium"
                    >
                        Each asset class provides distinct governance rights and protocol-level utility.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {PIKA_DATA.map((pika, index) => (
                        <motion.div
                            key={pika.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10 }}
                            className="pika-box group cursor-pointer relative"
                        >
                            {/* Image Container */}
                            <div className="relative aspect-square overflow-hidden bg-white/5">
                                <img
                                    src={pika.image as any}
                                    alt={pika.name}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                {/* Holographic Sheen Overlay */}
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none"
                                    initial={{ x: '-100%', skewX: -45 }}
                                    whileHover={{ x: '100%' }}
                                    transition={{ duration: 0.8, ease: "easeInOut" }}
                                />
                                <div className="absolute top-4 right-4 px-3 py-1 bg-black/60 backdrop-blur-md rounded-full border border-white/10 text-[10px] font-bold uppercase tracking-widest">
                                    {pika.rarity}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-8">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <h3 className="text-2xl font-black font-outfit italic group-hover:text-primary transition-colors">{pika.name}</h3>
                                        <span className="text-xs text-white/40 font-mono uppercase">{pika.type}</span>
                                    </div>
                                    <div className="w-10 h-10 rounded-full border border-primary/20 flex items-center justify-center">
                                        <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                                    </div>
                                </div>

                                <div className="grid grid-cols-3 gap-4 border-t border-white/5 pt-6">
                                    {Object.entries(pika.stats).map(([label, value]) => (
                                        <div key={label} className="flex flex-col">
                                            <span className="text-[10px] text-white/40 uppercase font-mono">{label}</span>
                                            <span className="text-sm font-bold text-white">{value}</span>
                                        </div>
                                    ))}
                                </div>

                                <motion.button
                                    className="w-full mt-8 py-3 bg-white/5 hover:bg-primary hover:text-black border border-white/10 hover:border-primary transition-all rounded-xl font-bold text-sm uppercase tracking-widest"
                                >
                                    View Analysis
                                </motion.button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default NFTGallery;
