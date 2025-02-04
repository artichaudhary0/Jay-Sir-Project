import { Text, Img, Heading } from "./..";
import React from "react";

export default function Footer({ ...props }) {
  return (
    <footer id="contact"
      {...props}
      className={`${props.className} flex flex-col mt-[100px] relative shadow-[0px_-10px_20px_-5px_rgba(0,0,0,0.1)]`}
    >
      {/* Main Container: Ensuring Side-by-Side Layout on Larger Screens */}
      <div className="flex flex-col sm:flex-row items-start justify-between gap-10 self-stretch bg-white-a700 px-10 py-[18px]">
        
        {/* Left Section - Logo, Heading, and Email */}
        <div className="flex w-full sm:w-[40%] flex-col mb-6 sm:mb-0">
          <div className="flex items-center gap-3"> {/* Increased spacing */}
            <Img src="images/image.png" alt="Logo" className="h-[46px] object-cover" />
            <Heading size="headingxl" as="h1" className="text-[40px] font-bold">
              John Art
            </Heading>
          </div>
          <div className="mt-4 p-2.5"> {/* Increased top margin */}
            <Heading size="textlg" as="p" className="text-[18px] font-normal leading-[27px]">
              Our platform is trusted by millions, & features a portfolio of financial product offers
            </Heading>
            <Text as="p" className="mt-3 text-[20px] font-medium !text-purple-900">
              johndoeart123@gmail.com
            </Text>
          </div>
        </div>

        {/* Middle Section - Quick Links */}
        <div className="flex w-full sm:w-[20%] flex-col items-start mb-6 sm:mb-0">
          <Heading size="textlg" as="p" className="text-[18px] font-medium mb-4">
            QUICK LINKS
          </Heading>
          <ul className="flex flex-col items-start gap-3">
            {["Home", "About", "Gallery", "Achievements", "Contact"].map((item) => (
              <li key={item}>
                <a href={item} target="_blank" rel="noreferrer">
                  <Text size="texts" as="p" className="text-[14px] font-normal">{item}</Text>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Section - Contact Details */}
        <div className="flex w-full sm:w-[25%] flex-col items-start mb-6 sm:mb-0">
          <Heading size="textlg" as="p" className="!font-roboto text-[18px] font-medium mb-4">
            CONTACT
          </Heading>
          <div className="flex items-center gap-3">
            <Img src="images/settings.png" alt="Settings" className="h-[24px]" />
            <div className="flex flex-col items-start gap-2"> {/* Increased spacing */}
              <Text size="textxs" as="p" className="text-[12px] font-medium">Have Any Question?</Text>
              <Text size="textxs" as="p" className="text-[12px] font-medium">+91 7845123695</Text>
            </div>
          </div>
          <div className="flex gap-4 mt-4"> {/* Increased margin */}
            <Img src="/images/whatsapp.png" alt="WhatsApp" className="h-[30px]" />
            <Img src="/images/facebook.png" alt="Facebook" className="h-[30px]" />
            <Img src="images/insta.png" alt="Instagram" className="h-[30px]" />
            <Img src="images/pintrest.png" alt="Pinterest" className="h-[30px]" />
          </div>
        </div>

      </div>

      {/* Footer Bottom Text */}
      <div className="flex justify-center self-stretch border-t border-solid border-purple-100 bg-white-a700 py-2.5">
        <div className="container-xs flex justify-center px-14">
          <Text as="p" className="text-[20px] font-normal tracking-[-0.40px] !text-blue_gray-700">
            © 2025 Johnart. All rights reserved
          </Text>
        </div>
      </div>
      
    </footer>
  );
}
