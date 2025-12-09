export default function BigRecipeCard({ recipe }) {
  return (
    <div className="min-w-[1280px] h-[640px] bg-white rounded-3xl shadow-md overflow-hidden flex">

      {/* LEFT — IMAGE */}
      <div className="w-1/2 h-full">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* RIGHT — TEXT */}
      <div className="w-1/2 h-full p-10 flex flex-col justify-center space-y-6">

        {/* Title */}
        <h2 className="text-4xl font-bold leading-tight">
          {recipe.title}
        </h2>

        {/* Description */}
        <p className="text-gray-600 text-lg max-w-[80%]">
          {recipe.description}
        </p>

        {/* Info */}
        <div className="flex gap-6 text-gray-700 text-lg">
          <span>⏱ {recipe.time}</span>
          <span>🔥 {recipe.category}</span>
        </div>

        {/* Button */}
        <button className="bg-black text-white px-8 py-3 rounded-full text-lg w-fit">
          View Recipe
        </button>
      </div>

    </div>
  );
}
