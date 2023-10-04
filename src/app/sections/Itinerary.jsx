/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";

const itineraries = [
  {
    date: "Oct 22",
    imgUrl:
      "https://res.cloudinary.com/tbra/image/upload/v1684750942/WelcomeCairo_yfc3mt.jpg",
    items: [
      {
        title: "Arrivals & Welcome",
        text: "Arrivals at Cairo International Airport. Pick-up and drop-off at the hotel. ",
      },
      {
        title: "Hotel Arrivals",
        text: "Welcome cocktails - meet other delegates, network and relax in time for dinner.",
      },
    ],
  },
  {
    date: "Oct 23",
    imgUrl:
      "https://res.cloudinary.com/tbra/image/upload/v1684749852/EgyptImg_jige6n.jpg",
    items: [
      {
        title: "Discover the historical sites of Cairo",
        text: "Prepare to be captivated as you stand before the magnificent Giza Pyramids, Memphis, and Sakkara and witness firsthand the enigmatic Sphinx, its stoic gaze echoing centuries of history and learn about Egypt's formidable female leaders.",
      },
      {
        title: "Annual Gathering Launch Dinner",
        text: "Indulge in an elegant and sophisticated evening as we host the prestigious Annual Gathering Launch dinner. This exclusive event promises an unforgettable experience as we foster cross-cultural conversations and break bread in an intimate setting. This promises to be a remarkable evening of celebration, camaraderie and shared successes.",
      },
    ],
  },
  {
    date: "Oct 24",
    imgUrl:
      "https://res.cloudinary.com/tbra/image/upload/v1684749847/Beach_tjifo5.jpg",
    items: [
      {
        title: "Welcome to  Sharm El-Sheikh",
        text: "Experience the vibrant heart of Sharm-el-Sheikh—Egypt's premier beach destination. Immerse yourself in the tranquillity of pristine sandy shores and crystal-clear turquoise waters, the perfect backdrop for relaxation and rejuvenation.",
      },
      {
        title: "Immersive Workshop",
        text: "Dig deeper, with a specially curated workshop experience.",
      },
    ],
  },
  {
    date: "Oct 25",
    imgUrl:
      "https://res.cloudinary.com/tbra/image/upload/v1684749846/Canyon_cynrmn.jpg",
    items: [
      {
        title: "St. Catherine's Monastery",
        text: "Embark on a captivating journey through history with the St. Catherine Monastery—the oldest continually inhabited Christian monastery in the world and a UNESCO World Heritage site. This excursion takes you deep into the heart of the Sinai Peninsula, where the ancient monastery stands as a testament to centuries of rich history, spirituality, and natural beauty.",
      },
    ],
  },
  {
    date: "Oct 26",
    imgUrl:
      "https://res.cloudinary.com/tbra/image/upload/v1684749852/Camel_wmyhbz.jpg",
    items: [
      {
        title: "Brunch Workshop",
        text: "Dig deeper, with a specially curated brunch workshop experience.",
      },
      {
        title: "Bask in a Bedouin Evening",
        text: "Savour the sunset, venturing into the heart of the desert, where a traditional Bedouin camp awaits you. Settle into the cosy surroundings, with traditional seating arrangements and soft carpets spread out under the starlit sky. Indulge in a sumptuous feast of traditional dishes, whilst enjoying exotic rich Bedouin cultural performances as you dine.",
      },
    ],
  },
  {
    date: "Oct 27",
    imgUrl:
      "https://res.cloudinary.com/tbra/image/upload/v1684749847/RasMohamed_lbdyuj.jpg",
    items: [
      {
        title: "Ras Mohammed",
        text: "A day’s trip by boat. Situated on the southern tip of the Sinai Peninsula, Ras Mohammed National Park is home to Sharm el Sheikh’s best reefs. Besides the pristine coral that awaits offshore, the land delivers empty beaches, salt marshes, and diverse birdlife to name a few.",
      },
      {
        title: "White Lagoon",
        text: "Visit White Lagoon, a serene escape and secluded paradise which boasts pristine sandy beaches and azure waters, inviting you to unwind and soak up the atmosphere.",
      },
    ],
  },
  {
    date: "Oct 28",
    imgUrl:
      "https://res.cloudinary.com/tbra/image/upload/v1684750993/LastDay_skrsgh.jpg",
    items: [
      {
        title: "Asking where next?",
        text: "Relish the memories of our time together over breakfast. Build on the connections made and return home inspired and empowered to discover new frontiers to leadership, as individual leaders— a united force of a network.\n\nWe look forward to where next we'll reconvene",
      },
    ],
  },
];

const Itinerary = () => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <section id="itinerary" className="min-h-screen py-16 flex">
      <div className="container flex flex-col">
        <h3 className="font-libreb text-4xl justify-start">Itinerary</h3>
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
                  Day {i} — {itinerary.date}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col grow mt-16">
          <p className="-md:mb-4">Day {activeTab} Activites</p>

          {itineraries.map((itinerary, i) => (
            <div
              key={i}
              className={`${
                activeTab !== i && "hidden"
              } grid md:grid-cols-2 gap-8 md:gap-20 items-center`}
            >
              <div className="grid md:my-8 gap-8">
                {itinerary.items.map((activity, j) => (
                  <div
                    key={j}
                    className="bg-mustard-50 hover:bg-tender-100 p-8"
                  >
                    <h4 className="font-bold">{activity.title}</h4>
                    <p className="mt-2 whitespace-pre-wrap">{activity.text}</p>
                  </div>
                ))}
              </div>
              <img
                src={itinerary.imgUrl}
                alt="Egypt Pyramid"
                className="-sm:order-first md:h-[400px] -sm:w-full mx-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Itinerary;
