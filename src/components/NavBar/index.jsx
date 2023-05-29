import { Link, useRoute } from "wouter";
import Styled from './styles'

const CustomLink = ({ href, children }) => {
  const [isActive] = useRoute(href);

  return (
    <Link {...{ href }}>
      <Styled.Anchor {...{ href, isActive }}>{children}</Styled.Anchor>
    </Link>
  );
};

const NavBar = () => {
  return (
    <Styled.Nav>
      <CustomLink href="/clock">Clock</CustomLink>
      <CustomLink href="/quotes">Quotes</CustomLink>
      <CustomLink href="/about">About</CustomLink>
    </Styled.Nav>
  );
};

export default NavBar;
