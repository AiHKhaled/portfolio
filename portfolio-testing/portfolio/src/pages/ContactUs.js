import React from "react";
import { motion } from "framer-motion";
import { PageAnimation } from "../Animation";
import styled from "styled-components";
const ContactUs = () => {
  return (
    <motion.div
      variants={PageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <List>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi neque
          voluptatibus perferendis consequuntur dolor quasi maiores cumque rem
          aliquid. Nam.
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi neque
          voluptatibus perferendis consequuntur dolor quasi maiores cumque rem
          aliquid. Nam.
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi neque
          voluptatibus perferendis consequuntur dolor quasi maiores cumque rem
          aliquid. Nam.
        </p>
        <h2> Reach me on my social media accounts </h2>
        <ul>
          <li>
            <a className="facebook" href="http://www.facebook.com/">
              facebook
            </a>{" "}
          </li>
          <li>
            <a className="twitter" href="http://www.twitter.com/">
              twitter
            </a>{" "}
          </li>
          <li>
            <a className="discord" href="http://www.discord.com/">
              discord
            </a>
          </li>
        </ul>
      </List>
    </motion.div>
  );
};

const List = styled.div`
  padding: 5rem 10rem;

  color: white;
  ul {
    padding-top: 3rem;
    list-style: none;
    text-align: center;
  }

  a {
    color: white;
    font-size: 2rem;
    text-decoration: None;
  }
  .facebook {
    color: #0606fcbb;
  }
  .twitter {
    color: #2929ec;
  }
  .discord {
    color: blueviolet;
  }
  li {
    padding: 3rem;
    padding-left: 8rem;
    position: relative;
    display: inline;
  }
`;

export default ContactUs;
