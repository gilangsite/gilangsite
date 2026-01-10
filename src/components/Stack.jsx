import { Section } from './ui/Section';

const stack = [
    {
        category: "Strategy & Operations",
        items: ["Brand Positioning", "Go-to-Market Strategy", "B2B Partnerships", "Omnichannel Marketing", "Team Leadership", "Project Management"]
    },
    {
        category: "Digital Ecosystem",
        items: ["Social Media Growth", "Content Creation", "SEO Basics", "E-commerce Management", "Community Building", "Digital Ad Strategy"]
    },
    {
        category: "Tech & AI",
        items: ["Generative AI (LLMs)", "Workflow Automation", "Data Analysis", "CRM Systems", "Notion", "Creative Tools"]
    }
];

export default function Stack() {
    return (
        <Section id="stack">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-16 tracking-tight">Capabilities</h2>

            <div className="grid md:grid-cols-3 gap-12">
                {stack.map((group, idx) => (
                    <div key={idx} className="space-y-6">
                        <h3 className="text-xs font-semibold text-white/40 uppercase tracking-widest border-b border-white/10 pb-4">{group.category}</h3>
                        <ul className="space-y-3">
                            {group.items.map((item, i) => (
                                <li key={i} className="text-lg text-secondary/90 hover:text-white transition-colors duration-300">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </Section>
    )
}
