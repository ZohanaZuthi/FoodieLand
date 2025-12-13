import { useEffect, useState } from "react";

import { getAllRecipes, getCategories } from "../../api/recipeService";

import RecipeCard from "../../components/recipes/RecipeCard";
import BigRecipeSlider from "../../components/recipes/BigRecipeSlider";
import CategorySection from "../../components/categories/CategorySection.jsx";

import human from "../../assets/img/Group 880.png";

import InstagramFeedSection from "../../components/instagram/InstagramFeedSection";
import NewsletterSection from "../../components/layout/NewsletterSection";

import insta1 from "../../assets/img/insta1.png";
import insta2 from "../../assets/img/insta2.png";
import insta3 from "../../assets/img/insta3.png";
import insta4 from "../../assets/img/insta4.png";
import pro from "../../assets/img/Oval.png";


// 🟢 Instagram stays dummy
const instaPosts = [
  {
    id: 1,
    username: "Foodieland.",
    profilePic: pro,
    location: "Tokyo, Japan",
    image: insta1,
    likes: "44,686",
    caption: "The vegetable dishes need to have certain vitamin for those people",
    date: "September 19",
    currentSlide: 1,
    totalSlides: 3,
  },
  {
    id: 2,
    username: "Foodieland.",
    profilePic: pro,
    location: "Tokyo, Japan",
    image: insta2,
    likes: "20,233",
    caption: "Sweet food brings happiness if eaten in limits.",
    date: "September 10",
    currentSlide: 1,
    totalSlides: 1,
  },
  {
    id: 3,
    username: "Foodieland.",
    profilePic: pro,
    location: "Tokyo, Japan",
    image: insta3,
    likes: "32,887",
    caption: "Before cooking, prepare your tools or ingredients first!",
    date: "September 8",
    currentSlide: 1,
    totalSlides: 3,
  },
  {
    id: 4,
    username: "Foodieland.",
    profilePic: pro,
    location: "Tokyo, Japan",
    image: insta4,
    likes: "48,001",
    caption: "Shabu-shabu is perfect for romantic dinners.",
    date: "September 7",
    currentSlide: 1,
    totalSlides: 2,
  }
];


export default function HomePage() {

  const [recipes, setRecipes] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);


  // ⭐ Load backend data
  useEffect(() => {
    Promise.all([getAllRecipes(), getCategories()])
      .then(([recipeRes, categoryRes]) => {
        setRecipes(recipeRes.data);  
        setCategories(categoryRes.data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Homepage API Error:", err);
        setLoading(false);
      });
  }, []);


  if (loading) return <div className="text-center py-20">Loading…</div>;


  return (
    <div>

      {/* ⭐ HERO SLIDER NOW USES BACKEND */}
      <BigRecipeSlider className="w-full" recipes={recipes.slice(0, 3)} />

      {/* ⭐ CATEGORY SECTION USES BACKEND */}
      <CategorySection categories={categories} />

      <div className="text-center text-4xl font-semibold p-6">
        Simple and tasty recipes
      </div>

      {/* ⭐ YOUR RECIPE GRID NOW USES BACKEND */}
      <div className="flex flex-col gap-[143px]">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>

        {/* ⭐ PROMO SECTION (unchanged) */}
        <div
          className="flex-auto
            min-w-[90%] md:min-w-[700px] lg:min-w-[1100px] xl:min-w-[1280px]
            h-[400px] md:h-[500px] lg:h-[580px] xl:h-[640px]
            rounded-3xl flex bg-white top-[150px]"
        >
          <div className="w-1/2 py-3 md:py-10 pr-3 md:pr-10 pl-6 md:pl-8 flex flex-col justify-center space-y-6">
            <h2 className="text-4xl md:text-6xl font-bold leading-tight">
              Everyone can be a <br /> chef in their own kitchen
            </h2>

            <p className="text-gray-600 text-sm md:text-lg max-w-[80%]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>

            <div className="flex justify-start">
              <button className="bg-black text-white px-3 md:px-8 py-3 rounded-xl text-[14px] md:text-lg w-fit">
                Learn More
              </button>
            </div>
          </div>

          <div className="relative w-1/2 h-full">
            <img
              src={human}
              alt="human"
              className="absolute bottom-0 right-0 w-full h-full object-contain scale-125"
            />
          </div>
        </div>

      </div>

      {/* ⭐ INSTAGRAM SECTION (DUMMY) */}
      <div className="mt-[143px]">
        <InstagramFeedSection posts={instaPosts} />
      </div>

      <div className="mt-[143px]">
        <NewsletterSection />
      </div>

    </div>
  );
}
