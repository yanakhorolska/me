import styled from "@emotion/styled";
import bg from "../../images/Default_city_of_the_future_dark_colors_black_gray_modern_style_1_6ed9292a-2f42-4f44-bff0-27d1733ade98_1.jpg";

export const HomeBg = styled.div`
  height: 100vh;
  background-image: url(${bg});
  background-position: center;
  background-size: 100vw;
`;

export const TextBlock = styled.div`
  color: rgba(215, 241, 244, 0.9);
`;

export const ContactButton = styled.button`
  font-size: 25px;
  border-radius: 15px;
  outline: none;
  border: 2px solid rgba(215, 241, 244, 0.9);
  padding: 12px 20px;
  background-color: transparent;
  color: rgba(215, 241, 244, 0.9);
  cursor: pointer;
  font-family: "Chivo Mono", monospace;
  font-weight: 600;
  margin-top: 50px;
  transition: all 350ms linear;
  &:hover {
    background-color: rgba(215, 241, 244, 0.9);
    color: black;
  }
`;

export const MainHeader = styled.h1`
  font-size: 40px;
  margin-bottom: 25px;
  display: inline-block;
`;

export const SecondHeader = styled.h2`
  font-size: 30px;
  font-weight: 400;
`;

export const Span = styled.span`
  color: #008b8b;
  font-size: 30px;
  font-weight: 700;
`;

export const Backdrop = styled.div`
  height: 100%;
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.9) 20%,
    rgba(0, 0, 0, 0.8) 80%
  );
  display: flex;
  align-items: center;
`;
export const Icon = styled.img`
  display: inline;
  margin-left: 20px;
`;
