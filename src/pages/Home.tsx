import Hero from "../components/Hero.tsx";
import Chiffres from "../components/Chiffres.tsx";
import Experience from "../components/Experience.tsx";
import ServiceList from "../components/ServiceList.tsx";
import WhyList from "../components/WhyList.tsx";

export default function Home() {

    const services = [
        { title: "Déménagement particulier", to: "/services", image: "/img-tempo.jpg" },
        { title: "Transfert d'entreprise", to: "/services", image: "/img-tempo.jpg",},
        { title: "Déménagement particulier", to: "/services", image: "/img-tempo.jpg" },
        { title: "Garde meubles", to: "/services", image: "/img-tempo.jpg" },
    ];

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
                reasons={[
                    { title: "Raison 1", description: "Nos valeurs façonnent notre identité et notre relation clients : elles s'alignent sur nos services qui consistent à donner à chaque individu et chaque organisation les moyens de réussir." },
                    { title: "Raison 2", description: "Nos valeurs façonnent notre identité et notre relation clients : elles s'alignent sur nos services qui consistent à donner à chaque individu et chaque organisation les moyens de réussir." },
                    { title: "Raison 3", description: "Nos valeurs façonnent notre identité et notre relation clients : elles s'alignent sur nos services qui consistent à donner à chaque individu et chaque organisation les moyens de réussir." },
                    { title: "Raison 4", description: "Nos valeurs façonnent notre identité et notre relation clients : elles s'alignent sur nos services qui consistent à donner à chaque individu et chaque organisation les moyens de réussir." },
                    { title: "Raison 5", description: "Nos valeurs façonnent notre identité et notre relation clients : elles s'alignent sur nos services qui consistent à donner à chaque individu et chaque organisation les moyens de réussir." },
                    { title: "Raison 6", description: "Nos valeurs façonnent notre identité et notre relation clients : elles s'alignent sur nos services qui consistent à donner à chaque individu et chaque organisation les moyens de réussir." },
                ]}
            />

        </>
    );
}