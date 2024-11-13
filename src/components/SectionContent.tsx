import { twMerge } from "tailwind-merge";

const SectionContent = (props: React.HTMLAttributes<HTMLDivElement>) => {
  const { children, className } = props;
  return (
    <div
      className={twMerge(
        "container py-24 md:py-36 lg:py-48 overflow-hidden",
        className
      )}
    >
      {children}
    </div>
  );
};

export default SectionContent;
