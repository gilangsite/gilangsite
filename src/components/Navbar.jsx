import { motion, useScroll } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Navbar() {
    const { scrollY } = useScroll();
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        return scrollY.onChange((latest) => {
            setIsScrolled(latest > 50);
        });
    }, [scrollY]);

    return (
        <motion.nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out border-b ${isScrolled
                    ? 'bg-navy-900/80 backdrop-blur-md border-white/10'
                    : 'bg-transparent border-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
                <a href="#" className="font-bold tracking-tight text-white/90 hover:text-white transition-colors">
                    Gilang Ramadhan
                </a>

                <div className="hidden md:flex gap-8">
                    {['Work', 'About', 'Stack', 'Contact'].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="text-sm font-medium text-secondary hover:text-white transition-colors"
                        >
                            {item}
                        </a>
                    ))}
                </div>
            </div>
        </motion.nav>
    );
}
