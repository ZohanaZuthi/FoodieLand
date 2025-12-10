

export default function CategoryCard({ name, image, gradient }) {
  return (
    <div className="
        w-[140px] h-[160px]
        rounded-2xl shadow-sm
        flex flex-col items-center justify-center
        cursor-pointer
        transition-all duration-300
        hover:scale-105"      style={{background: gradient,}} >
      <img src={image} alt={name} className="w-16 h-16 object-contain" />
      <p className="mt-3 text-gray-700 font-medium">{name}</p>
    </div>
  );
}
