import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import axiosInstance from "./../AxiosConfig/instance";
import MovieCard from "./Movie";
import ReactPaginate from "react-js-pagination";

const MovieList = () => {
  var [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const moviesPerPage = 9; // Number of movies per page
  useEffect(function () {
    axiosInstance
      .get("/movie/popular")
      .then((res) => {
        console.log(res.data);
        setMovies(res.data.results);
        console.log("movide = " + movies);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = movies.slice(indexOfFirstMovie, indexOfLastMovie);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
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
          />
        ))}
      </div>
      <div className="flex  justify-center mt-8">
        <ReactPaginate
          activePage={currentPage}
          itemsCountPerPage={moviesPerPage}
          totalItemsCount={movies.length}
          pageRangeDisplayed={5} // Adjust the number of visible page numbers
          onChange={handlePageChange}
          itemClass="px-3 py-1 text-gray-300"
          activeClass="bg-gray-800 text-white"
          prevPageText="Previous"
          nextPageText="Next"
          hideFirstLastPages={true}
        />
      </div>
    </div>
  );
};

export default MovieList;
