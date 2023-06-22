/* eslint-disable @next/next/no-img-element */
const profiles = [
    {
        name: "Zimbini Hill",
        title: "Chair, Independent Development Trust and Founder, Hluma Media",
        imgUrl: "https://res.cloudinary.com/tbra/image/upload/v1686148450/ZimbiniHill_xjpxzc.jpg",
    },
    {
        name: "Rachel More Oshodi",
        title: "Deputy VP Commercial Sales, Africa, TotalEnergies and Founder, Ruwah",
        imgUrl: "https://res.cloudinary.com/tbra/image/upload/v1686148376/Rachel_ifoe7s.jpg",
    },
    {
        name: "Linda Songa Mateza",
        title: "Strategic Executive: Retirement Funds, Liberty Group",
        imgUrl: "https://res.cloudinary.com/tbra/image/upload/v1686148558/mateza_opr2ym.jpg",
    },
    {
        name: "Nieros Oyegun-Soerensen",
        title: "Partner & COO, Verod Capital Management",
        imgUrl: "https://res.cloudinary.com/tbra/image/upload/v1686148636/Nieros_a1ys1v.jpg",
    },
    {
        name: "Ayesha Bedwei Ibe",
        title: "Global People Leader-Tax and Legal Services, PwC",
        imgUrl: "https://res.cloudinary.com/tbra/image/upload/v1686148685/Ayesha_qipujl.jpg",
    },
    {
        name: "Rosalind Kainyah, MBE",
        title: "MD, Kina Advisory, and Sustainability Advisor",
        imgUrl: "https://res.cloudinary.com/tbra/image/upload/v1686150864/Rosalind_eb8ljc.jpg",
    },
    {
        name: "Christal Jackson",
        title: "Founder, Mosaic Genius and Impact & Equity Architect",
        imgUrl: "https://res.cloudinary.com/tbra/image/upload/v1686148773/Christal_eropr9.jpg",
    },
    {
        name: "Dr. Thema Bryant",
        title: "Professor, Pepperdine University Graduate School of Education and Psychology",
        imgUrl: "https://res.cloudinary.com/tbra/image/upload/v1686148816/Thema_lwwboo.jpg",
    },
    {
        name: "Bola Tinubu, CDir",
        title: "Partner, Olajide Oyewole LLP, and Chair, TheBoardroom Africa",
        imgUrl: "https://web.theboardroomafrica.com/wp-content/uploads/2021/02/WhatsApp-Image-2021-02-10-at-14.57.31.jpeg",
    },
    {
        name: "Dr Ije Anusim",
        title: "Co-Founder & Director, Insurance, Dot",
        imgUrl: "https://res.cloudinary.com/tbra/image/upload/v1686150427/Ije_pcr2g3.jpg",
    },
    {
        name: "Annabel Tagoe-Bannerman",
        title: "Group General Counsel, Bakkavor",
        imgUrl: "https://res.cloudinary.com/tbra/image/upload/v1687420972/Annabel_vi5fjx.jpg",
    },
    {
        name: "Patience Akyianu",
        title: "Group CEO, Hollard Ghana",
        imgUrl: "https://res.cloudinary.com/tbra/image/upload/v1687420972/Patience_he4bjt.jpg",
    },
    {
        name: "Roslyn Artis",
        title: "President, Benedict College",
        imgUrl: "https://res.cloudinary.com/tbra/image/upload/v1687420972/Roslyn_lihecl.jpg",
    },
    {
        name: "Anita De Werd",
        title: "CEO, Finwerd Flavours & Fragrances",
        imgUrl: "https://res.cloudinary.com/tbra/image/upload/v1687420972/Anita_blqkbv.jpg",
    },
    {
        name: "Nassima Sadar",
        title: "French Foreign Trade Advisor, Board Member, Investment Specialist",
        imgUrl: "https://res.cloudinary.com/tbra/image/upload/v1687420973/Nassima_mefrtf.jpg",
    },
];

const Gallery = () => {
    return (
        <section className="py-16 bg-gray-50" id="participants">
            <div className="container">
                <h3 className="font-libreb text-4xl">Who is coming?</h3>
                <div className=" grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-center mt-10">
                    {profiles.map((profile, i) => (
                        <div key={i} className="profile">
                            <img
                                src={`${
                                    profile.imgUrl ??
                                    "https://via.placeholder.com/400x400"
                                }`}
                                alt=""
                                className="rounded w-full md:h-[220px] object-cover object-top"
                            />
                            <div className="px-1">
                                <h4 className="font-bold text-md mt-2">
                                    {profile.name}
                                </h4>
                                <p>{profile.title}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
