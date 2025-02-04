import PropTypes from "prop-types";

const shapes = {
  round: "rounded-tl-[20px] rounded-br-[20px]",
};

const variants = {
  fill: {
    purple_900: "bg-purple-900 text-white",
  },
};

const sizes = {
  xs: "h-[50px] px-[34px] text-[20px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "fill",
  size = "xs",
  color = "purple_900",
  ...restProps
}) => {
  return (
    <button
      className={`${shapes[shape] || ""} ${variants[variant]?.[color] || ""} ${sizes[size] || ""} 
      flex flex-row items-center justify-center font-medium transition-all duration-300 hover:opacity-80 ${className}`}
      {...restProps}
    >
      {!!leftIcon && <span className="mr-2">{leftIcon}</span>}
      {children}
      {!!rightIcon && <span className="ml-2">{rightIcon}</span>}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["xs"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf(["purple_900"]),
};

export { Button };
