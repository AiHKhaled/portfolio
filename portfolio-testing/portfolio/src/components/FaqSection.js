import React from "react";
import styled from "styled-components";
import { About } from "../styles";
import Toggle from "./Toggle";
import { AnimateSharedLayout } from "framer-motion";
import { useScroll } from "./useScroll";
import { reveal } from "../Animation";
const FaqSection = () => {
  const [element, controls] = useScroll();

  return (
    <Faq variants={reveal} animate={controls} initial="hidden" ref={element}>
      <h2>Any questions regarding our work?</h2>
      <AnimateSharedLayout>
        <Toggle title="How do I start?">
          <div className="Answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Asperiores, accusamus?
            </p>
          </div>
        </Toggle>
        <Toggle title="Daily Schedule">
          <div className="Answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Asperiores, accusamus?
            </p>
          </div>
        </Toggle>

        <Toggle title="Payment Methods">
          <div className="Answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Asperiores, accusamus?
            </p>
          </div>
        </Toggle>
      </AnimateSharedLayout>
    </Faq>
  );
};

const Faq = styled(About)`
  display: block;
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .Question {
    padding: 2rem 0rem;
    cursor: pointer;
  }
  .Answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
      font-weight: lighter;
      font-size: medium;
    }
  }
`;

export default FaqSection;
