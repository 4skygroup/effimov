import {FaFacebook, FaInstagram, FaLinkedin} from "react-icons/fa";
import type {FooterLink} from "../types/Footer.ts";

export const aboutLinks: FooterLink[] = [
    { label: "Qui nous sommes", to: "/qui-nous-sommes" },
    { label: "Savoir-faire", to: "/savoir-faire" },
    { label: "Certifications", to: "/certifications" },
    { label: "Normes", to: "/normes" },
    { label: "Implantations", to: "/implantations" },
];

export const formulaLinks: FooterLink[] = [
    { label: "Déménagement particulier", to: "/demenagement-particulier" },
    { label: "Transfert d'entreprise", to: "/transfert-entreprise" },
    { label: "Transfert d'entreprise", to: "/transfert-entreprise-2" },
    { label: "Transfert d'entreprise", to: "/transfert-entreprise-3" },
];

export const socials = [
    { label: "Facebook", href: "https://www.facebook.com", Icon: FaFacebook },
    { label: "Instagram", href: "https://www.instagram.com", Icon: FaInstagram },
    { label: "LinkedIn", href: "https://www.linkedin.com", Icon: FaLinkedin },
];