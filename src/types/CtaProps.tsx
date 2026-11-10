interface CtaButton {
    label: string;
    href: string;
}

export interface CtaProps {
    title: string;
    description: string;
    primaryButton?: CtaButton;
    secondaryButton?: CtaButton;
    image?: string;
    className?: string;
}