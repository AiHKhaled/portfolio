import React from "react";
import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
import home2 from "../img/home2.png";
import styled from "styled-components";
import { About, Description, Image } from "../styles";
import { useScroll } from "./useScroll";
import { reveal } from "../Animation";
const ServicesSection = () => {
  const [element, controls] = useScroll();
  return (
    <Services
      variants={reveal}
      animate={controls}
      initial="hidden"
      ref={element}
    >
      <Description>
        <h2>
          high <span>quality</span> services
        </h2>
        <Cards>
          <Card>
            <div className="icon">
              <img src={clock} alt="clock" />
              <h3>Efficient</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={diaphragm} alt="diaphragm" />
              <h3>Diaphragm</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={money} alt="money" />
              <h3>Affordable</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={teamwork} alt="team" />
              <h3>Teamwork</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
        </Cards>
      </Description>
      <Image>
        <img src={home2} alt="home" />
      </Image>
    </Services>
  );
};
const Services = styled(About)`
  h2 {
    padding-bottom: 5rem;
  }
  p {
    font-size: small;
    padding: 2rem 0rem 4rem 0rem;
  }
`;
const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const Card = styled.div`
  flex-basis: 10rem;
  margin: 0rem 4.5rem 2rem 0rem;

  .icon {
    display: flex;
    align-items: center;
  }
  h3 {
    font-size: small;
    margin-left: 1rem;
    padding: 1rem;
  }
`;
export default ServicesSection;
