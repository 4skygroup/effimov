import type {NavItem} from "../types/Navbar.tsx";

export const navItems: NavItem[] = [
    { label: "Home", to: "/" },
    {
        label: "À propos",
        to: "/a-propos",
        sousLiens: [
            { label: "Qui sommes nous", to: "/a-propos/qui-sommes-nous" },
            { label: "Savoir faire", to: "/a-propos/savoir-faire" },
            { label: "Certifications", to: "/a-propos/certifications" },
            { label: "Implentatations", to: "/a-propos/implentatations" },
        ],
    },
    {
        label: "Services",
        to: "/services",
        sousLiens: [
            { label: "Déménagement particulier", to: "/services/demenagement-particulier/" },
            { label: "Service 2", to: "/services/service-2" },
            { label: "Service 3", to: "/services/service-3" },
        ],
    },
    { label: "Actualités", to: "/actualites" },
    { label: "Contact", to: "/contact" },
];

export const telephone = "06 10 00 00 00";