import React from 'react';
import { Link } from 'react-router-dom';

function Card({ title, description, to }) {
  return (
    <div className="bg-golden shadow-lg rounded-lg p-20 hover:shadow-xl transition-shadow">
      <h2 className="text-2xl font-bold text-blush mb-4">{title}</h2>
      <p className="text-white mb-6 text-xl">{description}</p>
      <Link
        to={to}
        className="text-xl font-bold bg-blush text-white py-2 px-4 rounded transition-colors hover:text-gray-200 h-[500px]"
      >
        Start Learning
      </Link>
    </div>
  );
}

export default Card;
