import Banner from "../../components/Banner/Banner";
import Cards from "../../components/Cards/Cards";
import BannerImage from "../../assets/banner_home.png"; 

export default function Home() {
    return (
        <>
            <Banner image={BannerImage} text="Chez vous partout et ailleur" /> {/* Correction ici */}
            <Cards />
        </>
    );
}
