import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const HomeBg = styled.main`
  position: relative;
  isolation: isolate;
  min-height: 100vh;
  min-height: 100svh;
  overflow: hidden;
  color: #f5f8ff;
  background:
    radial-gradient(ellipse at 80% 40%, rgba(var(--accent-rgb), 0.13), transparent 43%),
    radial-gradient(ellipse at 12% 85%, rgba(65, 84, 216, 0.15), transparent 42%),
    linear-gradient(125deg, #03101d 0%, #07192c 54%, #030e1c 100%);

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    z-index: -1;
    pointer-events: none;
    opacity: 0.35;
    background-image:
      linear-gradient(rgba(76, 153, 203, 0.09) 1px, transparent 1px),
      linear-gradient(90deg, rgba(76, 153, 203, 0.09) 1px, transparent 1px);
    background-size: 72px 72px;
    mask-image: linear-gradient(90deg, transparent 0%, #000 65%, #000 100%);
  }

  &::after {
    content: "";
    position: absolute;
    width: min(55vw, 740px);
    aspect-ratio: 1;
    right: -14%;
    top: 2%;
    z-index: -1;
    border-radius: 50%;
    pointer-events: none;
    background: radial-gradient(circle, rgba(var(--accent-rgb), 0.11), transparent 68%);
    filter: blur(14px);
    animation: breathe 9s ease-in-out infinite alternate;
  }

  @keyframes breathe {
    from { transform: scale(0.88); opacity: 0.55; }
    to { transform: scale(1.12); opacity: 1; }
  }

  @media (prefers-reduced-motion: reduce) {
    &::after { animation: none; }
  }
`;

export const Backdrop = styled.div`
  min-height: 100vh;
  min-height: 100svh;
  display: flex;
  align-items: center;
  padding: 132px 0 64px;

  @media (max-width: 767px) {
    padding: 112px 0 52px;
  }
`;

export const HeroLayout = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 0.96fr);
  align-items: center;
  gap: clamp(30px, 4.2vw, 76px);
  width: 100%;

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

export const Hero = styled.section`
  position: relative;
  min-width: 0;
  max-width: 640px;
  padding: 20px 0;
`;

export const Eyebrow = styled.p`
  display: inline-flex;
  align-items: center;
  gap: 11px;
  margin: 0 0 22px;
  color: var(--accent);
  font: 600 12px/1.5 "Chivo Mono", monospace;
  letter-spacing: 0.12em;
  text-transform: uppercase;

  &::before {
    content: "";
    width: 32px;
    height: 2px;
    border-radius: 8px;
    background: var(--accent);
    box-shadow: 0 0 16px rgba(var(--accent-rgb), 0.7);
  }
`;

export const MainHeader = styled.h1`
  margin: 0;
  color: #f8fbff;
  font-size: clamp(56px, 6.8vw, 100px);
  font-weight: 750;
  line-height: 1;
  letter-spacing: -0.07em;

  @media (max-width: 620px) {
    font-size: clamp(48px, 12vw, 70px);
  }
`;

export const Accent = styled.span`
  color: var(--accent);
  text-shadow: 0 0 35px rgba(var(--accent-rgb), 0.32);
`;

export const Role = styled.h2`
  margin: 20px 0 0;
  color: #b5c8ea;
  font-size: clamp(20px, 2vw, 28px);
  line-height: 1.3;
  font-weight: 400;
  letter-spacing: 0.02em;
`;

export const Description = styled.p`
  max-width: 520px;
  margin: 22px 0 0;
  color: #cbd8e8;
  font-size: 16px;
  line-height: 1.7;
`;

export const Status = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  margin-top: 24px;
  padding: 9px 14px;
  border-radius: 999px;
  border: 1px solid rgba(46, 225, 203, 0.42);
  background: rgba(7, 35, 43, 0.72);
  color: #a8d8d3;
  font-size: 13px;
`;

export const StatusDot = styled.span`
  width: 8px;
  height: 8px;
  flex-shrink: 0;
  border-radius: 50%;
  background: #28e8c3;
  box-shadow: 0 0 0 6px rgba(40, 232, 195, 0.07), 0 0 14px rgba(40, 232, 195, 0.7);
  animation: pulse 2.5s ease-in-out infinite;

  @keyframes pulse {
    50% { box-shadow: 0 0 0 10px rgba(40, 232, 195, 0), 0 0 20px rgba(40, 232, 195, 0.7); }
  }

  @media (prefers-reduced-motion: reduce) { animation: none; }
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
  font: 650 14px "Inter", sans-serif;
  text-decoration: none;
  cursor: pointer;
  transition: transform 180ms ease, box-shadow 180ms ease, background 180ms ease, border-color 180ms ease;

  &:hover { transform: translateY(-3px); }
  &:focus-visible { outline: 2px solid var(--accent); outline-offset: 4px; }
  @media (prefers-reduced-motion: reduce) { transition: none; &:hover { transform: none; } }
`;

export const PrimaryLink = styled(Link)`
  ${buttonBase}
  color: #061119;
  background: linear-gradient(90deg, var(--accent), var(--accent-2));
  border: 1px solid var(--accent);
  box-shadow: 0 0 24px rgba(var(--accent-rgb), 0.22);

  &:hover { box-shadow: 0 0 36px rgba(var(--accent-rgb), 0.42); }
