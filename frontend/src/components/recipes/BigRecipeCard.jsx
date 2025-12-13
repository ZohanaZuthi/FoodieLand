import { useNavigate } from "react-router-dom";

import fork from '../../assets/img/ForkKnife.png';
import timer from '../../assets/img/Timer.png';
import play from '../../assets/img/PlayCircle.png';
import box from '../../assets/img/image 14.png';
import badge from '../../assets/img/Badge.png';

export default function BigRecipeCard({ recipe }) {

  
  const navigate = useNavigate();

  const handleViewRecipe = () => {
    navigate(`/recipe/${recipe.slug}`);  
  };

  return (
    <div
      className="relative flex-auto
      min-w-[90%] md:min-w-[700px] lg:min-w-[1100px] xl:min-w-[1280px]
      h-[400px] md:h-[500px] lg:h-[580px] xl:h-[640px]
      rounded-3xl overflow-hidden flex bg-[#E7FAFE]"
    >

      
      <div className="absolute left-1/2 -translate-x-1/2 top-8 md:top-10 lg:top-12 z-10">
        <img src={badge} alt="badge" className="w-24 h-24 md:w-40 md:h-36" />
      </div>

     
      <div className="w-1/2 h-full py-6 px-6 md:px-10 flex flex-col justify-center space-y-6">

      
        {recipe.is_hot && (
          <button className="flex items-center gap-2 bg-white px-2 py-1 rounded-full text-xs md:text-lg w-fit font-semibold">
            <img src={box} alt="" className="w-5 h-5" />
            Hot Recipe
          </button>
        )}

        
        <h2 className="text-3xl md:text-5xl font-bold leading-tight">
          {recipe.title}
        </h2>

        <p className="text-gray-600 text-sm md:text-lg max-w-[80%] line-clamp-3">
  {recipe.description}
</p>


      

       
        <div className="flex gap-4 text-gray-700 text-sm md:text-lg">
          <button className="flex items-center gap-2 bg-gray-300 px-3 py-1 rounded-full">
            <img src={timer} className="w-5 h-5" />
            {recipe.prep_time}
          </button>

          <button className="flex items-center gap-2 bg-gray-300 px-3 py-1 rounded-full">
            <img src={fork} className="w-5 h-5" />
            {recipe.category?.name}

          </button>
        </div>

    
        <div className="flex justify-between items-center mt-4">
       
          <div className="flex items-center">
            <img
              src={recipe.author.avatar}
              className="w-12 h-12 rounded-full object-cover border-2 border-gray-300"
            />
            <div className="ml-3">
              <p className="font-medium">{recipe.author.name}</p>
              <p className="text-xs text-gray-500">{recipe.created_at.slice(0, 10)}</p>
            </div>
          </div>

        
          <button
            onClick={handleViewRecipe}
            className="bg-black text-white flex items-center gap-2 px-6 py-3 rounded-xl text-sm md:text-lg"
          >
            <img src={play} className="w-5 h-5" />
            View Recipe
          </button>
        </div>

      </div>

      <div className="w-1/2 h-full">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-full object-cover"
        />
      </div>

    </div>
  );
}
