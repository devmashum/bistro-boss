import FoodCard from "../../Components/FoodCard";


const OrderTab = ({ items }) => {
    return (
        <div className='grid lg:grid-cols-3 gap-5 mb-5'>
            {
                items.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
            }
        </div>
    );
};

export default OrderTab;