import Image from "next/image";
import logo from "../public/image/Frame 41.png";
import footer from "../public/image/[disc]/Footer.png";
import XIcon from "../public/image/Frame 626477.png";
import { FbIcon, IgIcon } from "@/public/Icon/Icons";
const Footer = () => {
  return (
    <div className="relative">
      <Image className="w-full" src={footer} alt=""></Image>
      <div className=" absolute w-full top-0 flex flex-col h-full justify-end ">
        <div className="container pb-[64px] flex justify-between text-sm text-[#C3C6CD] ">
          <div className="gap-3 items-start flex flex-col">
            <div>
              <Image src={logo} alt="" />
            </div>
            <p className="w-[315px]">
              Với sự kết hợp giữa khoa học và chiêm tinh học, Numerologist mang
              đến những phân tích chính xác và những lời khuyên hữu ích, giúp
              bạn định hướng cuộc sống và sự nghiệp một cách hiệu quả.
            </p>
          </div>
          <div className="gap-3 items-start  flex flex-col">
            <h5 className="text-white">Dịch vụ</h5>
            <p>Thần số học</p>
            <p>DISC</p>
            <p>MBTI</p>
          </div>
          <div className="gap-3 items-start flex flex-col">
            <h5 className="text-white">Hỗ trợ</h5>
            <p>Chính sách và Điều khoản</p>
            <p>Chính sách bảo mật</p>
            <p>Chính sách sử dụng dịch vụ</p>
            <p>Chính sách thanh toán</p>
          </div>
          <div className="gap-3 items-start flex flex-col">
            <h5 className="text-white">Liên hệ</h5>
            <div className="gap-3 items-start flex cursor-pointer">
              {" "}
              <FbIcon />
              <Image src={XIcon} alt="" />
              <IgIcon />
            </div>
          </div>
        </div>
        <div className="border border-[#262D40] border-t-2 mb-4"></div>
        <p className="text-white text-center mb-7">
          © 2024 Numerologist. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
