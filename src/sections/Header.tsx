"use client";
import React, { useState } from "react";
import Button, { ButtonVariant } from "@/components/Button";
import { twMerge } from "tailwind-merge";
import Orbit from "@/components/Orbit";
import Logo from "@/components/Logo";
export const navItems = [
  {
    name: "Features",
    href: "#features",
  },
  {
    name: "Pricing",
    href: "#pricing",
  },
  {
    name: "Testimonials",
    href: "#testimonials",
  },
];

export const loginItems = [
  {
    buttonVariant: "tertiary",
    name: "Login",
    href: "#login",
  },
  {
    buttonVariant: "primary",
    name: "Sign Up",
    href: "#sign-up",
  },
] satisfies {
  name: string;
  href: string;
  buttonVariant: ButtonVariant["variant"];
}[];
export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const aClick = (e: { preventDefault: () => void }, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      setIsOpen(false);
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <header className="border-b border-gray-200/20 relative z-40">
        <div className="container">
          <div className="h-18 lg:h-20 justify-between flex items-center">
            <div className="flex gap-4 items-center">
              <Logo />
              <div className="font-extrabold text-2xl">sphereal.ai</div>
            </div>
            <div className="h-full hidden lg:block">
              <nav className="h-full">
                {navItems.map((item) => (
                  <a
                    className='h-full px-10 relative font-bold text-xs tracking-widest text-gray-400 uppercase inline-flex items-center before:content-[""] before:absolute before:bottom-0 before:h-2 before:w-px before:bg-gray-200/20 before:left-0 last:after:absolute last:after:bottom-0 last:after:h-2 last:after:w-px last:after:bg-gray-200/20 last:after:right-0 '
                    key={item.name}
                    href={item.href}
                    onClick={(e) => aClick(e, item.href)}
                  >
                    {item.name}
                  </a>
                ))}
              </nav>
            </div>
            <div className="hidden lg:flex gap-4">
              {loginItems.map((item) => (
                <a key={item.name} href={item.href}>
                  <Button key={item.name} variant={item.buttonVariant}>
                    {item.name}
                  </Button>
                </a>
              ))}
            </div>
            <div className="flex items-center lg:hidden">
              <button
                className="size-10 rounded-lg relative border-2 border-transparent [background:linear-gradient(var(--color-gray-950),var(--color-gray-950))_content-box,conic-gradient(from_45deg,var(--color-violet-400),var(--color-fuchsia-400),var(--color-amber-300),var(--color-teal-300),var(--color-violet-400))_border-box]"
                onClick={() => setIsOpen(!isOpen)}
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div
                    className={twMerge(
                      "w-4 h-0.5 bg-gray-100 -translate-y-1 transition-all duration-300",
                      isOpen && "translate-y-0 rotate-45"
                    )}
                  ></div>
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div
                    className={twMerge(
                      "w-4 h-0.5 bg-gray-100 translate-y-1 transition-all duration-300",
                      isOpen && "translate-y-0 -rotate-45"
                    )}
                  ></div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>
      {isOpen && (
        <div className="fixed top-18 left-0 right-0 bottom-0 bg-gray-950 z-30 overflow-hidden">
          <Orbit className="size-[200px]" />
          <Orbit className="size-[350px]" />
          <Orbit className="size-[500px]" />
          <Orbit className="size-[650px]" />
          <Orbit className="size-[800px]" />
          <div className="container h-full">
            <nav className="flex flex-col gap-4 items-center py-8 h-full justify-center">
              {navItems.map((item) => (
                <a
                  className="text-gray-400 uppercase tracking-widest text-xs font-bold h-10"
                  key={item.name}
                  href={item.href}
                  onClick={(e) => aClick(e, item.href)}
                >
                  {item.name}
                </a>
              ))}
              {loginItems.map((item) => (
                <a key={item.name} href={item.href} className="w-full max-w-xs">
                  <Button block variant={item.buttonVariant}>
                    {item.name}
                  </Button>
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
