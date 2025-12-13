import playIcon from "../../assets/img/play.png";

export default function HeroSection({ recipe }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-10 mt-6">

      {/* LEFT IMAGE */}
      <div className="relative rounded-3xl overflow-hidden">
        <img
          src={recipe.image}
          className="w-full h-[500px] object-cover"
        />

        <button className="absolute top-1/2 left-1/2 
          -translate-x-1/2 -translate-y-1/2 
          bg-white w-20 h-20 rounded-full shadow-md flex items-center justify-center">
          <img src={playIcon} className="w-10" />
        </button>
      </div>

      {/* RIGHT NUTRITION BOX */}
      <div className="bg-[#E7F9FD] rounded-3xl p-8">
        <h3 className="text-xl font-semibold mb-6">Nutrition Information</h3>

        <div className="text-sm space-y-4">
          <div className="flex justify-between"><span>Calories</span><b>{recipe.nutrition?.calories}</b></div>
          <div className="flex justify-between"><span>Total Fat</span><b>{recipe.nutrition?.total_fat}</b></div>
          <div className="flex justify-between"><span>Protein</span><b>{recipe.nutrition?.protein}</b></div>
          <div className="flex justify-between"><span>Carbs</span><b>{recipe.nutrition?.carbs}</b></div>
          <div className="flex justify-between"><span>Cholesterol</span><b>{recipe.nutrition?.cholesterol}</b></div>
        </div>

        <p className="text-xs text-gray-500 mt-4">
          adipiscing elit, sed do eiusmod tempor incididunt ut labore...
        </p>
      </div>
    </div>
  );
}
