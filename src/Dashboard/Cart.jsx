import { FaTrash } from "react-icons/fa";
import useCart from "../hooks/useCart";
import Swal from "sweetalert2";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { Link } from "react-router-dom";


const Cart = () => {

    const [cart, refetch] = useCart();
    const totalPrice = cart.reduce((total, item) => total + item.price, 0);
    const axiosSecure = useAxiosSecure();

    const handleDelet = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/carts/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            refetch();
                        }
                    })

            }
        });
    }

    return (
        <div>
            <div className="flex justify-evenly items-center mt-10 bg-blue-100 p-10">
                <h2 className="text-2xl">Total Items: {cart.length}</h2>
                <h2 className="text-2xl">Total Price: {totalPrice}</h2>
                {
                    cart.length ? <Link to={'/dashboard/payment'}>  <button className="btn btn-secondary text-2xl">Pay</button></Link>
                        : <button disabled className="btn btn-secondary text-2xl">Pay</button>
                }
            </div>

            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead className="text-xl font-bold">
                        <tr>
                            <th>
                                #
                            </th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map((item, index) => <tr key={item._id}>
                                <th className="text-xl">
                                    {index + 1}
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>

                                    </div>
                                </td>
                                <td>
                                    <h3 className="text-xl">    {item.name}</h3>
                                </td>
                                <td className="text-xl">$ {item.price}</td>
                                <th>
                                    <button onClick={() => handleDelet(item._id)} className="btn text-xl   btn-base">
                                        <FaTrash></FaTrash>
                                    </button>
                                </th>
                            </tr>)
                        }



                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Cart;