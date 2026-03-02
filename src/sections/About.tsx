import { motion } from "framer-motion";
import { Layout, Layers, Users, Shield, Zap, Globe } from "lucide-react";
import { ABOUT_CARDS } from "../constants";

const iconMap: Record<string, any> = {
    Layout: Layout,
    Layers: Layers,
    Users: Users,
    Shield: Shield,
    Zap: Zap,
    Globe: Globe,
};

const About = () => {
    return (
        <section id="about" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-6xl font-black font-outfit tracking-tighter mb-8 italic">
                            A NEW ERA OF<br />
                            <span className="text-primary">DISTRIBUTED ASSETS.</span>
                        </h2>
                        <p className="text-xl text-white/60 mb-10 leading-relaxed font-medium">
                            PikaNFT is a collection of adorable electric creatures built for fun, frens, and positive vibes.
                            Each Pika is unique, original, and powered by community.
                        </p>
                        <div className="grid grid-cols-2 gap-6">
                            <div className="p-4 border border-white/5 rounded-xl bg-white/5">
                                <span className="block text-primary font-bold text-2xl">Tier-1</span>
                                <span className="text-white/40 text-xs uppercase tracking-wider">Security Protocol</span>
                            </div>
                            <div className="p-4 border border-white/5 rounded-xl bg-white/5">
                                <span className="block text-primary font-bold text-2xl">Finality</span>
                                <span className="text-white/40 text-xs uppercase tracking-wider">Settlement Layer</span>
                            </div>
                        </div>
                    </motion.div>

                    <div className="grid grid-cols-1 gap-6">
                        {ABOUT_CARDS.map((card, index) => {
                            const Icon = iconMap[card.icon] || Layout;
                            return (
                                <motion.div
                                    key={card.title}
                                    initial={{ opacity: 0, x: 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="pika-box p-8 flex gap-6 hover:bg-white/10 transition-colors group"
                                >
                                    <div className="w-14 h-14 shrink-0 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                                        <Icon className="w-8 h-8" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{card.title}</h3>
                                        <p className="text-white/50">{card.description}</p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
