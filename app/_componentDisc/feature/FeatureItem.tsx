import { ChevronDown } from "lucide-react";

type Props = {
  title: string;
  subTitle?: string;
  titleColor?: string;
  children?: any;
  onClick: () => void;
  isOpen: boolean;
};
export const FeatureItem = ({
  title,
  subTitle,
  titleColor,
  onClick,
  isOpen,
  children,
}: Props) => {
  return (
    <div
      className={`border mb-6 rounded-[18px] px-4 py-7 border-solid  `}
      style={{ borderColor: `${titleColor}` }}
    >
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={onClick}
      >
        <div className=" font-bold flex gap-1 text-[24px] font-sans ">
          <h1 className={` text-[${titleColor}]`}>{title}</h1>
          <span>{subTitle}</span>
        </div>
        <span className={`text-[${titleColor}] ${isOpen && "rotate-180"}`}>
          <ChevronDown />
        </span>
      </div>
      {isOpen && <div className={`${children ? "mt-4" : ""}`}>{children}</div>}
    </div>
  );
};
