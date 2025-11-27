import Card from "./Card";
import { ArrowUpRight } from "lucide-react";

const Hero = () => {
  const cardData = [
    {
      img: "https://images.unsplash.com/photo-1561643241-9abf82d76a68?w=500&auto=format&fit=crop&q=60",
      count: 1,
      desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      btn: "Learn More",
    },
    {
      img: "https://images.unsplash.com/photo-1588516903720-8ceb67f9ef84?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d29tZW58ZW58MHx8MHx8fDA%3D",
      count: 2,
      desc: "Warm smiles and soft vibes — creating moments that feel real.",
      btn: "Explore More",
    },

    {
      img: "https://images.unsplash.com/photo-1589696709084-5d65d0343dd4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA0fHx3b21lbnxlbnwwfHwwfHx8MA%3D%3D",
      count: 3,
      desc: "Elegance captured in every frame — timeless beauty and style.",
      btn: "View Details",
    },

    {
      img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=60",
      count: 4,
      desc: "Confidence, expression, and attitude — a perfect modern portrait.",
      btn: "Discover Now",
    },
    {
      img: "https://images.unsplash.com/photo-1598554793905-075f7b355cd9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAzfHx3b21lbnxlbnwwfHwwfHx8MA%3D%3D",
      count: 5,
      desc: "A bold expression of natural confidence and modern elegance.",
      btn: "Read More",
    },

    {
      img: "https://images.unsplash.com/photo-1546578623-d1d3af878403?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAwfHx3b21lbnxlbnwwfHwwfHx8MA%3D%3D",
      count: 6,
      desc: "Capturing smiles that speak louder than words — warm & pure.",
      btn: "See More",
    },

    {
      img: "https://images.unsplash.com/photo-1488716820095-cbe80883c496?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjQ4fHx3b21lbnxlbnwwfHwwfHx8MA%3D%3D",
      count: 7,
      desc: "Gentle tones, soft lighting, and a picture that tells a story.",
      btn: "View More",
    },
  ];
  return (
    <div className="flex justify-between items-center p-6">
      <div className="h-[650px] w-[400px]">
        <div className="p-4">
          <h1 className="text-black text-6xl font-bold">
            Prospective <br /> customer <br /> segmentation
          </h1>
          <p className="text-black font-semibold text-2xl mt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero,
            itaque quis! Consectetur hic libero officia dicta aliquam eaque
            culpa laudantium.
          </p>
          <ArrowUpRight size={74} color="black" className="mt-10" />
        </div>
      </div>
      <div className="h-[650px] w-[1100px] p-4 flex gap-2 overflow-x-scroll">
        {cardData.map((card, index) => (
          <Card
            key={index}
            img={card.img}
            count={card.count}
            desc={card.desc}
            btn={card.btn}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
