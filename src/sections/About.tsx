import { motion } from "framer-motion";
import { Shield, Zap, Users, Sparkles, Globe } from "lucide-react";

const About = () => {
    const features = [
        {
            icon: Shield,
            title: "100% On-Chain",
            description: "Every Pika lives forever on Ethereum. No IPFS, no servers, no dependencies.",
            color: "from-blue-500 to-cyan-500"
        },
        {
            icon: Zap,
            title: "Electric Energy",
            description: "Hand-crafted pixel art with personality. Each Pika has unique traits and rarity.",
            color: "from-primary to-yellow-500"
        },
        {
            icon: Users,
            title: "Community First",
            description: "Built by holders, for holders. Your voice shapes the future of the project.",
            color: "from-purple-500 to-pink-500"
        },
        {
            icon: Sparkles,
            title: "Utility Driven",
            description: "More than just art. Exclusive perks, events, and surprises for holders.",
            color: "from-green-500 to-emerald-500"
        }
    ];

    return (
        <section id="about" className="py-32 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-1/2 left-0 w-96 h-96 bg-secondary/20 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-[120px]" />
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
                        <span className="text-primary text-sm font-bold uppercase tracking-wider">About Pika</span>
                    </motion.div>
                    
                    <h2 className="text-4xl md:text-6xl font-black font-outfit tracking-tight mb-6">
                        <span className="bg-gradient-to-r from-primary via-primary-light to-secondary bg-clip-text text-transparent">
                            More Than Just
                        </span>
                        <br />
                        <span className="text-white">Pixel Art</span>
                    </h2>
                    
                    <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
                        Pika NFT is a collection of electric creatures living on the Ethereum blockchain. 
                        Each one is unique, hand-crafted, and built for the community.
                    </p>
                </motion.div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group pika-box p-8 hover:scale-105 transition-all duration-300"
                        >
                            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} p-0.5 mb-6 group-hover:shadow-[0_0_30px_rgba(255,215,0,0.3)] transition-all`}>
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

                {/* Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
                >
                    {[
                        { label: "Total Supply", value: "Limited", icon: Shield },
                        { label: "Blockchain", value: "Ethereum", icon: Globe },
                        { label: "Mint Price", value: "TBA", icon: Zap }
                    ].map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="text-center p-6 bg-gradient-to-br from-white/5 to-white/10 border border-white/10 backdrop-blur-xl"
                        >
                            <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                                <stat.icon className="w-6 h-6 text-primary" />
                            </div>
                            <div className="text-3xl font-black text-primary mb-2">{stat.value}</div>
                            <div className="text-white/60 text-sm uppercase tracking-wider">{stat.label}</div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default About;