`;

export const ContactLink = styled(Link)`
  ${buttonBase}
  color: #dbe7f4;
  background: rgba(5, 23, 40, 0.65);
  border: 1px solid rgba(141, 184, 224, 0.32);

  &:hover {
    border-color: rgba(var(--accent-rgb), 0.62);
    background: rgba(12, 45, 62, 0.78);
  }
`;

export const Stack = styled.div`
  max-width: 570px;
  margin-top: 35px;
  padding-top: 20px;
  border-top: 1px solid rgba(87, 158, 209, 0.2);
`;

export const StackLabel = styled.span`
  display: block;
  margin-bottom: 12px;
  color: #83a3bd;
  font: 500 10px "Chivo Mono", monospace;
  letter-spacing: 0.14em;
  text-transform: uppercase;
`;

export const StackItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 9px;
`;

export const StackItem = styled.span`
  padding: 8px 12px;
  border-radius: 8px;
  border: 1px solid rgba(72, 173, 255, 0.23);
  background: rgba(8, 29, 49, 0.76);
  color: #bed5e9;
  font: 500 11px "Chivo Mono", monospace;
`;

export const EditorScene = styled.aside`
  position: relative;
  min-width: 0;
  padding: 38px 8px 28px 0;
  perspective: 1100px;

  &::before {
    content: "";
    position: absolute;
    inset: 4% 0;
    border-radius: 50%;
    background: radial-gradient(ellipse, rgba(var(--accent-rgb), 0.19), transparent 65%);
    filter: blur(25px);
    pointer-events: none;
  }

  @media (max-width: 980px) {
    width: min(100%, 720px);
    margin: 0 auto;
  }

  @media (max-width: 620px) {
    padding: 4px 0 12px;
  }
`;

export const EditorWindow = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 17px;
  border: 1px solid rgba(87, 174, 232, 0.36);
  background: rgba(5, 17, 33, 0.95);
  box-shadow: 0 35px 90px rgba(0, 0, 0, 0.47),
              0 0 55px rgba(var(--accent-rgb), 0.1),
              inset 0 0 25px rgba(var(--accent-rgb), 0.025);
  transform: rotateY(-5deg) rotateX(2deg);
  animation: float 7s ease-in-out infinite;

  @keyframes float {
    0%, 100% { transform: translateY(0) rotateY(-5deg) rotateX(2deg); }
    50% { transform: translateY(-12px) rotateY(-5deg) rotateX(2deg); }
  }

  @media (max-width: 980px) { transform: none; animation: none; }
  @media (prefers-reduced-motion: reduce) { animation: none; transform: none; }
`;

export const EditorBar = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 14px 17px;
  background: #0b2238;
  border-bottom: 1px solid rgba(91, 169, 227, 0.2);
`;

export const WindowDot = styled.span`
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: ${({ color }) => color || "#49b4df"};
`;

export const EditorFilename = styled.span`
  margin-left: 14px;
  color: #a0bdd4;
  font: 500 11px "Chivo Mono", monospace;
`;

export const EditorBody = styled.div`
  padding: clamp(20px, 3vw, 35px);
  min-height: 325px;
  color: #dae9f7;
  font: 500 clamp(11px, 1.12vw, 14px)/2 "Chivo Mono", monospace;

  @media (max-width: 620px) {
    min-height: 260px;
    padding: 18px 15px;
    font-size: 10px;
  }
`;

export const CodeLine = styled.div`
  display: flex;
  gap: 14px;
  white-space: pre-wrap;
  overflow-wrap: anywhere;
`;

export const LineNumber = styled.span`
  width: 18px;
  flex-shrink: 0;
  color: #4b6b88;
  text-align: right;
  user-select: none;
`;

export const CodeKeyword = styled.span`color: #b597ff;`;
export const CodeVariable = styled.span`color: #70d6f4;`;
export const CodeString = styled.span`color: #a8e6a2;`;
export const CodeComment = styled.span`color: #688dac;`;

export const Cursor = styled.span`
  display: inline-block;
  width: 7px;
  height: 1.2em;
  vertical-align: -0.22em;
  background: var(--accent);
  box-shadow: 0 0 12px rgba(var(--accent-rgb), 0.58);
  animation: blink 1s steps(1) infinite;

  @keyframes blink { 50% { opacity: 0; } }
  @media (prefers-reduced-motion: reduce) { animation: none; }
`;

export const BookNote = styled.div`
  position: relative;
  width: fit-content;
  max-width: 96%;
  margin: -18px 0 0 auto;
  padding: 14px 20px;
  border-radius: 12px;
  border: 1px solid rgba(var(--accent-rgb), 0.38);
  background: rgba(9, 30, 48, 0.96);
  box-shadow: 0 15px 45px rgba(0, 0, 0, 0.3);
  color: #dceaf8;

  strong {
    display: block;
    margin-bottom: 6px;
    color: var(--accent);
    font: 600 10px "Chivo Mono", monospace;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  p { font-size: 13px; line-height: 1.55; }
  small { display: block; margin-top: 6px; color: #86a2bc; font-size: 10px; }
`;
