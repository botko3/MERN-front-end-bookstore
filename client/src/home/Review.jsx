import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./Review.css";
import { FaStar } from "react-icons/fa6";

// import required modules
import { Pagination } from "swiper/modules";

import { Avatar } from "flowbite-react";
import proPic from "../assets/profile.jpg";

const Review = () => {
  return (
    <div className="my-12 px-4 lg:px-24">
      <h2 className="text-5xl font-bold leading-snug text-center mb-10 ">
        Our Customers
      </h2>

      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className="shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border">
          <div className="space-y-6 ">
            <div className="text-amber-500 flex gap-4">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <div className="mt-7">
              <p className="mb-5 text-left">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed,
                voluptatum! Accusamus iste, delectus architecto hic aspernatur
                suscipit! Adipisci debitis repellat consequatur, molestiae optio
                error praesentium, distinctio, labore quisquam necessitatibus
                laboriosam!
              </p>

              <Avatar
                img={proPic}
                alt="avatar of Jese"
                rounded
                className="w-10 mb-4"
              />
              <h5 className="text-lg font-medium-2 text-left">Alice Chan</h5>
              <p className="text-base text-left">CEO,ABC Company</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border">
          <div className="space-y-6 ">
            <div className="text-amber-500 flex gap-4">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <div className="mt-7">
              <p className="mb-5 text-left">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed,
                voluptatum! Accusamus iste, delectus architecto hic aspernatur
                suscipit! Adipisci debitis repellat consequatur, molestiae optio
                error praesentium, distinctio, labore quisquam necessitatibus
                laboriosam!
              </p>

              <Avatar
                img={proPic}
                alt="avatar of Jese"
                rounded
                className="w-10 mb-4"
              />
              <h5 className="text-lg font-medium-2 text-left">Alice Chan</h5>
              <p className="text-base text-left">CEO,ABC Company</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border">
          <div className="space-y-6 ">
            <div className="text-amber-500 flex gap-4">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <div className="mt-7">
              <p className="mb-5 text-left">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed,
                voluptatum! Accusamus iste, delectus architecto hic aspernatur
                suscipit! Adipisci debitis repellat consequatur, molestiae optio
                error praesentium, distinctio, labore quisquam necessitatibus
                laboriosam!
              </p>

              <Avatar
                img={proPic}
                alt="avatar of Jese"
                rounded
                className="w-10 mb-4"
              />
              <h5 className="text-lg font-medium-2 text-left">Alice Chan</h5>
              <p className="text-base text-left">CEO,ABC Company</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border">
          <div className="space-y-6 ">
            <div className="text-amber-500 flex gap-4">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <div className="mt-7">
              <p className="mb-5 text-left">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed,
                voluptatum! Accusamus iste, delectus architecto hic aspernatur
                suscipit! Adipisci debitis repellat consequatur, molestiae optio
                error praesentium, distinctio, labore quisquam necessitatibus
                laboriosam!
              </p>

              <Avatar
                img={proPic}
                alt="avatar of Jese"
                rounded
                className="w-10 mb-4"
              />
              <h5 className="text-lg font-medium-2 text-left">Alice Chan</h5>
              <p className="text-base text-left">CEO,ABC Company</p>
            </div>
          </div>
        </SwiperSlide>

      </Swiper>
    </div>
  );
};

export default Review;
