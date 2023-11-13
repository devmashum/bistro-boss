import { Link } from "react-router-dom";
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
            <Link to={`/order/${title}`}><button className="flex flex-col justify-center w-30 mx-auto mb-5 btn btn-primary btn-outline border-0 border-b-4">Order now</button></Link>
        </div>
    );
};

export default MenuCategory;