import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import girl from "../../images/hero.png";

export const HomeBg = styled.main`
  min-height: 100vh;
  min-height: 100svh;
  position: relative;
  overflow: hidden;
  isolation: isolate;
  color: #f5f8ff;
  background:
    radial-gradient(
      circle at 82% 22%,
      rgba(0, 221, 255, 0.12),
      transparent 26%
    ),
    radial-gradient(circle at 14% 84%, rgba(96, 92, 255, 0.1), transparent 30%),
    linear-gradient(180deg, #03101d 0%, #061220 52%, #03101b 100%);

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    pointer-events: none;
    opacity: 0.18;
    background-image:
      linear-gradient(rgba(75, 154, 219, 0.1) 1px, transparent 1px),
      linear-gradient(90deg, rgba(75, 154, 219, 0.1) 1px, transparent 1px);
    background-size: 80px 80px;
    mask-image: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.8),
      rgba(0, 0, 0, 0.25)
    );
  }
`;

export const Backdrop = styled.div`
  min-height: 100vh;
  min-height: 100svh;
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  padding: 128px 0 56px;

  @media (max-width: 980px) {
    padding: 112px 0 46px;
  }
`;

export const HeroLayout = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(430px, 0.95fr);
  align-items: center;
  gap: clamp(28px, 4vw, 64px);

  @media (max-width: 1080px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

export const Hero = styled.section`
  max-width: 620px;
  position: relative;
  z-index: 2;
`;

export const Eyebrow = styled.p`
  display: inline-flex;
  align-items: center;
  gap: 11px;
  margin-bottom: 20px;
  color: var(--accent);
  font-family: "Chivo Mono", monospace;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;

  &::before {
    content: "";
    width: 32px;
    height: 2px;
    border-radius: 999px;
    background: var(--accent);
    box-shadow: 0 0 16px rgba(var(--accent-rgb), 0.65);
  }
`;

export const MainHeader = styled.h1`
  max-width: 680px;
  font-size: clamp(58px, 7vw, 96px);
  line-height: 0.96;
  letter-spacing: -0.065em;
  font-weight: 780;
  color: #f8fbff;

  @media (max-width: 620px) {
    font-size: clamp(46px, 13vw, 68px);
  }
`;

export const Accent = styled.span`
  color: var(--accent);
  text-shadow: 0 0 30px rgba(var(--accent-rgb), 0.2);
`;

export const Role = styled.h2`
  margin-top: 16px;
  max-width: 620px;
  color: #b5c8ea;
  font-size: clamp(21px, 2.2vw, 31px);
  line-height: 1.3;
  font-weight: 400;
  letter-spacing: 0.02em;
`;

export const Description = styled.p`
  margin-top: 22px;
  max-width: 560px;
  color: #d0d9e5;
  font-size: 17px;
  line-height: 1.72;
`;

export const PersonalityRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 22px;
`;

export const PersonalityPill = styled.span`
  padding: 9px 14px;
  border-radius: 999px;
  border: 1px solid rgba(72, 173, 255, 0.22);
  background: rgba(8, 29, 49, 0.5);
  color: #b9d5ec;
  font-family: "Chivo Mono", monospace;
  font-size: 11px;
  letter-spacing: 0.05em;
`;

export const Status = styled.div`
  width: fit-content;
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 24px;
  padding: 9px 14px;
  border-radius: 999px;
  border: 1px solid rgba(46, 225, 203, 0.42);
  background: rgba(7, 35, 43, 0.68);
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
  animation: pulse 2.2s ease-in-out infinite;

  @keyframes pulse {
    50% {
      box-shadow:
        0 0 0 10px rgba(40, 232, 195, 0),
        0 0 22px rgba(40, 232, 195, 0.8);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

export const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 26px;
`;

const buttonBase = `
  min-height: 50px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0 24px;
  border-radius: 10px;
  font-family: "Inter", sans-serif;
  font-size: 14px;
  font-weight: 650;
  cursor: pointer;
  text-decoration: none;
  transition:
    transform 180ms ease,
    background-color 180ms ease,
    border-color 180ms ease,
    box-shadow 180ms ease;

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

export const VisualStage = styled.div`
  position: relative;
  min-height: 640px;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media (max-width: 1080px) {
    min-height: 560px;
  }

  @media (max-width: 767px) {
    min-height: 480px;
  }
`;

export const ImageCard = styled.div`
  width: min(100%, 620px);
  min-height: 600px;
  border-radius: 24px;
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(68, 175, 255, 0.2);
  background:
    linear-gradient(
      180deg,
      rgba(4, 17, 34, 0.08) 0%,
      rgba(4, 17, 34, 0.26) 100%
    ),
    url(${girl}) center right / cover no-repeat;
  box-shadow:
    0 24px 80px rgba(0, 0, 0, 0.35),
    0 0 40px rgba(var(--accent-rgb), 0.08);

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      90deg,
      rgba(3, 16, 29, 0.7) 0%,
      rgba(3, 16, 29, 0.18) 42%,
      rgba(3, 16, 29, 0.08) 100%
    );
  }

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: radial-gradient(
      circle at 78% 22%,
      rgba(0, 221, 255, 0.18),
      transparent 28%
    );
    animation: glowMove 8s ease-in-out infinite alternate;
  }

  @keyframes glowMove {
    from {
      transform: translateY(0px);
      opacity: 0.55;
    }
    to {
      transform: translateY(-10px);
      opacity: 1;
    }
  }

  @media (max-width: 767px) {
    min-height: 430px;
    border-radius: 18px;
  }

  @media (prefers-reduced-motion: reduce) {
    &::after {
      animation: none;
    }
  }
`;

export const CodeCard = styled.div`
  position: absolute;
  left: 14px;
  bottom: 34px;
  width: min(92%, 470px);
  border-radius: 18px;
  overflow: hidden;
  border: 1px solid rgba(72, 173, 255, 0.28);
  background: rgba(4, 16, 31, 0.96);
  box-shadow:
    0 24px 50px rgba(0, 0, 0, 0.42),
    0 0 30px rgba(var(--accent-rgb), 0.08);
  backdrop-filter: blur(10px);

  @media (max-width: 767px) {
    left: 10px;
    right: 10px;
    width: auto;
    bottom: 20px;
  }
`;

export const EditorBar = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 14px 16px;
  border-bottom: 1px solid rgba(68, 175, 255, 0.16);
  background: #0b2238;
`;

export const WindowDot = styled.span`
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: ${({ color }) => color || "#49b4df"};
`;

export const EditorFilename = styled.span`
  margin-left: 12px;
  color: #9fbddd;
  font-family: "Chivo Mono", monospace;
  font-size: 11px;
  font-weight: 600;
`;

export const EditorBody = styled.div`
  padding: 20px 22px 22px;
  min-height: 255px;
  background: rgba(4, 14, 27, 0.94);

  @media (max-width: 767px) {
    padding: 18px 16px 18px;
  }
`;

export const CodeLine = styled.div`
  display: flex;
  gap: 14px;
  align-items: flex-start;
  color: #cfe6ff;
  font-family: "Chivo Mono", monospace;
  font-size: clamp(11px, 1vw, 14px);
  line-height: 2;
  white-space: pre-wrap;
`;

export const LineNumber = styled.span`
  width: 24px;
  flex-shrink: 0;
  text-align: right;
  color: #4f77a0;
  user-select: none;
`;

export const CodeKeyword = styled.span`
  color: #ab8cff;
`;

export const CodeVariable = styled.span`
  color: #39d0ff;
`;

export const CodeString = styled.span`
  color: #9be68b;
`;

export const CodeComment = styled.span`
  color: #6e8fb3;
`;

export const Cursor = styled.span`
  display: inline-block;
  width: 8px;
  height: 1.12em;
  margin-left: 2px;
  vertical-align: -0.18em;
  background: var(--accent);
  box-shadow: 0 0 10px rgba(var(--accent-rgb), 0.7);
  animation: blink 1s steps(1) infinite;

  @keyframes blink {
    50% {
      opacity: 0;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

export const BookNote = styled.div`
  position: absolute;
  right: 0;
  bottom: -18px;
  width: min(94%, 420px);
  padding: 14px 18px;
  border-radius: 14px;
  border: 1px solid rgba(var(--accent-rgb), 0.28);
  background: rgba(8, 28, 45, 0.92);
  box-shadow: 0 14px 36px rgba(0, 0, 0, 0.28);

  strong {
    display: block;
    margin-bottom: 7px;
    color: var(--accent);
    font-family: "Chivo Mono", monospace;
    font-size: 10px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  p {
    color: #eff7ff;
    font-size: 15px;
    line-height: 1.55;
  }

  small {
    display: block;
    margin-top: 7px;
    color: #85a6c5;
    font-size: 11px;
    line-height: 1.45;
  }

  @media (max-width: 767px) {
    position: static;
    width: 100%;
    margin-top: 14px;
  }
`;
