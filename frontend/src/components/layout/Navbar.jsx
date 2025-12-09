function Navbar() {
  return (
    <nav className="w-full bg-white border-b">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <h1 className="font-bold text-2xl">
          Foodieland<span className="text-red-500">.</span>
        </h1>
        <ul className="flex gap-8 text-gray-700">
          <li>Home</li>
          <li>Recipes</li>
          <li>Blog</li>
          <li>Contact</li>
          <li>About us</li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
