import { Button, Img, Heading } from "../../components";
import React from "react";

export default function ArtGallerySection() {
  return (
    <div id="art-gallery" className="mt-[92px] flex flex-col items-center gap-[38px]">
      <div className="self-stretch">
        <div className="flex flex-col items-center gap-[78px] md:gap-[58px] sm:gap-[39px]">
          {/* Section Title */}
          <div className="container-xs flex flex-col items-center px-14 md:px-5">
            <Heading
              size="text5xl"
              as="h2"
              className="text-[45px] font-medium tracking-[-0.50px] !text-purple-900 md:text-[41px] sm:text-[35px]"
            >
              Art Gallery
            </Heading>
          </div>

          {/* Image Grid - Keep Three Sections in a Single Row */}
          <div className="flex flex-row flex-wrap gap-4 px-4">
            {/* First Column - Large Image */}
            <Img
              src="images/artgallary1.png"
              alt="Image 1"
              className="h-[416px] md:h-[416px] sm:h-[300px] flex-1 min-w-0 rounded-[10px] object-cover"
            />

            {/* Second Column - Two Stacked Images */}
            <div className="flex flex-col flex-1 gap-4 min-w-0">
              <div className="flex flex-row gap-4">
                <Img
                  src="images/artgallary2.png"
                  alt="Image 2"
                  className="h-[198px] md:h-[198px] sm:h-[150px] flex-1 min-w-0 rounded-[10px] object-cover"
                />
                <Img
                  src="images/artgallary3.png"
                  alt="Image 3"
                  className="h-[198px] md:h-[198px] sm:h-[150px] flex-1 min-w-0 rounded-[10px] object-cover"
                />
              </div>
              <Img
                src="images/artgallary4.png"
                alt="Image 4"
                className="h-[198px] md:h-[198px] sm:h-[150px] w-full rounded-[10px] object-cover"
              />
            </div>

            {/* Third Column - Single Large Image */}
            <Img
              src="images/artgallary5.png"
              alt="Image 5"
              className="h-[416px] md:h-[416px] sm:h-[300px] flex-1 min-w-0 rounded-[10px] object-cover"
            />
          </div>

          {/* See All Button */}
          <div className="container-xs flex flex-col items-center px-14 md:px-5">
            <Button
              shape="round"
              className="min-w-[326px] !rounded-br-[20px] !rounded-tl-[20px] px-[34px] tracking-[-0.50px] bg-purple-900 text-white"
            >
              See All
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
