import { Link } from "react-router-dom";

export interface HeroProps {
    title: string;
    subtitle: string;
    image?: string;
    primaryLabel: string;
    primaryTo: string;
    secondaryLabel: string;
    secondaryTo: string;
}

export default function Hero({
                                 title,
                                 subtitle,
                                 image,
                                 primaryLabel,
                                 primaryTo,
                                 secondaryLabel,
                                 secondaryTo,
}: HeroProps) {
    return (
        <section
            className={`relative flex min-h-screen w-full items-center justify-center overflow-hidden ${
                image ? "" : "bg-brand-gold"
            }`}
        >
            {image && (
                <img
                    src={image}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover"
                />
            )}

            <div className="relative z-10 flex flex-col items-center gap-6 px-6 text-center text-black">
                <h1 className="text-2xl font-normal sm:text-3xl">{title}</h1>
                <p className="text-xs sm:text-sm">{subtitle}</p>

                <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-5">
                    <Link
                        to={primaryTo}
                        className="rounded-md bg-black px-5 py-2.5 text-sm text-white hover:opacity-90"
                    >
                        {primaryLabel}
                    </Link>
                    <Link
                        to={secondaryTo}
                        className="rounded-md bg-brand-cyan px-5 py-2.5 text-sm text-black hover:opacity-90"
                    >
                        {secondaryLabel}
                    </Link>
                </div>
            </div>
        </section>
    );
}