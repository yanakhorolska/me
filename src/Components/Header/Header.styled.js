import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
import { BsFillPersonFill, BsFillHouseDoorFill } from "react-icons/bs";
import { RiArchiveFill } from "react-icons/ri";

export const HeaderBox = styled.header`
  position: absolute;
  width: 100%;
  padding: 30px 0px;
`;

export const Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LinksList = styled.div`
  display: flex;
  list-style: none;
  gap: 50px;
  font-size: 20px;
`;

export const Link = styled(NavLink)`
  font-size: 25px;
  text-decoration: none;
  font-weight: 400;
  &.active {
    text-decoration: underline;
    text-decoration-color: #080baa;
  }
`;
// export const Backdrop = styled.div`
//   height: 100%;
//   background-image: linear-gradient(
//     to right,
//     rgba(8, 11, 170, 0.5) 40%,
//     rgba(8, 11, 170, 0.1) 60%
//   );
//   padding: 15px 10px;
//   border: 1px solid rgb(8, 11, 170);
//   border-radius: 30px;
// `;

export const LinksBox = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  color: white;
  transition: color 200ms linear;
  &:hover {
    color: #080baa;
  }
`;

export const IconHome = styled(BsFillHouseDoorFill)`
  margin-right: 10px;
  height: 20px;
`;

export const IconAbout = styled(BsFillPersonFill)`
  margin-right: 10px;
  height: 20px;
`;

export const IconProjects = styled(RiArchiveFill)`
  margin-right: 10px;
  height: 20px;
`;

export const IconContact = styled(BsFillHouseDoorFill)`
  margin-right: 10px;
  height: 20px;
`;
