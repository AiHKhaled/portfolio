import React from "react";
import styled from "styled-components";
import { About } from "../styles";

const FaqSection = () => {
  return (
    <Faq>
      <h2>Any questions regarding our work?</h2>
      <div className="Question">
        <h4>How do I start?</h4>
        <div className="Answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Asperiores, accusamus?
          </p>
        </div>
      </div>
      <div className="Question">
        <h4>Daily Schedule</h4>
        <div className="Answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Asperiores, accusamus?
          </p>
        </div>
      </div>
      <div className="Question">
        <h4>Payment Methods</h4>
        <div className="Answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Asperiores, accusamus?
          </p>
        </div>
      </div>
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
