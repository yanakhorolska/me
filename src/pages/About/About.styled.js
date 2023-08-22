import styled from "@emotion/styled";
import bg from "../../images/Leonardo_Creative_dark_picture_with_some_lines_dots_abstractio_1.jpg";
import girl from "../../images/Leonardo_Diffusion_girlcat_with_headphones_and_laptop_digital_2.jpg";

export const AboutBox = styled.div`
  background: url(${bg});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  color: white;
`;
export const Backdrop = styled.div`
  height: 100%;
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.8) 20%,
    rgba(0, 0, 0, 0.7) 80%
  );
`;
export const PageBox = styled.section`
  padding: 150px 0px;
  color: rgba(215, 241, 244, 0.7);
`;
export const Box = styled.div`
  background-color: rgba(60, 60, 60, 0.15);
  box-shadow: 2px 2px 14px 5px rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
  max-width: 1200px;
  max-height: 100%;
  margin: 0 auto 50px;
  border-radius: 10px;
  padding: 50px;
  position: relative;
`;
export const IntroductionBox = styled.div`
  display: flex;
  gap: 50px;
`;
export const IntroductionText = styled.p``;
export const IntroductionDescribe = styled.div`
  width: 60%;
`;
export const IntroductionImg = styled.div`
  background: url(${girl});
  width: 40%;
  height: 400px;
  background-position: center;
  background-size: cover;
  border-radius: 10px;
  box-shadow: 2px 2px 14px 5px rgba(0, 0, 0, 0.4);
`;
export const IntroductionTitle = styled.h2`
  margin-bottom: 50px;
`;
export const IntroductionSpan = styled.span`
  color: #008b8b;
`;
export const StackBox = styled.div`
  margin-top: 70px;
`;
export const StackTitle = styled.h2``;
export const StackItem = styled.div``;
export const StackItemTitle = styled.h3``;
export const StackItemImg = styled.div``;
export const InterestsBox = styled.div``;
export const InterestsTitle = styled.h2``;
export const InterestsItem = styled.div``;
export const InterestsItemTitle = styled.h3``;
export const InterestsItemImg = styled.div``;
