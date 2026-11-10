import {defaultHighlights} from "../data/Highlights.tsx";
import type {MovingIntroProps} from "../types/Highlight";

export default function MovingIntro({highlights = defaultHighlights}: MovingIntroProps) {
    return (
        <section className="w-full bg-white px-6 py-16">
            <div className="mx-auto flex max-w-5xl flex-col items-center gap-12">
                <h2 className="text-center text-lg font-medium text-black md:text-3xl">
                    Profitez de l'expérience et du savoir-faire
                    <br/>
                    de nos déménageurs qualifiés, à votre écoute.
                </h2>

                <p className="max-w-4xl text-center text-sm leading-tight text-black">
                    Nos valeurs façonnent notre identité et notre relation clients : elles s’alignent sur nos services qui consistent à donner à chaque individu et chaque organisation les Nos valeurs façonnent notre identité et notre relation clients : elles s’alignent sur nos services qui consistent à donner à chaque individu et chaque organisation les Nos valeurs façonnent notre identité et notre relation clients : elles s’alignent sur nos services qui consistent à donner à chaque individu et chaque organisation les Nos valeurs façonnent notre identité et notre relation clients : elles s’alignent sur nos services qui consistent à donner à chaque individu et chaque organisation les
                </p>

                <div className="grid w-full max-w-3xl grid-cols-1 gap-8 border border-gray-300 bg-white px-12 py-6 shadow-sm sm:grid-cols-2">
                    {highlights.map((item) => (
                        <div key={item.label} className="flex items-center gap-4">
                            <div className="shrink-0">{item.icon}</div>
                            <div className="flex flex-col text-sm text-black">
                                <span>{item.label}</span>
                                <span>{item.text}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}