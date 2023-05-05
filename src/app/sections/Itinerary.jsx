/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";

const itineraries = [
	{
		date: "Oct 22",
		imgUrl: "https://tbratest.my.canva.site/egypt-annual-gathering/images/3d94b1d1b7eda324088fdc984ce7b92f.svg",
	},
	{
		date: "Oct 23",
		imgUrl: "https://tbratest.my.canva.site/egypt-annual-gathering/images/325f298e3e12e22bf8c05ab7d1ac804b.svg",
	},
	{
		date: "Oct 24",
		imgUrl: "https://tbratest.my.canva.site/egypt-annual-gathering/images/87241ed462669df43408424bcf3504da.svg",
	},
	{
		date: "Oct 25",
		imgUrl: "https://tbratest.my.canva.site/egypt-annual-gathering/images/8d17f31ba1cbe3822337034fb1b279f7.svg",
	},
	{
		date: "Oct 26",
		imgUrl: "https://tbratest.my.canva.site/egypt-annual-gathering/images/07780c6c95dfd50291e726705ff287c9.svg",
	},
];

const Itinerary = () => {
	const [activeTab, setActiveTab] = useState(0);
	return (
		<section id="itinerary" className="bg-gray-50 min-h-screen py-16 flex">
			<div className="container flex flex-col">
				<h3 className="font-libreb text-4xl justify-start">
					Itinerary
				</h3>
				<div className="mt-4 text-sm font-medium text-center border-b border-gray-200">
					<ul className="flex flex-wrap -mb-px">
						{itineraries.map((itinerary, i) => (
							<li className="mr-2" key={i}>
								<button
									onClick={() => setActiveTab(i)}
									className={`inline-block p-4 border-b-2 ${
										activeTab === i
											? "text-mustard-600 border-b-2 border-mustard-600"
											: "hover:text-gray-600 hover:border-gray-300"
									} `}
								>
									Day {i + 1} — {itinerary.date}
								</button>
							</li>
						))}
					</ul>
				</div>
				<div className="flex flex-col grow mt-16">
					<p className="-md:mb-4">Day {activeTab + 1} Activites</p>
					<div className="grid md:grid-cols-2 gap-8 md:gap-20 items-center">
						<div className="grid md:grid-cols-2 md:my-8 gap-8">
							{[...Array(4)].map((e, i) => (
								<div
									key={i}
									className="bg-mustard-50 hover:bg-tender-100 p-8"
								>
									<h4 className="font-bold">
										Activity {i + 1}
									</h4>
									<p className="mt-2">
										Lorem ipsum dolor sit amet consectetur,
										adipisicing elit.
									</p>
								</div>
							))}
						</div>
						<img
							src={itineraries[activeTab].imgUrl}
							alt="Egypt Pyramid"
							className="-sm:order-first md:h-[400px] -sm:w-full mx-auto"
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Itinerary;
