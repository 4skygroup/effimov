export interface Etape {
    numero: number;
    titre: string;
    description: string;
    image?: string;
}

export interface AnalyseDemenagementProps {
    titre: string;
    texte: string;
    etapes: Etape[];
}
