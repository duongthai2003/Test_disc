import Description from "./_componentDisc/Description";
import Slide from "./_componentDisc/Slide";
import productImg_1 from "../public/image/[disc]/Product_1.png";
import productImg_2 from "../public/image/[disc]/Product_2.png";
import productImg_3 from "../public/image/[disc]/Product_3.png";
import productImg_4 from "../public/image/[disc]/Product_4.png";
import ProductItem from "./_componentDisc/ProductItem";
import DiscText from "./_componentDisc/DiscText";
import Features from "./_componentDisc/feature/Features";
import Banner1 from "./_componentDisc/Banners/Banner1";
import Explore from "./_componentDisc/explores/Explore";
import { Anton, Be_Vietnam_Pro, Inter } from "next/font/google";

export const anton = Anton({
  subsets: ["latin", "vietnamese"],
  weight: ["400"],
});

export const beVietNamPro = Be_Vietnam_Pro({
  subsets: ["latin", "vietnamese"],
  weight: ["400"],
});

export const inter = Inter({
  subsets: ["latin", "vietnamese"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
export default async function Home() {
  return (
    <div>
      <Slide />
      <div className="container">
        <Description />
        <div className=" flex justify-between mt-[60px]">
          <ProductItem
            src={productImg_1}
            title="Dominance"
            subTitle="(Sự thống trị)"
          />
          <ProductItem
            src={productImg_2}
            title="Influence"
            subTitle="(Sự ảnh hưởng)"
          />
          <ProductItem
            src={productImg_3}
            title="Steadines"
            subTitle="(Sự kiên định)"
          />
          <ProductItem
            src={productImg_4}
            title="Compliance"
            subTitle="(Sự tuân thủ)"
          />
        </div>
        <div className="mb-[50px]">
          <h1
            className={`font-bold ${anton.className} text-[50px] text-center mt-[100px] mb-[60px]`}
          >
            Các nhóm tính cách <DiscText />
          </h1>
          <Features />
        </div>
        <Banner1 />
        <div>
          <Explore />
        </div>
      </div>
    </div>
  );
}
