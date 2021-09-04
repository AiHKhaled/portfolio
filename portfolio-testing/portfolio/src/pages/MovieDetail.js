import React, { useState } from "react";

import styled from "styled-components";
import { MovieState } from "./MovieState";

import { motion } from "framer-motion";
import { PageAnimation } from "../Animation";
const MovieDetail = () => {
  //const history = useHistory();
  //const url = history.location.pathname;
  const [movies, setMovies] = useState(MovieState);
  const [movie, setMovie] = useState(null);
  // useEffect(() => {
  // const currentMovie = movies.filter((stateMovie) => stateMovie.url === url);
  //setMovie(currentMovie[0]);
  //}, [movies, url]);
  console.log(movies);
  console.log();
  return (
    <>
      {movies
        .filter((movie) => movie.id === 1)
        .map((filteredmovie) => (
          <Details
            variants={PageAnimation}
            initial="hidden"
            animate="show"
            exit="exit"
          >
            <Headline>
              <h2>{filteredmovie.title}</h2>
              <img src={filteredmovie.mainImg} alt="" />
            </Headline>

            <Awards>
              <h2>Awards</h2>
              {filteredmovie.awards.map((award) => (
                <Award title={award.title} description={award.description} />
              ))}
            </Awards>
            <ImageDisplay>
              <img src={filteredmovie.secondaryImg} alt="" />
            </ImageDisplay>
          </Details>
        ))}
    </>
  );
};

const ImageDisplay = styled.div`
  min-height: 20vh;
  img {
    height: 80vh;
    width: 90%;
    object-fit: cover;
    position: relative;
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 3rem;
    border-radius: 10px;
  }
`;
const Awards = styled.div`
  h2 {
    padding-bottom: 3rem;
    color: #c4eb3b;
  }
  min-height: 80vh;
  display: flex;
  margin: 2rem 5rem;
  align-items: center;
  justify-content: space-around;
`;
const AwardStyle = styled.div`
  padding: 8rem;
  h3 {
    font-size: 2rem;
  }

  p {
    padding: 3rem 0rem;
    font-size: 1rem;
  }
`;

const Award = ({ title, description }) => {
  return (
    <AwardStyle>
      <h3> {title} </h3>

      <p>{description}</p>
    </AwardStyle>
  );
};
const Details = styled(motion.div)`
  color: white;
`;
const Headline = styled.div`
  min-height: 90vh;
  padding-top: 20vh;
  position: relative;
  h2 {
    position: absolute;
    top: 5%;
    left: 50%;
    transform: translate(-50%, -10%);
  }
  img {
    height: 80vh;
    width: 90%;
    object-fit: cover;
    position: relative;
    display: block;
    margin-left: auto;
    margin-right: auto;
    border-radius: 10px;
  }
`;
export default MovieDetail;
