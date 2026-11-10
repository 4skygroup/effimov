import type {ReactNode} from "react";

export type Highlight = {
    icon: ReactNode;
    label: string;
    text: string;
};

export type MovingIntroProps = {
    highlights?: Highlight[];
};