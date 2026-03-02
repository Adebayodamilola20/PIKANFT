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

        </nav>
    );
};

export default Navbar;
