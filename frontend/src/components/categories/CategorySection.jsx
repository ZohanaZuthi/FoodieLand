import CategoryCard from "./CategoryCard";

export default function CategorySection() {
  const categories = [
    {
      name: "Breakfast",
      image: 'src/assets/img/image 20.png',
      gradient: "linear-gradient(135deg, #FCEDE7 0%, #FFFFFF 100%)",
    },
    {
      name: "Vegan",
      image: "src/assets/img/image 21.png",
      gradient: "linear-gradient(135deg, #E9F8EC 0%, #FFFFFF 100%)",
    },
    {
      name: "Meat",
      image: "src/assets/img/image 22.png",
      gradient: "linear-gradient(135deg, #FEECEC 0%, #FFFFFF 100%)",
    },
    {
      name: "Dessert",
      image: "src/assets/img/image 23.png",
      gradient: "linear-gradient(135deg, #FFF3E7 0%, #FFFFFF 100%)",
    },
    {
      name: "Lunch",
      image: "src/assets/img/image 24.png",
      gradient: "linear-gradient(135deg, #F6F6F6 0%, #FFFFFF 100%)",
    },
    {
      name: "Chocolate",
      image: "src/assets/img/image 25.png",
      gradient: "linear-gradient(135deg, #FFEBEB 0%, #FFFFFF 100%)",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 my-16">
      
     
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-semibold">Categories</h2>
        <button className="bg-[#E7F9FD] text-gray-700 px-5 py-2 rounded-full text-sm">
          View All Categories
        </button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
        {categories.map((cat) => (
          <CategoryCard
            key={cat.name}
            name={cat.name}
            image={cat.image}
            gradient={cat.gradient}
          />
        ))}
      </div>

    </section>
  );
}
