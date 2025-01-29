import CoverBanner from "../../comments/CoverBanner";
//react tab
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import FoodCard from "../../comments/FoodCard";
import useMenu from "../../Hooks/useMenu";


const OurShop = () => {

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
            <CoverBanner title='Our Shop' dec='Our shop is the best food in Bangladesh.' />
            <div className="my-16">
                <Tabs>
                    <TabList>
                        <Tab>popular</Tab>
                        <Tab>Pizza</Tab>
                        <Tab>Soup</Tab>
                        <Tab>dessert</Tab>
                        <Tab>salad</Tab>
                        <Tab>offered</Tab>
                    </TabList>
                    
                    <TabPanel>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {
                                popularItems.map((item, idx) => <FoodCard item={item} key={idx} />)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {
                                pizzaItems.map((item, idx) => <FoodCard item={item} key={idx} />)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {
                                soupItems.map((item, idx) => <FoodCard item={item} key={idx} />)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {
                                dessertItems.map((item, idx) => <FoodCard item={item} key={idx} />)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {
                                saladItems.map((item, idx) => <FoodCard item={item} key={idx} />)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {
                                offeredItems.map((item, idx) => <FoodCard item={item} key={idx} />)
                            }
                        </div>
                    </TabPanel>
                </Tabs>
            </div>
        </>
    );
};

export default OurShop;