import { Img, Heading, Text } from "./..";
import React from "react";

export default function MediaOfArtsGallery({
  mainTitle = "Media of Arts",
  acrylicText = "Acrylic",
  oilColorText = "Oil Color",
  pencilColorText = "Pencil Color",
  showMoreText = "Show +5 More",
  showMoreTextColor = "#4B0082",
  imageSrc = "images/g1.png",
  bgColor = "bg-white",
  textColor = "#535454",
  shapes = [],
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex flex-col w-full lg:w-[32%] py-2.5 ${bgColor} shadow-2xl rounded-[10px] transition-transform hover:scale-105`}
    >
      <div className="flex flex-col items-center self-stretch">
        <div className="w-[40%] rounded-[52px] bg-deep_orange-50 p-[18px]">
          <Img src={imageSrc} alt="Media Of Arts" className="h-[62px] w-full" />
        </div>
        <div className="relative mt-[-68px] h-[296px] self-stretch">
          <div className="absolute left-0 right-0 top-[31%] mx-auto flex flex-1 justify-center px-14 md:px-5">
            <Heading
              size="text3xl"
              as="p"
              className={`text-[25px] font-medium tracking-[-0.50px] ${textColor}`}
            >
              {mainTitle}
            </Heading>
          </div>
          <div className="absolute bottom-[-1.33px] left-0 right-0 mx-auto flex flex-1 flex-col items-center gap-2.5 px-12 md:px-5">
            <Text
              as="p"
              className={`text-[20px] font-light tracking-[-0.50px] ${textColor}`}
            >
              {acrylicText}
            </Text>
            <Text
              as="p"
              className={`text-[20px] font-light tracking-[-0.50px] ${textColor}`}
            >
              {oilColorText}
            </Text>
            <Text
              as="p"
              className={`text-[20px] font-light tracking-[-0.50px] ${textColor}`}
            >
              {pencilColorText}
            </Text>
            <Heading
              size="headingxs"
              as="h6"
              className={`text-[16px] font-semibold tracking-[-0.50px] ${
                showMoreTextColor ? `text-[${showMoreTextColor}]` : ""
              }`}
            >
              {showMoreText}
            </Heading>
          </div>

          <div className="absolute left-0 right-0 top-0 mx-auto flex flex-1 flex-col items-center">
            <div className="mr-1.5 flex items-start justify-between gap-5 self-stretch">
              <Img
                src={shapes[0]?.src || "images/square.png"}
                alt={shapes[0]?.alt || "Square"}
                className="mb-4 h-[36px]"
              />
              <Img
                src={shapes[1]?.src || "images/star.png"}
                alt={shapes[1]?.alt || "Star"}
                className="h-[30px] self-end"
              />
            </div>
            <Img
              src={shapes[2]?.src || "images/triangle.png"}
              alt={shapes[2]?.alt || "Triangle"}
              className="ml-[82px] mt-[26px] h-[16px] self-start"
            />
            <Img
              src={shapes[3]?.src || "images/star.png"}
              alt={shapes[3]?.alt || "Star"}
              className="mr-[60px] mt-12 h-[14px] w-[6%] self-end border-[0.5px] border-solid border-red-a700_4c object-contain"
            />
            <div className="ml-3 mt-[54px] flex items-start justify-between gap-5 self-stretch">
              <Img
                src={shapes[4]?.src || "images/triangle.png"}
                alt={shapes[4]?.alt || "Triangle"}
                className="h-[14px]"
              />
              <Img
                src={shapes[4]?.src || "images/triangle.png"}
                alt={shapes[4]?.alt || "Triangle"}
                className="mt-3.5 h-[28px] self-end"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}