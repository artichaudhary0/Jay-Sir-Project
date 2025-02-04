import { Button, Text, Heading, Img, Slider } from "../../components";
import React from "react";

export default function ReviewsSection() {
  const [sliderState, setSliderState] = React.useState(0);
  const sliderRef = React.useRef(null);

  return (
    <div className="mt-12 flex flex-col items-center gap-[50px] overflow-visible">
      {/* Reviews section */}
      <div className="flex flex-col items-center gap-[50px] self-stretch">
        <div className="flex flex-col gap-5 self-stretch overflow-visible">
          <div className="flex justify-center">
            <div className="container-xs flex justify-center px-14 md:px-5">
              <Heading
                size="text5xl"
                as="h2"
                className="text-[45px] font-medium tracking-[-0.50px] !text-purple-900 md:text-[41px] sm:text-[35px]"
              >
                Reviews
              </Heading>
            </div>
          </div>

          {/* Slider Container */}
          <div className="mx-auto flex w-full gap-[50px] md:mx-0 md:flex-col overflow-hidden">
            <Slider
              autoPlay
              autoPlayInterval={2000}
              responsive={{
                0: { items: 1 },
                551: { items: 1 },
                1051: { items: 3 }
              }}
              disableDotsControls
              activeIndex={sliderState}
              onSlideChanged={(e) => setSliderState(e?.item)}
              ref={sliderRef}
              items={[...Array(9)].map((_, i) => (
                <React.Fragment key={i}>
                  <div className="px-[25px] flex justify-center">
                    <div className="flex flex-col items-center justify-center w-full h-[320px] rounded-lg bg-white shadow-2xl border border-gray-200 md:px-6">
                      {/* Quote Section */}
                      <div className="flex flex-col items-center justify-center text-center">
                        <Text
                          size="textm"
                          as="p"
                          className="text-[16px] font-medium leading-[24px] text-blue_gray-700"
                        >
                          {"Lorem ipsum is a dummy or placeholder text. Lorem ipsum is a dummy or placeholder."}
                        </Text>
                      </div>

                      {/* Reviewer Info */}
                      <div className="flex flex-col items-center gap-4 mt-6">
                        <Img
                          src="images/profileImage.png"
                          alt="Profile"
                          className="h-[60px] w-[60px] rounded-full object-cover border border-gray-300"
                        />
                        <div className="flex flex-col items-center">
                          <Heading as="h3" className="text-[18px] font-medium">
                            Mark Doe
                          </Heading>
                          <Text size="textxs" as="p" className="text-[14px] font-normal text-blue_gray-700">
                            Resin artist
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </React.Fragment>
              ))}
            />
          </div>
        </div>
      </div>

      {/* Dots Navigation */}
      <div className="container-xs flex flex-col items-center px-14 md:px-5">
        <div className="flex items-center justify-center">
          {[...Array(3)].map((_, i) => {
            const isActive =
              sliderState >= i * (sliderRef?.current?.state?.itemsInSlide || 1) &&
              sliderState < (i + 1) * (sliderRef?.current?.state?.itemsInSlide || 1);

            return (
              <div
                key={i}
                onClick={() => sliderRef?.current?.slideTo(i * sliderRef?.current?.state?.itemsInSlide)}
                className={`mr-3 inline-block cursor-pointer rounded-full transition-all ${
                  isActive ? "h-[20px] w-[20px] bg-purple-900" : "h-[16px] w-[16px] bg-purple-400"
                }`}
              />
            );
          })}
        </div>
      </div>

      {/* Add Review Button */}
      <div className="container-xs flex flex-col items-center px-14 md:px-5">
        <Button shape="round" className="min-w-[326px] !rounded-br-[20px] !rounded-tl-[20px] px-[34px] tracking-[-0.50px] sm:px-5">
          Add Yours
        </Button>
      </div>
    </div>
  );
}
