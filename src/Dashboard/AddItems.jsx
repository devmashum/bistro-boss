import SectionTitle from "../Components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
const AddItems = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)
    };
    return (
        <div>
            <SectionTitle heading={'Add an Item'}
                subHeading={'Whats New'}
            ></SectionTitle>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("name")} />
                    <select {...register("category")}>
                        <option value="salad">female</option>
                        <option value="male">male</option>
                        <option value="other">other</option>
                    </select>
                    <select className="select select-bordered w-full max-w-xs">
                        <option disabled selected>Select a Category</option>
                        <option>Han Solo</option>
                        <option>Greedo</option>
                    </select>
                    <input type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddItems;