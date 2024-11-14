import Button, { ButtonVariant } from "@/components/Button";
import SectionBorder from "@/components/SectionBorder";
import SectionContent from "@/components/SectionContent";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { twMerge } from "tailwind-merge";
export const pricingTiers = [
  {
    title: "基础版",
    description: "AI 聊天机器人，个性化推荐",
    price: "免费",
    buttonVariant: "secondary",
    buttonText: "开始使用",
    features: [
      "访问 AI 聊天机器人进行自然语言对话",
      "基础任务自动化，简化工作流程",
      "有限的消息历史存储",
    ],
    color: "amber",
    className: "lg:py-12 lg:my-6",
  },
  {
    title: "高级版",
    description: "增强生产力的高级 AI 能力",
    price: 99,
    buttonVariant: "secondary",
    buttonText: "升级至高级版",
    features: [
      "包含所有基础版功能",
      "优先访问新 AI 功能和更新",
      "高级自动化工具，简化任务管理",
      "可定制的聊天模板，适应您的工作流程",
    ],
    color: "violet",
    className: "lg:py-18 lg:my-0",
  },
  {
    title: "企业版",
    description: "定制化 AI 聊天机器人，高级分析，专属账户",
    price: null,
    buttonText: "联系我们",
    buttonVariant: "primary",
    features: [
      "包含所有高级版功能",
      "专属账户经理和优先客户支持",
      "增强的安全性和合规性，适用于大型团队",
      "定制的 AI 模型，满足贵公司需求",
      "API 接口，轻松与企业系统集成",
    ],
    color: "teal",
    className: "lg:py-12 lg:my-6",
  },
] satisfies {
  title: string;
  description: string;
  price: number | null | string;
  buttonText: string;
  buttonVariant?: ButtonVariant["variant"];
  features: string[];
  color: "amber" | "violet" | "teal";
  className: string;
}[];

export const Pricing = () => {
  return (
    <section id="pricing">
      <div className="container">
        <SectionBorder borderTop>
          <SectionContent className="md:px-20 lg:px-40">
            <h2 className="text-3xl md:text-4xl lg:text-5xl leading-tight font-semibold text-center text-gray-200 ">
              满足各种需求的灵活计划
            </h2>
            <div className="mt-12 flex flex-col items-center lg:items-start lg:flex-row gap-8">
              {pricingTiers.map((tier) => (
                <div
                  key={tier.title}
                  className={twMerge(
                    "border border-[var(--color-border)] rounded-3xl px-6 py-12 max-w-sm max-auto flex-1",
                    tier.className
                  )}
                >
                  <h3
                    className={twMerge(
                      "text-4xl font-semibold",
                      tier.color === "amber" && "text-amber-400",
                      tier.color === "violet" && "text-violet-400",
                      tier.color === "teal" && "text-teal-400"
                    )}
                  >
                    {tier.title}
                  </h3>
                  <p className="mt-4 text-gray-400">{tier.description}</p>
                  <div className="mt-8">
                    {typeof tier.price === "number" && (
                      <span className="text-2xl font-semibold text-gray-200 align-top">
                        $
                      </span>
                    )}

                    <span className="text-6xl font-semibold text-gray-200">
                      {tier.price ? tier.price : <>&nbsp;</>}
                    </span>
                  </div>
                  <Button className="mt-8" block variant={tier.buttonVariant}>
                    {tier.buttonText}
                  </Button>
                  <ul className="flex flex-col gap-4 mt-8">
                    {tier.features.map((feature) => (
                      <li
                        key={feature}
                        className="border-t border-[var(--color-border)] py-6 flex  gap-4"
                      >
                        <FontAwesomeIcon
                          icon={faCheckCircle}
                          className="size-6 text-violet-400 flex-shrink-0"
                        />
                        <span className="font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </SectionContent>
        </SectionBorder>
      </div>
    </section>
  );
};

export default Pricing;
