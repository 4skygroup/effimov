export type Offer = {
    title: string;
    link: string;
    image?: string;
};

export type OffersProps = {
    offers: Offer[];
    title?: string;
};