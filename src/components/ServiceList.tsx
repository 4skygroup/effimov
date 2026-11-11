import ServiceCard from "./ServiceCard";
import type { ServiceListProps } from "../types/ServiceListProps.ts";

export default function ServiceList({
                                        title,
                                        desc,
                                        items,}: ServiceListProps) {

    return (
        <section className="mx-auto w-full max-w-6xl px-6 py-12">
            <div className="mx-auto flex flex-col items-center">
                <h2 className="mb-12 text-center text-lg font-medium text-black md:text-3xl">
                    {title}
                </h2>

                <p className="mb-10 max-w-3xl text-sm">
                    {desc}
                </p>
            </div>

            <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-2">
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