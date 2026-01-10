import { motion } from 'framer-motion';

export function Section({ children, className = "", id = "" }) {
    return (
        <motion.section
            id={id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className={`py-20 md:py-32 px-6 md:px-12 max-w-7xl mx-auto ${className}`}
        >
            {children}
        </motion.section>
    );
}
