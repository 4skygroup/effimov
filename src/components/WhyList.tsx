import WhyCard from "./WhyCard";
import type {WhyListProps} from "../types/WhyListProps.ts";

export default function WhyList({ title, description, reasons }: WhyListProps) {
    return (
        <section className="mx-auto w-full max-w-5xl px-6 py-16">
            <header className="mb-12 flex flex-col items-center gap-4 text-center">
                <h2 className="text-2xl font-semibold text-black">{title}</h2>
                <p className="max-w-2xl text-xs text-black">{description}</p>
            </header>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {reasons.map((reason) => (
                    <WhyCard
                        key={reason.title}
                        title={reason.title}
                        description={reason.description}
                    />
                ))}
            </div>
        </section>
    );
}