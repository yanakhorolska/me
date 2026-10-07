import styled from "@emotion/styled";
import bg from "../../images/Leonardo_Diffusion_dark_picture_with_some_lines_dots_abstracti_1.jpg";
import petly from "../../images/petly.jpg";
import weather from "../../images/weather.jpg";
import girl from "../../images/Leonardo_Diffusion_girlcat_with_headphones_and_laptop_digital_2.jpg";
import taskBg from "../../images/Default_background_image_for_website_dark_colors_digital_lapto_0_2cefb854-032c-47e6-b827-5bee2040b37f_1.jpg";

export const ProjectsBox = styled.main`
  min-height: 100vh;
  background: url(${bg}) center / cover fixed;
  color: #eef6ff;
`;

export const Backdrop = styled.div`
  min-height: 100vh;
  background: linear-gradient(180deg, rgba(2, 10, 22, 0.92), rgba(2, 10, 22, 0.97));
`;

export const PageBox = styled.section`
  padding: 118px 0 64px;
`;

export const Eyebrow = styled.p`
  color: #31dce8;
  font-size: 13px;
  font-weight: 600;
  margin-bottom: 10px;
`;

export const PageTitle = styled.h1`
  font-size: clamp(58px, 8vw, 92px);
  line-height: 0.98;
  letter-spacing: -0.06em;
  color: #ffffff;
`;

export const Accent = styled.span`
  color: #31dce8;
`;

export const Intro = styled.p`
  margin-top: 12px;
  max-width: 640px;
  color: #a7b6ca;
  font-size: 17px;
  line-height: 1.55;
`;

export const FeaturedCard = styled.section`
  display: grid;
  grid-template-columns: 1.28fr 0.92fr;
  gap: 24px;
  padding: 22px;
  margin-top: 28px;
  border-radius: 18px;
  background: linear-gradient(180deg, rgba(7, 21, 39, 0.88), rgba(4, 14, 28, 0.92));
  border: 1px solid rgba(72, 173, 255, 0.2);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.28);

  @media (max-width: 880px) {
    grid-template-columns: 1fr;
  }
`;

export const FeaturedImage = styled.div`
  min-height: 340px;
  border-radius: 14px;
  background: linear-gradient(180deg, rgba(4, 12, 24, 0.18), rgba(4, 12, 24, 0.48)), url(${taskBg}) center / cover no-repeat;
  border: 1px solid rgba(74, 166, 255, 0.17);
`;

export const FeaturedContent = styled.div`
  align-self: center;
  padding: 14px 8px;
`;

export const Badge = styled.span`
  display: inline-flex;
  padding: 7px 10px;
  border-radius: 999px;
  color: #52e7f1;
  background: rgba(49, 220, 232, 0.08);
  border: 1px solid rgba(49, 220, 232, 0.24);
  font-size: 12px;
  margin-bottom: 14px;
`;

export const ProjectTitle = styled.h2`
  color: #ffffff;
  font-size: 30px;
  letter-spacing: -0.03em;
`;

export const ProjectSubtitle = styled.h3`
  margin-top: 4px;
  color: #4aa7ff;
  font-size: 20px;
  font-weight: 500;
`;

export const ProjectText = styled.p`
  margin-top: 12px;
  color: #a8b8cb;
  line-height: 1.58;
`;

export const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 16px;
`;

export const Tag = styled.span`
  padding: 7px 9px;
  border-radius: 8px;
  background: rgba(12, 34, 57, 0.86);
  border: 1px solid rgba(77, 161, 244, 0.17);
  color: #bcd0e7;
  font-size: 11px;
`;

export const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 18px;
`;

export const PrimaryLink = styled.a`
  min-width: 128px;
  padding: 11px 16px;
  border-radius: 10px;
  text-align: center;
  background: linear-gradient(90deg, #0b7fd0, #16bdd1);
  border: 1px solid #31dce8;
  color: #ffffff;
  font-weight: 600;
  text-decoration: none;
`;

export const SecondaryLink = styled.a`
  min-width: 128px;
  padding: 11px 16px;
  border-radius: 10px;
  text-align: center;
  background: rgba(10, 28, 48, 0.86);
  border: 1px solid rgba(85, 173, 255, 0.2);
  color: #dce8f7;
  text-decoration: none;
`;

export const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 18px;
  margin: 30px 0 16px;

  @media (max-width: 700px) {
    align-items: flex-start;
    flex-direction: column;
  }
`;

export const SectionTitle = styled.h2`
  color: #ffffff;
  font-size: 26px;
`;

export const SectionNote = styled.p`
  color: #5c91c4;
  font-size: 12px;
`;

export const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;

  @media (max-width: 980px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

export const ProjectCard = styled.article`
  border-radius: 16px;
  overflow: hidden;
  background: linear-gradient(180deg, rgba(7, 21, 39, 0.88), rgba(4, 14, 28, 0.92));
  border: 1px solid rgba(72, 173, 255, 0.2);
`;

export const ProjectImage = styled.div`
  height: 190px;
  background: linear-gradient(180deg, rgba(3, 11, 22, 0.08), rgba(3, 11, 22, 0.26)), ${({ variant }) => {
    if (variant === "petly") return `url(${petly})`;
    if (variant === "weather") return `url(${weather})`;
    if (variant === "portfolio") return `url(${girl})`;
    return `url(${taskBg})`;
  }} center / cover no-repeat;
`;

export const CardBody = styled.div`
  padding: 18px;

  ${ProjectTitle} {
    font-size: 22px;
  }
`;
