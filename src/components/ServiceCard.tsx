import { Link } from "react-router-dom";
import type {ServiceCardProps} from "../types/ServicesCardProps.ts";

export default function ServiceCard({ title, to, image }: ServiceCardProps) {
    const hasImage = Boolean(image);

    return (
        <Link
            to={to}
            className={`relative flex aspect-2/3 w-full flex-col justify-end overflow-hidden rounded-xl border-2 border-brand-cyan shadow-md transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg ${
                hasImage ? "" : "bg-brand-gold"
            }`}
        >
            {hasImage && (
                <>
                    <img
                        src={image}
                        alt={title}
                        className="absolute inset-0 h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
                </>
            )}

            <p
                className={`relative z-10 px-4 pb-4 text-center text-xs ${
                    hasImage ? "text-white" : "text-black"
                }`}
            >
                {title}
            </p>
        </Link>
    );
}