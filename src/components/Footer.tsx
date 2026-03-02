import { Gamepad2, Twitter, Disc as Discord, Github } from "lucide-react";

const Footer = () => {
    return (
        <footer className="py-12 border-t border-white/5 bg-black/40">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center border border-white/10">
                            <Gamepad2 className="text-primary w-5 h-5" />
                        </div>
                        <span className="font-outfit font-bold tracking-tighter text-lg">PIKANFT</span>
                    </div>

                    <div className="flex items-center gap-8">
                        <a href="#" className="text-white/40 hover:text-primary transition-colors">
                            <Twitter className="w-5 h-5" />
                        </a>
                        <a href="#" className="text-white/40 hover:text-primary transition-colors">
                            <Discord className="w-5 h-5" />
                        </a>
                        <a href="#" className="text-white/40 hover:text-primary transition-colors">
                            <Github className="w-5 h-5" />
                        </a>
                    </div>

                    <div className="text-white/20 text-[10px] font-mono uppercase tracking-[0.2em]">
                        Built for the Pika-Community © 2024
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
