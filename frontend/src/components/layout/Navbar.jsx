import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { HiMenu } from "react-icons/hi"; 
export default function Navbar() {
  return (
    <nav className="w-150% bg-white border-b border-gray-300 px-0">
      <div className="max-w-6xl mx-auto px-6 pt-4 pb-1 flex items-end ">

       
        <div className="flex flex-1  text-[16px] md:text-[24px]">
          <h1 style={{fontFamily:"Lobster"}}className="text-3xl">
            Foodieland<span className="text-red-500">.</span>
          </h1>
        </div>

       
        <div className="flex flex-auto justify-center text-[14px] md:text-[16px] gap-[30px] md:gap-[60px]  text-gray-800 font-semibold">
          <span className="cursor-pointer hover:text-black">Home</span>
          <span className="cursor-pointer hover:text-black">Recipes</span>
          <span className="cursor-pointer hover:text-black">Blog</span>
          <span className="cursor-pointer hover:text-black">Contact</span>
          <span className="cursor-pointer hover:text-black">About us</span>
        </div>

        
        <div className="hidden md:flex flex-auto justify-end gap-6 text-xl text-gray-800 ">
          <FaFacebookF className="cursor-pointer hover:text-black" />
          <FaTwitter className="cursor-pointer hover:text-black" />
          <FaInstagram className="cursor-pointer hover:text-black" />
        </div>
        

      </div>
    </nav>
  );
}
