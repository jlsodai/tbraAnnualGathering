/* eslint-disable @next/next/no-img-element */
import React from "react";

const Facilitators = () => {
	return (
		<section id="facilitators" className="flex items-center">
			<div className="container items-center py-16">
				<h3 className="font-libreb text-4xl text-center">
					Workshop facilitators
				</h3>
				<div className="grid md:grid-cols-2 gap-8 lg:mx-44 md:gap-20 mt-16 justify-center">
					<div className="text-center">
						<img
							src="https://res.cloudinary.com/tbra/image/upload/v1684748106/Marjorie_-_speaking_jhhypu.jpg"
							className="mx-auto"
							width="300px"
							alt=""
						/>
						<div className="mt-4">
							<h3 className="text-2xl font-libreb">
								Marjorie Ngwenya
							</h3>
							<p>
								Executive Coach | Speaker | Author |
								Non-Executive Director
							</p>
						</div>
					</div>
					<div className="text-center">
						<img
							src="https://res.cloudinary.com/tbra/image/upload/v1684746832/RachelEgypt_qmzdgt.jpg"
							className="mx-auto"
							width="300px"
							alt=""
						/>
						<div className="mt-4">
							<h3 className="text-2xl font-libreb">
								Rachel Adams
							</h3>
							<p>
								Transformation Specialist | Speaker |
								Ontological Leadership Specialist
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Facilitators;
