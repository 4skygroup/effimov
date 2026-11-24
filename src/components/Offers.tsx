import { Link } from "react-router-dom";
import type {Offer, OffersProps} from "../data/OffersProps.tsx";

function OfferCard({ title, link, image }: Offer) {
    return (
        <Link
            to={link}
            className={`relative flex h-96 w-full items-end justify-center overflow-hidden rounded-xl border-2 border-brand-cyan pb-4 shadow-md transition hover:-translate-y-1 hover:shadow-lg ${
                image ? "bg-white" : "bg-brand-gold"
            }`}
        >
            {image && (
                <img
                    src={image}
                    alt={title}
                    className="absolute inset-0 h-full w-full object-cover"
                />
            )}
            <span className="relative text-xs font-medium text-black">{title}</span>
        </Link>
    );
}

export default function Offers({ offers, title = "Nos offres" }: OffersProps) {
    return (
        <section className="w-full px-6 py-12">
            <h2 className="mb-12 text-center text-2xl text-black">{title}</h2>

            <div className="mx-auto grid max-w-5xl grid-cols-2 gap-6 lg:grid-cols-4">
                {offers.map((offer) => (
                    <OfferCard
                        key={offer.link}
                        title={offer.title}
                        link={offer.link}
                        image={offer.image}
                    />
                ))}
            </div>
        </section>
    );
}