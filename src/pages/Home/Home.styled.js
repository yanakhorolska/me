import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import bg from "../../images/Default_city_of_the_future_dark_colors_black_gray_modern_style_1_6ed9292a-2f42-4f44-bff0-27d1733ade98_1.jpg";

export const HomeBg = styled.main`
  min-height: 100vh;
  background:
    linear-gradient(90deg, rgba(5, 8, 18, 0.92) 0%, rgba(5, 8, 18, 0.78) 48%, rgba(5, 8, 18, 0.42) 100%),
    url(${bg}) center / cover no-repeat;
  overflow: hidden;
`;

export const Backdrop = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 150px 0 72px;
  background:
    radial-gradient(circle at 22% 38%, rgba(39, 210, 192, 0.11), transparent 34%),
    radial-gradient(circle at 76% 26%, rgba(89, 105, 255, 0.08), transparent 28%);

  @media (max-width: 767px) {
    padding: 118px 0 48px;
  }
`;

export const Hero = styled.section`
  width: min(720px, 100%);
  color: #f5f7fb;
`;

export const Eyebrow = styled.p`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 22px;
  color: #67ded2;
  font-family: "Chivo Mono", monospace;
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0.16em;
  text-transform: uppercase;

  &::before {
    content: "";
    width: 34px;
    height: 1px;
    background: currentColor;
  }
`;

export const MainHeader = styled.h1`
  max-width: 760px;
  font-size: clamp(56px, 8vw, 102px);
  line-height: 0.94;
  letter-spacing: -0.06em;
  font-weight: 700;
  color: #f7f9fc;
`;

export const Accent = styled.span`
  color: #67ded2;
`;

export const Role = styled.h2`
  margin-top: 26px;
  max-width: 620px;
  font-size: clamp(24px, 3.2vw, 38px);
  line-height: 1.18;
  letter-spacing: -0.035em;
  font-weight: 500;
  color: #dce2ec;
`;

export const Description = styled.p`
  margin-top: 24px;
  max-width: 590px;
  font-size: 17px;
  line-height: 1.75;
  color: #9ca9bc;

  @media (max-width: 767px) {
    font-size: 16px;
  }
`;

export const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 38px;
`;

const buttonBase = `
  min-height: 50px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0 24px;
  border-radius: 12px;
  font-family: "Inter", sans-serif;
  font-size: 15px;
  font-weight: 600;
  letter-spacing: -0.01em;
  cursor: pointer;
  transition: transform 180ms ease, background-color 180ms ease, border-color 180ms ease, color 180ms ease, box-shadow 180ms ease;

  &:hover {
    transform: translateY(-2px);
  }
`;

export const PrimaryLink = styled(Link)`
  ${buttonBase}
  background: #67ded2;
  color: #071013;
  border: 1px solid #67ded2;
  box-shadow: 0 12px 36px rgba(103, 222, 210, 0.16);

  &:hover {
    background: #82e9df;
    border-color: #82e9df;
  }
`;

export const ContactButton = styled.button`
  ${buttonBase}
  background: rgba(255, 255, 255, 0.035);
  color: #e9edf4;
  border: 1px solid rgba(233, 237, 244, 0.2);

  &:hover {
    border-color: rgba(103, 222, 210, 0.62);
    color: #ffffff;
    background: rgba(103, 222, 210, 0.07);
  }
`;

export const Stack = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;
  margin-top: 52px;
  padding-top: 28px;
  border-top: 1px solid rgba(255, 255, 255, 0.09);
  max-width: 620px;
`;

export const StackLabel = styled.span`
  color: #68768a;
  font-family: "Chivo Mono", monospace;
  font-size: 11px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
`;

export const StackItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const StackItem = styled.span`
  padding: 7px 10px;
  border: 1px solid rgba(255, 255, 255, 0.09);
  border-radius: 8px;
  background: rgba(6, 10, 20, 0.34);
  color: #aeb8c7;
  font-family: "Chivo Mono", monospace;
  font-size: 12px;
`;

export const Status = styled.div`
  display: flex;
  align-items: center;
  gap: 9px;
  margin-top: 20px;
  color: #7f8ca0;
  font-size: 13px;
`;

export const StatusDot = styled.span`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #67ded2;
  box-shadow: 0 0 0 5px rgba(103, 222, 210, 0.08);
`;
