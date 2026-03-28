import { motion } from "framer-motion";

const StatsBar = () => {
    return (
        <section className="py-16 relative z-10 overflow-hidden border-y border-white/10 bg-black">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="text-center"
                    >
                        <span className="text-white/40 text-xs uppercase tracking-wider mb-2 block">Supply</span>
                        <span className="text-2xl font-bold text-white">Limited</span>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="text-center"
                    >
                        <span className="text-white/40 text-xs uppercase tracking-wider mb-2 block">Blockchain</span>
                        <span className="text-2xl font-bold text-white">Ethereum</span>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-center"
                    >
                        <span className="text-white/40 text-xs uppercase tracking-wider mb-2 block">Mint</span>
                        <span className="text-2xl font-bold text-white">TBA</span>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default StatsBar;
