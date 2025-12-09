import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="w-full bg-white border-b">
      <div className="max-w-6xl mx-auto px-6 py-6 flex ">

        {/* LEFT — Logo */}
        <div className="flex-auto justify-end">
          <h1 style={{fontFamily:"Lobster"}}className="text-3xl">
            Foodieland<span className="text-red-500">.</span>
          </h1>
        </div>

        {/* CENTER — Menu */}
        <div className="flex-auto flex justify-center  text-[16px] text-gray-800 gap-[20px]">
          <span className="cursor-pointer hover:text-black">Home</span>
          <span className="cursor-pointer hover:text-black">Recipes</span>
          <span className="cursor-pointer hover:text-black">Blog</span>
          <span className="cursor-pointer hover:text-black">Contact</span>
          <span className="cursor-pointer hover:text-black">About us</span>
        </div>

        {/* RIGHT — Social Icons */}
        <div className="flex-auto flex justify-end gap-6 text-xl text-gray-800">
          <FaFacebookF className="cursor-pointer hover:text-black" />
          <FaTwitter className="cursor-pointer hover:text-black" />
          <FaInstagram className="cursor-pointer hover:text-black" />
        </div>
        

      </div>
    </nav>
  );
}
