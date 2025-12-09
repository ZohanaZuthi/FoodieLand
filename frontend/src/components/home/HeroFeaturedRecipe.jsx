export default function HeroFeaturedRecipe() {
  return (
    <section className="bg-blue-50 rounded-3xl p-10 flex flex-col md:flex-row items-center gap-10">
     
      <div className="flex-1 space-y-4">
        <p className="text-blue-600 font-semibold text-sm">Hot Recipes</p>

        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Spicy delicious chicken wings
        </h1>

        <p className="text-gray-600 max-w-md">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <div className="flex gap-4">
          <button className="px-6 py-3 bg-black text-white rounded-full">
            View Recipes
          </button>
          <button className="px-6 py-3 border border-gray-400 rounded-full">
            Watch Video
          </button>
        </div>
      </div>

      
      <div className="flex-1">
        <div className="w-full h-64 bg-gray-300 rounded-2xl animate-pulse"></div>
      </div>
    </section>
  );
}
