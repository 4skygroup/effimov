import HeroAbout from "../components/hero/HeroAbout.tsx";
import OurStory from "../components/section/OurStory.tsx";
import ValeurList from "../components/ValeurList.tsx";
import {valeurs} from "../data/Valeurs.tsx";
import ServiceList from "../components/ServiceList.tsx";
import {gouvernance} from "../data/Gouvernance.tsx";
import Equipe from "../components/section/Equipe.tsx";
import Cta from "../components/Cta.tsx";

export default function About (){
    return (
        <>
            <HeroAbout />
            <OurStory
                title="Notre histoire"
                text="Depuis 1860, les Déménagements Delacquis vous accompagnent dans tous vos déménagements.Depuis 1860, les Déménagements Delacquis vous accompagnent dans tous vos déménagements.Depuis 1860, les Déménagements Delacquis vous accompagnent dans tous vos déménagements.Depuis 1860, les Déménagements Delacquis vous accompagnent dans tous vos déménagements.Depuis 1860, les Déménagements Delacquis vous accompagnent dans tous vos déménagements."
                image="/img-tempo.jpg"
                imageAlt="qui nous sommes"
            />

            <ValeurList
                title="Nos valeurs"
                description="Nos valeurs façonnent notre identité et notre relation clients : elles s'alignent sur nos services qui consistent à donner à chaque individu et chaque organisation les moyens de réaliser leur projet / organiser un bon déménagement réussi."
                values={valeurs}
            />

            <ServiceList
                title="Gouvernance"
                desc="Nos valeurs façonnent notre identité et notre relation clients : elles s’alignent sur nos services qui consistent à donner à chaque individu et chaque organisation les Nos valeurs façonnent notre identité et notre relation clients : elles s’alignent sur nos services qui consistent à donner à chaque individu et chaque"
                items={gouvernance}
            />

            <Equipe
                title="Une équipe"
                text="Nos valeurs façonnent notre identité et notre relation clients : elles s’alignent sur nos services qui consistent à donner à chaque individu et chaque organisation les Nos valeurs façonnent notre identité et notre relation clients : elles s’alignent sur nos services qui consistent à donner à chaque individu et chaqueNos valeurs façonnent notre identité et notre relation clients : elles s’alignent sur nos services qui consistent à donner à chaque individu et chaque organisation les Nos valeurs façonnent notre identité et notre relation clients : elles s’alignent sur nos services qui consistent à donner à chaque individu et chaqueNos valeurs façonnent notre identité et notre relation clients : elles s’alignent sur nos services qui consistent à donner à chaque individu et chaque organisation les Nos valeurs façonnent notre identité et notre relation clients : elles s’alignent sur nos services qui consistent à donner à chaque individu et chaque"
                image="/img-tempo.jpg"
            />

            <Cta
                title="Titre du CTA"
                description="Depuis 1860, les Déménagements Delacquis vous accompagnent dans tous vos déménagements. Que vous soyez professionnel ou particulier, notre équipe se déplace pour vous en France et à l’international, ainsi que sur les collectivités d’Outre-mer."
                primaryButton={{label: "En savoir plus sur les offres" , href: "/services"}}
                secondaryButton={{label: "Contatez-nous" , href: "/contact"}}
            />

        </>
    )
}