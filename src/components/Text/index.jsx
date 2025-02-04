import React from "react";  
const sizes = {  
textxs: "text-[12px] font-normal",  
texts: "text-[14px] font-normal",  
textxl: "text-[20px] font-normal",  
text6xl: "text-[60px] font-normal md:text-[52px] sm:text-[46px]",  
text7xl: "text-[61px] font-normal md:text-[48px]",  
};  
const Text = ({ children, className = "", as, size = "textxl", ...restProps }) => {  
const Component = as || "p";  
return (  
<Component className={`text-blue_gray-900 font-poppins ${className} ${sizes[size]}`} {...restProps}>  
{children}  
</Component>  
);  
};  
export { Text };