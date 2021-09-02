import React from "react";
import home1 from "../img/home1.png";
import { About, Description, Image, Hide } from "../styles";
const AboutSection = () => {
  return (
    <About>
      <Description>
        <div className="title">
          <Hide>
            <h2>we work to make</h2>
          </Hide>

          <Hide>
            <h2>
              your <i>Dreams</i>
            </h2>
          </Hide>

          <Hide>
            <h2>come true. </h2>
          </Hide>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam nihil
          sunt consequatur quos, quis atque voluptatum repellat architecto
          omnis, ullam voluptates excepturi aspernatur blanditiis quas aut
          rerum, veniam assumenda odit.
        </p>
        <button type="submit">Contact Us</button>
      </Description>
      <Image>
        <img src={home1} alt="a singer" />
      </Image>
    </About>
  );
};

export default AboutSection;
