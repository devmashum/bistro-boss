import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { FaTrash } from "react-icons/fa";


const AllUsers = () => {
    const axiosSecure = useAxiosSecure();
    const { data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    })

    const handleDelet = user => {
        console.log(user)
    }
    return (
        <div >
            <div className="flex justify-evenly py-5">
                <h2 className="text-3xl">All users</h2>
                <h2 className="text-3xl">Total Users: {users.length}</h2>
            </div>

            {/*  */}
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr>

                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}
                                    <button onClick={() => handleDeleteUser(user)} className="btn    btn-base">
                                        <FaTrash></FaTrash>
                                    </button>
                                </td>
                                <td>
                                    <button onClick={() => handleDeleteUser(user)} className="btn    btn-base">
                                        <FaTrash></FaTrash>
                                    </button>
                                </td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;