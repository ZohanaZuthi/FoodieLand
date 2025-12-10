import { useState } from "react";
import { FaHeart } from "react-icons/fa";
import timer from "../../assets/img/Timer.png";
import fork from "../../assets/img/ForkKnife.png";

export default function RecipeCard({ recipe }) {
  const [liked, setLiked] = useState(false);

  return (
    <div className="bg-white rounded-2xl shadow-sm overflow-hidden cursor-pointer transition hover:scale-[1.02]">

      {/* IMAGE SECTION */}
      <div className="relative h-48 w-full">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-full object-cover"
        />

        {/* HEART BUTTON */}
        <button
          onClick={(e) => {
            e.preventDefault();
            setLiked(!liked);
          }}
          className="absolute top-3 right-3 bg-white p-2 rounded-full shadow"
        >
          <FaHeart
            className={liked ? "text-red-500" : "text-gray-300"}
            size={18}
          />
        </button>
      </div>

      {/* TEXT SECTION */}
      <div className="p-4 space-y-3">

        {/* Title */}
        <h3 className="font-semibold text-[17px] leading-tight">
          {recipe.title}
        </h3>

        {/* TIME & CATEGORY */}
        <div className="flex items-center gap-5 text-gray-600 text-sm">
          {/* TIME */}
          <div className="flex items-center gap-2">
            <img src={timer} alt="time" className="w-4 h-4" />
            <span>{recipe.time}</span>
          </div>

          {/* CATEGORY */}
          <div className="flex items-center gap-2">
            <img src={fork} alt="category" className="w-4 h-4" />
            <span>{recipe.category}</span>
          </div>
        </div>
      </div>

    </div>
  );
}
