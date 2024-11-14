"use client";
import React, { useState } from "react";
import AshwinSantiago from "@/assets/images/ashwin-santiago.jpg";
import AlecWhitten from "@/assets/images/alec-whitten.jpg";
import ReneWells from "@/assets/images/rene-wells.jpg";
import MollieHall from "@/assets/images/mollie-hall.jpg";
import SectionContent from "@/components/SectionContent";
import SectionBorder from "@/components/SectionBorder";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
export const testimonials = [
  {
    quote:
      "Sphereal 完全改变了我们协作的方式。AI 聊天机器人的任务自动化和提供有洞察力的建议功能每周为我们节省了几个小时。它现在已经是我们工作流程中不可或缺的一部分。",
    name: "Ashwin Santiago",
    title: "运营经理",
    image: AshwinSantiago,
  },
  {
    quote:
      "Sphereal 与我们现有的工具无缝集成，AI 聊天机器人就像是我们团队的自然延伸。它的响应准确无误，并且总是从我们的互动中不断学习。",
    name: "Alec Whitten",
    title: "首席开发员",
    image: AlecWhitten,
  },
  {
    quote:
      "Sphereal 的 AI 将我们的客户服务提升到了一个全新的水平。它的实时响应和个性化建议帮助我们比以往更快地满足客户需求。我无法想象没有它的支持团队。",
    name: "Rene Wells",
    title: "客户成功经理",
    image: ReneWells,
  },
  {
    quote:
      "我从未见过像 Sphereal 这样的工具。它直观、反应迅速，帮助我们精简了通常需要几天时间的项目。AI 的准确性和速度无与伦比。",
    name: "Mollie Hall",
    title: "产品设计师",
    image: MollieHall,
  },
];

export const Testimonials = () => {
  const [selectedTestimonialIndex, setSelectedTestimonialIndex] = useState(0);

  return (
    <section id="testimonials">
      <div className="container">
        <SectionBorder borderTop>
          <SectionContent>
            <LayoutGroup>
              <motion.div
                layout
                className="border-gradient rounded-3xl px-6 md:px-10 lg:px-16 py-16 lg:py-24 relative flex flex-col md:flex-row  gap-12 md:mx-10 lg:mx-20"
                layoutId="testimonial-container"
              >
                <FontAwesomeIcon
                  icon={faQuoteLeft}
                  className="absolute size-20 text-violet-400 top-0 left-6 md:left-10 lg:left-16 -translate-y-1/2"
                />
                <AnimatePresence mode="wait" initial={false}>
                  {testimonials.map((testimonial, index) =>
                    selectedTestimonialIndex === index ? (
                      <motion.blockquote
                        key={testimonial.name}
                        layout
                        className="flex flex-col lg:flex-row gap-12"
                        initial={{ opacity: 0, y: 25 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 25 }}
                        transition={{ duration: 0.5 }}
                      >
                        <p className="text-xl md:text-2xl font-medium">
                          {testimonial.quote}
                        </p>
                        <cite className="not-italic lg:text-right">
                          <Image
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="rounded-xl size-28 max-w-none"
                          />
                          <div className="font-bold mt-4 ">
                            {testimonial.name}
                          </div>
                          <div className="text-xs text-gray-400 mt-2">
                            {testimonial.title}
                          </div>
                        </cite>
                      </motion.blockquote>
                    ) : null
                  )}
                </AnimatePresence>
                <motion.div
                  layout="position"
                  className="flex gap-2 md:flex-col "
                >
                  {testimonials.map((testimonial, index) => (
                    <div
                      key={testimonial.name}
                      className="size-6 relative isolate inline-flex items-center justify-center"
                      onClick={() => setSelectedTestimonialIndex(index)}
                    >
                      {selectedTestimonialIndex === index && (
                        <motion.div
                          className="absolute border-gradient size-full rounded-full -z-10"
                          layoutId="testimonial-indicator"
                        ></motion.div>
                      )}
                      <div className="size-1.5 bg-gray-200 rounded-full"></div>
                    </div>
                  ))}
                </motion.div>
              </motion.div>
            </LayoutGroup>
          </SectionContent>
        </SectionBorder>
      </div>
    </section>
  );
};

export default Testimonials;
