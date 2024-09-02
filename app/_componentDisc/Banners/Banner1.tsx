import Image from "next/image";
import BannerImg1 from "@/public/image/[disc]/CTA.png";
import DiscText from "../DiscText";
const Banner1 = () => {
  return (
    <div className="relative">
      <Image className="w-full" src={BannerImg1} alt="" />
      <div className=" absolute top-1/2 left-1/2 text-white -translate-x-1/2 -translate-y-1/2 w-full z-10 ">
        <div className="text-[28px] text-center mb-[80px]">
          <p>
            Bài trắc nghiệm tính <DiscText /> không chỉ giúp bạn <br />
            khai phá được sức mạnh của bản thân.
          </p>
          <p>
            Đây còn là công cụ hỗ trợ tuyển dụng và quản lý nhân sự hiệu quả.
          </p>
        </div>
        <div className="text-center flex justify-center gap-6">
          <div className="px-8 text-[20px]">
            <h1 className="text-[45px] font-bold font-sans text-[#FFCD65]">
              &gt; 50 triệu
            </h1>
            <p>Người thực hiện bài trắc nghiệm</p>
          </div>
          <div className="px-8 text-[20px]">
            <h1 className="text-[45px] font-bold font-sans text-[#FFCD65]">
              350+
            </h1>
            <p>Công ty lớn nhất của Hoa Kỳ sử dụng</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner1;
