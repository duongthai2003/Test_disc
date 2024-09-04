import { AlignRight, Search, WalletCards } from "lucide-react";
import Image from "next/image";
import logo from "../public/image/logo.png";

const Header = () => {
  return (
    <div className="flex justify-between pt-4 items-center ">
      <div className=" cursor-pointer">
        <Image src={logo} alt="" />
      </div>
      <div className="flex flex-1 justify-between">
        <div className="flex gap-10 cursor-pointer">
          <p className="hover:bg-[#DADADA] min-w-[90px] flex justify-center items-center ">
            Trang chủ
          </p>
          <p className="hover:bg-[#DADADA] min-w-[90px] flex justify-center items-center ">
            Thần số
          </p>
          <p className="hover:bg-[#DADADA] min-w-[90px] flex justify-center items-center ">
            DISC
          </p>
          <p className="hover:bg-[#DADADA] min-w-[90px] flex justify-center items-center ">
            MBTI
          </p>
        </div>
        <div className="border border-black rounded-3xl px-5 py-2 cursor-pointer   ">
          <div className="font-bold font-['Inter']">Đăng nhập</div>
        </div>
        {/* <div className=" ml-2 px-3 py-1 cursor-pointer ">
          <AlignRight />
        </div> */}
      </div>
    </div>
  );
};

export default Header;
