import { motion } from "framer-motion";
import { Twitter, MessageCircle, Github, Zap } from "lucide-react";

const Navbar = () => {
    const navLinks = [
        { label: "Home", href: "#hero" },
        { label: "About", href: "#about" },
        { label: "Collection", href: "#gallery" },
        { label: "Roadmap", href: "#roadmap" },
    ];

    return (
        <motion.nav 
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/80 border-b border-white/10"
        >
            <div className="container mx-auto px-6 py-4">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <motion.a 
                        href="#hero"
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center gap-3 group"
                    >
                        <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center group-hover:shadow-[0_0_20px_rgba(255,215,0,0.5)] transition-all">
                            <Zap className="w-6 h-6 text-black fill-current" />
                        </div>
                        <span className="text-xl font-black font-outfit bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                            PIKA
                        </span>
                    </motion.a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link, index) => (
                            <motion.a
                                key={link.label}
                                href={link.href}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="text-sm font-medium text-white/70 hover:text-primary transition-colors relative group"
                            >
                                {link.label}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
                            </motion.a>
                        ))}
                    </div>

                    {/* Social Links */}
                    <div className="flex items-center gap-4">
                        <a 
                            href="https://x.com/pikajpegs" 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-9 h-9 bg-white/5 hover:bg-primary/20 border border-white/10 hover:border-primary/50 flex items-center justify-center transition-all group"
                        >
                            <Twitter className="w-4 h-4 text-white/70 group-hover:text-primary transition-colors" />
                        </a>
                        <a 
                            href="#" 
                            className="w-9 h-9 bg-white/5 hover:bg-primary/20 border border-white/10 hover:border-primary/50 flex items-center justify-center transition-all group"
                        >
                            <MessageCircle className="w-4 h-4 text-white/70 group-hover:text-primary transition-colors" />
                        </a>
                    </div>
                </div>
            </div>
        </motion.nav>
    );
};

export default Navbar;
