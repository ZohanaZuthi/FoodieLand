import BigRecipeCard from "./BigRecipeCard";

export default function BigRecipeSlider({ recipes }) {
  return (
    <section className="w-full overflow-x-auto scrollbar-hide py-10">
      <div className="flex gap-12 px-4 md:px-6 lg:px-8">
        {recipes.map((recipe) => (
          <BigRecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </section>
  );
}
