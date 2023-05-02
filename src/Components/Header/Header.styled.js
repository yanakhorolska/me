import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

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
  color: #d7f1f4;
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
