import React, { useEffect, useState } from "react";
import axiosInstance from "./../AxiosConfig/instance";
import MovieCard from "./Movie";
import ReactPaginate from "react-js-pagination";
import PaginationList from "./Pagenation";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState();

  const handleChange = (e, value) => {
    setPage(value);
  };

  useEffect(
    function () {
      axiosInstance
        .get("/movie/popular", { params: { page } })
        .then((res) => {
          console.log(res.data);
          setMovies(res.data.results);
          setCount(res.data.total_pages);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    [page]
  );

  return (
    <div className="bg-gray-900 min-h-screen p-5">
      <div className="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-20">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            id={movie.id}
            title={movie.title}
            imageUrl={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            overview={movie.overview}
            voteAverage={movie.vote_average}
            adult={movie.adult}
            releaseDate={movie.release_date}
            favourite={movie.favorite}
          />
        ))}
      </div>
      <PaginationList count={count} page={page} handleChange={handleChange} />
    </div>
  );
};

export default MovieList;
