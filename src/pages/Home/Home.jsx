import Banner from "../../components/Banner/Banner";
import Cards from "../../components/Cards/Cards";
import BannerImage from "../../assets/banner_home.png"; 

export default function Home() {
    return (
        <>
            <Banner image={BannerImage} /> {/* Correction ici */}
            <Cards />
        </>
    );
}
