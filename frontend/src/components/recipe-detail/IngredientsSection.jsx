export default function IngredientsSection({ groups }) {
  return (
    <div className="mt-16">
      <h2 className="text-2xl font-semibold mb-6">Ingredients</h2>

      {groups.map((grp) => (
        <div key={grp.id} className="mb-8">
          <h3 className="font-semibold text-lg mb-3">{grp.group_name}</h3>

          <div className="space-y-3">
            {grp.items.map((item) => (
              <label key={item.id} className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" className="w-4 h-4" />
                <span className="text-gray-700">{item.name}</span>
              </label>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
