
import { useEffect, useState } from 'react';
import SectionTitle from '../../Components/SectionTitle/SectionTitle';
import MenuItem from '../Shared/MenuItem';

const PopularMenu = () => {
    const [menu, setMenu] = useState([]);
    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const popularItems = data.filter(item => item.category === 'popular');
                setMenu(popularItems)
            })
    }, [])
    return (
        <div>
            <SectionTitle
                heading={"From Our Menu"}
                subHeading={"Popular Menu"}>
            </SectionTitle>
            <div className='grid md:grid-cols-2 gap-4'>
                {
                    menu.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>

        </div >
    );
};

export default PopularMenu;