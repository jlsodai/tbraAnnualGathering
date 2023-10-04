"use client";
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import CountDownTimer from "@/app/components/CountDownTimer";
import Modal from "@/app/components/Modal";
import PaperForm from "@/app/components/PaperForm";
import { useEffect, useState } from "react";

interface Props {
  links: {
    title: string;
    url: string;
  }[];
}

const HeroSection = ({ links }: Props) => {
  const [showTop, setShowTop] = useState(false);
  const controlNavbar = () => {
    if (window.scrollY > 250) {
      setShowTop(true);
    } else {
      setShowTop(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, []);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    // first prevent the default behavior
    e.preventDefault();
    // get the href and remove everything before the hash (#)
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    // get the element by id and use scrollIntoView
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section
      className="flex flex-col justify-between min-h-screen bg-[url('https://res.cloudinary.com/tbra/image/upload/v1683041089/EgyptHeroBg_uv3bcq.jpg')] bg-cover bg-center text-white"
      id="top"
    >
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
                onClick={handleScroll}
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="container -md:my-16 md:grid grid-cols-2 items-center">
        <div className="">
          <h3 className="text-mustard font-libreb text-2xl">
            TBrA Annual Gathering
          </h3>
          <h1 className="text-8xl -sm:text-6xl mt-2 mb-8 font-halyard font-thin">
            Egypt 2023
          </h1>
          <p className="max-w-sm my-4">
            Join us for a week of networking opportunities, curated workshops
            and rich cultural & culinary experiences.
          </p>
          <div className="flex gap-4 mt-4">
            <Modal btnText="Buy Ticket">
              <PaperForm formSlug="tbraannualgathering" />
            </Modal>
          </div>
        </div>
        <iframe
          className="-md:hidden"
          width="100%"
          height="400"
          src="https://www.youtube.com/embed/K_JUuffs0g4?si=Tt64JroPZliI-4KQ"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
      <div className="glassmorphism">
        <div className="container md:flex justify-between items-center my-4">
          <p className="border-l-8 py-2 px-8 border-mustard font-libreb">
            22 - 28 October 2023
            <br />
            Cairo & Sharm El-Sheikh, Egypt
          </p>
          <CountDownTimer />
        </div>
      </div>
      <Link
        href="#top"
        title="Go To Top"
        onClick={handleScroll}
        className={`${
          !showTop && "hidden"
        } fixed z-90 bottom-8 right-8 border-0 w-16 h-16 rounded-full drop-shadow-md bg-tender text-white text-2xl font-bold flex justify-center items-center`}
      >
        &uarr;
      </Link>
    </section>
  );
};

export default HeroSection;
