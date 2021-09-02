import React from "react";
import athlete from "../img/athlete-small.png";
import theracer from "../img/theracer-small.png";
import goodtimes from "../img/goodtimes-small.png";
import { Link } from "react-router-dom";
import styled from "styled-components";
const OurWork = () => {
  return (
    <Work>
      <Movie>
        <h2>the athlete</h2>
        <Link>
          <img src={athlete} alt="" />
        </Link>
      </Movie>
      <Movie>
        <h2>the racer</h2>
        <Link>
          <img src={theracer} alt="" />
        </Link>
      </Movie>
      <Movie>
        <h2>good times</h2>
        <Link>
          <img src={goodtimes} alt="" />
        </Link>
      </Movie>
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
