import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import girl from "../../images/Leonardo_Diffusion_girlcat_with_headphones_and_laptop_digital_2.webp";

export const HomeBg = styled.main`
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  background:
    radial-gradient(
      circle at 18% 24%,
      rgba(0, 221, 255, 0.08),
      transparent 25%
    ),
    linear-gradient(180deg, #03101d 0%, #061220 52%, #03101b 100%);
  color: #f5f8ff;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    pointer-events: none;
    background:
      linear-gradient(
        90deg,
        rgba(3, 16, 29, 0.9) 0%,
        rgba(3, 16, 29, 0.68) 38%,
        rgba(3, 16, 29, 0.08) 68%,
        rgba(3, 16, 29, 0.28) 100%
      ),
      url(${girl}) 78% center / min(760px, 58vw) auto no-repeat;
  }

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    pointer-events: none;
    opacity: 0.18;
    background:
      linear-gradient(
        90deg,
        transparent 0 8%,
        rgba(var(--accent-rgb), 0.12) 8.1%,
        transparent 8.2%
      ),
      linear-gradient(
        0deg,
        transparent 0 18%,
        rgba(var(--accent-rgb), 0.1) 18.1%,
        transparent 18.2%
      );
    background-size:
      160px 160px,
      190px 190px;
    mix-blend-mode: screen;
  }

  @media (max-width: 980px) {
    &::before {
      background:
        linear-gradient(
          180deg,
          rgba(3, 16, 29, 0.92) 0%,
          rgba(3, 16, 29, 0.64) 56%,
          rgba(3, 16, 29, 0.84) 100%
        ),
        url(${girl}) center top / cover no-repeat;
      opacity: 0.62;
    }
  }
`;

export const Backdrop = styled.div`
  min-height: 100vh;
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  padding: 126px 0 48px;

  @media (max-width: 767px) {
    padding: 112px 0 42px;
  }
`;

export const Hero = styled.section`
  width: min(610px, 52%);
  color: #f5f7fb;
  position: relative;
  z-index: 2;
  padding: 24px 0;

  @media (max-width: 980px) {
    width: min(680px, 100%);
    padding-top: 330px;
  }

  @media (max-width: 620px) {
    padding-top: 260px;
  }
`;

export const Eyebrow = styled.p`
  display: inline-flex;
  align-items: center;
  gap: 11px;
  margin-bottom: 18px;
  color: var(--accent);
  font-family: "Chivo Mono", monospace;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.04em;

  &::before {
    content: "";
    width: 32px;
    height: 2px;
    border-radius: 999px;
    background: var(--accent);
    box-shadow: 0 0 16px rgba(var(--accent-rgb), 0.55);
  }
`;

export const MainHeader = styled.h1`
  max-width: 620px;
  font-size: clamp(58px, 6vw, 88px);
  line-height: 0.96;
  letter-spacing: -0.055em;
  font-weight: 750;
  color: #f8fbff;
`;

export const Accent = styled.span`
  color: var(--accent);
  text-shadow: 0 0 24px rgba(var(--accent-rgb), 0.18);
`;

export const Role = styled.h2`
  margin-top: 14px;
  max-width: 620px;
  color: #b5c8ea;
  font-size: clamp(21px, 2.1vw, 30px);
  line-height: 1.25;
  font-weight: 400;
  letter-spacing: 0.06em;
`;

export const Description = styled.p`
  margin-top: 20px;
  max-width: 555px;
  color: #d0d9e5;
  font-size: 16px;
  line-height: 1.62;

  & + & {
    margin-top: 14px;
  }
`;

export const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 24px;
`;

const buttonBase = `
  min-height: 48px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0 22px;
  border-radius: 10px;
  font-family: "Inter", sans-serif;
  font-size: 14px;
  font-weight: 650;
  cursor: pointer;
  transition: transform 180ms ease, background-color 180ms ease, border-color 180ms ease, box-shadow 180ms ease;

  &:hover {
    transform: translateY(-2px);
  }
`;

export const PrimaryLink = styled(Link)`
  ${buttonBase}
  color: #061119;
  background: linear-gradient(90deg, var(--accent), var(--accent-2));
  border: 1px solid var(--accent);
  box-shadow: 0 0 24px rgba(var(--accent-rgb), 0.22);

  &:hover {
    box-shadow: 0 0 34px rgba(var(--accent-rgb), 0.34);
  }
`;

export const ContactLink = styled(Link)`
  ${buttonBase}
  color: #dbe7f4;
  background: rgba(5, 23, 40, 0.62);
  border: 1px solid rgba(141, 184, 224, 0.26);

  &:hover {
    border-color: rgba(var(--accent-rgb), 0.5);
    background: rgba(12, 45, 62, 0.74);
  }
`;

export const Stack = styled.div`
  margin-top: 34px;
  padding-top: 20px;
  max-width: 570px;
  border-top: 1px solid rgba(87, 158, 209, 0.12);
`;

export const StackLabel = styled.span`
  display: block;
  margin-bottom: 12px;
  color: #58738f;
  font-family: "Chivo Mono", monospace;
  font-size: 10px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
`;

export const StackItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 9px;
`;

export const StackItem = styled.span`
  padding: 8px 11px;
  border-radius: 8px;
  border: 1px solid rgba(72, 173, 255, 0.15);
  background: rgba(8, 29, 49, 0.74);
  color: #a8c3dd;
  font-family: "Chivo Mono", monospace;
  font-size: 11px;
`;

export const Status = styled.div`
  width: fit-content;
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 26px;
  padding: 9px 14px;
  border-radius: 999px;
  border: 1px solid rgba(46, 225, 203, 0.42);
  background: rgba(7, 35, 43, 0.62);
  color: #a8d8d3;
  font-size: 13px;
`;

export const StatusDot = styled.span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #28e8c3;
  box-shadow:
    0 0 0 6px rgba(40, 232, 195, 0.07),
    0 0 14px rgba(40, 232, 195, 0.8);
`;
