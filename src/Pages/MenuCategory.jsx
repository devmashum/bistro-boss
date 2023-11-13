import Cover from "./Shared/Cover";
import MenuItem from "./Shared/MenuItem";

const MenuCategory = ({ items, title, img }) => {
    return (
        <div className="">
            {title && <Cover img={img} title={title}></Cover>}
            <div className='grid md:grid-cols-2 gap-10 mt-16'>
                {
                    items.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
        </div>
    );
};

export default MenuCategory;