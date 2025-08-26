import React from "react";
import { Link } from "react-router-dom";

const Categories = () => {
  const cat = [
  {
    name: "Comedy",
    color: "bg-purple-200",
    to: "/categories/Comedy",
    img: "https://static.thenounproject.com/png/comedy-podcast-icon-5282364-512.png"
  },
  {
    name: "Business",
    color: "bg-red-300",
    to: "/categories/Business",
    img: "https://static.thenounproject.com/png/podcast-icon-2397546-512.png"
  },
  {
    name: "Education",
    color: "bg-yellow-200",
    to: "/categories/Education",
    img: "https://static.thenounproject.com/png/comedy-podcast-icon-6426687-512.png"
  },
  {
    name: "Hobbies",
    color: "bg-gray-300",
    to: "/categories/Hobbies",
    img: "https://static.thenounproject.com/png/podcast-icon-3424369-512.png"
  },
  {
    name: "Government",
    color: "bg-blue-200",
    to: "/categories/Government",
    img: "https://static.thenounproject.com/png/podcast-icon-2667281-512.png"
  },
];


  return (
    <div className="h-screen lg:h-[78vh]">
      <div className="px-4 lg:px-12 py-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {cat.map((items, i) => (
          <Link
            to={items.to}
            key={i}
            className={`rounded px-8 py-4 text-xl font-semibold ${items.color} hover:scale-105 hover:shadow-xl transition-all duration-300 relative h-[22vh] overflow-hidden -z10`}
          >
            <div>{items.name}</div>
            <div className="w-[100%] flex items-center justify-end absolute -bottom-2 -right-2">
              <img
                src={items.img}
                alt="category"
                className="rounded rotate-12 h-[15] md:h-[17vh] lg:h-[18vh]"
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
