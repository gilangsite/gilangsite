import { Section } from './ui/Section';

export default function About() {
    return (
        <Section id="about" className="py-24 md:py-32">
            <div className="grid md:grid-cols-2 gap-16 items-start">
                <div>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 tracking-tight">About Me</h2>
                    <div className="space-y-6 text-secondary text-lg leading-relaxed">
                        <p>
                            With over 6 years of experience in the marketing landscape, I specialize in connecting brands with their audiences through strategic communication and data-driven insights.
                        </p>
                        <ul className="space-y-4 list-none">
                            <li className="flex gap-4">
                                <span className="text-indigo-400 font-bold">•</span>
                                <span>Currently Marketing Lead at Medtools, scaling the company from a niche supplier to a major player in medical equipment.</span>
                            </li>
                            <li className="flex gap-4">
                                <span className="text-indigo-400 font-bold">•</span>
                                <span>Deeply passionate about AI integration in marketing workflows, utilizing Large Language Models and automation to drive efficiency.</span>
                            </li>
                            <li className="flex gap-4">
                                <span className="text-indigo-400 font-bold">•</span>
                                <span>Expert in bridging the gap between B2B relationship building and B2C digital engagement strategies.</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-8 md:p-12 space-y-10">
                    <div>
                        <h3 className="text-xs font-semibold text-white/40 uppercase tracking-widest mb-2">Experience</h3>
                        <p className="text-2xl font-medium text-white">6+ Years</p>
                        <p className="text-sm text-secondary mt-1">Professional Marketing & Strategy</p>
                    </div>
                    <div>
                        <h3 className="text-xs font-semibold text-white/40 uppercase tracking-widest mb-2">Current Role</h3>
                        <p className="text-2xl font-medium text-white">Head of Marketing</p>
                        <p className="text-sm text-secondary mt-1">Medtools.id</p>
                    </div>
                    <div>
                        <h3 className="text-xs font-semibold text-white/40 uppercase tracking-widest mb-2">Focus</h3>
                        <p className="text-xl font-medium text-white">Digital Transformation</p>
                        <p className="text-sm text-secondary mt-1">Brand Strategy, Community Growth</p>
                    </div>
                </div>
            </div>
        </Section>
    )
}
