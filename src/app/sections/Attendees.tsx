/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Attendees = () => {
	return (
		<section className="bg-gray-200">
			<div className="-md:my-16 my-16">
				<h3 className="font-libreb text-4xl">Who else is coming?</h3>
			</div>
			<Swiper
				slidesPerView={4.5}
				spaceBetween={30}
				centeredSlides={true}
				loop={true}
				className="mySwiper"
			>
				<SwiperSlide>
					<img src="https://via.placeholder.com/200x300" alt="" />
				</SwiperSlide>
				<SwiperSlide>
					<img src="https://via.placeholder.com/200x300" alt="" />
				</SwiperSlide>
				<SwiperSlide>
					<img src="https://via.placeholder.com/200x300" alt="" />
				</SwiperSlide>
				<SwiperSlide>
					<img src="https://via.placeholder.com/200x300" alt="" />
				</SwiperSlide>
				<SwiperSlide>
					<img src="https://via.placeholder.com/200x300" alt="" />
				</SwiperSlide>
				<SwiperSlide>
					<img src="https://via.placeholder.com/200x300" alt="" />
				</SwiperSlide>
				<SwiperSlide>
					<img src="https://via.placeholder.com/200x300" alt="" />
				</SwiperSlide>
				<SwiperSlide>
					<img src="https://via.placeholder.com/200x300" alt="" />
				</SwiperSlide>
				<SwiperSlide>
					<img src="https://via.placeholder.com/200x300" alt="" />
				</SwiperSlide>
			</Swiper>
		</section>
	);
};

export default Attendees;
