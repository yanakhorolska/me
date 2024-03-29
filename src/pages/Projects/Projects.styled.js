import styled from "@emotion/styled";
import bg from "../../images/Leonardo_Diffusion_dark_picture_with_some_lines_dots_abstracti_1.jpg";
import petly from "../../images/petly.jpg";
import { FiLink } from "react-icons/fi";
import weather from "../../images/weather.jpg";
export const ProjectsBox = styled.div`
  background: url(${bg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  color: rgba(215, 241, 244, 0.6);
`;
export const Backdrop = styled.div`
  height: 100%;
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.8) 20%,
    rgba(0, 0, 0, 0.7) 80%
  );
`;

export const MoreButton = styled.button`
  width: 40px;
  height: 40px;
  background-color: #008b8b;
  border-radius: 50%;
  border: none;
  color: #111;
  bottom: 40px;
  right: 60px;
  position: absolute;
  font-size: 20px;
  cursor: pointer;
  transition: all 200ms linear;

  &:hover,
  :focus {
    scale: calc(1.2);
  }
`;
export const BackdropImg = styled.div`
  height: 100%;
  background-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 0.4) 20%,
    rgba(0, 0, 0, 0.4) 80%
  );
  border-radius: 10px;
  &:hover,
  :focus {
    background-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.3) 20%,
      rgba(0, 0, 0, 0.3) 80%
    );
  }
`;

export const PageBox = styled.section`
  padding: 150px 0px;
`;
export const ProjectCard = styled.div`
  background-color: rgba(60, 60, 60, 0.2);
  backdrop-filter: blur(10px);
  width: 1200px;
  margin: 0 auto 50px;
  border-radius: 10px;
  padding: 40px 90px;
  display: flex;
  align-items: center;
  box-shadow: 2px 2px 14px 5px rgba(0, 0, 0, 0.8);
  gap: 50px;
  position: relative;
`;
export const ProjectDescr = styled.div`
  width: 700px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
export const ProjectTitle = styled.h2`
  margin-bottom: 20px;
  color: rgba(215, 241, 244, 0.8);
`;
export const ProjectText = styled.p`
  margin-bottom: 20px;
`;
export const ProjectPetlyImgBox = styled.div`
  width: 400px;
  height: 250px;
  border-radius: 10px;
  background: url(${petly});
  background-size: cover;
  background-position: center;
  box-shadow: 2px 2px 14px 5px rgba(0, 0, 0, 0.3);
`;
export const ProjectWeatherImgBox = styled.div`
  width: 400px;
  height: 250px;
  border-radius: 10px;
  background: url(${weather});
  box-shadow: 2px 2px 14px 5px rgba(0, 0, 0, 0.3);
  background-size: cover;
  background-position: center;
`;

export const ProjectLinkBox = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;
export const ProjectLink = styled.a`
  display: block;
  transition: all 300ms linear;
  text-decoration: underline;
  color: rgba(215, 241, 244, 0.9);
  &:hover,
  :focus {
    color: #008b8b;
  }
`;
export const IconLink = styled(FiLink)`
  height: 20px;
  width: 20px;
`;
