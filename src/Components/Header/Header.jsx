import { HeaderBox, LinksList, Link, Nav, Backdrop } from "./Header.styled.js";

export const Header = () => {
  return (
    <HeaderBox>
      <Nav>
        <Link to="/">Main</Link>
        <LinksList>
          <Link to="/about">About me</Link>

          <Link to="/projects">My projects</Link>

          <Link to="/contacts">Contacts</Link>
        </LinksList>
      </Nav>
    </HeaderBox>
  );
};
