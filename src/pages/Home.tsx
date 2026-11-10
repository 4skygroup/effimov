import Hero from "../components/hero/Hero.tsx";
import Chiffres from "../components/Chiffres.tsx";
import Experience from "../components/Experience.tsx";
import ServiceList from "../components/ServiceList.tsx";
import WhyList from "../components/WhyList.tsx";
import {services} from "../data/Services.tsx";
import {raisons} from "../data/Why.tsx";
import Confiance from "../components/Confiance.tsx";
import Cta from "../components/Cta.tsx";

export default function Home() {

    return (
        <>
            <Hero
                title="DÉMÉNAGEMENTS EFFIMOV"
                subtitle="PROFESSIONNALISME, PROXIMITÉ, ÉCO-RESPONSABILITÉ"
                image="/img-tempo.jpg"
                primaryLabel="Qui sommes-nous"
                primaryTo="/qui-sommes-nous"
                secondaryLabel="Demander un devis gratuitement"
                secondaryTo="/devis"
            />

            <Chiffres />
            <Experience />
            <ServiceList title="Nos services" items={services} />
            <WhyList
                title="Pourquoi nous ?"
                description="Nos valeurs façonnent notre identité et notre relation clients : elles s'alignent sur nos services qui consistent à donner à chaque individu et chaque organisation les moyens de réussir."
                reasons={raisons}
            />

            <Confiance />

            <Cta
                title="Titre du CTA"
                description="Nos valeurs façonnent notre identité et notre relation clients : elles s’alignent sur nos services qui consistent à donner à chaque individu et chaque organisation les Nos valeurs façonnent notre identité et notre relation clients : elles s’alignent sur nos services qui consistent à donner à chaque individu et chaque"
                primaryButton={{ label: "En savoir plus sur les offres", href: "/services" }}
                secondaryButton={{label: "Contact", href: "/contact"}}
            />
        </>
    );
}