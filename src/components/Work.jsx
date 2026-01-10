import { Section } from './ui/Section';
import { ArrowUpRight } from 'lucide-react';

const projects = [
    {
        title: "Medtools Strategic Branding",
        category: "Brand Strategy • 2023 — Present",
        description: "Led the complete brand overhaul for Medtools, establishing it as a trusted name in medical equipment. Defined strategic direction for market penetration and digital presence.",
        tags: ["Brand Strategy", "Marketing Management", "B2B Analysis"],
        link: "https://medtools.id"
    },
    {
        title: "Digital Education Ecosystem",
        category: "Content & Community",
        description: "Built a comprehensive educational content ecosystem utilizing digital platforms (Instagram, YouTube) to drive engagement with medical students and professionals.",
        tags: ["Content Strategy", "Social Media", "Community Growth"],
        link: "https://instagram.com/ceunggg"
    },
    {
        title: "Team Skill Modernization",
        category: "Leadership & Ops",
        description: "Spearheaded the digital upskilling of the marketing team, introducing AI workflows and modern digital branding techniques to increase efficiency.",
        tags: ["Leadership", "Training", "Process Optimization"],
        link: null
    }
];

export default function Work() {
    const handleWorkClick = (projectTitle) => {
        const text = `Hi Gilang,\n\nI viewed your work related to ${projectTitle}.\n\nI’d like to discuss this further.`;
        const encodedText = encodeURIComponent(text);
        const url = `https://wa.me/62895412747584?text=${encodedText}`;
        window.open(url, '_blank');
    };

    return (
        <Section id="work" className="border-t border-white/5">
            <div className="mb-16 md:mb-24">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">Selected Work</h2>
                <p className="text-secondary max-w-xl text-lg">
                    A collection of strategic initiatives and digital products focused on the medical industry and brand growth.
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        onClick={() => handleWorkClick(project.title)}
                        className="group relative bg-white/[0.02] border border-white/10 p-8 rounded-2xl hover:bg-white/[0.04] hover:border-white/20 transition-all duration-300 flex flex-col cursor-pointer"
                    >
                        <div className="mb-6">
                            <span className="text-xs font-medium tracking-wider text-indigo-400 uppercase">{project.category}</span>
                            <h3 className="text-2xl font-bold text-white mt-3 group-hover:text-indigo-300 transition-colors flex items-center gap-2">
                                {project.title}
                                <ArrowUpRight className="w-5 h-5 opacity-0 -translate-y-2 translate-x-2 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
                            </h3>
                        </div>
                        <p className="text-secondary/80 mb-8 leading-relaxed text-sm md:text-base">
                            {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mt-auto">
                            {project.tags.map(tag => (
                                <span key={tag} className="px-3 py-1 text-xs font-medium text-white/60 bg-white/5 rounded-full border border-white/5">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    )
}
