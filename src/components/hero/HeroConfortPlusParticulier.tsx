export default function HeroConfortPlusParticulier() {
    return (
        <div className="relative min-h-screen w-full flex items-center justify-center">
            <img
                src="/img-tempo.jpg"
                className="absolute inset-0 h-full w-full object-cover"
                alt=""
            />
            <div className="relative z-10 flex flex-col items-center text-center text-black">
                <h2 className="text-2xl font-light uppercase tracking-wide">
                    Offre Confort Plus
                </h2>
                <p className="mt-1 text-xs font-normal uppercase">
                    Déménagement particulier
                </p>
            </div>
        </div>
    );
}