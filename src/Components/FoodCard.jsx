

const FoodCard = ({ item }) => {
    const { image, price, name, recipe } = item;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <h2 className="card-title">{recipe}</h2>
                <p className=" absolute right-0 top-0 mr-10 mt-10 p-2 bg-slate-900 text-white text-xl font-bold rounded">$ {price}</p>

                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;