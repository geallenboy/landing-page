import { twMerge } from "tailwind-merge";

const Orbit = (props: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className="absolute-center">
      <div
        className={twMerge(
          "border border-gray-200/30 rounded-full",
          props.className
        )}
      ></div>
    </div>
  );
};

export default Orbit;
