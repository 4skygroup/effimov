export type SousLien = {
    label: string;
    to: string;
};

export type NavItem = {
    label: string;
    to: string;
    sousLiens?: SousLien[];
};