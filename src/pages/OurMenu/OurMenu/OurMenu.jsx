import CoverBanner from "../../../comments/CoverBanner";
import ProductItem from "../../../comments/ProductItem";
import SectionTitle from "../../../comments/SectionTitle";
import useMenu from "../../../Hooks/useMenu";

const OurMenu = () => {

    // popularItems
    const [menu] = useMenu();
    //filter data
    const popularItems = menu.filter(item => item.category == 'popular')
    const dessertItems = menu.filter(item => item.category == 'dessert')
    const pizzaItems = menu.filter(item => item.category == 'pizza')
    const saladItems = menu.filter(item => item.category == 'salad')
    const offeredItems = menu.filter(item => item.category == 'offered')
    const soupItems = menu.filter(item => item.category == 'soup')


    return (
        <>
            {/* banner */}
            <div>
                <CoverBanner title='Our Menu' dec='Lorem ipsum dolor sit amet consectetur.' />
            </div>
            {/*offer item  */}
            <div className="my-10 px-3">
                <SectionTitle headingtitle='Offers items'/>
                <div className="grid grid-cols-1 my-5 md:grid-cols-2 gap-6 items-center">
                    {
                        offeredItems.map((item, idx) => <ProductItem key={idx} item={item} />)
                    }
                </div>
            </div>
            {/*Dessert Items item  */}
            <div className="my-10 px-3">
                <CoverBanner title='Dessert Items' dec='This is TP shop Home section product list.'/>
                <div className="grid grid-cols-1 my-5 md:grid-cols-2 gap-6 items-center">
                    {
                        dessertItems.map((item, idx) => <ProductItem key={idx} item={item} />)
                    }
                </div>
            </div>
            {/*Dessert Items item  */}
            <div className="my-10 px-3">
                <CoverBanner title='popular Items' dec='This is TP shop Home section product list.'/>
                <div className="grid grid-cols-1 my-5 md:grid-cols-2 gap-6 items-center">
                    {
                        popularItems.map((item, idx) => <ProductItem key={idx} item={item} />)
                    }
                </div>
            </div>
            {/*Dessert Items item  */}
            <div className="my-10 px-3">
                <CoverBanner title='pizza Items' dec='This is TP shop Home section product list.'/>
                <div className="grid grid-cols-1 my-5 md:grid-cols-2 gap-6 items-center">
                    {
                       pizzaItems.map((item, idx) => <ProductItem key={idx} item={item} />)
                    }
                </div>
            </div>
            {/*Dessert Items item  */}
            <div className="my-10 px-3">
                <CoverBanner title='salads Items' dec='This is TP shop Home section product list.'/>
                <div className="grid grid-cols-1 my-5 md:grid-cols-2 gap-6 items-center">
                    {
                        saladItems.map((item, idx) => <ProductItem key={idx} item={item} />)
                    }
                </div>
            </div>
            {/*Dessert Items item  */}
            <div className="my-10 px-3">
                <CoverBanner title='Soup Items' dec='This is TP shop Home section product list.'/>
                <div className="grid grid-cols-1 my-5 md:grid-cols-2 gap-6 items-center">
                    {
                        soupItems.map((item, idx) => <ProductItem key={idx} item={item} />)
                    }
                </div>
            </div>
        </>
    );
};

export default OurMenu;