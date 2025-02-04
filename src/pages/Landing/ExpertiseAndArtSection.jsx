
import { Heading } from "../../components";
import MediaOfArtsGallery from "../../components/MediaOfArtsGallery";
import React, { Suspense } from "react";

const mediaArtsList = [
  {
    mainTitle: "Media of Arts",
    acrylicText: "Acrylic",
    oilColorText: "Oil Color",
    pencilColorText: "Pencil Color",
    showMoreText: "Show +5 More",
    showMoreTextColor : "#FF5201" ,
    imageSrc: "/images/g1.png",
    bgColor: "bg-white",
    textColor: "text-black",
    shapes: [
      { src: "/images/square.png", alt: "Square", className: "absolute top-5 left-5 h-[40px]" },
      { src: "/images/star.png", alt: "Circle", className: "absolute bottom-10 right-10 h-[20px]" },
      { src: "/images/square.png", alt: "Square", className: "absolute top-5 left-5 h-[40px]" },
      { src: "/images/star.png", alt: "Circle", className: "absolute bottom-10 right-10 h-[20px]" },
      { src: "/images/triangle.png", alt: "Circle", className: "absolute bottom-10 right-10 h-[20px]" },
    ],
  },
  {
    mainTitle: "Work area of Arts",
    acrylicText: "Drawing",
    oilColorText: "Painting",
    pencilColorText: "Painting",
    showMoreText: "Show +5 More",
    showMoreTextColor : "#006CA2" ,
    imageSrc: "/images/g2.png",
    bgColor: "bg-white",
    textColor: "text-black",
    shapes: [
      { src: "/images/square3.png", alt: "Square", className: "absolute top-5 left-5 h-[40px]" },
      { src: "/images/star3.png", alt: "Circle", className: "absolute bottom-10 right-10 h-[20px]" },
      { src: "/images/square3.png", alt: "Square", className: "absolute top-5 left-5 h-[40px]" },
      { src: "/images/star3.png", alt: "Circle", className: "absolute bottom-10 right-10 h-[20px]" },
      { src: "/images/triangle3.png", alt: "Circle", className: "absolute bottom-10 right-10 h-[20px]" },
    ],
    
  },
  {
    mainTitle: "Themes of Arts",
    acrylicText: "Abstract",
    oilColorText: "Portrait",
    pencilColorText: "Landscape",
    showMoreText: "Show +5 More",
    showMoreTextColor : "#4B0082" ,
    imageSrc: "/images/g3.png",
    bgColor: "bg-white",
    textColor: "text-black",
    shapes: [
      { src: "/images/square2.png", alt: "Square", className: "absolute top-5 left-5 h-[40px]" },
      { src: "/images/star2.png", alt: "Circle", className: "absolute bottom-10 right-10 h-[20px]" },
      { src: "/images/square2.png", alt: "Square", className: "absolute top-5 left-5 h-[40px]" },
      { src: "/images/star2.png", alt: "Circle", className: "absolute bottom-10 right-10 h-[20px]" },
      { src: "/images/triangle2.png", alt: "Circle", className: "absolute bottom-10 right-10 h-[20px]" },
    ],
  },
];

export default function ExpertiseAndArtSection() {
  return (
    <div id="art-information" className="mt-[94px] flex flex-col items-center gap-[30px]">
      <div className="flex flex-col items-center justify-center self-stretch">
        <div className="flex justify-center self-stretch">
          <div className="container-xs flex justify-center px-14 md:px-5">
            <Heading
              size="text5xl"
              as="h2"
              className="text-[45px] font-medium tracking-[-0.50px] !text-purple-900 md:text-[41px] sm:text-[35px]"
            >
              My Expertise Area
            </Heading>
          </div>
        </div>
        <div className="container-xs md:px-5 py-5">
          <Heading
            size="headingmd"
            as="h3"
            className="text-center text-[20px] font-semibold leading-[30px] text-gray-500"
          >
            "An artist with a passion for creative expression and a member of the global art community, Art Palette."
          </Heading>
        </div>
        <div className="container-xs md:px-5 py-5">
          <div className="flex flex-row gap-[30px] justify-center flex-nowrap">
              {mediaArtsList.map((item, index) => (
                <MediaOfArtsGallery {...item} key={index} className="shadow-2xl p-6 rounded-lg transition-transform hover:scale-70"/>
              ))}

          </div>
        </div>
      </div>
    </div>
  );
}
