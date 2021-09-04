import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { MovieState } from "./MovieState";
import { motion } from "framer-motion";
import { PageAnimation } from "../Animation";
import { useScroll } from "../components/useScroll";
//import ScrollTop from "../components/ScrollTop";
const OurWork = () => {
  const [element, controls] = useScroll();
  const [movies, setMovies] = useState(MovieState);

  return (
    <Work variants={PageAnimation} initial="hidden" animate="show" exit="exit">
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
const Work = styled(motion.div)`
  padding: 5rem 10rem;
  min-height: 100vh;
  align-items: center;
  color: white;
  overflow: hidden;
`;
const Movie = styled(motion.div)`
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
