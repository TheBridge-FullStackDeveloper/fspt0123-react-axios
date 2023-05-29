import { styled } from "styled-components";

const Wrapper = styled.section`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
`;

const Image = styled.img`
  width: 500px;
  height: 500px;
  object-fit: cover;
  border-radius: 60px;
  box-shadow: 8px 11px 21px -7px;
`;

const Quote = styled.q`
  font-size: 3.5rem;
  text-align: center;
`;

export default {
  Wrapper,
  Image,
  Quote,
};
