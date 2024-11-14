"use client";
import { cva } from "class-variance-authority";
import { HTMLAttributes, useEffect, useState } from "react";
import {
  animate,
  motion,
  useMotionTemplate,
  useMotionValue,
} from "framer-motion";
const classes = cva(
  "text-xs tracking-widest uppercase font-bold h-10 px-6 rounded-lg",
  {
    variants: {
      block: {
        true: "w-full",
      },
      variant: {
        primary: "border-gradient",
        tertiary: "bg-gray-800 text-gray-200",
        secondary: "bg-gray-100 text-gray-950",
      },
    },
    defaultVariants: {
      variant: "primary",
      block: false,
    },
  }
);

export type ButtonVariant = {
  variant?: "primary" | "tertiary" | "secondary";
  block?: boolean;
} & HTMLAttributes<HTMLButtonElement>;

const Button = (props: ButtonVariant) => {
  const { className = "", variant = "primary", children, ...rest } = props;
  const [isHover, setIsHover] = useState(false);
  const angel = useMotionValue(45);
  const background = useMotionTemplate`linear-gradient(var(--color-gray-950),var(--color-gray-950)) padding-box,conic-gradient(from ${angel}deg,var(--color-violet-400),var(--color-fuchsia-400),var(--color-amber-300),var(--color-teal-300),var(--color-violet-400)) border-box`;
  useEffect(() => {
    if (isHover) {
      animate(angel, angel.get() + 360, {
        duration: 1,
        ease: "linear",
        repeat: Infinity,
      });
    } else {
      animate(angel, 45 + 360, {
        duration: 0.5,
      });
    }
  }, [isHover, angel]);
  return (
    <motion.button
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className={classes({ ...rest, variant, className })}
      style={variant === "primary" ? { background } : {}}
    >
      {children}
    </motion.button>
  );
};

export default Button;
