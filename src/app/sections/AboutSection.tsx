/* eslint-disable @next/next/no-img-element */
import Modal from "@/app/components/Modal";
import PaperForm from "@/app/components/PaperForm";

const AboutSection = () => {
	return (
		<section id="overview" className="bg-mustard-50 min-h-screen flex">
			<div className="container grid md:grid-cols-2 gap-8 md:gap-20 items-center -md:my-16">
				<div className="md:pr-16">
					<h3 className="font-libreb text-4xl">
						About the Gathering
					</h3>
					<p className="mt-8">
						Under the theme{" "}
						<b>&apos;Uniting to Build New Frontiers&apos;</b> we are
						celebrating these milestones, and paving the way for
						greater achievements with a call to action for us all to
						work together, achieve more, and build stronger
						legacies.
					</p>
					<p className="mt-8">
						Join us for six days of networking, self exploration,
						and curated cultural experiences. Surround yourself with
						other trailblazing women leaders from across the
						continent and globe and together, let&apos;s explore how
						to show up stronger and position ourselves for global
						success.
					</p>
					<Modal btnText="Buy Ticket" className="mt-4">
						<PaperForm formSlug="tbraannualgathering" />
					</Modal>
				</div>
				<img
					src="/images/egyptPyramids.svg"
					alt="Egypt Pyramid"
					className="-sm:order-first"
				/>
			</div>
		</section>
	);
};

export default AboutSection;
