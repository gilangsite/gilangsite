import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">

            {/* Background Elements */}
            <div className="absolute inset-0 z-0 select-none pointer-events-none">
                <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-indigo-600/20 rounded-full blur-[120px] opacity-70" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-purple-600/10 rounded-full blur-[120px] opacity-60" />
            </div>

            <motion.div
                style={{ y, opacity }}
                className="relative z-10 max-w-5xl mx-auto px-8 text-center"
            >
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="text-secondary font-medium tracking-widest text-xs md:text-sm uppercase mb-6"
                >
                    6+ Years Experience • Based in Jakarta
                </motion.h2>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
                    className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-8 leading-[1.1]"
                >
                    Creative Marketer <br className="hidden md:block" />
                    <span className="text-white/40">& Brand Strategist.</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="text-lg md:text-xl text-secondary max-w-2xl mx-auto leading-relaxed mb-12"
                >
                    I bridge the gap between creative storytelling and technical execution.
                    Specializing in AI-driven marketing, brand strategy, and immersive digital experiences.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="flex flex-col md:flex-row gap-4 justify-center items-center"
                >
                    <a href="#work" className="group relative inline-flex items-center justify-center px-8 py-3.5 bg-white text-navy-900 font-semibold rounded-full overflow-hidden transition-transform hover:scale-105 active:scale-95">
                        <span className="relative z-10 flex items-center gap-2">
                            View Selected Work <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </span>
                    </a>
                    <a href="#contact" className="px-8 py-3.5 text-white border border-white/10 rounded-full hover:bg-white/5 transition-colors font-medium">
                        Contact Me
                    </a>
                </motion.div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
            >
                <div className="w-[1px] h-16 bg-gradient-to-b from-white/0 via-white/20 to-white/0" />
            </motion.div>
        </section>
    );
}
