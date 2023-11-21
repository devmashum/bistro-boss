import { FaEdit, FaTrash } from "react-icons/fa";
import SectionTitle from "../Components/SectionTitle/SectionTitle";
import useMenu from "../hooks/useMenu";


const ManageItem = () => {
    const [menu] = useMenu();

    const handleDeleteItem = (item) => {

    }
    return (
        <div>
            <SectionTitle heading={'Manage all Items'}
                subHeading={'Hurry Up'}></SectionTitle>

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
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">Hart Hagerty</div>
                                                <div className="text-sm opacity-50">United States</div>
                                            </div>
                                        </div>
                                    </td>

                                    <td>
                                        {item.name}
                                    </td>
                                    <td>{item.price}</td>

                                    <th>
                                        <button className="btn btn-lg  bg-orange-400 btn-ghost btn-base "><FaEdit></FaEdit></button>
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