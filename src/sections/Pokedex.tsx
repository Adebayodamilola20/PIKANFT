import { motion } from "framer-motion";
import { Search, Info, Shield, Zap, Target } from "lucide-react";
import { PIKA_DATA } from "../constants";
import mascot from "../assets/mascot.png";

const Pokedex = () => {
    const pika = PIKA_DATA[0]; // Featured Pika

    return (
        <section id="pokedex" className="py-24 relative overflow-hidden bg-black/40">
            <div className="container mx-auto px-6">
                <div className="flex items-center gap-4 mb-12">
                    <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center text-primary">
                        <Search className="w-6 h-6" />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black font-outfit tracking-tighter italic">
                        GLOBAL <span className="text-primary truncate">PROTOCOL.</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Left: Stats & Info */}
                    <div className="lg:col-span-4 space-y-6">
                        <div className="pika-box p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <Info className="w-5 h-5 text-primary" />
                                <h3 className="text-xs font-mono uppercase font-bold tracking-widest">Asset Verification</h3>
                            </div>
                            <p className="text-sm text-white/50 leading-relaxed mb-6">
                                {pika.description}
                            </p>
                            <div className="space-y-4">
                                <div className="flex justify-between items-center text-sm">
                                    <span className="text-white/40 uppercase font-mono tracking-tighter">Genesis Class</span>
                                    <span className="font-bold text-primary italic">Cyber-Rodent</span>
                                </div>
                                <div className="flex justify-between items-center text-sm">
                                    <span className="text-white/40 uppercase font-mono tracking-tighter">Layer Habitat</span>
                                    <span className="font-bold text-white italic">Neon District</span>
                                </div>
                                <div className="flex justify-between items-center text-sm">
                                    <span className="text-white/40 uppercase font-mono tracking-tighter">Scarcity Tier</span>
                                    <span className="font-bold text-white italic">{pika.rarity}</span>
                                </div>
                            </div>
                        </div>

                        <div className="pika-box p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <Target className="w-5 h-5 text-primary" />
                                <h3 className="text-xs font-mono uppercase font-bold tracking-widest">Technical Metrics</h3>
                            </div>
                            <div className="space-y-6">
                                {Object.entries(pika.stats).map(([label, value]) => (
                                    <div key={label}>
                                        <div className="flex justify-between mb-2">
                                            <span className="text-[10px] font-mono uppercase text-white/40">{label}</span>
                                            <span className="text-xs font-bold text-primary">{value}</span>
                                        </div>
                                        <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${(value / 150) * 100}%` }}
                                                transition={{ duration: 1, delay: 0.5 }}
                                                viewport={{ once: true }}
                                                className="h-full bg-primary"
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Middle: 3D Visualization Placeholder */}
                    <div className="lg:col-span-12 xl:col-span-5 pika-box relative min-h-[500px] flex items-center justify-center bg-gradient-to-b from-white/5 to-transparent">
                        <div className="absolute inset-0 z-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, #FDE047 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
                        <motion.div
                            animate={{ y: [0, -20, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="relative z-10 w-full max-w-sm aspect-square"
                        >
                            <img src="https://img.icons8.com/color/512/pokemon.png" alt="Featured Pika" className="w-full h-full object-contain filter drop-shadow-[0_0_50px_rgba(252,211,77,0.3)]" />
                            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-48 h-8 bg-black/40 blur-xl rounded-full" />
                        </motion.div>

                        <div className="absolute top-6 left-6 flex flex-col gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse" />
                            <div className="w-3 h-3 rounded-full bg-primary" />
                            <div className="w-3 h-3 rounded-full bg-green-500" />
                        </div>

                        <div className="absolute bottom-6 right-6 font-mono text-[10px] text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
                            UID: 0x{pika.id} // VERIFIED
                        </div>
                    </div>

                    {/* Right: Tactics & Components */}
                    <div className="lg:col-span-3 space-y-6">
                        <div className="pika-box p-8 h-full flex flex-col justify-between">
                            <div>
                                <div className="flex items-center gap-3 mb-6">
                                    <Shield className="w-5 h-5 text-primary" />
                                    <h3 className="text-xs font-mono uppercase font-bold tracking-widest">Protocol Extension</h3>
                                </div>
                                <div className="space-y-4">
                                    <div className="p-4 bg-white/5 rounded-xl border border-white/5 hover:border-primary/30 transition-colors cursor-pointer group">
                                        <Zap className="w-4 h-4 text-primary mb-2 group-hover:scale-125 transition-transform" />
                                        <h4 className="text-sm font-bold mb-1">Velocity Override</h4>
                                        <p className="text-[10px] text-white/40">Increases throughput by 20% for 3 cycles.</p>
                                    </div>
                                    <div className="p-4 bg-white/5 rounded-xl border border-white/5 hover:border-primary/30 transition-colors cursor-pointer group">
                                        <Shield className="w-4 h-4 text-primary mb-2 group-hover:scale-125 transition-transform" />
                                        <h4 className="text-sm font-bold mb-1">Security Shield</h4>
                                        <p className="text-[10px] text-white/40">Reduces vulnerability by 40%.</p>
                                    </div>
                                </div>
                            </div>

                            <button className="w-full mt-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-xs font-bold uppercase tracking-widest transition-all">
                                Technical Paper
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pokedex;
