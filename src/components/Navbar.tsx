import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Menu, Phone, X } from "lucide-react";

type SousLien = {
    label: string;
    to: string;
};

type NavItem = {
    label: string;
    to: string;
    sousLiens?: SousLien[];
};

const navItems: NavItem[] = [
    { label: "Home", to: "/" },
    {
        label: "À propos",
        to: "/a-propos",
        sousLiens: [
            { label: "Qui sommes nous", to: "/a-propos/qui-sommes-nous" },
            { label: "Savoir faire", to: "/a-propos/savoir-faire" },
            { label: "Certifications", to: "/a-propos/certifications" },
        ],
    },
    {
        label: "Services",
        to: "/services",
        sousLiens: [
            { label: "Service 1", to: "/services/service-1" },
            { label: "Service 2", to: "/services/service-2" },
            { label: "Service 3", to: "/services/service-3" },
        ],
    },
    { label: "Actualités", to: "/actualites" },
    { label: "Contact", to: "/contact" },
];

const telephone = "06 00 00 00 00";

export default function Navbar() {
    const [menuOuvert, setMenuOuvert] = useState(false);
    const [sousMenuOuvert, setSousMenuOuvert] = useState<string | null>(null);

    const toggleSousMenu = (label: string) => {
        setSousMenuOuvert((actuel) => (actuel === label ? null : label));
    };

    const fermerMenu = () => {
        setMenuOuvert(false);
        setSousMenuOuvert(null);
    };

    return (
        <header className="relative w-full border-b border-gray-100 bg-white">
            <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
                <Link to="/" className="flex items-center" onClick={fermerMenu}>
                    <img src="/logo.png" alt="Logo" className="h-10 w-auto" />
                </Link>

                {/* Navigation desktop */}
                <ul className="hidden items-center gap-12 lg:flex">
                    {navItems.map((item) => (
                        <li key={item.label} className="group relative">
                            <Link to={item.to} className="flex items-center gap-1 text-sm text-black transition-colors hover:text-brand-cyan">
                                {item.label}
                                {item.sousLiens && <ChevronDown className="h-3 w-3 transition-transform group-hover:rotate-180" />}
                            </Link>

                            {item.sousLiens && (
                                <div className="invisible absolute left-0 top-full z-50 pt-4 opacity-0 transition-all group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                                    <ul className="w-56 overflow-hidden rounded-xl border border-brand-cyan bg-white py-2 shadow-md">
                                        {item.sousLiens.map((sousLien) => (
                                            <li key={sousLien.to}>
                                                <Link to={sousLien.to} className="block px-5 py-2 text-sm text-black transition-colors hover:bg-brand-beige hover:text-brand-cyan">
                                                    {sousLien.label}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </li>
                    ))}
                </ul>

                {/* Téléphone desktop */}
                <a href={`tel:${telephone.replace(/\s/g, "")}`} className="hidden items-center gap-3 text-sm text-black transition-colors hover:text-brand-cyan lg:flex">
                    <Phone className="h-6 w-6" />
                    {telephone}
                </a>

                {/* Bouton burger mobile */}
                <button type="button" onClick={() => setMenuOuvert((ouvert) => !ouvert)} className="flex h-10 w-10 items-center justify-center rounded-lg text-black lg:hidden" aria-label="Ouvrir le menu" aria-expanded={menuOuvert}>
                    {menuOuvert ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
            </nav>

            {/* Menu mobile */}
            {menuOuvert && (
                <div className="border-t border-gray-100 bg-white px-6 pb-6 lg:hidden">
                    <ul className="flex flex-col">
                        {navItems.map((item) => (
                            <li key={item.label} className="border-b border-gray-100">
                                {item.sousLiens ? (
                                    <>
                                        <button type="button" onClick={() => toggleSousMenu(item.label)} className="flex w-full items-center justify-between py-3 text-sm text-black" aria-expanded={sousMenuOuvert === item.label}>
                                            {item.label}
                                            <ChevronDown className={`h-4 w-4 transition-transform ${sousMenuOuvert === item.label ? "rotate-180" : ""}`} />
                                        </button>
                                        {sousMenuOuvert === item.label && (
                                            <ul className="mb-3 ml-4 flex flex-col gap-1 border-l border-brand-cyan pl-4">
                                                <li>
                                                    <Link to={item.to} onClick={fermerMenu} className="block py-2 text-sm text-black hover:text-brand-cyan">
                                                        {item.label}
                                                    </Link>
                                                </li>
                                                {item.sousLiens.map((sousLien) => (
                                                    <li key={sousLien.to}>
                                                        <Link to={sousLien.to} onClick={fermerMenu} className="block py-2 text-sm text-black hover:text-brand-cyan">
                                                            {sousLien.label}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </>
                                ) : (
                                    <Link to={item.to} onClick={fermerMenu} className="block py-3 text-sm text-black hover:text-brand-cyan">
                                        {item.label}
                                    </Link>
                                )}
                            </li>
                        ))}
                    </ul>

                    <a href={`tel:${telephone.replace(/\s/g, "")}`} className="mt-5 flex items-center gap-3 text-sm text-black">
                        <Phone className="h-6 w-6" />
                        {telephone}
                    </a>
                </div>
            )}
        </header>
    );
}