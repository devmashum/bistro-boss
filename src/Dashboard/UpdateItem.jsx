
import SectionTitle from '../Components/SectionTitle/SectionTitle';
import { useLoaderData } from 'react-router-dom';

const UpdateItem = () => {
    const item = useLoaderData();
    console.log(item);

    return (
        <div>
            <SectionTitle heading={'Update Item'}
                subHeading={'Refresh Info'}
            ></SectionTitle>
            <h1>Price{item.price}</h1>


        </div>
    );
};

export default UpdateItem;