import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Favourites = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.favourites.favourites);

  return (
    <div className="bg-gray-600 min-h-screen flex justify-center">
      <ul className=" p-20 w-1/2 ">
        {movies.map((movie) => {
          return (
            <li
              key={movie.id}
              className=" bg-gray-800 flex p-4 border-b border-gray-600"
            >
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt=""
                className="rounded h-32 w-24 m-2"
              />
              <div className=" m-8">
                <h3 className="text-xl text-gray-200">{movie.title}</h3>
                <p className="flex items-center gap-x-2 mt-2">
                  <span role="img" aria-label="Calendar">
                    🗓
                  </span>
                  <span className="text-gray-500">{movie.release_date}</span>
                </p>
              </div>
              <button className="bg-gray-900 h-8 w-8 text-gray-100 p-1 text-center ms-auto">
                –{" "}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Favourites;
