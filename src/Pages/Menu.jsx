import { Helmet } from 'react-helmet-async';
import Cover from './Shared/Cover';
import menuImg from '../assets/menu/banner3.jpg'
import dessertImg from '../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../assets/menu/pizza-bg.jpg'
import salatImg from '../assets/menu/salad-bg.jpg'
import soupImg from '../assets/menu/soup-bg.jpg'

import useMenu from '../hooks/useMenu';
import SectionTitle from '../Components/SectionTitle/SectionTitle';
import MenuCategory from './MenuCategory';
const Menu = () => {
    const [menu] = useMenu();
    const dessert = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const offered = menu.filter(item => item.category === 'offered');

    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover
                img={menuImg}
                title={'our menu'}
            ></Cover>
            <SectionTitle
                heading={'Todays Offer'}
                subHeading={'Dont Miss'}
            ></SectionTitle>
            {/* Offered Menu items */}
            <MenuCategory items={offered}></MenuCategory>

            <MenuCategory img={menuImg}
                title={'menu'} items={dessert}></MenuCategory>

            <MenuCategory img={salatImg}
                title={'salad'} items={salad}></MenuCategory>

            <MenuCategory img={pizzaImg}
                title={'pizza'} items={pizza}></MenuCategory>

            <MenuCategory img={soupImg}
                title={'soup'} items={soup}></MenuCategory>




        </div >
    );
};

export default Menu;