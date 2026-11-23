import HeroConfortPlusParticulier from "../../../components/hero/HeroConfortPlusParticulier.tsx";
import SectionConfortPlusParticulier from "../../../components/section/SectionConfortPlusParticulier.tsx";
import SectionConfortPlusParticulierInv from "../../../components/section/SectionConfortPlusParticulierInv.tsx";
import InterventionTimelineConfortPlusParticulier
    , {type TimelineStep} from "../../../components/time/InterventionTimelineConfortPlusParticulier.tsx";
import ConfortPlusParticulier from "../../../components/avantages/ConfortPlusParticulier.tsx";

export default function ConfortPlus (){
    const steps: TimelineStep[] = [
        {
            title: "Protection des lieux",
            description:
                "Analyse des besoins lors de la visite commerciale et mise en place des diverses protections nécessaires liées aux immeubles, ascenseur, garde-corps pour monte-meubles",
        },
        {
            title: "Préparation emballage fragile et non fragile",
            description:
                "Nos équipes dédiées interviendront en amont avec le matériel nécessaire (cartons, caisses vaisselles plastiques, Barrels, penderies, caisses spéciales bois, Bull, papier de soie, etc...)",
        },
        {
            title: "Le plus",
            description: "Notre offre « plus » vous propose des prestations comme :",
            items: [
                "Accrochage / décrochage des luminaires, tableaux etc...",
                "Prestation ménage",
                "Rebouchage, enduits, peinture",
                "Branchements box, canal +, câbles, réglages TV,",
                "Branchement électro-ménager",
                "Recherche de prestation hôtelière durant votre déménagement.",
            ],
        },
        {
            title: "Déballage du fragile et non fragile et remontage du mobilier",
            description:
                "Nos équipes dédiées seront en charge de tout déballage et remontage du mobilier le nécessitant.",
        },
        {
            title: "Récupération de nos déchets liés à notre activité",
            description:
                "L'ensemble de nos déchets sera évacué par nos soins et remis pour un autre usage ou recyclé. (Économie solidaire, recyclage)",
        },
    ];

    return (
        <>
            <HeroConfortPlusParticulier />

            <SectionConfortPlusParticulier
                title="L’offre confort plus"
                text="Depuis 1860, les Déménagements Delacquis vous accompagnent dans tous vos déménagements. Que vous soyez professionnel ou particulier, notre équipe se déplace pour vous en France et à l’international, ainsi que sur les collectivités d’Outre-mer.
                    Nous nous chargeons de l’emballage, de la manutention et du stockage de tous vos objets et meubles, même les plus fragiles. Comme vous l’auriez compris, avec les Déménagements Delacquis, votre déménagement se déroule sans stress, et en toute sérénité."
                image="/img-tempo.jpg"
                imageAlt="img"
            />

            <SectionConfortPlusParticulierInv
                title="L’offre confort plus"
                text="Depuis 1860, les Déménagements Delacquis vous accompagnent dans tous vos déménagements. Que vous soyez professionnel ou particulier, notre équipe se déplace pour vous en France et à l’international, ainsi que sur les collectivités d’Outre-mer.
                    Nous nous chargeons de l’emballage, de la manutention et du stockage de tous vos objets et meubles, même les plus fragiles. Comme vous l’auriez compris, avec les Déménagements Delacquis, votre déménagement se déroule sans stress, et en toute sérénité."
                image="/img-tempo.jpg"
                imageAlt="img"
            />

            <InterventionTimelineConfortPlusParticulier steps={steps} />

            <ConfortPlusParticulier />
        </>
    )
}