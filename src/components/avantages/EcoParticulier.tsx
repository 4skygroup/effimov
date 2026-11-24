import { Check } from "lucide-react";

const avantages = [
    "Branchements box, canal +, câbles, réglages TV,",
    "Branchements box, canal +, câbles, réglages TV,",
    "Branchements box, canal +, câbles, réglages TV,",
    "Branchements box, canal +, câbles, réglages TV,",
    "Branchements box, canal +, câbles, réglages TV,",
    "Branchements box, canal +, câbles, réglages TV,",
    "Branchements box, canal +, câbles, réglages TV,",
    "Branchements box, canal +, câbles, réglages TV,",
    "Branchements box, canal +, câbles, réglages TV,",
    "Branchements box, canal +, câbles, réglages TV,",
];

const colonnes = [avantages, avantages];

export default function EcoParticulier() {
    return (
        <section className="w-full px-4 py-12">
            <h2 className="mb-12 text-center text-xl font-medium text-black">
                Les avantages de l’offre confort plus
            </h2>

            <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-2">
                {colonnes.map((liste, index) => (
                    <div
                        key={index}
                        className="border border-brand-cyan bg-brand-beige px-8 py-10 md:px-12"
                    >
                        <ul className="flex flex-col gap-5">
                            {liste.map((texte, i) => (
                                <li key={i} className="flex items-center gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-500">
                    <Check className="h-3.5 w-3.5 text-white" strokeWidth={3} />
                  </span>
                                    <span className="text-xs text-black">{texte}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
}