/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({
  title,
  imageUrl,
  overview,
  voteAverage,
  adult,
  releaseDate,
  id,
}) => {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg h-full flex flex-col">
      <img className="w-full h-97 object-cover" src={imageUrl} alt={title} />
      <div className="px-4 py-4">
        <h2 className="text-xl font-semibold text-white mb-2">{title}</h2>
        <p className="text-gray-400 text-sm mb-2 h-20 overflow-hidden">
          {overview}
        </p>
        <div className="flex items-center mb-2">
          <span className="text-yellow-400 mr-1">&#9733;</span>
          <span className="text-white">{voteAverage}</span>
        </div>
        <div className="mb-2">
          {adult && (
            <span className="bg-red-600 text-white font-semibold py-1 px-2 rounded">
              Adult
            </span>
          )}
        </div>
        <p className="text-gray-400 text-sm">{releaseDate}</p>
      </div>
      <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded  mt-auto">
        <Link to={`/movie/${id}`}>Watch Now</Link>
      </button>
    </div>
  );
};

export default MovieCard;
