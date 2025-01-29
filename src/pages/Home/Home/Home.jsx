import CoverBanner from "../../../comments/CoverBanner";
import Banner from "../Banner/Banner";
import CategorySecHome from "../CategorySecHome/CategorySecHome";
import PopularItems from "../PopularItems/PopularItems";
import RecomandFood from "../RecomandFood/RecomandFood";

const Home = () => {
    return (
        <>
            <Banner />
            <CategorySecHome />
            <div className="my-14">
                <CoverBanner title='TP SHOP' dec='This is TP shop Home section product list.' />
            </div>
            <PopularItems />
            <RecomandFood />
        </>
    );
};

export default Home;