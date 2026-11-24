import type {TimelineStep} from "../../types/InterventionTimeLineProps.ts";
import type {PointItem} from "../../types/AvantagesOffreProps.ts";

export const steps: TimelineStep[] = [
    {
        title: "Protection des lieux",
        description:
            "Analyse des besoins lors de la visite commerciale et mise en place des diverses protections nécessaires liées aux immeubles, ascenseur, garde-corps pour monte-meubles",
    },
    {
        title: "Protection des lieux",
        description:
            "Analyse des besoins lors de la visite commerciale et mise en place des diverses protections nécessaires liées aux immeubles, ascenseur, garde-corps pour monte-meubles",
    },
    {
        title: "Le plus",
        description: "Notre offre « plus » vous propose des prestations comme :",
        items: [
            "Accrochage / décrochage des luminaires, tableaux etc...",
            "Prestation ménage",
        ],
    },
    {
        title: "Déballage du fragile et non fragile et remontage du mobilier",
        description:
            "Nos équipes dédiées seront en charge de tout déballage et remontage du mobilier le nécessitant.",
    },
    {
        title: "Protection des lieux",
        description:
            "Analyse des besoins lors de la visite commerciale et mise en place des diverses protections nécessaires liées aux immeubles, ascenseur, garde-corps pour monte-meubles",
    },
    {
        title: "Récupération de nos déchets liés à notre activité",
        description:
            "L'ensemble de nos déchets sera évacué par nos soins et remis pour un autre usage ou recyclé. (Économie solidaire, recyclage)",
    },
];

// Tableau 1 : carte de gauche
export const avantagesGauche: PointItem[] = [
    { label: "Branchements box, canal +, câbles, réglages TV,", ok: false },
    { label: "Branchements box, canal +, câbles, réglages TV,", ok: false },
    { label: "Branchements box, canal +, câbles, réglages TV,", ok: true },
    { label: "Branchements box, canal +, câbles, réglages TV,", ok: true },
    { label: "Branchements box, canal +, câbles, réglages TV,", ok: false },
    { label: "Branchements box, canal +, câbles, réglages TV,", ok: false },
    { label: "Branchements box, canal +, câbles, réglages TV,", ok: false },
    { label: "Branchements box, canal +, câbles, réglages TV,", ok: true },
    { label: "Branchements box, canal +, câbles, réglages TV,", ok: false },
    { label: "Branchements box, canal +, câbles, réglages TV,", ok: true },
];

// Tableau 2 : carte de droite
export const avantagesDroite: PointItem[] = [
    { label: "Branchements box, canal +, câbles, réglages TV,", ok: true },
    { label: "Branchements box, canal +, câbles, réglages TV,", ok: true },
    { label: "Branchements box, canal +, câbles, réglages TV,", ok: false },
    { label: "Branchements box, canal +, câbles, réglages TV,", ok: false },
    { label: "Branchements box, canal +, câbles, réglages TV,", ok: true },
    { label: "Branchements box, canal +, câbles, réglages TV,", ok: true },
    { label: "Branchements box, canal +, câbles, réglages TV,", ok: true },
    { label: "Branchements box, canal +, câbles, réglages TV,", ok: false },
    { label: "Branchements box, canal +, câbles, réglages TV,", ok: false },
    { label: "Branchements box, canal +, câbles, réglages TV,", ok: false },
];
