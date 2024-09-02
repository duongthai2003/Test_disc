import Image from "next/image";
import DISC from "../../public/image/[disc]/DISC.png";
import { DiscIcon } from "@/public/Icon/Icons";

const Description = () => {
  return (
    <div className="grid grid-cols-2 mt-[100px] ">
      <div className=" relative  ">
        <div className=" font-bold text-[51px] leading-[50px] font-sans absolute left-2  ">
          <h1>Trắc nghiệm tính cách </h1>
          <h1>DISC là gì?</h1>
        </div>
        <span className=" absolute top-3 right-[46px] ">
          <DiscIcon />
        </span>
      </div>
      <div className=" text-[17px] ml-[50px] gap-2 flex flex-col font-[500] ">
        <p>
          DISC được viết tắt từ bốn chữ cái đầu đại diện cho 4 kiểu tính cách:
          Thống trị (D), Ảnh hưởng (I), Kiên định (S) và Tuân thủ (C). Bài test
          DISC đã trải qua hơn 100 năm phát triển, và được nghiên cứu bởi nhà
          tâm lý học William Moulton Marston. 
        </p>
        <p>
          Đây là công cụ đánh giá tính cách nhân sự, giúp xác định tính cách
          thông qua hành vi của họ. Khi đã hiểu rõ bản thân, nhân sự có thể tự
          đề xuất các chiến lược phát triển bản thân hiệu quả. Từ đó, khả năng
          làm việc nhóm, kỹ năng giao tiếp và hiệu suất công việc sẽ được cải
          thiện đáng kể. 
        </p>
      </div>
    </div>
  );
};

export default Description;
