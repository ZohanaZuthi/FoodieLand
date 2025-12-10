import RecipeCard from "../../components/recipes/RecipeCard";
import BigRecipeSlider from "../../components/recipes/BigRecipeSlider";
import CategorySection from "../../components/categories/CategorySection.jsx";
import human from "../../assets/img/Group 880.png";
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
      <CategorySection />
      
      <div className="text-center text-4xl font-semibold p-6">
  Simple and tasty recipes
</div>
 <div className="flex flex-col gap-[143px]">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {bigRecipes.map((recipe) => (
    <RecipeCard key={recipe.id} recipe={recipe} />
  ))}
</div>
<div
  className="flex-auto
    min-w-[90%] md:min-w-[700px] lg:min-w-[1100px] xl:min-w-[1280px]
    h-[400px] md:h-[500px] lg:h-[580px] xl:h-[640px]
    rounded-3xl  flex bg-white top-[150px]"
>
  <div className="w-1/2 py-3 md:py-10 pr-3 md:pr-10 pl-6 md:pl-8 flex flex-col justify-center space-y-6">
    <h2 className="text-4xl md:text-6xl font-bold leading-tight">
      Everyone can be a <br />chef in their own kitchen
    </h2>

    <p className="text-gray-600 text-sm md:text-lg max-w-[80%]">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa nobis
      omnis voluptatibus odio dolor exercitationem fugiat, asperiores excepturi
      beatae, aspernatur rerum facere, animi eveniet cupiditate doloremque
      laboriosam non enim deserunt.
    </p>

    <div className="flex justify-start">
      <button className="bg-black flex items-center gap-1 md:gap-2 text-white px-1 md:px-8 py-3 rounded-xl text-[10px] md:text-lg w-fit whitespace-nowrap">
        Learn More
      </button>
    </div>
  </div>

  <div className="relative flex w-1/2 h-full ">
  <img src={human} alt="human" className="absolute  bottom-0 right-0 w-full h-full object-contain scale-125 "/>

   
  </div>
</div>

    </div>

    </div>
  );
}
