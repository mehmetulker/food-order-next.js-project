import Image from "next/image";
import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";
function MenuItem() {
  return (
    <div className="bg-secondary rounded-3xl m-4 ">
      <div className=" bg-slate-300 w-full flex justify-center items-center rounded-bl-3xl rounded-tl-2xl  rounded-tr-2xl p-5 m-0">
        <Link href="/product">
          <div className="relative w-36 h-36 hover:scale-110 duration-300 ">
            <Image src="/images/f1.png" layout="fill" alt="" />
          </div>
        </Link>
      </div>
      <div className="text-white m-4 p-2">
        <h4 className="text-xl font-semibold">Delicious Pizza</h4>
        <p className="text-base">
          Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit,
          magnam voluptatem repellendus sed eaque
        </p>
        <div className="flex justify-between items-center mt-6">
          <span>$20</span>
          <button className="flex items-center justify-center  bg-primary  w-10 h-10 rounded-full  p-2">
            <FaShoppingCart />
          </button>
        </div>
      </div>
    </div>
  );
}

export default MenuItem;
