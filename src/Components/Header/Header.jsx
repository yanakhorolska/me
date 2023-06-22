import { BsFillPersonFill, BsFillHouseDoorFill } from "react-icons/bs";
import {
  HeaderBox,
  LinksList,
  Link,
  Nav,
  LinksBox,
  IconHome,
  IconAbout,
  IconProjects,
  IconContact,
} from "./Header.styled.js";

export const Header = () => {
  return (
    <HeaderBox>
      <Nav>
        <LinksBox>
          <IconHome />
          <Link to="/">Main</Link>
        </LinksBox>
        <LinksList>
          <LinksBox>
            <IconAbout />
            <Link to="/about">About me</Link>
          </LinksBox>
          <LinksBox>
            <IconProjects />
            <Link to="/projects">My projects</Link>
          </LinksBox>

          <LinksBox>
            <IconContact />
            <Link to="/contacts">Contacts</Link>
          </LinksBox>
        </LinksList>
      </Nav>
    </HeaderBox>
  );
};
