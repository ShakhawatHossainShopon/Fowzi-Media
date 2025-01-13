import img from "@/assets/Logo.png";
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
const Footer = () => {
  return (
    <>
      <div className="backdrop-blur-2xl md:px-10 py-10 bg-black  bg-opacity-20">
        <div className="min-h-[280px]">
          <div className="grid xl:grid-cols-5 grid-cols-1 md:grid-cols-2 md:space-y-0 space-y-6 z-30 content">
            <div className="xl:col-span-2 space-y-6">
              <img src={img} alt="img" className="w-8" />
              <p>
                1729 N 2nd St Studio <br /> 204A,Minneapolis, MN 55411
              </p>
              <div className="flex gap-3">
                <div>
                  <FaFacebook className="text-xl cursor-pointer" />
                </div>
                <div>
                  <FaSquareInstagram className="text-xl cursor-pointer" />
                </div>
                <div>
                  <FaGithub className="text-xl cursor-pointer" />
                </div>
              </div>
            </div>
            <div className="space-y-3 cursor-pointer">
              <h4 className="text-xl font-semibold cursor-default">
                Information
              </h4>
              <p>Home</p>
              <p>Service</p>
              <p>Portfolio</p>
              <p>Blogs</p>
            </div>
            <div className="space-y-3 cursor-pointer">
              <h4 className="text-xl font-semibold cursor-default">
                Quick Links
              </h4>
              <p>Fowzi Prints</p>
              <p>Fowzi Studios</p>
              <p>Fowzi Digital</p>
              <p>Contact Us</p>
            </div>
            <div className="space-y-3 cursor-pointer">
              <h4 className="text-xl font-semibold cursor-default">
                Help center
              </h4>
              <p>Supports</p>
              <p>Terms & Condition</p>
              <p>Privacy Policy</p>
            </div>
          </div>

          <hr className="border-0 h-[1px] bg-gray-700 mt-16" />
          <div className="w-full text-center text-sm text-gray-300 mt-8">
            © 2024 Fowzi Media. All Rights Reserved.
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
