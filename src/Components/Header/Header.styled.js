import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const HeaderBox = styled.header`
  position: absolute;
  z-index: 20;
  top: 0;
  left: 0;
  width: 100%;
  padding: 28px 0;

  @media (max-width: 767px) {
    padding: 20px 0;
  }
`;

export const Nav = styled.nav`
  min-height: 48px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
`;

export const Brand = styled(NavLink)`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  color: #f4f7fb;
  text-decoration: none;
`;

export const BrandMark = styled.span`
  color: #67ded2;
  font-family: "Chivo Mono", monospace;
  font-size: 18px;
  font-weight: 700;
  letter-spacing: -0.06em;
`;

export const BrandName = styled.span`
  font-size: 18px;
  font-weight: 650;
  letter-spacing: -0.03em;
`;

export const LinksList = styled.div`
  display: flex;
  align-items: center;
  gap: clamp(22px, 3vw, 42px);

  @media (max-width: 767px) {
    gap: 16px;
  }

  @media (max-width: 620px) {
    a:not(:first-of-type):not(:last-of-type) {
      display: none;
    }
  }
`;

export const Link = styled(NavLink)`
  position: relative;
  padding: 9px 0;
  color: #9ca9bc;
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
  transition: color 180ms ease;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 3px;
    width: 100%;
    height: 1px;
    background: #67ded2;
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 180ms ease;
  }

  &:hover,
  &.active {
    color: #f5f7fb;
  }

  &:hover::after,
  &.active::after {
    transform: scaleX(1);
    transform-origin: left;
  }
`;
