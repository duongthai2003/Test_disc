"use client";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

type ExploreItemProps = {
  title: string;
  src: any;
  bgColor?: string;
};
const ExploreItem = ({ title, src, bgColor }: ExploreItemProps) => {
  const [isHover, setIsHover] = useState<boolean>(false);
  const handleHover = () => {
    setIsHover(true);
  };
  const handleOut = () => {
    setIsHover(false);
  };
  return (
    <div
      className="p-10 pb-0 pt-6 rounded-[40px] cursor-pointer w-full h-[246px]"
      style={{ background: `${bgColor}` }}
      onMouseOver={handleHover}
      onMouseOut={handleOut}
    >
      {!isHover ? (
        <div className="flex flex-col justify-between h-full  ">
          <p
            className="text-[20px] font-bold text-white
        text-center "
          >
            {title}
          </p>
          <Image src={src} alt="" />
        </div>
      ) : (
        <div
          className="text-[20px] font-bold text-white flex justify-center items-center h-full gap-3
         "
        >
          <p>Thực hiện ngay</p>
          <ArrowUpRight className="scale-150" />
        </div>
      )}
    </div>
  );
};

export default ExploreItem;
