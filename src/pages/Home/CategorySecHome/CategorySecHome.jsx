import SectionTitle from "../../../comments/SectionTitle";
// image
import categoryImg1 from '../../../assets/home/slide1.jpg'
import categoryImg2 from '../../../assets/home/slide2.jpg'
import categoryImg3 from '../../../assets/home/slide3.jpg'
import categoryImg4 from '../../../assets/home/slide4.jpg'
// --------swiper JS----
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';

const CategorySecHome = () => {
    return (
        <div className="my-16">
            <SectionTitle headingtitle='All Categories Product List' />
            {/* category card */}
            <div className="mt-12 pl-4">
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img src={categoryImg1}  className="w-full h-[420px] rounded-2xl" alt="category photo" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={categoryImg2}  className="w-full h-[420px] rounded-2xl" alt="category photo" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={categoryImg3}  className="w-full h-[420px] rounded-2xl" alt="category photo" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={categoryImg4}  className="w-full h-[420px] rounded-2xl" alt="category photo" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={categoryImg1}  className="w-full h-[420px] rounded-2xl" alt="category photo" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={categoryImg3} className="w-full h-[420px] rounded-2xl" alt="category photo" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={categoryImg2}  className="w-full h-[420px] rounded-2xl" alt="category photo" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={categoryImg4}  className="w-full h-[420px] rounded-2xl" alt="category photo" />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default CategorySecHome;