import { useState, useEffect } from "react";
import RecipeCard from "../../components/recipes/RecipeCard";
import NewsletterSection from "../../components/layout/NewsletterSection";

export default function ContactPage() {
  const [recommended, setRecommended] = useState([]);

  useEffect(() => {
    // Fetch some recipes for the bottom section
    fetch("http://127.0.0.1:8000/api/recipes/")
      .then((res) => res.json())
      .then((data) => setRecommended(data.slice(0, 4))); // show 4 recipes
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">

     
      <h1 className="text-4xl md:text-5xl font-bold mb-10">Contact us</h1>

      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

       
        <img
          src="/src/assets/img/chef.png"
          className="w-full h-[500px] object-cover rounded-2xl"
          alt="chef"
        />

    
        <form className="flex flex-col space-y-6">

          
          <div>
            <label className="text-sm font-semibold">Name</label>
            <input
              type="text"
              placeholder="Enter your name..."
              className="w-full border px-4 py-3 rounded-xl focus:outline-black"
            />
          </div>

          {/* EMAIL */}
          <div>
            <label className="text-sm font-semibold">Email Address</label>
            <input
              type="email"
              placeholder="Your email address..."
              className="w-full border px-4 py-3 rounded-xl focus:outline-black"
            />
          </div>

          {/* SUBJECT */}
          <div>
            <label className="text-sm font-semibold">Subject</label>
            <input
              type="text"
              placeholder="Enter subject..."
              className="w-full border px-4 py-3 rounded-xl focus:outline-black"
            />
          </div>

          {/* ENQUIRY TYPE */}
          <div>
            <label className="text-sm font-semibold">Enquiry Type</label>
            <select className="w-full border px-4 py-3 rounded-xl">
              <option>Advertising</option>
              <option>Recipe Support</option>
              <option>General Question</option>
            </select>
          </div>

          {/* MESSAGE */}
          <div>
            <label className="text-sm font-semibold">Message</label>
            <textarea
              rows="5"
              placeholder="Enter your message..."
              className="w-full border px-4 py-3 rounded-xl focus:outline-black"
            ></textarea>
          </div>

          {/* SUBMIT BUTTON */}
          <button
            type="submit"
            className="bg-black text-white px-10 py-3 rounded-xl font-semibold w-fit"
          >
            Submit
          </button>
        </form>
      </div>

      {/* NEWSLETTER SECTION */}
      <div className="mt-20">
        <NewsletterSection />
      </div>

      {/* RECOMMENDED RECIPES SECTION */}
      <h2 className="text-3xl font-bold mt-20 mb-8">
        Check out the delicious recipe
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {recommended.map((rec) => (
          <RecipeCard key={rec.id} recipe={rec} />
        ))}
      </div>

    </div>
  );
}
