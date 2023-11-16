import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../hooks/useAxiosSecure";
import useCart from "../hooks/useCart";


const FoodCard = ({ item }) => {
    const { image, price, name, recipe, _id } = item;
    const navigate = useNavigate();
    const location = useLocation();
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const [, refetch] = useCart();

    const handleAddToCart = () => {
        if (user && user.email) {
            //send cart to database
            const cartItem = {
                menuId: _id,
                email: user.email,
                name,
                price,
                image
            }
            axiosSecure.post('/carts', cartItem)
                .then(res => {
                    console.log(res.data)
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: `${name} added to your cart`,
                            showConfirmButton: false,
                            timer: 1000
                        });
                        // refetch cart to update the cart items count
                        refetch();
                    }
                })
        }
        else {
            Swal.fire({
                title: "You are not Logged IN",
                text: "Please log in to add to the cart",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Please Log In !"
            }).then((result) => {
                if (result.isConfirmed) {
                    //    send the user to the login page
                    navigate('/login', { state: { from: location } })
                }
            });
            //  send to login address
        }

    }

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <h2 className="card-title">{recipe}</h2>
                <p className=" absolute right-0 top-0 mr-10 mt-10 p-2 bg-slate-900 text-white text-xl font-bold rounded">$ {price}</p>


                <button onClick={() => handleAddToCart(item)} className="flex flex-col justify-center w-30 bg-slate-100 mx-auto mb-5 btn btn-primary btn-outline border-0 border-b-4 border-orange-400">Order now</button>
            </div>
        </div>
    );
};

export default FoodCard;