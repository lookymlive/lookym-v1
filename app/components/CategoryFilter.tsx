"use client";
import { FC, useState } from "react";

const CategoryFilter: FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  const categories = ["Ropa", "Zapatos", "Relojes", "Accesorios"]; // Añade más categorías si es necesario

  return (
    <div className="flex space-x-4 py-4">
      {categories.map((category) => (
        <button
          key={category}
          className={`px-4 py-2 rounded-full border ${
            selectedCategory === category ? "bg-blue-500 text-white" : "border-gray-400"
          }`}
          onClick={() => setSelectedCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
