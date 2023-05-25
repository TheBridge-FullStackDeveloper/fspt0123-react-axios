import { styled } from "styled-components";

const Button = styled.button`
  width: 160px;
  height: 35px;
  color: ${(props) => props.styles.fonts};
  background-color: ${(props) => props.styles.background};
  border-color: ${(props) => props.styles.border};
  border-radius: 10px;

  &:hover {
    cursor: pointer;
  }
`;

export default {
  Button,
};
