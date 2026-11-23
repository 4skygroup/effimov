import { Check, X } from "lucide-react";
import type {AvantagesOffreProps, CardProps, PointProps} from "../types/AvantagesOffreProps.ts";

function StatusIcon({ ok }: { ok: boolean }) {
    return (
        <span
            className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${
                ok ? "bg-green-500" : "bg-red-600"
            }`}
            aria-label={ok ? "Inclus" : "Non inclus"}
        >
      {ok ? (
          <Check className="h-4 w-4 text-white" strokeWidth={3} />
      ) : (
          <X className="h-4 w-4 text-white" strokeWidth={3} />
      )}
    </span>
    );
}

// Un point de la liste : ok = true (coche verte) ou false (croix rouge)
export function Point({ label, ok = true }: PointProps) {
    return (
        <li className="flex items-center gap-4">
            <StatusIcon ok={ok} />
            <span className="text-sm text-black">{label}</span>
        </li>
    );
}

function Card({ items = [] }: CardProps) {
    return (
        <div className="w-full border border-brand-cyan bg-brand-beige px-10 py-12 md:px-16">
            <ul className="flex flex-col gap-5">
                {items.map((item, index) => (
                    <Point key={index} label={item.label} ok={item.ok} />
                ))}
            </ul>
        </div>
    );
}

export default function AvantagesOffre({
                                           title = "Les avantages de l’offre confort",
                                           leftItems = [],
                                           rightItems = [],
}: AvantagesOffreProps) {
    return (
        <section className="mx-auto w-full max-w-6xl px-4 py-12">
            <h2 className="mb-12 text-center text-xl text-black">{title}</h2>
            <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
                <Card items={leftItems} />
                <Card items={rightItems} />
            </div>
        </section>
    );
}