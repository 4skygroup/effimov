export type Competence = {
    id: number;
    titre: string;
    desc: string;
};

type NosCompetencesProps = {
    titre: string;
    description?: string;
    competences: Competence[];
};

export default function NosCompetences({
                                           titre,
                                           description,
                                           competences,
}: NosCompetencesProps) {

    return (
        <section className="w-full bg-white px-6 py-16">
            <div className="mx-auto max-w-5xl">
                <h2 className="text-center text-3xl font-medium text-black">{titre}</h2>

                {description && (
                    <p className="mx-auto mt-4 max-w-3xl text-center text-xs text-black">
                        {description}
                    </p>
                )}

                <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {competences.map((competence) => (
                        <article
                            key={competence.id}
                            className="rounded-xl border border-brand-cyan bg-brand-beige p-6 shadow-md"
                        >
                            <h3 className="text-sm font-medium text-black">
                                {competence.titre}
                            </h3>
                            <p className="mt-3 text-xs leading-relaxed text-black">
                                {competence.desc}
                            </p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}