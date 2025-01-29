import ProductItem from "../../../comments/ProductItem";
import SectionTitle from "../../../comments/SectionTitle";
import useMenu from "../../../Hooks/useMenu";

const PopularItems = () => {

    // popularItems
    const [menu]=useMenu();

    const popularItems=menu.filter(item=> item.category == 'popular') //filter popular data

    return (
        <div>
            <SectionTitle headingtitle='Popular Item Product'/>
            {/* card */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center my-12">
                {
                    popularItems.map((item,idx)=> <ProductItem
                     key={idx}
                     item={item}
                    ></ProductItem>)
                }
            </div>
        </div>
    );
};

export default PopularItems;