import slackLogo from "../assets/images/slack-logo.png";
import dockerLogo from "../assets/images/docker-logo.png";
import figmaLogo from "../assets/images/figma-logo.png";
import githubLogo from "../assets/images/github-logo.png";
import vsCodeLogo from "../assets/images/vs-code-logo.png";
import notionLogo from "../assets/images/notion-logo.png";
import jiraLogo from "../assets/images/jira-logo.png";
import gcpLogo from "../assets/images/gcp-logo.png";
import SectionBorder from "@/components/SectionBorder";
import SectionContent from "@/components/SectionContent";
import Button from "@/components/Button";
import Orbit from "@/components/Orbit";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import Logo from "@/components/Logo";
import Image from "next/image";

export const features = [
  "Effortless integration",
  "Intelligent automation",
  "Robust security",
];

export const logos = [
  {
    src: slackLogo,
    alt: "slack logo",
    rotate: 0,
  },
  {
    src: dockerLogo,
    alt: "docker logo",
    rotate: 45,
  },
  {
    src: figmaLogo,
    alt: "figma logo",
    rotate: 90,
  },
  {
    src: githubLogo,
    alt: "github logo",
    rotate: 135,
  },
  {
    src: vsCodeLogo,
    alt: "vs code logo",
    rotate: 180,
  },
  {
    src: notionLogo,
    alt: "notion logo",
    rotate: 225,
  },
  {
    src: jiraLogo,
    alt: "jira logo",
    rotate: 270,
  },
  {
    src: gcpLogo,
    alt: "gcp logo",
    rotate: 315,
  },
];

export const Features = () => {
  return (
    <section id="features">
      <div className="container">
        <SectionBorder borderTop>
          <SectionContent className="md:px-20 lg:px-40">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
              <div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-200 leading-tight">
                  Your Ai-powered collaboration companion
                </h2>
                <ul className="mt-12 flex flex-col gap-8">
                  {features.map((feature) => (
                    <li key={feature} className="flex items-center gap-4">
                      <FontAwesomeIcon
                        icon={faCircleCheck}
                        className="size-6 text-violet-400"
                      />
                      <span className="text-xl font-semibold">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="mt-16">Try it now</Button>
              </div>
              <div className="flex justify-center">
                <div className="size-[270px] md:size-[450px] relative flex flex-shrink-0">
                  <Orbit className="size-[180px] md:size-[300px]" />
                  <Orbit className="size-[270px] md:size-[450px]" />
                  <div className="absolute-center">
                    <Logo className="size-24" />
                  </div>
                  {logos.map((logo) => (
                    <div
                      key={logo.alt}
                      style={{
                        transform: `rotate(${logo.rotate}deg)`,
                      }}
                      className={`absolute inset-0`}
                    >
                      <div
                        className="inline-flex size-10 md:size-14 items-center justify-center border border-[var(--color-border)] rounded-lg absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-gray-900"
                        style={{
                          transform: `translate(-50%, -50%) rotate(-${logo.rotate}deg)`,
                        }}
                      >
                        <Image
                          src={logo.src}
                          alt={logo.alt}
                          className="size-6 md:size-9"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </SectionContent>
        </SectionBorder>
      </div>
    </section>
  );
};

export default Features;
