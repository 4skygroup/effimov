const logos = [
    { id: 1, src: "/img-tempo.jpg", alt: "Client 1" },
    { id: 2, src: "/img-tempo.jpg", alt: "Client 2" },
    { id: 3, src: "/img-tempo.jpg", alt: "Client 3" },
    { id: 4, src: "/img-tempo.jpg", alt: "Client 4" },
    { id: 5, src: "/img-tempo.jpg", alt: "Client 5" },
];

export default function Confiance() {
    return (
        <section className="mx-auto w-full max-w-5xl px-4 md:px-6">
            <div className="flex flex-col items-center gap-3 text-center">
                <h2 className="font-semibold text-lg md:text-2xl">
                    Ils nous ont fait confiance
                </h2>
                <p className="text-sm max-w-3xl">
                    Nos valeurs façonnent notre identité et notre relation clients : elles s’alignent sur nos services qui consistent à donner à chaque individu et chaque organisation les Nos valeurs façonnent notre identité et notre relation clients : elles s’alignent sur nos services qui consistent à donner à chaque individu et chaque
                </p>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-5 md:gap-10">
                {logos.map((logo) => (
                    <div
                        key={logo.id}
                        className={`aspect-square w-full overflow-hidden ${
                            logo.src ? "" : "bg-brand-gold"
                        }`}
                    >
                        {logo.src && (
                            <img
                                src={logo.src}
                                alt={logo.alt}
                                className="size-full"
                            />
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}