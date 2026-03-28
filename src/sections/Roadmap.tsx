import { motion } from "framer-motion";
import { ROADMAP_STEPS } from "../constants";
import { CheckCircle2, Clock, Sparkles } from "lucide-react";

const Roadmap = () => {
    const getStatusIcon = (status: string) => {
        if (status === 'Completed') return <CheckCircle2 className="w-5 h-5 text-green-500" />;
        if (status === 'In Progress') return <Clock className="w-5 h-5 text-primary animate-pulse" />;
        return <Sparkles className="w-5 h-5 text-white/40" />;
    };

    return (
        <section id="roadmap" className="py-32 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0">
                <div className="absolute top-1/3 right-0 w-96 h-96 bg-primary/20 rounded-full blur-[120px]" />
                <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-secondary/20 rounded-full blur-[120px]" />
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
                        <span className="text-primary text-sm font-bold uppercase tracking-wider">Our Journey</span>
                    </motion.div>
                    
                    <h2 className="text-4xl md:text-6xl font-black font-outfit tracking-tight mb-6">
                        <span className="text-white">The</span>
                        <br />
                        <span className="bg-gradient-to-r from-primary via-primary-light to-secondary bg-clip-text text-transparent">
                            Roadmap
                        </span>
                    </h2>
                    
                    <p className="text-xl text-white/70 max-w-2xl mx-auto">
                        From launch to community-driven evolution
                    </p>
                </motion.div>

                {/* Roadmap Timeline */}
                <div className="max-w-4xl mx-auto space-y-8">
                    {ROADMAP_STEPS.map((step, index) => (
                        <motion.div
                            key={step.stage}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="pika-box p-8 hover:scale-105 transition-all duration-300">
                                <div className="flex items-start gap-6">
                                    {/* Icon */}
                                    <div className={`flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center ${
                                        step.status === 'Completed' 
                                            ? 'bg-gradient-to-br from-green-500 to-emerald-500' 
                                            : step.status === 'In Progress'
                                            ? 'bg-gradient-to-br from-primary to-yellow-500'
                                            : 'bg-gradient-to-br from-white/10 to-white/5'
                                    }`}>
                                        {getStatusIcon(step.status)}
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1">
                                        <div className="flex items-center gap-3 mb-3">
                                            <span className="text-primary text-sm font-bold uppercase tracking-wider">
                                                {step.stage}
                                            </span>
                                            <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                                                step.status === 'Completed' 
                                                    ? 'bg-green-500/20 text-green-500 border border-green-500/30' 
                                                    : step.status === 'In Progress'
                                                    ? 'bg-primary/20 text-primary border border-primary/30'
                                                    : 'bg-white/5 text-white/40 border border-white/10'
                                            }`}>
                                                {step.status}
                                            </span>
                                        </div>
                                        
                                        <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                                        <p className="text-white/60 leading-relaxed">{step.description}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Connector Line */}
                            {index < ROADMAP_STEPS.length - 1 && (
                                <div className="absolute left-8 top-full w-0.5 h-8 bg-gradient-to-b from-primary/50 to-transparent" />
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Roadmap;
