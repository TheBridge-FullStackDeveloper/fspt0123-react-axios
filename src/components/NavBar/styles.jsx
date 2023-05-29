import { styled } from "styled-components";

const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  gap: 2rem;
  font-size: 1.5rem;
  margin: 0 50px;
`;

const Anchor = styled.a`
    ${({ isActive }) => `
        color: ${isActive ? '#F7A072' : '#00A7E1'};
        text-decoration: ${!isActive && 'none'};
    `}
`;

export default {
  Nav,
  Anchor,
};
