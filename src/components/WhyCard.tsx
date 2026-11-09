import type {WhyCardProps} from "../types/WhyCardProps.ts";

export default function WhyCard({ title, description }: WhyCardProps) {
    return (
        <article className="flex min-h-72 flex-col items-center justify-center gap-6 border border-brand-cyan bg-brand-beige px-6 py-8 text-center">
            <h3 className="text-xl font-normal text-black">{title}</h3>
            <p className="text-xs leading-relaxed text-black">{description}</p>
        </article>
    );
}