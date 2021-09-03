import React, { useState } from "react";
import athlete from "../img/athlete-small.png";
import theracer from "../img/theracer-small.png";
import goodtimes from "../img/goodtimes-small.png";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { MovieState } from "./MovieState";

const OurWork = () => {
  const [movies, setMovies] = useState(MovieState);

  return (
    <Work>
      {movies.map((movie) => (
        <>
          <Movie id={movie.id}>
            <h2>{movie.title}</h2>
            <Link to={{ pathname: movie.url }}>
              <img src={movie.mainImg} alt="" />
            </Link>
          </Movie>
        </>
      ))}
    </Work>
  );
};
const Work = styled.div`
  padding: 5rem 10rem;
  min-height: 100vh;
  align-items: center;
  color: white;
  overflow: hidden;
`;
const Movie = styled.div`
  padding-bottom: 10rem;
  h2 {
    padding: 2rem 0rem;
  }
  img {
    overflow: hidden;
    border-radius: 20px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    height: 80vh;
    width: 80%;
    box-shadow: 2px 0px 5px #979797;
  }
`;
export default OurWork;
