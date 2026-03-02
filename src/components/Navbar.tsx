import { motion } from "framer-motion";
import { Gamepad2 } from "lucide-react";
import { NAV_LINKS } from "../constants";

const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 py-4 backdrop-blur-md bg-black/20 border-b border-white/5">
            <div className="flex items-center gap-2">
                <span className="text-xl font-outfit font-bold tracking-tighter">PIKANFT</span>
            </div>

            <div className="hidden md:flex items-center gap-8">
                {NAV_LINKS.map((link) => (
                    <a
                        key={link.label}
                        href={link.href}
                        className="text-sm font-medium text-white/70 hover:text-primary transition-colors"
                    >
                        {link.label}
                    </a>
                ))}
            </div>

            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2 bg-primary text-black font-bold rounded-full shadow-[0_4px_0_0_#EAB308] border-2 border-primary hover:bg-primary-dark transition-all flex items-center gap-2"
            >
                <span className="text-xs uppercase tracking-widest">Connect Wallet</span>
                <div className="w-2 h-2 bg-black rounded-full animate-pulse" />
            </motion.button>
        </nav>
    );
};

export default Navbar;
