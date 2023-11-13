import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import featuredImg from '../../assets/home/featured.jpg'

import('./Featured.css')

const Featured = () => {
    return (
        <div className="featured-item  bg-fixed ">
            <SectionTitle
                heading={'Featured items'}
                subHeading={'check it out'}
            ></SectionTitle>
            <div className="md:flex justify-center items-center  pb-20 pt-12 px-36 gap-10  ">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div>
                    <p className="text-xl">Aug 20, 2029</p>
                    <h1 className="uppercase">Where can i get some</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi facere delectus optio iste, repudiandae expedita doloribus quasi ad id temporibus!</p>
                    <button className="btn btn-primary btn-outline border-0 border-b-4">Order now</button>
                </div>
            </div>
        </div >
    );
};

export default Featured;