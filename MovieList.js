import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

const MovieList = () => {
  const [movieData, setMovieData] = useState(null);

  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        const response = await fetch("https://hoblist.com/api/movieList", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            category: "movies",
            language: "kannada",
            genre: "all",
            sort: "voting",
          }),
        });

        if (response.ok) {
          const data = await response.json();
          setMovieData(data.result);
        } else {
          console.error("Failed to fetch movie data:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching movie data:", error);
      }
    };

    fetchMovieData();
  }, []);

  return (
    <div>
      {movieData &&
        movieData.map((movie) => {
          console.log("Movie Object:", movie);
          return <MovieCard key={movie.id} {...movie} />;
        })}
    </div>
  );
};

export default MovieList;
