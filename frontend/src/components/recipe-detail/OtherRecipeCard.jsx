import HeaderSection from "../../components/recipe-detail/HeaderSection";
import HeroSection from "../../components/recipe-detail/HeroSection";
import IngredientsSection from "../../components/recipe-detail/IngredientsSection";
import DirectionsSection from "../../components/recipe-detail/DirectionsSection";
import NewsletterSection from "../../components/newsletter/NewsletterSection";
import SmallRecipeCard from "../../components/recipes/RecipeCard";

export default function RecipeDetail() {

  // ❗ later this will come from backend (Django)
  const recipe = {
    title: "Health Japanese Fried Rice",
    author: "John Smith",
    date: "15 March 2022",
    prep: "15 Minutes",
    cook: "15 Minutes",
    category: "Chicken",
    image: "/src/assets/img/featured-recipe.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">

      <HeaderSection recipe={recipe} />

      <HeroSection recipe={recipe} />

      <p className="text-gray-600 mt-10 leading-relaxed">
        {recipe.description}
      </p>

      <IngredientsSection />

      <DirectionsSection />

      <NewsletterSection />

      {/* Recommended Recipes */}
      <h2 className="text-2xl font-semibold mt-16 mb-6">
        You may like these recipe too
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <SmallRecipeCard recipe={recipe} />
        <SmallRecipeCard recipe={recipe} />
        <SmallRecipeCard recipe={recipe} />
        <SmallRecipeCard recipe={recipe} />
      </div>

    </div>
  );
}
