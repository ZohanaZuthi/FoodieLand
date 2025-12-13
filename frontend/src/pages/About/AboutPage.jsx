

import { useEffect, useState } from "react";
import NewsletterSection from "../../components/layout/NewsletterSection";
import RecipeCard from "../../components/recipes/RecipeCard";

export default function AboutPage() {
  const [recommended, setRecommended] = useState([]);

  useEffect(() => {
    
    fetch("http://127.0.0.1:8000/api/recipes/")
      .then((res) => res.json())
      .then((data) => setRecommended(data.slice(0, 4)));
  }, []);

  return (
    <div className="max-w-5xl mx-auto px-6 py-10">

     
      <h1 className="text-4xl md:text-5xl font-bold mb-8">
        Full Guide to Becoming a Professional Chef
      </h1>

    
      <div className="flex items-center gap-3 text-gray-600 mb-10">
        <img
          src="/src/assets/img/chef-profile.png"
          alt="Author"
          className="w-10 h-10 rounded-full object-cover"
        />
        <span className="font-semibold">John Smith</span>
        <span className="text-sm">15 March 2022</span>
      </div>

     
      <img
        src="/src/assets/img/chef-kitchen.png"
        alt="Chef image"
        className="w-full h-[450px] object-cover rounded-3xl mb-12"
      />

      <h2 className="text-xl font-semibold mb-2">
        How did you start out in the food industry?
      </h2>
      <p className="text-gray-700 leading-relaxed mb-10">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac
        ultricies odio. Nulla at congue diam, at dignissim turpis.
      </p>

    
      <h2 className="text-xl font-semibold mb-2">
        What do you like most about your job?
      </h2>
      <p className="text-gray-700 leading-relaxed mb-10">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac
        ultricies odio. Nulla at congue diam, at dignissim turpis.
      </p>

  
      <h2 className="text-xl font-semibold mb-4">
        Do you cook at home on your days off?
      </h2>

      <img
        src="/src/assets/img/chef-home.png"
        alt="Home cooking"
        className="w-full h-[380px] object-cover rounded-3xl mb-6"
      />

      <p className="text-gray-700 leading-relaxed mb-10">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac
        ultricies odio. Nulla at congue diam, at dignissim turpis.
      </p>

     
      <div className="bg-gray-100 rounded-2xl p-8 mb-12">
        <p className="text-lg italic text-gray-700">
          “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac
          ultricies odio.”
        </p>
      </div>

     
      <h2 className="text-xl font-semibold mb-2">
        What is the biggest misconception people have about being a chef?
      </h2>
      <p className="text-gray-700 leading-relaxed mb-16">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at congue
        diam, at dignissim turpis. Vivamus feugiat facilisis.
      </p>

     
      <NewsletterSection />

  
      <h2 className="text-2xl font-semibold mt-20 mb-6">
        Check out the delicious recipe
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {recommended.map((rec) => (
          <RecipeCard key={rec.id} recipe={rec} />
        ))}
      </div>
    </div>
  );
}
