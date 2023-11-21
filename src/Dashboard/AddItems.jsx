import { FaUtensils } from "react-icons/fa";
import SectionTitle from "../Components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form"
import useAxiosPublic from "../hooks/useAxiosPublic";
import useAxiosSecure from "../hooks/useAxiosSecure";


const image_hosting_kex = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_kex}`
const AddItems = () => {
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
    const { register, handleSubmit } = useForm();
    const onSubmit = async (data) => {
        console.log(data)
        // image upload to imgBB and then get an url
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
        if (res.data.success) {
            const menuItem = {
                name: data.name,
                category: data.category,
                price: parseFloat(data.price),
                recipe: data.recipe,
                image: res.data.data.disply_url
            }
            const menuRes = await axiosSecure.post('/menu', menuItem);
            console.log(menuRes.data)
        }

    };
    return (
        <div>
            <SectionTitle heading={'Add an Item'}
                subHeading={'Whats New'}
            ></SectionTitle>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className="form-control w-full my-6 ">
                        <label className="label">
                            <span className="label-text">Recipe Name</span>

                        </label>
                        <input
                            {...register('name', { required: true })}
                            type="text"
                            placeholder="Recipe Name" className="input input-bordered w-full " />

                    </div>
                    <div className="flex gap-6">
                        {/* {category} */}
                        <div className="form-control w-full my-6 ">
                            <label className="label">
                                <span className="label-text">Category
                                </span>

                            </label>
                            <select defaultValue={'default'}
                                {...register('category', { required: true })}
                                className="select select-bordered w-full ">
                                <option disabled value={'default'}>Select a Category</option>
                                <option value="salad">Salad</option>
                                <option value="pizza">Pizza</option>
                                <option value="soup">Soup</option>
                                <option value="dessert">Dessert</option>
                                <option value="drinks">Drinks</option>

                            </select>

                        </div>
                        {/* price */}

                        <div className="form-control w-full my-6 ">
                            <label className="label">
                                <span className="label-text">Price</span>

                            </label>
                            <input
                                {...register('price', { required: true })}
                                type="number"
                                placeholder="price" className="input input-bordered w-full " />

                        </div>

                    </div>
                    {/* Recipe details */}
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Recipe Details</span>

                        </label>
                        <textarea {...register('recipe')} className=" textarea textarea-bordered h-24" placeholder="Details" />

                    </div>
                    <div>
                        <input {...register('image', { required: true })} type="file" className="file-input  w-full max-w-form-control max-w-xs my-6" />
                    </div>




                    <button className="btn btn-accent" type="submit">
                        Add Item <FaUtensils />
                    </button>
                </form>
            </div >
        </div >
    );
};

export default AddItems;