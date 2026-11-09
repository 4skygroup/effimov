import {Briefcase, Euro, ThumbsUp, Truck} from "lucide-react";
import type {Stat} from "../types/Stat.ts";

export const stats: Stat[] = [
    { icon: Euro, value: "7 000 000", label: "Chiffres d'affaires" },
    { icon: Truck, value: "4 890", label: "Déménagements" },
    { iconText: "CO₂", value: "42,97 tonnes", label: "CO2 économisé" },
    { icon: ThumbsUp, value: "9/10", label: "Satisfaction client" },
    { icon: Briefcase, value: "+ de 100 ans", label: "D'expérience" },
];