export interface PointItem {
    label: string;
    ok: boolean;
}

export interface PointProps {
    label: string;
    ok?: boolean;
}

export interface CardProps {
    items?: PointItem[];
}

export interface AvantagesOffreProps {
    title?: string;
    leftItems?: PointItem[];
    rightItems?: PointItem[];
}