
import { useState } from 'react';
import SectionTitle from '../../Components/SectionTitle/SectionTitle';
import MenuItem from '../Shared/MenuItem';
import useMenu from '../../hooks/useMenu';


const PopularMenu = () => {

    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular')

    return (
        <div>
            <SectionTitle
                heading={"From Our Menu"}
                subHeading={"Popular Menu"}>
            </SectionTitle>
            <div className='grid md:grid-cols-2 gap-4'>
                {
                    popular.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>

        </div >
    );
};

export default PopularMenu;