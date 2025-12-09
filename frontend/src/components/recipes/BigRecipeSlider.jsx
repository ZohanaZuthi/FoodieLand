import BigRecipeCard from "./BigRecipeCard";

export default function BigRecipeSlider({ recipes }) {
  return (
    <div className="w-full overflow-x-auto flex gap-10 p-6 scrollbar-hide">
      {recipes.map((recipe) => (
        <BigRecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
}
