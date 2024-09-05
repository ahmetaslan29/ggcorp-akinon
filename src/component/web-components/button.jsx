"use client";
import clsx from "clsx";
import Link from "next/link";
import React from "react";

export const Button = React.forwardRef((props, ref) => {
  const {
    appearance = "filled",
    size = "md",
    href,
    target,
    children,
    className,
    ...rest
  } = props;

  const variants = {
    filled:
      "px-4 h-10 text-xs bg-black text-primary-foreground border border-black transition-all hover:bg-white hover:border-primary hover:text-primary",

    primary:
      "px-4 capitalize h-10 text-xs bg-primary text-primary-foreground border border-primary transition-all hover:bg-white hover:border-primary hover:text-primary",

    outlined:
      "bg-transparent border border-gray text-black hover:bg-black hover:text-primary-foreground",

    ghost:
      "bg-transparent border-transparent text-black hover:bg-black hover:text-primary-foreground",
    link: "px-0 h-auto underline underline-offset-[]",
  };

  const sizes = {
    sm: "h-8",
    md: "h-10",
    lg: "h-[46px]",
    xl: "h-[60px]",
  };

  const buttonClasses = clsx(
    "px-8 text-body-xs-wide transition-all duration-300",
    "inline-flex gap-2 justify-center items-center",
    variants[appearance],
    sizes[size],
    className
  );

  return props.href ? (
    <Link
      target={target}
      ref={ref}
      href={href || "#"}
      className={buttonClasses}
    >
      {children}
    </Link>
  ) : (
    <button {...rest} ref={ref} className={buttonClasses}>
      {children}
    </button>
  );
});
