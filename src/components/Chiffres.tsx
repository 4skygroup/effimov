import {stats} from "../data/Stats.tsx";

export default function Chiffres() {
    return (
        <section className="w-full bg-white py-16">
            <div className="mx-auto max-w-6xl px-6">
                <h2 className="text-center text-lg font-medium text-black md:text-3xl">
                    Quelques chiffres
                </h2>

                <div className="mt-16 grid grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-5">
                    {stats.map((stat) => {
                        const Icon = stat.icon;

                        return (
                            <div
                                key={stat.label}
                                className="flex flex-col items-center text-center"
                            >
                                <div className="flex h-10 items-center justify-center text-brand-cyan">
                                    {Icon ? (
                                        <Icon className="h-8 w-8" strokeWidth={1.5} />
                                    ) : (
                                        <span className="text-lg font-semibold">{stat.iconText}</span>
                                    )}
                                </div>

                                <p className="mt-3 text-sm text-black">{stat.value}</p>
                                <p className="mt-3 text-sm text-black">{stat.label}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}