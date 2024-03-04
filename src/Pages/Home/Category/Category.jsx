import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import slide1 from '../../../assets/category/1.png'
import slide2 from '../../../assets/category/2.png'
import slide3 from '../../../assets/category/3.png'
import slide4 from '../../../assets/category/4.png'
import slide5 from '../../../assets/category/5.png'
import slide6 from '../../../assets/category/6.png'
import SectionTitle from '../../../components/SectionTitle';
const Category = () => {
    return (
        <div>
            <SectionTitle subHeading={'---From 11:00am to 10:00pm---'} heading={'Set Appointment'}></SectionTitle>
            <div className='mb-24'>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    centeredSlides={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img src={slide4} alt="" />
                        <h3 className='text-3xl text-center -mt-16 text-white'>Cat</h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide5} alt="" />
                        <h3 className='text-3xl text-center -mt-16 text-white'>Dog</h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide1} alt="" />
                        <h3 className='text-3xl text-center -mt-16 text-white'>Dove</h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide2} alt="" />
                        <h3 className='text-3xl text-center -mt-16 text-white'>Cow</h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide3} alt="" />
                        <h3 className='text-3xl text-center -mt-16 text-white'>Horse</h3>
                    </SwiperSlide>

                    <SwiperSlide>
                        <img src={slide6} alt="" />
                        <h3 className='text-3xl text-center -mt-16 text-white'>Parrot</h3>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default Category;