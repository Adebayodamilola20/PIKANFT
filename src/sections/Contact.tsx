import { motion } from "framer-motion";
import { Twitter, MessageCircle, Send } from "lucide-react";

const Contact = () => {
    return (
        <section id="contact" className="py-32 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[150px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-6xl font-black font-outfit tracking-tight mb-6">
                            <span className="bg-gradient-to-r from-primary via-primary-light to-secondary bg-clip-text text-transparent">
                                Join The
                            </span>
                            <br />
                            <span className="text-white">Community</span>
                        </h2>
                        
                        <p className="text-xl text-white/70 max-w-2xl mx-auto mb-12">
                            Follow us on X to stay updated on mint details, community events, and exclusive drops.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <a
                                href="https://x.com/pikajpegs"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group px-10 py-5 bg-gradient-to-r from-[#1DA1F2] to-[#0d8bd9] text-white font-bold text-lg hover:scale-105 hover:shadow-[0_0_40px_rgba(29,161,242,0.5)] transition-all flex items-center gap-3"
                            >
                                <Twitter className="w-6 h-6" />
                                Follow @pikajpegs
                            </a>
                            
                            <a
                                href="#hero"
                                className="px-10 py-5 border-2 border-primary/50 text-white font-bold text-lg backdrop-blur-xl hover:bg-primary/10 hover:border-primary transition-all flex items-center gap-3"
                            >
                                <Send className="w-5 h-5" />
                                Apply for Whitelist
                            </a>
                        </div>
                    </motion.div>

                    {/* Info Cards */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-6"
                    >
                        <div className="pika-box p-8">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-12 h-12 bg-gradient-to-br from-primary to-yellow-500 flex items-center justify-center">
                                    <Twitter className="w-6 h-6 text-black" />
                                </div>
                                <h3 className="text-xl font-bold">Follow on X</h3>
                            </div>
                            <p className="text-white/60 text-sm leading-relaxed">
                                Stay updated with the latest news, mint announcements, and community events. Turn on notifications to never miss a drop!
                            </p>
                        </div>

                        <div className="pika-box p-8">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                                    <MessageCircle className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-xl font-bold">Join Discord</h3>
                            </div>
                            <p className="text-white/60 text-sm leading-relaxed">
                                Connect with fellow Pika holders, participate in events, and help shape the future of the project.
                            </p>
                        </div>
                    </motion.div>

                    {/* Note */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="mt-12 text-center"
                    >
                        <p className="text-white/40 text-sm">
                            Click "APPLY NOW" at the top to join the whitelist and secure your spot
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
