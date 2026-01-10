import { useState } from 'react';
import { Section } from './ui/Section';
import { Mail, Instagram, Linkedin, MessageCircle } from 'lucide-react';
import ContactModal from './ContactModal';

export default function Contact() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <Section id="contact" className="py-32 text-center">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">Let's Work Together</h2>
            <p className="text-xl text-secondary max-w-2xl mx-auto mb-12">
                Open for collaborations, detailed brand audits, and speaking inquiries.
            </p>

            <button
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center gap-3 px-8 py-4 bg-white text-navy-900 rounded-full font-semibold text-lg hover:scale-105 transition-transform duration-300"
            >
                <MessageCircle className="w-5 h-5" />
                Get in Touch
            </button>

            <div className="flex justify-center gap-6 mt-16">
                <a
                    href="mailto:gilang178871@gmail.com?subject=Business%20Inquiry&body=Hi%20Gilang%2C%0A%0AMy%20name%20is%20%5BUser%20Name%5D.%0A%0AI%E2%80%99d%20like%20to%20get%20in%20touch%20regarding%20a%20potential%20collaboration.%0A%0ABest%20regards%2C"
                    className="p-4 bg-white/5 rounded-full text-white hover:bg-white/10 transition-colors group"
                    aria-label="Email"
                >
                    <Mail className="w-6 h-6 group-hover:scale-110 transition-transform" />
                </a>
                <a href="https://instagram.com/ceunggg" target="_blank" rel="noopener noreferrer" className="p-4 bg-white/5 rounded-full text-white hover:bg-white/10 transition-colors group" aria-label="Instagram">
                    <Instagram className="w-6 h-6 group-hover:scale-110 transition-transform" />
                </a>
                <a href="https://www.linkedin.com/in/gilang-ramadhan-965906256/" target="_blank" rel="noopener noreferrer" className="p-4 bg-white/5 rounded-full text-white hover:bg-white/10 transition-colors group" aria-label="LinkedIn">
                    <Linkedin className="w-6 h-6 group-hover:scale-110 transition-transform" />
                </a>
            </div>

            <footer className="mt-32 pt-12 border-t border-white/5 text-center">
                <p className="text-white/30 text-sm">
                    © {new Date().getFullYear()} Gilang Ramadhan. Built with modern web technologies.
                </p>
            </footer>

            <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </Section>
    )
}
