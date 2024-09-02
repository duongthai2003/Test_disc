"use client";
import { FeatureItem } from "./FeatureItem";
import FeatureImg from "../../../public/image/[disc]/Feature.png";
import FeatureImg_2 from "../../../public/image/[disc]/Feature_2.png";
import FeatureImg_3 from "../../../public/image/[disc]/Feature_3.png";
import FeatureImg_4 from "../../../public/image/[disc]/Feature_4.png";
import Image from "next/image";
import { useState } from "react";

const Features = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const [index, setIndex] = useState<number>(0);
  const [img, setImg] = useState<any>(FeatureImg);

  const handleOpen = (number: number, itemImg: any) => {
    // if (isOpen) {
    //   setIsOpen(false);
    // } else {
    //   setIsOpen(true);
    // }
    setIsOpen(true);
    setIndex(number);
    setImg(itemImg);
  };
  const data = [
    {
      title: "Dominace",
      subTitle: "(Sự thống trị)",
      titleColor: "#EA635D",
      content:
        " Người thuộc nhóm này thường có tính cách nhanh nhẹn, chủ động trong công việc. Họ sẵn sàng dấn thân để đạt được những giá trị cao hơn trong cuộc sống. Nhìn chung, họ là những người mang tính hướng ngoại điển hình.",
      img: FeatureImg,
    },
    {
      title: "Influence",
      subTitle: "(Sự ảnh hưởng)",
      titleColor: "#EECC5E",
      content:
        "Đặc điểm chung của người thuộc nhóm I là sự nhiệt huyết, cởi mở, lạc quan, thích sáng tạo những cái mới và hướng đến sự nhân văn. Họ có khả năng thuyết phục cao, gắn với hoạt động sáng tạo nghệ thuật, thích trải nghiệm điều mới.",
      img: FeatureImg_2,
    },
    {
      title: "Steadiness",
      subTitle: "(Sự kiên định)",
      titleColor: "#48C273",
      content:
        "Những người kiên định thường có điểm chung là điềm đạm, từ tốn, chín chắn. Thay vì năng nổ đưa ra quan điểm từ lúc đầu, họ có thể yên lặng để quan sát và lắng nghe người khác, từ đó đưa ra kết luận đúng đắn nhất. Bởi thế, những người kiên định sống có kế hoạch, thích lắng nghe và tâm sự, rất đáng tin cậy.",
      img: FeatureImg_3,
    },
    {
      title: "Compliance",
      subTitle: "(Sự tuân thủ)",
      titleColor: "#5495DA",
      content:
        "Những đặc điểm chính của nhóm này là sự chính xác, bình tĩnh, cầu toàn, rõ ràng, thận trọng, và logic. Họ thường thích hành động hơn là giao tiếp, nên đôi khi họ có thể gặp khó khăn trong giao tiếp. Họ cũng thường bị nhận xét là nói chậm và diễn đạt khó hiểu. ",
      img: FeatureImg_4,
    },
  ];
  return (
    <div className="flex">
      <div className=" w-[750px] mr-[100px] ">
        {data.map((item, key) => {
          return (
            <FeatureItem
              key={key}
              title={item.title}
              subTitle={item.subTitle}
              titleColor={item.titleColor}
              onClick={() => {
                handleOpen(key, item.img);
              }}
              isOpen={index === key && isOpen}
            >
              <p>{item.content}</p>
            </FeatureItem>
          );
        })}
      </div>
      <div className=" relative bottom-8 ">
        <Image src={img} alt=" " />
      </div>
    </div>
  );
};

export default Features;
