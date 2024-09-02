import exImg_1 from "@/public/image/[disc]/ex1.png";
import exImg_2 from "@/public/image/[disc]/ex2.png";
import exImg_3 from "@/public/image/[disc]/ex3.png";
import ExploreItem from "./ExploreItem";
const Explore = () => {
  return (
    <div className="bg-[#FFCD65] rounded-[50px] my-[100px] p-[64px]  ">
      <div className="font-sans text-center">
        <h1 className="text-[50px] font-bold tracking-tight">
          Sẵn Sàng Khám Phá Tính Cách Của Bạn?
        </h1>
        <p className="text-[18px] leading-6 mt-6 font-medium">
          Hãy thực hiện bài trắc nghiệm DISC ngay hôm nay để hiểu rõ hơn về bản
          thân <br /> và cách bạn có thể tận dụng thế mạnh của mình trong công
          việc và cuộc sống
        </p>
      </div>
      <div className="flex justify-between items-center mt-10 gap-6">
        <ExploreItem title="Trong đời sống" src={exImg_1} bgColor="#EA635D" />
        <ExploreItem title="Trong công việc" src={exImg_2} bgColor="#48C273" />
        <ExploreItem
          title="Cha mẹ làm cho con"
          src={exImg_3}
          bgColor="#5495DA"
        />
      </div>
    </div>
  );
};

export default Explore;
