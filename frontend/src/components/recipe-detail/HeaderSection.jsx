import { FaUser, FaDrumstickBite } from "react-icons/fa";
import { MdOutlineWatchLater, MdOutlineTimer } from "react-icons/md";
import { FiPrinter } from "react-icons/fi";
import { IoShareSocialOutline } from "react-icons/io5";

export default function HeaderSection({ recipe }) {
  return (
    <div className="w-full mt-6">

      {/* TITLE */}
      <h1 className="text-4xl font-semibold mb-6">
        {recipe.title}
      </h1>

      {/* INFO BAR */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6">

        {/* LEFT INFO ROW */}
        <div className="flex items-center gap-8 flex-wrap">
        
          <div className="flex items-center gap-2 text-gray-700 text-sm">
            <FaUser /> {recipe.author}
          </div>

          <div className="flex items-center gap-2 text-gray-700 text-sm">
            <MdOutlineWatchLater /> Prep Time {recipe.prep}
          </div>

          <div className="flex items-center gap-2 text-gray-700 text-sm">
            <MdOutlineTimer /> Cook Time {recipe.cook}
          </div>

          <div className="flex items-center gap-2 text-gray-700 text-sm">
            <FaDrumstickBite /> {recipe.category}
          </div>
        </div>

        {/* RIGHT BUTTONS */}
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 px-4 py-2 border rounded-full hover:bg-gray-100">
            <FiPrinter /> Print
          </button>

          <button className="flex items-center gap-2 px-4 py-2 border rounded-full hover:bg-gray-100">
            <IoShareSocialOutline /> Share
          </button>
        </div>
      </div>
    </div>
  );
}
