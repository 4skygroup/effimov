export type Certification = {
    id: number;
    nom: string;
    type: string;
    desc: string;
};

type NosCertificationsProps = {
    titre?: string;
    description?: string;
    certifications: Certification[];
};

export default function NosCertifications({
                                              titre = "Nos certifications",
                                              description,
                                              certifications,
}: NosCertificationsProps) {
    return (
        <section className="w-full bg-white px-6 py-16">
            <div className="mx-auto max-w-4xl">
                <h2 className="text-2xl font-medium text-black">{titre}</h2>

                {description && (
                    <p className="mt-4 text-xs leading-relaxed text-black">
                        {description}
                    </p>
                )}

                <div className="mt-10 flex flex-col gap-5">
                    {certifications.map((certif) => (
                        <article
                            key={certif.id}
                            className="grid grid-cols-1 items-center gap-4 rounded-xl border border-brand-cyan bg-brand-beige p-6 shadow-md sm:grid-cols-4"
                        >
                            <h3 className="text-center text-lg font-normal text-black sm:col-span-1">
                                {certif.nom}
                            </h3>

                            <div className="sm:col-span-3">
                                <p className="text-sm font-medium text-black">{certif.type}</p>
                                <p className="mt-2 text-xs leading-relaxed text-black">
                                    {certif.desc}
                                </p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}