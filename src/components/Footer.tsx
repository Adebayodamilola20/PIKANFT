import { Twitter, MessageCircle, Github, Zap } from "lucide-react";

const Footer = () => {
    return (
        <footer className="relative py-12 border-t border-white/10 backdrop-blur-xl">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />
            
            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    {/* Logo */}
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                            <Zap className="w-6 h-6 text-black fill-current" />
                        </div>
                        <div>
                            <span className="font-black font-outfit text-lg bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                                PIKA NFT
                            </span>
                            <p className="text-white/40 text-xs">Electric Pixel Art</p>
                        </div>
                    </div>

                    {/* Social Links */}
                    <div className="flex items-center gap-4">
                        <a 
                            href="https://x.com/pikajpegs" 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 bg-white/5 hover:bg-primary/20 border border-white/10 hover:border-primary/50 flex items-center justify-center transition-all group"
                        >
                            <Twitter className="w-5 h-5 text-white/70 group-hover:text-primary transition-colors" />
                        </a>
                        <a 
                            href="#" 
                            className="w-10 h-10 bg-white/5 hover:bg-primary/20 border border-white/10 hover:border-primary/50 flex items-center justify-center transition-all group"
                        >
                            <MessageCircle className="w-5 h-5 text-white/70 group-hover:text-primary transition-colors" />
                        </a>
                        <a 
                            href="#" 
                            className="w-10 h-10 bg-white/5 hover:bg-primary/20 border border-white/10 hover:border-primary/50 flex items-center justify-center transition-all group"
                        >
                            <Github className="w-5 h-5 text-white/70 group-hover:text-primary transition-colors" />
                        </a>
                    </div>

                    {/* Copyright */}
                    <div className="text-white/40 text-xs text-center md:text-right">
                        <p>&copy; 2024 Pika NFT. All rights reserved.</p>
                        <p className="mt-1">Built for the community</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
