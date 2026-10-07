import {
  HeaderBox,
  Brand,
  BrandMark,
  BrandName,
  LinksList,
  Link,
  Nav,
} from "./Header.styled.js";

export const Header = () => {
  return (
    <HeaderBox>
      <Nav>
        <Brand to="/">
          <BrandMark>&lt;/&gt;</BrandMark>
          <BrandName>Yana</BrandName>
        </Brand>

        <LinksList>
          <Link to="/">Main</Link>
          <Link to="/about">About me</Link>
          <Link to="/projects">My projects</Link>
          <Link to="/contacts">Contacts</Link>
        </LinksList>
      </Nav>
    </HeaderBox>
  );
};
