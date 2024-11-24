import { useState } from "react";
import { FaCartArrowDown } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";

const Header = () => {
  const [sideNav, setSideNav] = useState(false);
  console.log(sideNav);
  return (
    <>
      <div className=" flex justify-between text-[20px] p-5 font-semibold border-b cursor-pointer relative">
        <div>
          <p className="">
            Yummy<span className="text-[#fa8231] ">Food</span>
          </p>
        </div>

        <div>
          <ul className="sm:flex gap-12 hidden">
            <li className=" hover:text-[#fa8231] drop-shadow-md ">Home</li>
            <li className=" hover:text-[#fa8231] ">About</li>
            <li className=" hover:text-[#fa8231] ">Offers</li>
            <li className=" hover:text-[#fa8231] ">Sign In</li>
          </ul>
        </div>

        {sideNav ? (
          <div
            className="bg-[#a5b1c2] w-[300px] absolute  top-0 right-0 h-[100vh] flex justify-center items-center
"
          >
            <RxCross2
              className="absolute top-5 right-3 "
              size={35}
              onClick={() => setSideNav(!sideNav)}
            />

            <ul className="flex gap-24  flex-col">
              <li className=" hover:text-[#fa8231]">Home</li>
              <li className=" hover:text-[#fa8231]">About</li>
              <li className=" hover:text-[#fa8231]">Offers</li>
              <li className=" hover:text-[#fa8231]">Sign In</li>
            </ul>
          </div>
        ) : (
          ""
        )}
        <div className="flex text-[30px]">
          <p>
            <GiHamburgerMenu
              className="sm:hidden"
              onClick={() => setSideNav(!sideNav)}
            />
          </p>
          <p>
            <FaCartArrowDown className="size-[30] mx-4 " />
          </p>
        </div>
      </div>
    </>
  );
};

export default Header;
