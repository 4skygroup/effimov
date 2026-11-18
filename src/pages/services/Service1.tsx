import HeroService1 from "../../components/hero/HeroService1.tsx";
import AnalyseDemenagement from "../../components/AnalyseDemenagement.tsx";
import Offers from "../../components/Offers.tsx";


export default function Service1 (){


    return (
        <>
            <HeroService1 />
            <AnalyseDemenagement
                titre="Notre analyse pour un déménagement particulier"
                texte="Nos valeurs façonnent notre identité et notre relation clients : elles s'alignent sur nos services qui consistent à donner à chaque individu et chaque organisation les moyens de réaliser/préparer/organiser un bon déménagement/ réussi."
                etapes={[
                    {
                        numero: 1,
                        titre: "Devis",
                        description:
                            "Vous souhaitez déménager vos collaborateurs au sein même de votre lieu de travail, sur une zone libre ou déjà occupée.",
                        image: "/images/devis.jpg", // image fournie -> affichée
                    },
                    {
                        numero: 2,
                        titre: "Contrat d'assurance",
                        description:
                            "En journée, en soirée ou encore en week-end, nous mettrons tout en oeuvre pour mener à bien votre déménagement dans les meilleures conditions.",
                        // pas d'image -> bord doré affiché
                    },
                ]}
            />

            <Offers />
        </>
    )
}