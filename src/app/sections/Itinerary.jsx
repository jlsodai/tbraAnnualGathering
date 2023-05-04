/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";

const Itinerary = () => {
	const [activeTab, setActiveTab] = useState(0);
	const date = 22;
	return (
		<section className="min-h-screen py-16 container flex flex-col">
			<h3 className="font-libreb text-4xl justify-start">Itinerary</h3>

			<div className="mt-4 text-sm font-medium text-center border-b border-gray-200">
				<ul className="flex flex-wrap -mb-px">
					{[...Array(5)].map((e, i) => (
						<li className="mr-2" key={i}>
							<button
								onClick={() => setActiveTab(i)}
								className={`inline-block p-4 border-b-2 ${
									activeTab === i
										? "text-mustard-600 border-b-2 border-mustard-600"
										: "hover:text-gray-600 hover:border-gray-300"
								} `}
							>
								Day {i + 1} — Oct {date + i}
							</button>
						</li>
					))}
				</ul>
			</div>
			<div className="flex grow mt-16">
				<div className="grid md:grid-cols-2 gap-8 md:gap-20 items-center -md:my-16">
					<div className="md:pr-16">
						<h3 className="font-libreb text-4xl">
							Day {activeTab + 1} Activities
						</h3>
						<p className="mt-8">
							Quas laborum aliquam veritatis, molestiae illum
							repellendus natus dolores excepturi incidunt ex rem
							qui. Dolores, rerum et iusto nobis voluptatem totam
							modi. Lorem ipsum dolor sit amet consectetur
							adipisicing elit. Quas laborum aliquam veritatis,
							molestiae illum repellendus natus dolores excepturi
							incidunt ex rem qui. Dolores, rerum et iusto nobis
							voluptatem totam modi?
						</p>
						<a href="#!" className="btn text-black mt-8">
							Buy Ticket
						</a>
					</div>
					<img
						src="https://tbratest.my.canva.site/egypt-annual-gathering/images/5412a1a14185dad5081e1b7fb967d83e.svg"
						alt="Egypt Pyramid"
						className="-sm:order-first h-[400px] mx-auto"
					/>
				</div>
			</div>
		</section>
	);
};

export default Itinerary;
