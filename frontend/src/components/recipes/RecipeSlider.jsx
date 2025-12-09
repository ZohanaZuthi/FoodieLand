import RecipeCard from "./RecipeCard";

export default function RecipeSlider({ recipes, title }) {
  return (
    <section className="w-full max-w-6xl mx-auto px-6 my-10">

      {/* Section Title */}
      {title && (
        <h2 className="text-[22px] md:text-[28px] font-semibold mb-4">
          {title}
        </h2>
      )}

      {/* Scrollable container */}
      <div className="flex gap-6 overflow-x-auto scrollbar-hide">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </section>
  );
}
