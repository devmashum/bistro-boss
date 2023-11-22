import { FaEdit, FaTrash } from "react-icons/fa";
import SectionTitle from "../Components/SectionTitle/SectionTitle";
import useMenu from "../hooks/useMenu";
import Swal from "sweetalert2";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { Link } from "react-router-dom";



const ManageItem = () => {
    const [menu, refetch] = useMenu();
    const axiosSecure = useAxiosSecure();



    const handleDeleteItem = (item) => {


        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {

            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/menu/${item._id}`);
                // console.log(res.data);
                if (res.data.deletedCount > 0) {
                    refetch();
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                    });
                }



            }
        });
    }
    return (
        <div>
            <SectionTitle heading={'Manage all Items'}
                subHeading={'Hurry Up'}></SectionTitle>
            <p className="text-center bg-orange-500 p-2 rounded-full font-bold text-white text-xl">Total Items: {menu.length}</p>

            <div>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                    #
                                </th>
                                <th>Image</th>
                                <th>Item Name</th>
                                <th>Price</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                menu.map((item, index) => <tr key={item._id}>

                                    <td>
                                        {index + 1}
                                    </td>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squire w-12 h-12">
                                                    <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>

                                            </div>
                                        </div>
                                    </td>

                                    <td>
                                        {item.name}
                                    </td>
                                    <td>${item.price}</td>

                                    <th>
                                        <Link to={`/dashboard/updateItem/${item._id}`}><button className="btn btn-lg  bg-orange-400 btn-ghost btn-base "><FaEdit></FaEdit></button></Link>
                                    </th>
                                    <td>
                                        <button onClick={() => handleDeleteItem(item)} className="btn bg-red-500  btn-lg btn-base" >
                                            <FaTrash></FaTrash>
                                        </button>
                                    </td>

                                </tr>
                                )
                            }

                        </tbody>



                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageItem;