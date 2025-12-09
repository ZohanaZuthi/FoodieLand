import RecipeSlider from "../../components/recipes/RecipeSlider";
import BigRecipeSlider from "../../components/recipes/BigRecipeSlider";

const bigRecipes = [
  {
    id: 1,
    title: "Fresh Lime Salmon",
    description: "Delicious lime salmon with herbs...",
    image: "https://i.ibb.co/YRHd8G7/food1.jpg",
    time: "20 min",
    category: "Fish",
  },
  {
    id: 2,
    title: "Creamy Chicken Pasta",
    description: "Rich chicken pasta with cream sauce...",
    image: "https://i.ibb.co/KGQBG6w/food2.jpg",
    time: "30 min",
    category: "Chicken",
  },
];
// Dummy data for now
const dummyRecipes = [
  {
    id: 1,
    title: "Fresh Lime Salmon",
    image: "https://i.ibb.co/YRHd8G7/food1.jpg",
    time: "20 min",
    category: "Fish",
  },
  {
    id: 2,
    title: "Creamy Chicken Pasta",
    image: "https://i.ibb.co/KGQBG6w/food2.jpg",
    time: "30 min",
    category: "Chicken",
  },
  {
    id: 3,
    title: "Avocado Salad Bowl",
    image: "https://i.ibb.co/4P10y3w/food3.jpg",
    time: "15 min",
    category: "Vegan",
  },
  {
    id: 4,
    title: "Beef Steak Plate",
    image: "https://i.ibb.co/R9j6tk2/food4.jpg",
    time: "40 min",
    category: "Beef",
  },
];

export default function HomePage() {
  return (
    <div>
       <div>
      <BigRecipeSlider recipes={bigRecipes} />
    </div>

      {/* Now the slider is rendered properly */}
      <RecipeSlider recipes={dummyRecipes} title="Simple & Tasty Recipes" />
    </div>
  );
}
