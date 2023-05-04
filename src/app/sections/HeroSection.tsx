/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import React from 'react'

interface Props {
  links: string[]
}

const HeroSection = ({links}: Props) => {
  return (
    <section className="flex flex-col justify-between min-h-screen bg-[url('https://res.cloudinary.com/tbra/image/upload/v1683041089/EgyptHeroBg_uv3bcq.jpg')] bg-cover bg-center text-white">
			<div className="container mt-8 flex justify-between items-center">
				<Link href="/" className="">
					<img
						src="https://theboardroomafrica.com/images/logo-primary.svg"
						className="img-white"
						width="100px"
						alt="Logo"
					/>
				</Link>
				<div className="">
					<div className="flex divide-x -sm:mt-8 -sm:justify-center">
						{links.map((link, i) => (
							<Link
								href="#!"
								className="px-6 hover:underline"
								key={i}
							>
								{link}
							</Link>
						))}
					</div>
				</div>
			</div>
			<div className="container -md:my-16">
				<h3 className="text-mustard font-libreb">
					TBrA Annual Gathering
				</h3>
				<h1 className="text-8xl -sm:text-6xl mt-2 mb-8 font-halyard font-thin">
					Egypt 2023
				</h1>
				<p className="max-w-sm my-4">
					Join us for a week of networking opportunities, curated
					workshops and rich cultural & culinary experiences.
				</p>
				<div className="flex gap-4 mt-4">
					<a href="#!" className="btn bg-tender text-black">
						Get Brochure
					</a>
					<a href="#!" className="btn text-black">
						Buy Ticket
					</a>
				</div>
			</div>
			<div className="glassmorphism">
				<div className="container md:flex justify-between items-center my-4">
					<p className="border-l-8 py-2 px-8 border-mustard font-libreb">
						22 - 29 October 2023
						<br />
						Cairo, Egypt
					</p>
					<div className="flex -sm:mt-8 gap-8">
						{[...Array(4)].map((e,i) => (
							<div className="border rounded-lg text-center py-4 px-6" key={i}>
								<h1 className="font-medium text-3xl font-halyard">27</h1>
								<p className="text-xs font-thin">days</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
  )
}

export default HeroSection
