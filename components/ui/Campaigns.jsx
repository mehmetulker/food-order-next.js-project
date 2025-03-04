import Image from "next/image";
import Title from "./Title";
import { FaShoppingCart } from "react-icons/fa";

const CampaignsItem = () => {
  return (
    <div className="bg-secondary flex flex-col sm:flex-row items-center basis-[40%] rounded-xl px-5 py-5 gap-4">
      <div className="relative  w-44 h-44 border-4  border-primary rounded-full  overflow-hidden">
        <Image
          className="rounded-full transform  hover:scale-125 transition-all text-2xl"
          src="/images/01.jpg"
          layout="fill"
          objectFit="cover"
          alt=""
        />
      </div>
      <div className="text-white">
        <Title addClass="text-2xl">Tasty Thursdays</Title>
        <div className="font-dancing mb-4">
          <span className="text-[40px]">20%</span>
          <span className="text-sm inline-block ml-1">Off</span>
        </div>
        <button className="btn-primary flex items-center gap-x-1">
          Order Online <FaShoppingCart />
        </button>
      </div>
    </div>
  );
};
function Campaigns() {
  return (
    <div className="container  justify-center flex flex-col sm:flex-row mx-auto p-10 gap-5  ">
      <CampaignsItem />
      <CampaignsItem />
    </div>
  );
}

export default Campaigns;
