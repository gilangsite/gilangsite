import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const threshold = 50;
            const scrolled = window.scrollY > threshold;
            if (scrolled !== isScrolled) {
                setIsScrolled(scrolled);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isScrolled]);

    // Handle menu item click: close menu
    const handleItemClick = () => {
        setIsMenuOpen(false);
    };

    const navItems = ['Work', 'About', 'Stack', 'Contact'];

    return (
        <motion.nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out border-b ${isScrolled || isMenuOpen
                ? 'bg-navy-900/80 backdrop-blur-md border-white/10'
                : 'bg-transparent border-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-8 md:px-12 h-20 flex items-center justify-between">
                <a href="#" className="font-bold tracking-tight text-white/90 hover:text-white transition-colors relative z-[60]">
                    Gilang Ramadhan
                </a>

                {/* Desktop Nav */}
                <div className="hidden md:flex gap-8">
                    {navItems.map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="text-sm font-medium text-secondary hover:text-white transition-colors"
                        >
                            {item}
                        </a>
                    ))}
                </div>

                {/* Mobile Menu Trigger */}
                <button
                    className="md:hidden relative z-[60] p-2 text-white/90 hover:text-white transition-colors"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle Menu"
                >
                    {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Nav Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="absolute top-full left-0 right-0 bg-navy-900/95 backdrop-blur-lg border-b border-white/10 md:hidden"
                    >
                        <nav className="flex flex-col py-8 px-8 gap-6">
                            {navItems.map((item) => (
                                <a
                                    key={item}
                                    href={`#${item.toLowerCase()}`}
                                    onClick={handleItemClick}
                                    className="text-2xl font-semibold text-secondary hover:text-white transition-colors flex items-center justify-between group"
                                >
                                    {item}
                                    <span className="w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-8" />
                                </a>
                            ))}
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
