
import printIcon from "../../assets/img/print.png";
import shareIcon from "../../assets/img/share.png";

export default function HeaderSection({ recipe }) {
  return (
    <div className="w-full mb-10">
      <h1 className="text-4xl font-bold">{recipe.title}</h1>

      <div className="flex flex-wrap items-center gap-4 mt-4 text-sm text-gray-600">

        <div className="flex items-center gap-2">
          <img
            src={recipe.author.avatar}
            className="w-8 h-8 rounded-full object-cover"
          />
          <span>{recipe.author.name}</span>
        </div>

        
        <span>• {recipe.created_at.slice(0, 10)}</span>

        
        <span>• Prep time: {recipe.prep_time}</span>

      
        <span>• Cook time: {recipe.cook_time}</span>

        <span>• {recipe.category_name}</span>

       
        <div className="flex items-center gap-4 ml-auto">
          <img src={printIcon} className="w-12 cursor-pointer" />
          <img src={shareIcon} className="w-12 cursor-pointer" />
        </div>
      </div>
    </div>
  );
}
