

import { useEffect, useState } from "react";

import HeaderSection from "../../components/recipe-detail/HeaderSection";
import HeroSection from "../../components/recipe-detail/HeroSection";
import IngredientsSection from "../../components/recipe-detail/IngredientsSection";
import DirectionsSection from "../../components/recipe-detail/DirectionsSection";
import NewsletterSection from "../../components/layout/NewsletterSection";
import RecipeCard from "../../components/recipes/RecipeCard";

export default function RecipePage() {
  const [recipe, setRecipe] = useState(null);
  const [recommended, setRecommended] = useState([]);

  useEffect(() => {
    async function loadRecipes() {
      try {
        const res = await fetch("http://127.0.0.1:8000/api/recipes/");
        const data = await res.json();

        if (data.length === 0) return;

        
        const random = data[Math.floor(Math.random() * data.length)];
        setRecipe(random);

        
        const filtered = data.filter((r) => r.slug !== random.slug);
        setRecommended(filtered.slice(0, 4));

      } catch (error) {
        console.log("Random Recipe Error:", error);
      }
    }

    loadRecipes();
  }, []);

  if (!recipe)
    return (
      <div className="text-center mt-20 text-gray-500 text-xl">
        Loading random recipe...
      </div>
    );

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">

      <HeaderSection recipe={recipe} />

     
      <HeroSection recipe={recipe} />

      
      <p className="text-gray-700 leading-relaxed mt-10 text-[17px]">
        {recipe.description}
      </p>

      
      {recipe.ingredient_groups?.length > 0 && (
        <div className="mt-16">
          <IngredientsSection groups={recipe.ingredient_groups} />
        </div>
      )}

    
      {recipe.instructions?.length > 0 && (
        <div className="mt-16">
          <DirectionsSection steps={recipe.instructions} />
        </div>
      )}

   
      <div className="mt-20">
        <NewsletterSection />
      </div>

     
      <h2 className="text-2xl font-semibold mt-20 mb-6">
        Other recipes you may like
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {recommended.map((rec) => (
          <RecipeCard key={rec.id} recipe={rec} />
        ))}
      </div>
    </div>
  );
}
