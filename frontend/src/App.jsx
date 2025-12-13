import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/Home/HomePage";
import Recipe from "./pages/Recipes/RecipeDetail";

// placeholder pages
const RecipeList = () => <div className="p-10">Recipes Page</div>;
const BlogPage = () => <div className="p-10">Blog Page</div>;
const ContactPage = () => <div className="p-10">Contact Page</div>;
const AboutPage = () => <div className="p-10">About Us Page</div>;

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/recipe/:slug" element={<Recipe />} />

        <Route path="/recipes" element={<RecipeList />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />

      </Route>
    </Routes>
  );
}
