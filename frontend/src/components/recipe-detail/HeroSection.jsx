export default function HeroSection({ recipe }) {
  return (
    <div className="w-full mt-10 grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-10">

      {/* LEFT — RECIPE IMAGE */}
      <div className="relative w-full rounded-3xl overflow-hidden">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-[450px] md:h-[520px] lg:h-[560px] object-cover"
        />

        {/* PLAY BUTTON */}
        <button
          className="
            absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
            bg-white/90 backdrop-blur-sm rounded-full
            w-20 h-20 flex items-center justify-center shadow-lg
          "
        >
          <img src="/src/assets/img/play.png" className="w-10 h-10" />
        </button>
      </div>

      {/* RIGHT — NUTRITION BOX */}
      <div className="bg-[#E7F9FD] rounded-3xl p-8 h-fit">
        <h3 className="text-xl font-semibold mb-6">Nutrition Information</h3>

        <div className="flex flex-col gap-4 text-sm">

          <div className="flex justify-between">
            <span className="text-gray-600">Calories</span>
            <span className="font-semibold">{recipe.nutrition.calories}</span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-600">Total Fat</span>
            <span className="font-semibold">{recipe.nutrition.totalFat}</span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-600">Protein</span>
            <span className="font-semibold">{recipe.nutrition.protein}</span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-600">Carbohydrate</span>
            <span className="font-semibold">{recipe.nutrition.carbs}</span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-600">Cholesterol</span>
            <span className="font-semibold">{recipe.nutrition.cholesterol}</span>
          </div>

        </div>

        <p className="text-xs text-gray-500 mt-6 leading-relaxed">
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

    </div>
  );
}
