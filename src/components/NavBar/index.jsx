import { Link, useRoute } from "wouter";
import Styled from "./styles";

const CustomLink = ({ href, children }) => {
  const [isactive] = useRoute(href);

  return (
    <Link {...{ href }}>
      <Styled.Anchor {...{ href, isactive: isactive.toString() }}>
        {children}
      </Styled.Anchor>
    </Link>
  );
};

const NavBar = () => {
  return (
    <Styled.Nav>
      <CustomLink href="/countries">countries</CustomLink>
      <CustomLink href="/books">books</CustomLink>
    </Styled.Nav>
  );
};

export default NavBar;
