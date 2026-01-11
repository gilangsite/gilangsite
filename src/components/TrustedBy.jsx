import { Section } from './ui/Section';

// Import logos
import medtoolsLogo from '../assets/logos/medtools-id.png';
import drSoapLogo from '../assets/logos/dr-soap.png';
import bertumboostLogo from '../assets/logos/bertumboost.png';
import mohcLogo from '../assets/logos/mohc.png';
import medimpactLogo from '../assets/logos/medimpact-co.png';
import idkiLogo from '../assets/logos/idki.png';
import legalspotLogo from '../assets/logos/legalspot-id.png';
import haloopLogo from '../assets/logos/haloop-ai.png';
import mahaBangunanLogo from '../assets/logos/maha-bangunan.png';
import yukBelajarLogo from '../assets/logos/yuk-belajar.png';
import phrasoLogo from '../assets/logos/phraso-ai.png';
import apacmedLogo from '../assets/logos/apacmed.png';

const brands = [
    { name: "Medtools.id", url: "https://www.medtools.id", logo: medtoolsLogo },
    { name: "dr soap", url: "https://dr-soap.com/", logo: drSoapLogo },
    { name: "Bertumboost", url: "https://bertumboost.com", logo: bertumboostLogo },
    { name: "MOHC", url: "https://medika-ohc.co.id/", logo: mohcLogo },
    { name: "Medimpact.co", url: "https://www.instagram.com/medimpact.co/", logo: medimpactLogo },
    { name: "IDKI", url: "https://idki.org/", logo: idkiLogo },
    { name: "Legalspot.id", url: "https://legalspot.id", logo: legalspotLogo },
    { name: "Haloop.ai", url: "https://haloop.ai/", logo: haloopLogo },
    { name: "Maha Bangunan", url: "https://mahabangunan.com/", logo: mahaBangunanLogo },
    { name: "Yuk Belajar", url: "https://yuk-belajar.id", logo: yukBelajarLogo },
    { name: "Phraso.ai", url: "https://www.phraso.ai", logo: phrasoLogo },
    { name: "Apacmed", url: "https://apacmed.org/", logo: apacmedLogo }
];

export default function TrustedBy() {
    return (
        <Section id="trusted-by" className="py-20 border-t border-white/5 overflow-hidden">
            <h3 className="text-center text-sm font-medium tracking-[0.2em] text-white/40 uppercase mb-12">
                I've been working with
            </h3>

            <div className="relative flex overflow-x-hidden group">
                <div className="flex animate-marquee group-hover:[animation-play-state:paused] min-w-full shrink-0 items-center justify-start gap-16 md:gap-32 pr-16 md:pr-32">
                    {brands.map((brand, index) => (
                        <a
                            key={`${brand.name}-${index}`}
                            href={brand.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative block w-48 h-48 md:w-64 md:h-64 transition-all duration-500 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]"
                            aria-label={`Visit ${brand.name}`}
                        >
                            <img
                                src={brand.logo}
                                alt={brand.name}
                                className="w-full h-full object-contain object-center"
                                loading="lazy"
                            />
                        </a>
                    ))}
                </div>
                {/* Duplicate for seamless loop */}
                <div aria-hidden="true" className="flex animate-marquee group-hover:[animation-play-state:paused] min-w-full shrink-0 items-center justify-start gap-16 md:gap-32 pr-16 md:pr-32">
                    {brands.map((brand, index) => (
                        <a
                            key={`${brand.name}-duplicate-${index}`}
                            href={brand.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative block w-48 h-48 md:w-64 md:h-64 transition-all duration-500 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]"
                        >
                            <img
                                src={brand.logo}
                                alt={brand.name}
                                className="w-full h-full object-contain object-center"
                                loading="lazy"
                            />
                        </a>
                    ))}
                </div>
            </div>

            {/* Gradient Masks for Fade Effect */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-navy-900 to-transparent z-10 opacity-50 md:opacity-100"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-navy-900 to-transparent z-10 opacity-50 md:opacity-100"></div>
        </Section>
    )
}
