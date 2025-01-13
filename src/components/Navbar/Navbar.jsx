import Logo from "../../assets/Logo.png";
import { FaArrowRightLong } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div className="flex shadow-xl justify-between items-center py-3 md:py-6 px-[7%] fixed w-full bg-[#0D1117] z-10">
      <div>
        <img src={Logo} alt="Logo" className="w-6 md:w-10" />
      </div>
      <div className="md:block hidden">
        <ul>
          <li className="flex gap-8 text-xl">
            <a href="#">Home</a>
            <a
              href="#"
              className="font-extralight opacity-90 hover:font-normal hover:opacity-100 transition-all duration-400"
            >
              About us
            </a>
            <a
              href="#"
              className="font-extralight opacity-90 hover:font-normal hover:opacity-100 transition-all duration-400"
            >
              Sub brand
            </a>
            <a
              href="#"
              className="font-extralight opacity-90 hover:font-normal hover:opacity-100 transition-all duration-400"
            >
              Choose
            </a>
            <a
              href="#"
              className="font-extralight opacity-90 hover:font-normal hover:opacity-100 transition-all duration-400"
            >
              Contact us
            </a>
          </li>
        </ul>
      </div>
      <div>
        <button className="px-4 flex gap-2.5 items-center py-2 bg-primary rounded-md text-xs md:text-lg hover:scale-105 duration-300 transition-all font-semibold ">
          Explore
          <span className="text-sm mt-0.5 font-normal">
            <FaArrowRightLong />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
