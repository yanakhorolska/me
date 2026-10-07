import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const HeaderBox = styled.header`
  position: absolute;
  z-index: 20;
  top: 16px;
  left: 0;
  width: 100%;
  padding: 0;
  border-radius: 14px;
  border: 1px solid rgba(61, 172, 255, 0.18);
  background: linear-gradient(90deg, rgba(5, 22, 39, 0.88), rgba(5, 19, 35, 0.78));
  box-shadow: inset 0 0 24px rgba(0, 189, 255, 0.03), 0 10px 34px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(14px);
`;

export const Nav = styled.nav`
  min-height: 62px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 28px;
  padding: 0 20px;
`;

export const Brand = styled(NavLink)`
  display: inline-flex;
  align-items: center;
  gap: 12px;
  color: #f6f9ff;
  text-decoration: none;
`;

export const BrandMark = styled.span`
  color: var(--accent);
  font-family: "Chivo Mono", monospace;
  font-size: 22px;
  font-weight: 700;
  letter-spacing: -0.08em;
  text-shadow: 0 0 16px rgba(var(--accent-rgb), 0.36);
`;

export const BrandName = styled.span`
  font-size: 19px;
  font-weight: 700;
  letter-spacing: -0.025em;
`;

export const LinksList = styled.div`
  display: flex;
  align-items: center;
  gap: clamp(20px, 3vw, 38px);

  @media (max-width: 680px) {
    gap: 14px;
  }

  @media (max-width: 560px) {
    a:not(:first-of-type):not(:last-of-type) {
      display: none;
    }
  }
`;

export const Link = styled(NavLink)`
  position: relative;
  padding: 20px 0 18px;
  color: #aabbd2;
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
  transition: color 180ms ease;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 10px;
    width: 100%;
    height: 2px;
    border-radius: 999px;
    background: var(--accent);
    box-shadow: 0 0 12px rgba(var(--accent-rgb), 0.55);
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 180ms ease;
  }

  &:hover,
  &.active {
    color: var(--accent);
  }

  &:hover::after,
  &.active::after {
    transform: scaleX(1);
    transform-origin: left;
  }
`;

export const NavRight = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;

  @media (max-width: 760px) {
    gap: 10px;
  }
`;

export const ThemePicker = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 8px;
  border-radius: 999px;
  border: 1px solid rgba(91, 163, 226, 0.16);
  background: rgba(6, 21, 38, 0.72);

  @media (max-width: 620px) {
    display: none;
  }
`;

export const ThemeDot = styled.button`
  width: 13px;
  height: 13px;
  padding: 0;
  border: 0;
  border-radius: 50%;
  background: ${({ $color }) => $color};
  box-shadow:
    0 0 0 ${({ $active }) => ($active ? "2px" : "0")} rgba(255, 255, 255, 0.72),
    0 0 10px ${({ $color }) => $color};
  opacity: ${({ $active }) => ($active ? 1 : 0.62)};
  transition: transform 160ms ease, opacity 160ms ease, box-shadow 160ms ease;

  &:hover {
    transform: scale(1.18);
    opacity: 1;
  }
`;
