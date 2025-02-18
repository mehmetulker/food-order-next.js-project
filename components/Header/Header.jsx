import Logo from "@/ui/Logo";
import { FaUserAlt } from "react-icons/fa";
import { HiShoppingCart } from "react-icons/hi";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  return (
    <div className="h-[5.5rem] bg-secondary flex  justify-center items-center">
      <div className="container mx-auto flex justify-between items-center text-white h-full">
        <div>
          <Logo />
        </div>
        <nav>
          <ul className="flex justify-center items-center space-x-4">
            <li className="px-[5px] py-[10px] uppercase hover:text-primary gap-x-2 cursor-pointer">
              <a href="http://">Home</a>
            </li>
            <li className="px-[5px] py-[10px] uppercase hover:text-primary gap-x-2 cursor-pointer">
              <a href="http://">Menu</a>
            </li>
            <li className="px-[5px] py-[10px] uppercase hover:text-primary gap-x-2 cursor-pointer">
              <a href="http://">About</a>
            </li>
            <li className="px-[5px] py-[10px] uppercase hover:text-primary gap-x-2 cursor-pointer">
              <a href="http://">Book Table</a>
            </li>
          </ul>
        </nav>
        <div>
          <div className="flex items-center gap-x-4">
            <a href="" className="hover:text-primary transition-all">
              <FaUserAlt />
            </a>
            <a href="" className="hover:text-primary transition-all">
              <HiShoppingCart />
            </a>
            <button className="hover:text-primary transition-all">
              <FaSearch />
            </button>
            <button className="btn-primary hidden sm:block">
              Order Online
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
