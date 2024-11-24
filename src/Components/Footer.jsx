import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div>
      <div className=" flex justify-between text-white bg-slate-900 h-[30%] cursor-pointer">
        <div>
          <p className="mx-5 font-bold">
            Yummy<span className="text-[#fa8231] "> Food</span>
          </p>
          <p className="text-sm font-light my-5">© 2024 Swiggy Limited</p>
        </div>
        <div>
          <ul>
            <span className="text-[#fa8231]">Company</span>
            <li className="text-sm font-light">About Us</li>
            <li className="text-sm font-light">YummyFood Corporate</li>
            <li className="text-sm font-light">Careers</li>
            <li className="text-sm font-light">Team</li>
            <li className="text-sm font-light">YummyFood Dineout</li>
          </ul>
        </div>
        <div>
          <ul className="mx-5">
            <span className="text-[#fa8231]">Contact us</span>
            <li>Help & Support</li>
            <li>Partner with us</li>
            <li>Ride with us</li>
          </ul>
        </div>

        <div>
          <ul className="mx-5">
            <span className="text-[#fa8231]">Life at Swiggy</span>
            <li>Explore with Swiggy</li>
            <li>Swiggy News</li>
            <li>Snackables</li>
          </ul>
        </div>
        <div className="mx-5 text-center">
          <span className="text-[#fa8231] ">Social Links</span>
          <div className="flex mt-2">
            <span>
              <FaInstagramSquare className="mx-2" />
            </span>
            <span>
              <FaLinkedin className="mx-2" />
            </span>
            <span>
              <FaFacebook className="mx-2" />
            </span>
            <span>
              <FaSquareXTwitter className="mx-2" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
