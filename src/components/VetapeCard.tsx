import type { CSSProperties } from "react";

export interface VetapeCardProps {
    title: string;
    description: string;
    className?: string;
}

const cardShadow: CSSProperties = {
    boxShadow: "4px 4px 4px 0 var(--color-brand-cyan)",
};

export default function VetapeCard({
                                      title,
                                      description,
                                      className = "",
}: VetapeCardProps) {

    return (
        <article
            style={cardShadow}
            className={`flex w-full flex-col items-center justify-center gap-4 border border-brand-cyan bg-brand-beige px-8 py-12 text-center ${className}`}
        >
            <h3 className="text-xl text-black">{title}</h3>
            <p className="max-w-4xl text-xs leading-relaxed text-black">
                {description}
            </p>
        </article>
    );
}