import HeroSection from "@/app/sections/HeroSection";
import AboutSection from "@/app/sections/AboutSection";
import Itinerary from "@/app/sections/Itinerary";
import Footer from "@/app/sections/Footer";
import Facilitators from "@/app/sections/Facilitators";
import Attendees from "@/app/sections/Attendees";
import Gallery from "@/app/sections/Gallery";

const links = [
	{ title: "Overview", url: "#overview" },
	{ title: "Facilitators", url: "#facilitators" },
	{ title: "Who's coming", url: "#participants" },
	{ title: "Itinerary", url: "#itinerary" },
];

export default function Home() {
	return (
		<>
			<HeroSection links={links} />
			<AboutSection />
			<Facilitators />
			<Gallery />
			<Itinerary />
			<Footer />
			{/* <Attendees /> */}
		</>
	);
}
