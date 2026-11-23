import type {InterventionTimelineProps} from "../../types/InterventionTimeLineProps.ts";

export default function InterventionTimelineStandardParticulier({
                                                                       heading = "Intervention de nos équipes",
                                                                       steps,
                                                                       className = "",
}: InterventionTimelineProps) {
    return (
        <section className={`w-full max-w-4xl mx-auto px-6 py-12 ${className}`}>
            <h2 className="text-center text-2xl font-medium text-gray-900 mb-12">
                {heading}
            </h2>

            <div className="relative">
                {/* Ligne verticale centrale */}
                <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-brand-cyan" />

                <ol className="relative">
                    {steps.map((step, index) => (
                        <li key={index} className="flex items-start py-5">
                            {/* Titre à gauche */}
                            <div className="w-1/2 pr-8 text-right pt-1">
                                <p className="text-sm text-brand-cyan">{step.title}</p>
                            </div>

                            {/* Pastille numérotée */}
                            <div className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-cyan text-sm font-bold text-white ring-8 ring-white">
                                {index + 1}
                            </div>

                            {/* Description à droite */}
                            <div className="w-1/2 pl-8 pt-1">
                                <p className="text-xs leading-relaxed text-gray-900">
                                    {step.description}
                                </p>

                                {step.items && step.items.length > 0 && (
                                    <ul className="mt-1 space-y-0.5">
                                        {step.items.map((item, i) => (
                                            <li key={i} className="text-xs leading-relaxed text-gray-900">
                                                – {item}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    );
}