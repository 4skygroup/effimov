type EquipeProps = {
    title: string;
    text: string;
    image?: string;
    imageAlt?: string;
};

export default function Equipe({ title, text, image, imageAlt = "" }: EquipeProps) {
    return (
        <section className="w-full bg-white px-6 py-12 md:px-12 md:py-20 lg:px-24">
            <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-16">
                <div className="flex flex-col gap-6 md:gap-10">
                    <h2 className="text-2xl font-semibold text-black md:text-3xl">{title}</h2>
                    <p className="text-sm text-black">{text}</p>
                </div>

                <div className={image ? "h-64 w-full overflow-hidden rounded-2xl md:h-80 lg:h-96" : "h-64 w-full overflow-hidden rounded-2xl bg-brand-gold md:h-80 lg:h-96"}>
                    {image && <img src={image} alt={imageAlt} className="h-full w-full object-cover" />}
                </div>
            </div>
        </section>
    );
}