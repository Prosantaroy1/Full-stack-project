import CoverBanner from "../../../comments/CoverBanner";
import Banner from "../Banner/Banner";
import CategorySecHome from "../CategorySecHome/CategorySecHome";
import PopularItems from "../PopularItems/PopularItems";
import RecomandFood from "../RecomandFood/RecomandFood";

const Home = () => {
    return (
        <>
            <Banner/>
            <CategorySecHome/>
            <CoverBanner title='TP SHOP' dec='This is TP shop Home section product list.'/>
            <PopularItems/>
            <RecomandFood/>
        </>
    );
};

export default Home;