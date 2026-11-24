import HeroEcoParticulier from "../../../components/hero/HeroEcoParticulier.tsx";
import SectionEcoParticulier from "../../../components/section/SectionEcoParticulier.tsx";
import SectionEcoParticulierInv from "../../../components/section/SectionEcoParticulierInv.tsx";
import InterventionTimelineConfortPlusParticulier
    from "../../../components/time/InterventionTimelineConfortPlusParticulier.tsx";
import {avantagesDroite, steps} from "../../../data/pages/DataEcoParticulier.tsx";
import AvantagesOffre from "../../../components/AvantagesOffre.tsx";
import { avantagesGauche} from "../../../data/pages/DataEcoParticulier.tsx";
import Cta from "../../../components/Cta.tsx";

export default function PageEcoParticulier(){
    return (
        <>
            <HeroEcoParticulier />

            <SectionEcoParticulier
                title="L’offre Éco"
                text="Depuis 1860, les Déménagements Delacquis vous accompagnent dans tous vos déménagements. Que vous soyez professionnel ou particulier, notre équipe se déplace pour vous en France et à l’international, ainsi que sur les collectivités d’Outre-mer.
                    Nous nous chargeons de l’emballage, de la manutention et du stockage de tous vos objets et meubles, même les plus fragiles. Comme vous l’auriez compris, avec les Déménagements Delacquis, votre déménagement se déroule sans stress, et en toute sérénité."
                image="/img-tempo.jpg"
                imageAlt="img"
            />

            <SectionEcoParticulierInv
                title="L’offre éco"
                text="Depuis 1860, les Déménagements Delacquis vous accompagnent dans tous vos déménagements. Que vous soyez professionnel ou particulier, notre équipe se déplace pour vous en France et à l’international, ainsi que sur les collectivités d’Outre-mer.
                    Nous nous chargeons de l’emballage, de la manutention et du stockage de tous vos objets et meubles, même les plus fragiles. Comme vous l’auriez compris, avec les Déménagements Delacquis, votre déménagement se déroule sans stress, et en toute sérénité."
                image="/img-tempo.jpg"
                imageAlt="img"
            />

            <InterventionTimelineConfortPlusParticulier steps={steps} />

            <AvantagesOffre
                title="Les avantages de l’offre éco"
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
    );
}