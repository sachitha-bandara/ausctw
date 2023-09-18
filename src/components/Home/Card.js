import React from "react";

function Card({ image, title, description }) {
  return (
    <div className="w-full md:w-1/2 lg:w-1/4 p-4">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <img src={image} alt={title} className="w-full h-40 object-cover" />
        <div className="p-4">
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
