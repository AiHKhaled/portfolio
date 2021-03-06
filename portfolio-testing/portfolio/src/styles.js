import styled from "styled-components";
import { motion } from "framer-motion";
export const About = styled(motion.div)`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;
`;
export const Description = styled.div`
  flex: 1;
  padding-right: 5rem;
  h2 {
    font-weight: lighter;
  }
`;
export const Image = styled.div`
  flex: 1;
  overflow: hidden;
  border-radius: 20px;
  height: 80vh;
  width: 100%;
  object-fit: cover;
`;
export const Hide = styled.div`
  overflow: hidden;
`;
