import SectionTitle from "../../../components/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { FaQuoteLeft } from "react-icons/fa6";

const Testimonial = () => {
    const [reviews,setReveiws] = useState([]);
    useEffect( ()=>{
        fetch('reviews.json')
        .then(res => res.json())
        .then(data =>{setReveiws(data)})
    },[])
    return (
        <section className="">
            <SectionTitle heading={'Testimonials'} subHeading={'What Our Clients Say'}>
            </SectionTitle>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {
                    reviews.map(review =><SwiperSlide key={review.id}>
                        <div className="flex flex-col items-center mx-24 my-16 text-justify">
                            <Rating
                                style={{maxWidth: 180}}
                                value={review.rating}
                                readOnly
                            ></Rating>
                            <FaQuoteLeft className="text-8xl pt-4" />
                            <p className="my-4">{review.details}</p>
                            <h3 className="text-3xl text-orange-400">{review.name}</h3>
                        </div>
                    </SwiperSlide> )
                }
            </Swiper>
        </section>
    );
};

export default Testimonial;