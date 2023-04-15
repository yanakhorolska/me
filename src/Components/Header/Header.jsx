import { HeaderBox, Logo, LinksList, LinkItem, Link } from "./Header.styled.js";

export const Header = () => {
  return (
    <HeaderBox className="header">
      <Logo href="#" className="logo">
        Portfolio
      </Logo>
      <LinksList className="links-list">
        <Link href="#">About me</Link>

        <Link href="#">My projects</Link>

        <Link href="#">Contacts</Link>
      </LinksList>
    </HeaderBox>
  );
};
