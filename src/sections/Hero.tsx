"use client";
import robotImage from "@/assets/images/robot.jpg";
import Button from "@/components/Button";
import underlineImage from "@/assets/images/underline.svg?url";
import Loader from "@/assets/images/loader-animated.svg";
import Image from "next/image";
import Orbit from "@/components/Orbit";
import Planet from "@/components/Planet";
import SectionBorder from "@/components/SectionBorder";
import SectionContent from "@/components/SectionContent";
import {
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

const useMousePosition = () => {
  const [innerWidth, setInnerWidth] = useState(1);
  const [innerHeight, setInnerHeight] = useState(1);
  const clientX = useMotionValue(0);
  const clientY = useMotionValue(0);
  const xProgress = useTransform(clientX, [0, innerWidth], [0, 1]);
  const yProgress = useTransform(clientY, [0, innerHeight], [0, 1]);

  useEffect(() => {
    setInnerWidth(window.innerWidth);
    setInnerHeight(window.innerHeight);
    window.addEventListener("resize", () => {
      setInnerWidth(window.innerWidth);
      setInnerHeight(window.innerHeight);
    });
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", (e: MouseEvent) => {
      clientX.set(e.clientX);
      clientY.set(e.clientY);
    });
  }, []);
  return { xProgress, yProgress };
};

export const Hero = () => {
  const { xProgress, yProgress } = useMousePosition();

  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["end start", "start end"],
  });
  const springX = useSpring(xProgress);
  const springY = useSpring(yProgress);
  const transformedY = useTransform(scrollYProgress, [0, 1], [300, -300]);
  const transLateLargeX = useTransform(springX, [0, 1], ["-25px", "25px"]);
  const transLateLargeY = useTransform(springY, [0, 1], ["-25px", "25px"]);
  const transLateSmallX = useTransform(springX, [0, 1], ["-50px", "50px"]);
  const transLateSmallY = useTransform(springY, [0, 1], ["-50px", "50px"]);
  const transLateMediumX = useTransform(springX, [0, 1], ["-100px", "100px"]);
  const transLateMediumY = useTransform(springY, [0, 1], ["-100px", "100px"]);

  return (
    <section ref={sectionRef}>
      <div className="container">
        <SectionBorder>
          <SectionContent className="relative isolate  [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_50%,transparent)]">
            <div className="absolute -z-10 inset-0 bg-[radial-gradient(circle_farthest-corner,var(--color-fuchsia-900)_50%,var(--color-indigo-900)_75%,transparent)] [mask-image:radial-gradient(circle_farthest-corner,black,transparent)]"></div>
            <div className="absolute inset-0 -z-10">
              <Orbit className="size-[350px]" />
              <Orbit className="size-[600px]" />
              <Orbit className="size-[850px]" />
              <Orbit className="size-[1100px]" />
              <Orbit className="size-[1350px]" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-100 max-w-3xl mx-auto text-center leading-tight">
              Unlock the Future of AI Conversations with{" "}
              <span className="relative">
                <span>Sphereal</span>
                <span
                  className="absolute w-full left-0 top-full -translate-y-1/2 h-4 bg-[linear-gradient(to_right,var(--color-amber-300),var(--color-teal-300),var(--color-violet-400),var(--color-fuchsia-400))]"
                  style={{
                    maskImage: `url(${underlineImage.src})`,
                    maskSize: "contain",
                    maskPosition: "center",
                    maskRepeat: "no-repeat",
                  }}
                ></span>
              </span>
            </h1>
            <p className="text-center mt-8 max-w-3xl mx-auto text-lg md:text-xl lg:text-2xl">
              Harness the power of AI with Sphereal. Elevate your productivity
              and streamline your workflows with our cutting-edge AI chat
              platform
            </p>
            <div className="flex justify-center">
              <Button variant="secondary" className="mt-10">
                Start Chatting
              </Button>
            </div>
            <div className="relative isolate max-w-5xl mx-auto">
              <motion.div
                style={{
                  x: transLateLargeX,
                  y: transLateLargeY,
                }}
              >
                <Planet
                  color="violet"
                  size="lg"
                  className="-translate-x-[310px] -translate-y-[76px] rotate-135"
                />
              </motion.div>
              <motion.div
                style={{
                  x: transLateLargeX,
                  y: transLateLargeY,
                }}
              >
                <Planet
                  color="violet"
                  size="lg"
                  className="translate-x-[334px] -translate-y-[188px] -rotate-135"
                />
              </motion.div>
              <motion.div
                style={{
                  x: transLateMediumX,
                  y: transLateMediumY,
                }}
              >
                <Planet
                  color="teal"
                  size="md"
                  className="translate-x-[480px] -translate-y-[320px] rotate-135"
                />
              </motion.div>
              <motion.div
                style={{
                  x: transLateSmallX,
                  y: transLateSmallY,
                }}
              >
                <Planet
                  color="fuchsia"
                  size="sm"
                  className="-translate-x-[508px] -translate-y-[372px] rotate-135"
                />
              </motion.div>

              <div className="absolute top-[30%] left-0 z-10 -translate-x-10 hidden lg:block">
                <motion.div
                  className="bg-gray-800/70 backdrop-blur-md border border-gray-700 rounded-xl p-4 w-72"
                  style={{
                    y: transformedY,
                  }}
                >
                  <div>
                    Can you generae an icredible frontend de video tutorial?
                  </div>
                  <div className="text-right text-gray-400 text-sm font-semibold">
                    1m ago
                  </div>
                </motion.div>
              </div>
              <div className="absolute top-[50%] right-0 z-10 translate-x-10 hidden lg:block">
                <motion.div
                  className="bg-gray-800/70 backdrop-blur-md border border-gray-700 rounded-xl p-4 w-72"
                  style={{
                    y: transformedY,
                  }}
                >
                  <div>
                    <strong>Brainwave:</strong>I created one based on videos
                    from Frontend Tribe!
                  </div>
                  <div className="text-right text-gray-400 text-sm font-semibold">
                    Just now
                  </div>
                </motion.div>
              </div>
              <div className="mt-20 rounded-2xl border-2 overflow-hidden border-gradient relative flex">
                <Image src={robotImage} alt="robot" />
                <div className="absolute bottom-2 md:bottom-4 lg:bottom-10 left-1/2 -translate-x-1/2 w-full max-w-xs px-[15px]">
                  <div className="bg-gray-950/80 flex items-center gap-4 px-4 py-2 rounded-2xl w-[320px] max-w-full mx-auto">
                    <Loader className="text-violet-400" />
                    <div className="font-semibold text-xl text-gray-100">
                      AI is generating{" "}
                      <span className="animate-cursor-blink">|</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SectionContent>
        </SectionBorder>
      </div>
    </section>
  );
};

export default Hero;
