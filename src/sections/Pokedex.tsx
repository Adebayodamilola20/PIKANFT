import { motion } from "framer-motion";
import { Shield, Zap, Globe, Lock } from "lucide-react";

const Pokedex = () => {
    const features = [
        {
            icon: Globe,
            title: "Fully On-Chain",
            description: "Every Pika is stored entirely on the Ethereum blockchain. No external dependencies, no IPFS. Your art lives forever.",
            gradient: "from-blue-500 to-cyan-500"
        },
        {
            icon: Shield,
            title: "Community Driven",
            description: "Built by the community, for the community. Holder feedback shapes the future of the project.",
            gradient: "from-purple-500 to-pink-500"
        },
        {
            icon: Zap,
            title: "Timeless Design",
            description: "Pixel art that never goes out of style. Simple, clean, and instantly recognizable.",
            gradient: "from-primary to-yellow-500"
        },
        {
            icon: Lock,
            title: "Transparent Team",
            description: "Regular updates, honest communication, and a commitment to building something sustainable.",
            gradient: "from-green-500 to-emerald-500"
        }
    ];

    return (
        <section id="pokedex" className="py-32 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-1/3 w-96 h-96 bg-accent-cyan/20 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-accent-pink/20 rounded-full blur-[120px]" />
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
                        className="inline-block mb-4 px-4 py-2 rounded-full border border-primary/30 bg-primary/10"
                    >
                        <span className="text-primary text-sm font-bold uppercase tracking-wider">Why Choose Pika</span>
                    </motion.div>
                    
                    <h2 className="text-4xl md:text-6xl font-black font-outfit tracking-tight mb-6">
                        <span className="bg-gradient-to-r from-primary via-primary-light to-secondary bg-clip-text text-transparent">
                            Built Different
                        </span>
                    </h2>
                    
                    <p className="text-xl text-white/70 max-w-2xl mx-auto">
                        More than just pixel art. A community-first approach to NFTs.
                    </p>
                </motion.div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group pika-box p-8 hover:scale-105 transition-all duration-300"
                        >
                            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} p-0.5 mb-6 group-hover:shadow-[0_0_30px_rgba(255,215,0,0.3)] transition-all`}>
                                <div className="w-full h-full bg-background rounded-2xl flex items-center justify-center">
                                    <feature.icon className="w-8 h-8 text-white" />
                                </div>
                            </div>
                            
                            <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                                {feature.title}
                            </h3>
                            
                            <p className="text-white/60 leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pokedex;
