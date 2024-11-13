import { twMerge } from "tailwind-merge";

const SectionBorder = (props: React.HTMLAttributes<HTMLDivElement>) => {
  const { children, className } = props;

  return (
    <div
      className={twMerge(
        "border-l border-r border-[var(--color-border)]",
        className
      )}
    >
      {children}
    </div>
  );
};

export default SectionBorder;
