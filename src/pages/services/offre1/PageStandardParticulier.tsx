import HeroStandardParticulier from "../../../components/hero/HeroStandardParticulier.tsx";
import SectionStandardParticulier from "../../../components/section/SectionStandardParticulier.tsx";
import SectionStandardParticulierInv from "../../../components/section/SectionStandardParticulierInv.tsx";
import InterventionTimelineConfortPlusParticulier
    from "../../../components/time/InterventionTimelineConfortPlusParticulier.tsx";
import {steps} from "../../../data/pages/DataConfortStandard.tsx";
import {avantagesDroite, avantagesGauche} from "../../../data/pages/DataConfortStandard.tsx";
import AvantagesOffre from "../../../components/AvantagesOffre.tsx";
import Cta from "../../../components/Cta.tsx";

export default function PageStandardParticulier (){

    return (
        <>
            <HeroStandardParticulier />
            <SectionStandardParticulier
                title="L'offre standard"
                text="Depuis 1860, les Déménagements vous accompagnent dans tous vos déménagements. Que vous soyez professionnel ou particulier, notre équipe se déplace pour vous en France et à l’international, ainsi que sur les collectivités d’Outre-mer.
                    Nous nous chargeons de l’emballage, de la manutention et du stockage de tous vos objets et meubles, même les plus fragiles. Comme vous l’auriez compris, avec les Déménagements, votre déménagement se déroule sans stress, et en toute sérénité."
            />

            <SectionStandardParticulierInv
                title="L'offre standard"
                text="Depuis 1860, les Déménagements vous accompagnent dans tous vos déménagements. Que vous soyez professionnel ou particulier, notre équipe se déplace pour vous en France et à l’international, ainsi que sur les collectivités d’Outre-mer.
                    Nous nous chargeons de l’emballage, de la manutention et du stockage de tous vos objets et meubles, même les plus fragiles. Comme vous l’auriez compris, avec les Déménagements, votre déménagement se déroule sans stress, et en toute sérénité."
            />

            <InterventionTimelineConfortPlusParticulier steps={steps} />

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