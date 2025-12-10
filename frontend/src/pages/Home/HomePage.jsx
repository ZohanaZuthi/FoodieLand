import RecipeSlider from "../../components/recipes/RecipeSlider";
import BigRecipeSlider from "../../components/recipes/BigRecipeSlider";

const bigRecipes = [
  {
    id: 1,
    title: "Spicy Chicken Wings",
    description: "Crispy, spicy, and incredibly delicious chicken wings.",
    image: "https://i.ibb.co/1J9GgHB/chicken.jpg",
    time: "30 min",
    category: "Chicken",
    posted_at: "Jan 15, 2025",
    author: {
      name: "John Smith",
      avatar: "https://i.pravatar.cc/100?img=1"
    }
  },
  {
    id: 2,
    title: "Fresh Lime Salmon",
    description: "Lemon zest, garlic, and rich buttery salmon fillet.",
    image: "https://i.ibb.co/YRHd8G7/food1.jpg",
    time: "20 min",
    category: "Fish",
    posted_at: "Jan 8, 2025",
    author: {
      name: "Sarah Wilson",
      avatar: "https://i.pravatar.cc/100?img=2"
    }
  },
  {
    id: 3,
    title: "Avocado Salad Bowl",
    description: "Refreshing, healthy salad bowl packed with greens.",
    image: "https://i.ibb.co/4P10y3w/food3.jpg",
    time: "15 min",
    category: "Vegan",
    posted_at: "Jan 5, 2025",
    author: {
      name: "Emily Carter",
      avatar: "https://i.pravatar.cc/100?img=3"
    }
  }
];

export default function HomePage() {
  return (
    <div>
       <div>
      <BigRecipeSlider className="w-full" recipes={bigRecipes} />
    </div>

      {/* Now the slider is rendered properly */}
      <RecipeSlider recipes={bigRecipes} title="Simple & Tasty Recipes" />
    </div>
  );
}
