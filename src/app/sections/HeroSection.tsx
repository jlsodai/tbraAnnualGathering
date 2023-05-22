/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import CountDownTimer from "@/app/components/CountDownTimer";
import Modal from "@/app/components/Modal";
import PaperForm from "@/app/components/PaperForm";

interface Props {
	links: {
		title: string;
		url: string;
	}[];
}

const HeroSection = ({ links }: Props) => {
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
				<div className="-sm:hidden">
					<div className="flex divide-x -sm:mt-8 -sm:justify-center">
						{links.map((link, i) => (
							<Link
								href={link.url}
								className="px-6 hover:underline"
								key={i}
							>
								{link.title}
							</Link>
						))}
					</div>
				</div>
			</div>
			<div className="container -md:my-16">
				<h3 className="text-mustard font-libreb text-2xl">
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
					<Modal btnText="Buy Ticket">
						<PaperForm formSlug="tbraannualgathering" />
					</Modal>
				</div>
			</div>
			<div className="glassmorphism">
				<div className="container md:flex justify-between items-center my-4">
					<p className="border-l-8 py-2 px-8 border-mustard font-libreb">
						22 - 28 October 2023
						<br />
						Cairo & Sharm El Sheikh, Egypt
					</p>
					<CountDownTimer />
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
