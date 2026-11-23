import SectionConfortPlusParticulier from "../../../components/section/SectionConfortPlusParticulier.tsx";
import SectionConfortPlusParticulierInv from "../../../components/section/SectionConfortPlusParticulierInv.tsx";
import HeroConfortParticulier from "../../../components/hero/HeroConfortParticulier.tsx";
import Cta from "../../../components/Cta.tsx";
import AvantagesOffre from "../../../components/AvantagesOffre.tsx";
import {avantagesDroite, avantagesGauche, steps} from "../../../data/pages/DataConfortParticulier.tsx";
import InterventionTimelineConfortParticulier
    from "../../../components/time/InterventionTimelineConfortParticulier.tsx";

export default function PageConfortParticulier (){

    return (
        <>
            <HeroConfortParticulier />

            <SectionConfortPlusParticulier
                title="L’offre confort"
                text="Depuis 1860, les Déménagements Delacquis vous accompagnent dans tous vos déménagements. Que vous soyez professionnel ou particulier, notre équipe se déplace pour vous en France et à l’international, ainsi que sur les collectivités d’Outre-mer.
                    Nous nous chargeons de l’emballage, de la manutention et du stockage de tous vos objets et meubles, même les plus fragiles. Comme vous l’auriez compris, avec les Déménagements Delacquis, votre déménagement se déroule sans stress, et en toute sérénité."
                image="/img-tempo.jpg"
                imageAlt="img"
            />

            <SectionConfortPlusParticulierInv
                title="L’offre confort"
                text="Depuis 1860, les Déménagements Delacquis vous accompagnent dans tous vos déménagements. Que vous soyez professionnel ou particulier, notre équipe se déplace pour vous en France et à l’international, ainsi que sur les collectivités d’Outre-mer.
                    Nous nous chargeons de l’emballage, de la manutention et du stockage de tous vos objets et meubles, même les plus fragiles. Comme vous l’auriez compris, avec les Déménagements Delacquis, votre déménagement se déroule sans stress, et en toute sérénité."
                image="/img-tempo.jpg"
                imageAlt="img"
            />

            <InterventionTimelineConfortParticulier steps={steps} />

            <AvantagesOffre
                title="Les avantages de l’offre confort"
                leftItems={avantagesGauche}
                rightItems={avantagesDroite}
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