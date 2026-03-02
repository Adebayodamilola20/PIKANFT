import { motion } from "framer-motion";
import { STATS } from "../constants";

const StatsBar = () => {
    return (
        <section className="py-20 relative z-10 overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {STATS.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="pika-box p-8 flex flex-col items-center justify-center group hover:border-primary/50 transition-colors"
                        >
                            <span className="text-white/40 text-xs font-mono uppercase tracking-[0.2em] mb-2">{stat.label}</span>
                            <div className="flex items-baseline gap-2">
                                <span className="text-4xl md:text-5xl font-black font-outfit text-white group-hover:text-primary transition-colors">
                                    {stat.value}
                                </span>
                                <span className="text-primary font-mono text-xs font-bold">{stat.suffix}</span>
                            </div>
                            <div className="mt-4 w-12 h-1 bg-white/10 group-hover:bg-primary/50 group-hover:w-24 transition-all duration-500" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsBar;
