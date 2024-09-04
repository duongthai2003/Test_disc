import Image from "next/image";
import SlideRightIcon from "../../public/image/[disc]/slideIcon.png";
import SlideLefttIcon from "../../public/image/[disc]/slideLeftIcon.png";
import DiscText from "./DiscText";
import { anton } from "../page";

const Slide = () => {
  return (
    <div className="flex items-end justify-between mt-[75px] mx-6">
      <div className="mb-5">
        <Image src={SlideLefttIcon} alt=" " />
      </div>
      <div className="flex items-center flex-col">
        <div
          className={`text-center text-[65px] leading-[75px] font-bold tracking-tight ${anton.className} `}
        >
          <h1>Khám Phá Tính Cách Của Bạn</h1>
          <h1>
            Với Trắc Nghiệm
            <DiscText />
          </h1>
        </div>
        <p className="w-[400px] text-center my-[50px] ">
          Bắt đầu hành trình khám phá ngay hôm nay và mở ra cánh cửa đến với sự
          hiểu biết sâu sắc hơn về bản thân{" "}
        </p>
        <button className="font-bold py-4 w-[210px] text-4 bg-[#FFCD65] rounded-full ">
          Khám phá ngay
        </button>
      </div>
      <div className="mb-5">
        <Image src={SlideRightIcon} alt=" " />
      </div>
    </div>
  );
};

export default Slide;
