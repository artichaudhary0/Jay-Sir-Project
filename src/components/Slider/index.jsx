import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const Slider = React.forwardRef(
  ({ items = [], activeIndex = 0, centerMode, magnifiedIndex = 0, activeSlideCSS = "scale-80", ...props }, ref) => {
    const isSmall = (index) => {
      if (props?.activeIndex + magnifiedIndex >= items?.length) {
        return index <= props?.activeIndex + magnifiedIndex - items?.length;
      } else {
        return index <= props.activeIndex + magnifiedIndex;
      }
    };

    const slideItems = centerMode
      ? items?.map((child, index) => {
          if (isSmall(index)) {
            return React.cloneElement(child, {
              ...child.props,
              className: [child.props?.className, activeSlideCSS].filter(Boolean).join(" "),
            });
          }
          return React.cloneElement(child);
        })
      : items;

    return (
      <div className="relative w-full overflow-visible">
        <AliceCarousel
          items={slideItems}
          infinite
          ref={ref}
          {...props}
          touchTracking
          mouseTracking
          disableButtonsControls
        />
      </div>
    );
  }
);

export { Slider };
