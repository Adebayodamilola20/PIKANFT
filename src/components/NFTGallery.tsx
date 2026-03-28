import { motion } from "framer-motion";
import { PIKA_DATA } from "../constants";
import { Sparkles } from "lucide-react";

const NFTGallery = () => {
    return (
        <section id="gallery" className="py-32 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent-blue/20 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-pink/20 rounded-full blur-[120px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full border border-primary/30 bg-primary/10"
                    >
                        <Sparkles className="w-4 h-4 text-primary" />
                        <span className="text-primary text-sm font-bold uppercase tracking-wider">Genesis Collection</span>
                    </motion.div>
                    
                    <h2 className="text-4xl md:text-6xl font-black font-outfit tracking-tight mb-6">
                        <span className="text-white">Meet The</span>
                        <br />
                        <span className="bg-gradient-to-r from-primary via-primary-light to-secondary bg-clip-text text-transparent">
                            Electric Squad
                        </span>
                    </h2>
                    
                    <p className="text-xl text-white/70 max-w-2xl mx-auto">
                        Hand-crafted pixel art creatures with unique traits and personalities
                    </p>
                </motion.div>

                {/* Gallery Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {PIKA_DATA.map((pika, index) => (
                        <motion.div
                            key={pika.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group cursor-pointer"
                        >
                            <div className="pika-box overflow-hidden hover:scale-105 transition-all duration-300">
                                {/* Image Container */}
                                <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10">
                                    <img
                                        src={pika.image as any}
                                        alt={pika.name}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    
                                    {/* Overlay on Hover */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                        <div className="w-full">
                                            <div className="flex items-center gap-2 mb-2">
                                                <Sparkles className="w-4 h-4 text-primary" />
                                                <span className="text-primary text-xs font-bold uppercase">{pika.rarity}</span>
                                            </div>
                                            <div className="grid grid-cols-3 gap-2">
                                                {Object.entries(pika.stats).map(([key, value]) => (
                                                    <div key={key} className="text-center">
                                                        <div className="text-primary text-sm font-bold">{value}</div>
                                                        <div className="text-white/60 text-[10px] uppercase">{key}</div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Rarity Badge */}
                                    <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur-xl border border-primary/30">
                                        <span className="text-primary text-xs font-bold uppercase tracking-wider">{pika.rarity}</span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6 bg-gradient-to-br from-white/5 to-white/10">
                                    <div className="flex items-start justify-between mb-3">
                                        <div>
                                            <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">
                                                {pika.name}
                                            </h3>
                                            <p className="text-white/60 text-sm">{pika.type}</p>
                                        </div>
                                        <span className="text-white/40 text-xs">#{pika.id.toString().padStart(4, '0')}</span>
                                    </div>
                                    
                                    {/* Stats Bars */}
                                    <div className="space-y-3 mb-4">
                                        {Object.entries(pika.stats).map(([key, value]) => (
                                            <div key={key}>
                                                <div className="flex items-center justify-between mb-1">
                                                    <span className="text-white/60 text-xs uppercase tracking-wider">{key}</span>
                                                    <span className="text-primary text-xs font-bold">{value}</span>
                                                </div>
                                                <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                                                    <motion.div
                                                        initial={{ width: 0 }}
                                                        whileInView={{ width: `${(value / 150) * 100}%` }}
                                                        transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                                                        viewport={{ once: true }}
                                                        className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                                                    />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    
                                    <div className="flex items-center justify-between pt-3 border-t border-white/10">
                                        <div className="flex items-center gap-1">
                                            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                                            <span className="text-primary text-xs font-bold">Available</span>
                                        </div>
                                        <button className="text-white/60 hover:text-primary text-xs font-medium transition-colors">
                                            View Details →
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mt-16"
                >
                    <a
                        href="#hero"
                        className="inline-block px-10 py-5 bg-gradient-to-r from-primary to-primary-dark text-black font-black text-lg hover:scale-105 hover:shadow-[0_0_40px_rgba(255,215,0,0.5)] transition-all"
                    >
                        JOIN THE WHITELIST
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default NFTGallery;
