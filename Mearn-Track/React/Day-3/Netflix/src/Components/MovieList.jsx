import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import axiosInstance from "./../AxiosConfig/instance";
import MovieCard from "./Movie";

const MovieList = () => {
  var [movies, setMovies] = useState([]);

  useEffect(function () {
    axiosInstance
      .get("/")
      .then((res) => {
        console.log(res.data);
        setMovies(res.data.results);
        console.log("movide = " + movies);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <div className="grid grid-cols-2 gap-4">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            title={movie.title}
            imageUrl={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            overview={movie.overview}
            voteAverage={movie.voteAverage}
            adult={movie.adult}
            releaseDate={movie.releaseDate}
          />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
