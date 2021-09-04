import React from "react";
import home1 from "../img/home1.png";
import { About, Description, Image, Hide } from "../styles";
import { motion } from "framer-motion";
import { fade, photoAnim, titleAnim } from "../Animation";
import Wave from "./Wave";
const AboutSection = () => {
  return (
    <About>
      <Description>
        <div className="title">
          <Hide>
            <motion.h2>we work to make</motion.h2>
          </Hide>

          <Hide>
            <motion.h2>
              your <i>Dreams</i>
            </motion.h2>
          </Hide>

          <Hide>
            <motion.h2>come true. </motion.h2>
          </Hide>
        </div>
        <motion.p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam nihil
          sunt consequatur quos, quis atque voluptatum repellat architecto
          omnis, ullam voluptates excepturi aspernatur blanditiis quas aut
          rerum, veniam assumenda odit.
        </motion.p>
        <motion.button type="submit">
          <a style={{ textDecoration: "None", color: "white" }} href="/contact">
            Contact Us
          </a>
        </motion.button>
      </Description>
      <Image>
        <motion.img
          variants={photoAnim}
          initial="hidden"
          animate="show"
          src={home1}
          alt="a singer"
        />
      </Image>
      <Wave />
    </About>
  );
};

export default AboutSection;
