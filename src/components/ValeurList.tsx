import ValeurCard, { type ValueCardProps } from "./ValeurCard.tsx";

export interface ValuesListProps {
    title: string;
    description: string;
    values: ValueCardProps[];
    className?: string;
}

export default function ValeurList({
                                       title,
                                       description,
                                       values,
                                       className = "",
}: ValuesListProps) {
    return (
        <section
            className={`mx-auto flex w-full max-w-5xl flex-col gap-10 px-6 py-12 ${className}`}
        >
            <header className="flex flex-col items-center gap-4 text-center">
                <h2 className="text-2xl text-black">{title}</h2>
                <p className="max-w-2xl text-xs leading-relaxed text-black">
                    {description}
                </p>
            </header>

            <div className="flex flex-col gap-10">
                {values.map((value) => (
                    <ValeurCard
                        key={value.title}
                        title={value.title}
                        description={value.description}
                    />
                ))}
            </div>
        </section>
    );
}