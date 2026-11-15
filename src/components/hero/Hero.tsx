import { Link } from "react-router-dom";
import type {HeroProps} from "../../types/Hero.ts";

export default function Hero({
                                 subtitle,
                                 image,
                                 primaryLabel,
                                 primaryTo,
                                 secondaryLabel,
                                 secondaryTo,
}: HeroProps) {
    return (
        <section
            className={`${
                image ? "" : "bg-brand-gold"
            } overflow-hidden justify-center items-center w-full min-h-[calc(100vh-65px)] flex relative`}
        >
            {image && (
                <img
                    src={image}
                    alt=""
                    className="object-cover w-full h-full inset-0 absolute"
                />
            )}
            <div className="text-black text-center px-6 gap-2 items-center flex-col flex mt-52 z-10 relative">

                <p className="sm:text-sm text-xs">{subtitle}</p>

                <div className="sm:gap-5 sm:flex-row gap-4 items-center flex-col flex">
                    <Link
                        to={primaryTo}
                        className="hover:opacity-90 text-white text-sm py-2.5 px-5 bg-black rounded-md"
                    >
                        {primaryLabel}
                    </Link>
                    <Link
                        to={secondaryTo}
                        className="hover:opacity-90 text-black text-sm py-2.5 px-5 bg-brand-cyan rounded-md"
                    >
                        {secondaryLabel}
                    </Link>
                </div>
            </div>
        </section>
    );
}