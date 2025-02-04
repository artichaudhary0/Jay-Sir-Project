
import React from "react";
const sizes = {
textmd: "text-[16px] font-medium",
textlg: "text-[18px] font-medium",
text2xl: "text-[22px] font-medium",
text3xl: "text-[25px] font-medium md:text-[23px] sm:text-[21px]",
text4xl: "text-[30px] font-medium md:text-[28px] sm:text-[26px]",
text5xl: "text-[45px] font-medium md:text-[41px] sm:text-[35px]",
headingxs: "text-[16px] font-semibold",
headings: "text-[18px] font-semibold",
headingmd: "text-[20px] font-semibold",
headinglg: "text-[30px] font-bold md:text-[28px] sm:text-[26px]",
headingxl: "text-[40px] font-semibold md:text-[38px] sm:text-[36px]",
};
const Heading = ({ children, className = "", size = "textmd", as, ...restProps }) => {
const Component = as || "h6";
    return (
            <Component className={`text-blue_gray-900 font-poppins ${className} ${sizes[size]}`} {...restProps}>
            {children}
            </Component>
        );
    };
export { Heading };
