import Image from "next/image";

type ProductItemProps = {
  src: any;
  title: string;
  subTitle?: string;
};
const ProductItem = ({ src, title, subTitle }: ProductItemProps) => {
  return (
    <div className=" grid grid-clos-4">
      <div>
        <Image src={src} alt="" />
        <p className=" font-bold text-2xl mt-6 ">{title}</p>
        <p className="text-[18px]">{subTitle}</p>
      </div>
    </div>
  );
};

export default ProductItem;
