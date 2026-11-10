import {Globe, TreeDeciduous} from "lucide-react";
import type {Highlight} from "../types/Highlight";

export const defaultHighlights: Highlight[] = [
    {
        icon: <Globe className="size-6 text-brand-cyan"/>,
        label: "Labels",
        text: "Nos valeurs façonnent notre identité",
    },
    {
        icon: <TreeDeciduous className="size-6 text-brand-cyan"/>,
        label: "Politiques",
        text: "Nos valeurs façonnent",
    },
];