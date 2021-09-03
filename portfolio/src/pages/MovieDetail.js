import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import { MovieState } from "./MovieState";

const MovieDetail = () => {
  const history = useHistory();
  const url = history.location.pathname;
  const [movies, setMovies] = useState(MovieState);
  const [movie, setMovie] = useState(null);
  useEffect(() => {
    const currentMovie = movies.filter((stateMovie) => stateMovie.url === url);
    setMovie(currentMovie[0]);
  }, [movies, url]);

  console.log(movie);
  return (
    <>
      {movie && (
        <div>
          <h1>{movie.title}</h1>
          <img src={movie.mainImg} alt="" />
        </div>
      )}
    </>
  );
};

export default MovieDetail;
