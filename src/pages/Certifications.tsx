import HeroCertif from "../components/hero/HeroCertif.tsx";
import NosCertifications, {type Certification} from "../components/NosCertifications.tsx";
import Cta from "../components/Cta.tsx";


export default function Certifications (){
    const descCommune =
        "Nos valeurs façonnent notre identité et notre relation clients : elles s'alignent sur nos services qui consistent à donner à chaque individu et chaque organisation les";

    const certifications: Certification[] = [
        { id: 1, nom: "Certif1", type: "Type de certification", desc: descCommune },
        { id: 2, nom: "Certif2", type: "Type de certification", desc: descCommune },
        { id: 3, nom: "Certif3", type: "Type de certification", desc: descCommune },
        { id: 4, nom: "Certif4", type: "Type de certification", desc: descCommune },
        { id: 5, nom: "Certif5", type: "Type de certification", desc: descCommune },
        { id: 6, nom: "Certif6", type: "Type de certification", desc: descCommune },
        { id: 7, nom: "Certif7", type: "Type de certification", desc: descCommune },
        { id: 8, nom: "Certif8", type: "Type de certification", desc: descCommune },
    ];

    return (
        <>
           <HeroCertif />
            <NosCertifications
                titre="Nos certifications"
                description={descCommune}
                certifications={certifications}
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