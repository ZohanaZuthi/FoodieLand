import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="max-w-[1440px] bg-white border-b border-gray-300 px-0">
      <div className="max-w-[1280px] mx-auto px-6 pt-4 pb-1 flex items-end">


        <div className="flex flex-1 justify-start text-[16px] md:text-[24px]">
          <Link to="/" style={{ fontFamily: "Lobster" }} className="text-3xl">
            Foodieland<span className="text-red-500">.</span>
          </Link>
        </div>

       
        <div className="flex flex-auto justify-center text-[14px] md:text-[16px] 
                        gap-[30px] md:gap-[60px] text-gray-800 font-semibold">
          
          <Link to="/" className="cursor-pointer hover:text-black">Home</Link>
          <Link to="/recipes" className="cursor-pointer hover:text-black">Recipes</Link>
          <Link to="/blog" className="cursor-pointer hover:text-black">Blog</Link>
          <Link to="/contact" className="cursor-pointer hover:text-black">Contact</Link>
          <Link to="/about" className="cursor-pointer hover:text-black">About us</Link>

        </div>

        
        <div className="hidden md:flex flex-auto justify-end gap-6 text-xl text-gray-800">
          <FaFacebookF className="cursor-pointer hover:text-black" />
          <FaTwitter className="cursor-pointer hover:text-black" />
          <FaInstagram className="cursor-pointer hover:text-black" />
        </div>

      </div>
    </nav>
  );
}
