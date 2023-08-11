import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
import { BsFillPersonFill, BsFillHouseDoorFill } from "react-icons/bs";
import { RiArchiveFill } from "react-icons/ri";
import { AiFillPhone } from "react-icons/ai";

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
    &::after {
      content: "";
      position: absolute;
      width: 100%;
      height: 2px;
      background-color: #d7f1f4;
      display: block;
      transition: width 1s;
    }
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
  display: block;
  cursor: pointer;
  color: #d7f1f4;
  position: relative;
  &::after {
    background-color: #d7f1f4;
    content: "";
    display: block;
    height: 2px;
    position: absolute;
    width: 0;
    transition: width 0.35s;
  }
  &:hover::after {
    width: 100%;
  }
`;

export const IconHome = styled(BsFillHouseDoorFill)`
  margin-right: 10px;
  height: 20px;
  fill: #008b8b;
`;

export const IconAbout = styled(BsFillPersonFill)`
  margin-right: 10px;
  height: 20px;
  fill: #008b8b;
`;

export const IconProjects = styled(RiArchiveFill)`
  margin-right: 10px;
  height: 20px;
  fill: #008b8b;
`;

export const IconContact = styled(AiFillPhone)`
  margin-right: 10px;
  fill: #008b8b;
  height: 20px;
`;
