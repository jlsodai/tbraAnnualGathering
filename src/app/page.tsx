import HeroSection from "@/app/sections/HeroSection";
import AboutSection from "@/app/sections/AboutSection";
import Itinerary from '@/app/sections/Itinerary';
import Footer from '@/app/sections/Footer';
import Facilitators from "@/app/sections/Facilitators";

const links = [
  { title:"Overview", url: "#overview"},
  { title:"Facilitators", url: "#facilitators"},
  { title:"Itinerary", url: "#itinerary"},
];

export default function Home() {
	return (
		<>
      <HeroSection links={links} />
      <AboutSection />
      <Facilitators />
      <Itinerary />
      <Footer />
    </>
	);
}
