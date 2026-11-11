import HeroSavoirFaire from "../components/hero/HeroSavoirFaire.tsx";
import Ecoute from "../components/section/Ecoute.tsx";
import VetapeList from "../components/VetapeList.tsx";
import NosCompetences, {type Competence} from "../components/NosCompetences.tsx";
import Cta from "../components/Cta.tsx";

export default function SavoirFaire (){
     const etapes  = [
        {
            title: "Étape 1 : Nos valeurs façonnent",
            description:
                "Nos valeurs façonnent notre identité et notre relation clients : elles s’alignent sur nos services qui consistent à donner à chaque individu et chaque organisation les Nos valeurs façonnent notre identité et notre relation clients : elles s’alignent sur nos services qui consistent à donner à chaque individu et chaque organisation les Nos valeurs façonnent notre identité et notre relation clients : elles s’alignent sur nos services qui consistent à donner à chaque individu et chaque organisation les Nos valeurs façonnent notre identité et notre relation clients : elles s’alignent sur nos services qui consistent à donner à chaque individu et chaque organisation les "
        },
        {
            title: "Étape 2 : Nos valeurs façonnent",
            description:
            "Nos valeurs façonnent notre identité et notre relation clients : elles s’alignent sur nos services qui consistent à donner à chaque individu et chaque organisation les Nos valeurs façonnent notre identité et notre relation clients : elles s’alignent sur nos services qui consistent à donner à chaque individu et chaque organisation les Nos valeurs façonnent notre identité et notre relation clients : elles s’alignent sur nos services qui consistent à donner à chaque individu et chaque organisation les Nos valeurs façonnent notre identité et notre relation clients : elles s’alignent sur nos services qui consistent à donner à chaque individu et chaque organisation les "
        },    {
            title: "Étape  3 : Nos valeurs façonnent",
            description:
            "Nos valeurs façonnent notre identité et notre relation clients : elles s’alignent sur nos services qui consistent à donner à chaque individu et chaque organisation les Nos valeurs façonnent notre identité et notre relation clients : elles s’alignent sur nos services qui consistent à donner à chaque individu et chaque organisation les Nos valeurs façonnent notre identité et notre relation clients : elles s’alignent sur nos services qui consistent à donner à chaque individu et chaque organisation les Nos valeurs façonnent notre identité et notre relation clients : elles s’alignent sur nos services qui consistent à donner à chaque individu et chaque organisation les "
        },    {
            title: "Étape  3 : Nos valeurs façonnent",
            description:
            "Nos valeurs façonnent notre identité et notre relation clients : elles s’alignent sur nos services qui consistent à donner à chaque individu et chaque organisation les Nos valeurs façonnent notre identité et notre relation clients : elles s’alignent sur nos services qui consistent à donner à chaque individu et chaque organisation les Nos valeurs façonnent notre identité et notre relation clients : elles s’alignent sur nos services qui consistent à donner à chaque individu et chaque organisation les Nos valeurs façonnent notre identité et notre relation clients : elles s’alignent sur nos services qui consistent à donner à chaque individu et chaque organisation les "
        },  {
            title: "Étape  4 : Nos valeurs façonnent",
            description:
                "Nos valeurs façonnent notre identité et notre relation clients : elles s’alignent sur nos services qui consistent à donner à chaque individu et chaque organisation les Nos valeurs façonnent notre identité et notre relation clients : elles s’alignent sur nos services qui consistent à donner à chaque individu et chaque organisation les Nos valeurs façonnent notre identité et notre relation clients : elles s’alignent sur nos services qui consistent à donner à chaque individu et chaque organisation les Nos valeurs façonnent notre identité et notre relation clients : elles s’alignent sur nos services qui consistent à donner à chaque individu et chaque organisation les "
        },
    ];

    const descCommune =
        "Nos valeurs façonnent notre identité et notre relation client : elles dictent sur nos services qui consistent à donner à chaque individu et chaque organisation les";

    const competences: Competence[] = [
        { id: 1, titre: "Compétence 1", desc: descCommune },
        { id: 2, titre: "Compétence 2", desc: descCommune },
        { id: 3, titre: "Compétence 3", desc: descCommune },
        { id: 4, titre: "Compétence 4", desc: descCommune },
        { id: 5, titre: "Compétence 5", desc: descCommune },
        { id: 6, titre: "Compétence 6", desc: descCommune },
        { id: 7, titre: "Compétence 7", desc: descCommune },
        { id: 8, titre: "Compétence 8", desc: descCommune },
        { id: 9, titre: "Compétence 9", desc: descCommune },
        { id: 10, titre: "Compétence 10", desc: descCommune },
        { id: 11, titre: "Compétence 11", desc: descCommune },
        { id: 12, titre: "Compétence 12", desc: descCommune },
    ];

    return (
        <>
            <HeroSavoirFaire />

            <Ecoute
                title="Nos déménageursqualifiés à votre écoute"
                text="Depuis 1860, les Déménagements Delacquis vous accompagnent dans tous vos déménagements.Depuis 1860, les Déménagements Delacquis vous accompagnent dans tous vos déménagements.  Depuis 1860, les Déménagements Delacquis vous accompagnent dans tous vos déménagements. Depuis 1860, les Déménagements Delacquis vous accompagnent dans tous vos déménagements. Depuis 1860, les Déménagements Delacquis vous accompagnent dans tous vos déménagements. "
                image="/img-tempo.jpg"
                imageAlt="img"
            />

            <VetapeList
                title="Vous déménagez avec, comment ça marche ?"
                description="Nos valeurs façonnent notre identité et notre relation clients : elles s’alignent sur nos services qui consistent à donner à chaque individu et chaque organisation les moyens de réaliser/préparer/organiser un bon déménagement/ réussi."
                values={etapes}
            />

            <NosCompetences
                titre="Nos domaines de compétences"
                description={descCommune}
                competences={competences}
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