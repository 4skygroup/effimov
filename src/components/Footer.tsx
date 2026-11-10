import { Link } from "react-router-dom";
import {aboutLinks, formulaLinks, socials} from "../data/Footer.tsx";

export default function Footer() {
    return (
        <footer className="w-full bg-white text-black">
            <div className="max-w-7xl mx-auto px-6 pt-12 pb-8">
                <div className="flex flex-col gap-10 md:flex-row md:justify-center md:gap-20 lg:gap-45">
                    {/* Logo + adresse */}
                    <div className="flex flex-col gap-6">
                        <img src="/logo.png" alt="Logo" className="h-10 w-28 object-contain self-start" />

                        <address className="not-italic flex flex-col gap-3 text-xs">
                            <span>69, Avenue Victor Cresson</span>
                            <span>92130- Issy les Moulineaux</span>
                            <span>01 00 00 00 00</span>
                        </address>
                    </div>

                    {/* À propos */}
                    <div className="flex flex-col gap-4">
                        <h3 className="text-xs font-medium">À propos</h3>
                        <ul className="flex flex-col gap-2">
                            {aboutLinks.map((item) => (
                                <li key={item.to}>
                                    <Link
                                        to={item.to}
                                        className="text-xs hover:text-brand-cyan transition-colors"
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Nos formules */}
                    <div className="flex flex-col gap-4">
                        <h3 className="text-xs font-medium">Nos formules</h3>
                        <ul className="flex flex-col gap-2">
                            {formulaLinks.map((item) => (
                                <li key={item.to}>
                                    <Link
                                        to={item.to}
                                        className="text-xs hover:text-brand-cyan transition-colors"
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Nous suivre */}
                    <div className="flex flex-col gap-4">
                        <h3 className="text-xs font-medium">Nous suivre</h3>
                        <Link
                            to="/actualites"
                            className="text-xs hover:text-brand-cyan transition-colors"
                        >
                            Actualités
                        </Link>
                        <ul className="flex items-center gap-4">
                            {socials.map(({ label, href, Icon }) => (
                                <li key={label}>
                                    <a
                                        href={href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={label}
                                        className="text-black hover:text-brand-cyan transition-colors"
                                    >
                                        <Icon className="h-5 w-5" />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-14 flex flex-wrap items-center justify-center gap-1 text-xs text-center">
                    <span>© 2026 Effimove</span>
                    <Link to="/mentions-legales" className="hover:text-brand-cyan transition-colors">
                        Mentions légales
                    </Link>
                    <span>-</span>
                    <Link
                        to="/politique-de-confidentialite"
                        className="hover:text-brand-cyan transition-colors"
                    >
                        Politique de confidentialité
                    </Link>
                </div>
            </div>
        </footer>
    );
}