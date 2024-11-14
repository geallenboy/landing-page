"use client";
import React from "react";
import {
  faYoutube,
  faXTwitter,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export const navItems = [
  {
    name: "功能",
    href: "#features",
  },
  {
    name: "定价",
    href: "#pricing",
  },
  {
    name: "客户评价",
    href: "#testimonials",
  },
  {
    name: "登录",
    href: "#login",
  },
];

export const socialLinks = [
  {
    name: "YouTube",
    icon: faYoutube,
    href: "#youtube",
  },
  {
    name: "X",
    icon: faXTwitter,
    href: "#x",
  },
  {
    name: "Discord",
    icon: faDiscord,
    href: "#discord",
  },
];

export const Footer = () => {
  return (
    <footer className="border-t border-[var(--color-border)]">
      <div className="container py-8">
        <div className="flex flex-col lg:flex-row lg:justify-between items-center gap-8">
          <div className="font-extrabold text-2xl">sphereal.ai</div>
          <nav className="flex flex-col md:flex-row gap-8 md:gap-16 item-center">
            {navItems.map((item) => (
              <a
                href={item.href}
                key={item.name}
                className="uppercase text-xs tracking-widest font-bold text-gray-400"
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.querySelector(item.href);
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                {item.name}
              </a>
            ))}
          </nav>
        </div>
        <div className="flex flex-col md:flex-row-reverse md:justify-between items-center gap-8 md:gap-16 mt-16">
          <div className="flex gap-6 justify-center">
            {socialLinks.map((item) => (
              <a href={item.href} key={item.name}>
                <div className="size-10 rounded-full bg-gray-900 flex items-center justify-center">
                  <FontAwesomeIcon icon={item.icon} className="size-4  " />
                </div>
              </a>
            ))}
          </div>
          <p className="text-sm text-gray-500">&copy; xxx, 版权所有.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
