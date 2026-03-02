import { motion } from "framer-motion";
import { ROADMAP_STEPS } from "../constants";

const Roadmap = () => {
    return (
        <section id="roadmap" className="py-24 relative overflow-hidden bg-black/20">
            <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-black font-outfit tracking-tighter italic mb-4"
                    >
                        PROTOCOL <span className="text-primary">ROADMAP.</span>
                    </motion.h2>
                    <div className="w-24 h-1 bg-primary mx-auto" />
                </div>

                <div className="relative max-w-4xl mx-auto">
                    {/* Vertical Line */}
                    <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-white/5 -translate-x-1/2" />

                    <div className="space-y-12">
                        {ROADMAP_STEPS.map((step, index) => (
                            <motion.div
                                key={step.stage}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                            >
                                {/* Dot */}
                                <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-primary -translate-x-1/2 border-4 border-[#121212] z-10 shadow-[0_0_15px_rgba(252,211,77,0.5)]" />

                                {/* Content Card */}
                                <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'}`}>
                                    <div className="pika-box p-8 hover:bg-white/10 transition-colors group">
                                        <span className="inline-block px-3 py-1 bg-primary/20 text-primary rounded-full text-[10px] font-bold uppercase tracking-widest mb-4">
                                            {step.stage}
                                        </span>
                                        <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">{step.title}</h3>
                                        <p className="text-white/50 mb-6">{step.description}</p>
                                        <div className="flex items-center gap-2">
                                            <div className={`w-2 h-2 rounded-full ${step.status === 'Completed' ? 'bg-green-500' : step.status === 'In Progress' ? 'bg-primary' : 'bg-white/20'}`} />
                                            <span className="text-[10px] font-mono uppercase tracking-widest text-white/40">{step.status}</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Roadmap;
