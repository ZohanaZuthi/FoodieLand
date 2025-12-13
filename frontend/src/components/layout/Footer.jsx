import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-gray-300 mt-20">
      <div className="max-w-6xl mx-auto px-6 py-10">

       
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">

          
          <div className="flex-1 gap-2">
            <h1
              style={{ fontFamily: "Lobster" }}
              className="text-[20px] md:text-[28px]"
            >
              Foodieland<span className="text-red-500">.</span>
            </h1>

            <p className="text-gray-600 text-[14px] md:text-[16px] max-w-xs">
              Discover the best recipes, cooking tips, and culinary stories.
            </p>
          </div>

          {/* NAV LINKS */}
          <div className="flex flex-1 justify-start md:justify-center gap-6 
                          text-gray-700 font-semibold text-[12px] md:text-[16px]">
            
            <Link to="/" className="cursor-pointer hover:text-black">Home</Link>
            <Link to="/recipes" className="cursor-pointer hover:text-black">Recipes</Link>
            <Link to="/blog" className="cursor-pointer hover:text-black">Blog</Link>
            <Link to="/contact" className="cursor-pointer hover:text-black">Contact</Link>
            <Link to="/about" className="cursor-pointer hover:text-black">About us</Link>

          </div>
        </div>

       
        <div className="w-full border-t border-gray-300 mt-10 mb-6"></div>

        
        <div className="flex items-center text-gray-600 text-[14px]">

         
          <div className="hidden md:block flex-1" />

         
          <p className="flex-1 text-center">
            © 2020 Flowbase. Powered by <span className="text-red-500">Webflow</span>
          </p>

          <div className="hidden md:flex flex-1 justify-end gap-6 text-xl text-gray-800">
            <FaFacebookF className="cursor-pointer hover:text-black" />
            <FaTwitter className="cursor-pointer hover:text-black" />
            <FaInstagram className="cursor-pointer hover:text-black" />
          </div>

        </div>

      </div>
    </footer>
  );
}
