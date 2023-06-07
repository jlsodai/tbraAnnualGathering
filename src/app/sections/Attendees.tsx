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
		<section className="bg-gray-200 min-h-screen">
			<div className="-md:my-16 my-16">
				<h3 className="font-libreb text-4xl">Who else is coming?</h3>
				<Swiper
					slidesPerView={6}
					spaceBetween={30}
					// slidesPerGroup={1}
					// centerInsufficientSlides={true}
					// freeMode={false}
					centeredSlides={true}
					loop={true}
					className="mySwiper"
				>
					{[...Array(10)].map((_, i) => (
						<SwiperSlide key={i}>
							{/* <img
								src="https://via.placeholder.com/200x300"
								alt=""
							/> */}
							<p className="mt-10">Slider {i + 1} </p>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</section>
	);
};

export default Attendees;
