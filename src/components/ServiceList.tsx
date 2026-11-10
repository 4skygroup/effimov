import ServiceCard from "./ServiceCard";
import type {ServiceListProps} from "../types/ServiceListProps.ts";

export default function ServiceList({
                                        title,
                                        desc,
                                        items,
                                    }: ServiceListProps) {

    return (
        <section className="mx-auto w-full max-w-6xl px-6 py-12">
            <div className="mx-auto flex flex-col items-center">
                <h2 className="mb-12 text-center text-lg font-medium text-black md:text-3xl">
                    {title}
                </h2>

                <p className="max-w-3xl text-sm mb-10">
                    {desc}
                </p>
            </div>

            <div className="flex flex-wrap justify-center gap-6">
                {items.map((item, index) => (
                    <div
                        key={`${item.title}-${index}`}
                        className="w-full sm:w-64 lg:w-64"
                    >
                        <ServiceCard
                            title={item.title}
                            to={item.to}
                            image={item.image}
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}