import ServiceCard from "./ServiceCard";
import type {ServiceListProps} from "../types/ServiceListProps.ts";

export default function ServiceList({
    title = "Nos services",
    items,
}: ServiceListProps) {

    return (
        <section className="mx-auto w-full max-w-6xl px-6 py-12">
            <h2 className="mb-12 text-center text-lg font-medium text-black md:text-3xl">
                {title}
            </h2>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {items.map((item, index) => (
                    <ServiceCard
                        key={`${item.title}-${index}`}
                        title={item.title}
                        to={item.to}
                        image={item.image}
                    />
                ))}
            </div>
        </section>
    );
}