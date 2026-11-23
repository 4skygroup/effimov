import type {AnalyseDemenagementProps} from "../types/AnalyseDemenagementProps.ts";

function VisuelEtape({ image, titre }: { image?: string; titre: string }) {
    if (image) {
        return <img src={image} alt={titre} className="w-full h-40 object-cover" />;
    }

    return <div className="w-full h-40 border border-couleur4" />;
}

export default function AnalyseDemenagement({
                                                titre,
                                                texte,
                                                etapes,
}: AnalyseDemenagementProps) {
    return (
        <section className="bg-couleur2 text-couleur3 py-16 px-6">
            <div className="max-w-4xl mx-auto flex flex-col items-center gap-8">
                <h2 className="font-glacial text-2xl text-center">{titre}</h2>

                <p className="font-glacial text-xs text-couleur1 max-w-xl text-left">
                    {texte}
                </p>

                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 mt-8">
                    {etapes.map((etape) => (
                        <article
                            key={etape.numero}
                            className="flex flex-col items-center gap-4"
                        >
                            <VisuelEtape image={etape.image} titre={etape.titre} />

                            <div className="flex items-center gap-3">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-cyan-400 text-white text-xs font-medium">
                  {etape.numero}
                </span>
                                <h3 className="font-glacial text-xl">{etape.titre}</h3>
                            </div>

                            <p className="font-glacial text-xs text-couleur1 text-center max-w-xs">
                                {etape.description}
                            </p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}