import { useState, useEffect } from "react";
import RecipeCard from "../../components/recipes/RecipeCard";
import NewsletterSection from "../../components/layout/NewsletterSection";

export default function ContactPage() {
  const [recommended, setRecommended] = useState([]);

  // Form fields
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    enquiry_type: "Advertising",
    message: "",
  });

  const [status, setStatus] = useState(null);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/recipes/")
      .then((res) => res.json())
      .then((data) => setRecommended(data.slice(0, 4)));
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://127.0.0.1:8000/api/contact/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    })
      .then((res) => {
        if (res.ok) {
          setStatus("success");
          setForm({
            name: "",
            email: "",
            subject: "",
            enquiry_type: "Advertising",
            message: "",
          });
        } else {
          setStatus("error");
        }
      })
      .catch(() => setStatus("error"));
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">

      <h1 className="text-4xl md:text-5xl font-bold mb-10">Contact us</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        
        <img
          src="/src/assets/img/chef.png"
          className="w-full h-[500px] object-cover rounded-2xl"
          alt="chef"
        />

        <form onSubmit={handleSubmit} className="flex flex-col space-y-6">

          {status === "success" && (
            <p className="text-green-600 font-semibold">
              Message sent successfully!
            </p>
          )}
          {status === "error" && (
            <p className="text-red-600 font-semibold">
              Something went wrong. Try again.
            </p>
          )}

          <div>
            <label className="text-sm font-semibold">Name</label>
            <input
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your name..."
              className="w-full border px-4 py-3 rounded-xl"
            />
          </div>

          <div>
            <label className="text-sm font-semibold">Email Address</label>
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your email address..."
              className="w-full border px-4 py-3 rounded-xl"
            />
          </div>

          <div>
            <label className="text-sm font-semibold">Subject</label>
            <input
              name="subject"
              type="text"
              value={form.subject}
              onChange={handleChange}
              placeholder="Enter subject..."
              className="w-full border px-4 py-3 rounded-xl"
            />
          </div>

          <div>
            <label className="text-sm font-semibold">Enquiry Type</label>
            <select
              name="enquiry_type"
              value={form.enquiry_type}
              onChange={handleChange}
              className="w-full border px-4 py-3 rounded-xl"
            >
              <option>Advertising</option>
              <option>Recipe Support</option>
              <option>General Question</option>
            </select>
          </div>

          <div>
            <label className="text-sm font-semibold">Message</label>
            <textarea
              name="message"
              rows="5"
              value={form.message}
              onChange={handleChange}
              placeholder="Enter your message..."
              className="w-full border px-4 py-3 rounded-xl"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-black text-white px-10 py-3 rounded-xl font-semibold w-fit"
          >
            Submit
          </button>
        </form>
      </div>

      <div className="mt-20">
        <NewsletterSection />
      </div>

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
