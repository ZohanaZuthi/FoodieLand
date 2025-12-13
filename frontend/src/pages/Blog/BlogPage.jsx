import { useEffect, useState } from "react";
import NewsletterSection from "../../components/layout/NewsletterSection";
import RecipeCard from "../../components/recipes/RecipeCard";

export default function BlogPage() {
  const [posts, setPosts] = useState([]);
  const [tasty, setTasty] = useState([]);

  useEffect(() => {
  
    fetch("http://127.0.0.1:8000/api/recipes/")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);      
        setTasty(data.slice(0, 3)); 
      });
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">

      <h1 className="text-4xl md:text-5xl font-bold text-center">Blog & Articles</h1>

      <p className="text-gray-600 text-center mt-3 mb-10">
        Find daily cooking inspiration, recipes, and helpful guides.
      </p>

      
      <div className="flex justify-center mb-10">
        <input
          type="text"
          placeholder="Search article, news or recipe..."
          className="border px-4 py-2 rounded-l-lg w-80"
        />
        <button className="bg-black text-white px-6 py-2 rounded-r-lg">
          Search
        </button>
      </div>

     
      <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-10">

     
        <div className="space-y-10">
          {posts.map((post) => (
            <div key={post.id} className="flex gap-5">

         
              <img
                src={post.image}
                alt={post.title}
                className="w-[250px] h-[250px] object-cover rounded-xl"
              />

          
              <div className="flex flex-col justify-between">
                <h2 className="text-xl font-semibold">{post.title}</h2>

                <p className="text-gray-600 text-sm line-clamp-2">
                  {post.description}
                </p>

               
                <div className="flex items-center gap-3 mt-2">
                  <img
                    src={post.author?.avatar}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-medium">{post.author?.name}</p>
                    <p className="text-xs text-gray-500">{post.created_at?.slice(0,10)}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}

          
          <div className="flex gap-3 mt-10">
            <button className="px-3 py-1 border rounded-lg bg-black text-white">1</button>
            <button className="px-3 py-1 border rounded-lg">2</button>
            <button className="px-3 py-1 border rounded-lg">3</button>
            <button className="px-3 py-1 border rounded-lg">...</button>
          </div>
        </div>

        
        <div className="space-y-6">
          <h3 className="text-xl font-semibold">Tasty Recipes</h3>

          {tasty.map((rec) => (
            <div key={rec.id} className="flex gap-4 items-start">
              <img
                src={rec.image}
                className="w-20 h-20 rounded-lg object-cover"
              />
              <div>
                <p className="font-medium">{rec.title}</p>
                <p className="text-xs text-gray-500">By {rec.author?.name}</p>
              </div>
            </div>
          ))}

         
          <img
            src="/src/assets/img/blog-sidebar-ad.png"
            className="rounded-xl mt-10"
          />
        </div>
      </div>

     
      <div className="mt-20">
        <NewsletterSection />
      </div>
    </div>
  );
}
