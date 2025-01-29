import FoodCard from "../../../comments/FoodCard";
import SectionTitle from "../../../comments/SectionTitle";
import useMenu from "../../../Hooks/useMenu";

const RecomandFood = () => {
    const [menu]= useMenu(); //all data hook
    const popularItems=menu.filter(item=> item.category == 'popular') //popular data 

    return (
        <div className="mt-28 my-24">
            <SectionTitle headingtitle='Recomand Our Food '/>
            <div className="my-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
               {
                popularItems.map((item,idx)=> <FoodCard key={idx} item={item}/>)
               }
            </div>
        </div>
    );
};

export default RecomandFood;