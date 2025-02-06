

import { Text, Img, Heading } from "../../components";
import React from "react";

export default function LandingPageMainSection() {
  return (
    <div id="about" className="flex flex-col items-center px-5 mt-16">
      {/* Main Container */}
      <div className="flex flex-col items-center justify-center gap-16 w-full">
        {/* Mobile Name and Designation Section (visible only on mobile) */}
        <div className="flex lg:hidden flex-col items-center text-center">
          <Heading 
            className="text-4xl sm:text-5xl font-extrabold text-black" 
            style={{
              fontFamily: "Poller One",
              fontWeight: "regular",
            }}
          >
            John Doe
          </Heading>

          <Text
            className="text-3xl sm:text-[62px] font-semibold text-[#FF5201] mt-4"
            style={{
              fontFamily: "Sacramento",
              fontSize: "62px",
              marginTop: "20px",
              fontWeight: "normal",
            }}
          >
            Artist
          </Text>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-16 w-full">
          {/* Left Section (Profile and Visitors) */}
          <div className="flex flex-col items-center mb-8 lg:mb-0">
            <div className="relative w-[350px] h-[350px] sm:w-[500px] sm:h-[470px] flex items-center justify-center">
              {/* Background Shape */}
              <div
                className="absolute inset-0 bg-cover bg-no-repeat rounded-full"
                style={{ backgroundImage: "url(images/img_group_1.svg)" }}
              ></div>
              {/* Profile Image */}
              <Img
                src="images/profile.png"
                alt="Profile"
                className="relative w-full h-full object-cover rounded-full border-4 border-white"
              />
            </div>
            {/* Visitors Section */}
            <Heading className="text-[20px] sm:text-[30px] text-[#FF5201] font-semibold mt-4">
              Total Visitors: 50
            </Heading>
          </div>

          {/* Right Section (Text Content) */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* Desktop Name and Designation Section (visible only on desktop) */}
            <div className="hidden lg:block">
              <Heading 
                className="text-4xl sm:text-5xl font-extrabold text-black" 
                style={{
                  fontFamily: "Poller One",
                  fontWeight: "regular",
                }}
              >
                John Doe
              </Heading>

              <Text
                className="text-3xl sm:text-[62px] font-semibold text-[#FF5201] mt-4"
                style={{
                  fontFamily: "Sacramento",
                  fontSize: "62px",
                  marginTop: "20px",
                  fontWeight: "normal",
                }}
              >
                Artist
              </Text>
            </div>

            <Heading className="text-[20px] sm:text-[30px] font-medium text-purple-900 mt-4">
              About Us
            </Heading>

            <Text className="text-lg sm:text-2xl text-gray-700 max-w-2xl font-semibold mt-4">
              "Bringing ideas to life through art, where every piece tells a
              story, sparks emotion, and celebrates creativity in all its forms."
            </Text>
            
            {/* Education Section */}
            <div className="hidden sm:block w-full max-w-lg rounded-lg bg-white p-6 shadow-2xl mt-8">
              <div className="flex items-center gap-4">
                <Img src="images/degree.png" alt="Degree" className="h-7" />
                <Text className="text-lg font-medium">
                  Bachelor of Fine Art (BFA)
                </Text>
              </div>
              <div className="flex items-center gap-4 mt-5">
                <Img src="images/bank.png" alt="University" className="h-6" />
                <Text className="text-lg font-medium">
                  Veer Narmad South Gujarat University
                </Text>
              </div>
              <div className="flex items-center gap-4 mt-5">
                <Img src="images/location.png" alt="Location" className="h-6" />
                <Text className="text-lg font-medium">Surat, Gujarat, India</Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    // <div id="about" className="flex flex-col items-center px-5">
    //   {/* Main Container */}
    //   <div className="flex flex-col lg:flex-row items-center justify-center gap-16 w-full">
    //     {/* Left Section (Profile and Visitors) */}
    //     <div className="flex flex-col items-center mb-8 lg:mb-0">
    //       <div className="relative w-[350px] h-[350px] sm:w-[500px] sm:h-[470px] flex items-center justify-center">
    //         {/* Background Shape */}
    //         <div
    //           className="absolute inset-0 bg-cover bg-no-repeat rounded-full"
    //           style={{ backgroundImage: "url(images/img_group_1.svg)" }}
    //         ></div>
    //         {/* Profile Image */}
    //         <Img
    //           src="images/profile.png"
    //           alt="Profile"
    //           className="relative w-full h-full object-cover rounded-full border-4 border-white"
    //         />
    //       </div>
    //       {/* Visitors Section */}
    //       <Heading className="text-[20px] sm:text-[30px] text-[#FF5201] font-semibold mt-4">
    //         Total Visitors: 50
    //       </Heading>
    //     </div>

    //     {/* Right Section (Text Content) */}
    //     <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
    //       <Heading className="text-4xl sm:text-5xl font-extrabold text-black" style={{
    //           fontFamily: "Poller One",
    //           fontWeight: "regular",
    //         }}>
    //         John Doe
    //       </Heading>

    //       <Text
    //         className="text-3xl sm:text-[62px] font-semibold text-[#FF5201] mt-4"
    //         style={{
    //           fontFamily: "Sacramento",
    //           fontSize: "62px",
    //           marginTop: "20px",
    //           fontWeight: "normal",
    //         }}
    //       >
    //         Artist
    //       </Text>

    //       <Heading className="text-[20px] sm:text-[30px] font-medium text-purple-900 mt-4">
    //         About Us
    //       </Heading>

    //       <Text className="text-lg sm:text-2xl text-gray-700 max-w-2xl font-semibold mt-4">
    //         "Bringing ideas to life through art, where every piece tells a
    //         story, sparks emotion, and celebrates creativity in all its forms."
    //       </Text>
    //       {/* Education Section */}
    //       <div className="hidden sm:block w-full max-w-lg rounded-lg bg-white p-6 shadow-2xl mt-8">
    //         <div className="flex items-center gap-4">
    //           <Img src="images/degree.png" alt="Degree" className="h-7" />
    //           <Text className="text-lg font-medium">
    //             Bachelor of Fine Art (BFA)
    //           </Text>
    //         </div>
    //         <div className="flex items-center gap-4 mt-5">
    //           {" "}
    //           {/* Increased margin-top */}
    //           <Img src="images/bank.png" alt="University" className="h-6" />
    //           <Text className="text-lg font-medium">
    //             Veer Narmad South Gujarat University
    //           </Text>
    //         </div>
    //         <div className="flex items-center gap-4 mt-5">
    //           {" "}
    //           {/* Increased margin-top */}
    //           <Img src="images/location.png" alt="Location" className="h-6" />
    //           <Text className="text-lg font-medium">Surat, Gujarat, India</Text>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}
