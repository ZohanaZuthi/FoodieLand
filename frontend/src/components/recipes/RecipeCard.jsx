export default function RecipeCard({ recipe }) {
  return (
    <div className="min-w-[230px] max-w-[1280px] bg-white rounded-xl shadow-sm overflow-hidden cursor-pointer">
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-36 object-cover"
      />

      <div className="p-3 space-y-1">
        <h3 className="font-inter font-semibold text-[16px] leading-tight">
          {recipe.title}
        </h3>

        <div className="flex gap-3 text-gray-500 text-[14px]">
          <span>⏱ {recipe.time}</span>
          <span>🔥 {recipe.category}</span>
        </div>
      </div>
    </div>
  );
}
