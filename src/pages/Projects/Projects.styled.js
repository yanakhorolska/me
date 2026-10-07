import styled from "@emotion/styled";
import bg from "../../images/Leonardo_Diffusion_dark_picture_with_some_lines_dots_abstracti_1.jpg";
import petly from "../../images/petly.jpg";
import weather from "../../images/weather.jpg";
import girl from "../../images/Leonardo_Diffusion_girlcat_with_headphones_and_laptop_digital_2.jpg";
import taskBg from "../../images/Default_background_image_for_website_dark_colors_digital_lapto_0_2cefb854-032c-47e6-b827-5bee2040b37f_1.jpg";

export const ProjectsBox = styled.main\`
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  color: #eef6ff;
  background:
    linear-gradient(180deg, rgba(2, 10, 22, 0.94), rgba(2, 10, 22, 0.985)),
    url(\${bg}) center / cover fixed no-repeat;
\`;

export const Backdrop = styled.div\`
  min-height: 100vh;
  background:
    radial-gradient(circle at 68% 10%, rgba(42, 153, 255, 0.075), transparent 22%),
    radial-gradient(circle at 20% 62%, rgba(49, 220, 232, 0.045), transparent 24%);
\`;

export const PageBox = styled.section\`
  padding: 108px 0 60px;
\`;

export const Eyebrow = styled.p\`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  color: #31dce8;
  font-size: 13px;
  font-weight: 600;
  margin-bottom: 10px;

  &::before {
    content: "";
    width: 28px;
    height: 2px;
    border-radius: 999px;
    background: #31dce8;
    box-shadow: 0 0 12px rgba(49, 220, 232, 0.45);
  }
\`;

export const PageTitle = styled.h1\`
  font-size: clamp(56px, 7vw, 86px);
  line-height: 0.98;
  letter-spacing: -0.055em;
  color: #ffffff;
\`;

export const Accent = styled.span\`
  color: #31dce8;
\`;

export const Intro = styled.p\`
  margin-top: 12px;
  max-width: 590px;
  color: #aab9cc;
  font-size: 16px;
  line-height: 1.55;
\`;

export const FeaturedCard = styled.section\`
  display: grid;
  grid-template-columns: minmax(0, 1.36fr) minmax(300px, 0.84fr);
  gap: 24px;
  padding: 20px;
  margin-top: 28px;
  border-radius: 14px;
  background: linear-gradient(180deg, rgba(6, 22, 41, 0.9), rgba(4, 15, 29, 0.94));
  border: 1px solid rgba(59, 171, 255, 0.28);
  box-shadow:
    inset 0 0 26px rgba(0, 188, 255, 0.025),
    0 22px 58px rgba(0, 0, 0, 0.26);

  @media (max-width: 880px) {
    grid-template-columns: 1fr;
  }
\`;

export const FeaturedImage = styled.div\`
  min-height: 360px;
  border-radius: 11px;
  background:
    linear-gradient(180deg, rgba(4, 12, 24, 0.04), rgba(4, 12, 24, 0.32)),
    url(\${taskBg}) center / cover no-repeat;
  border: 1px solid rgba(74, 166, 255, 0.2);
  box-shadow: inset 0 0 28px rgba(0, 193, 255, 0.04);
\`;

export const FeaturedContent = styled.div\`
  align-self: center;
  padding: 12px 8px 12px 2px;
\`;

export const Badge = styled.span\`
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 6px 10px;
  border-radius: 999px;
  color: #52e7f1;
  background: rgba(49, 220, 232, 0.08);
  border: 1px solid rgba(49, 220, 232, 0.3);
  font-size: 11px;
  margin-bottom: 14px;

  &::before {
    content: "★";
    font-size: 10px;
  }
\`;

export const ProjectTitle = styled.h2\`
  color: #ffffff;
  font-size: 29px;
  letter-spacing: -0.03em;
\`;

export const ProjectSubtitle = styled.h3\`
  margin-top: 4px;
  color: #58a8f7;
  font-size: 19px;
  font-weight: 500;
\`;

export const ProjectText = styled.p\`
  margin-top: 11px;
  color: #aab9ca;
  line-height: 1.58;
  font-size: 14px;
\`;

export const Tags = styled.div\`
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
  margin-top: 15px;
\`;

export const Tag = styled.span\`
  padding: 7px 9px;
  border-radius: 8px;
  background: rgba(12, 34, 57, 0.86);
  border: 1px solid rgba(77, 161, 244, 0.19);
  color: #bdd1e8;
  font-size: 10px;
\`;

export const Actions = styled.div\`
  display: flex;
  flex-wrap: wrap;
  gap: 9px;
  margin-top: 17px;
\`;

export const PrimaryLink = styled.a\`
  min-width: 126px;
  padding: 10px 15px;
  border-radius: 9px;
  text-align: center;
  background: linear-gradient(90deg, #0c7fcc, #16bfd1);
  border: 1px solid #31dce8;
  box-shadow: 0 0 20px rgba(49, 220, 232, 0.14);
  color: #ffffff;
  font-size: 13px;
  font-weight: 600;
  text-decoration: none;
  transition: transform 180ms ease, box-shadow 180ms ease;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 0 28px rgba(49, 220, 232, 0.24);
  }
\`;

export const SecondaryLink = styled.a\`
  min-width: 126px;
  padding: 10px 15px;
  border-radius: 9px;
  text-align: center;
  background: rgba(10, 28, 48, 0.86);
  border: 1px solid rgba(85, 173, 255, 0.2);
  color: #dce8f7;
  font-size: 13px;
  text-decoration: none;
  transition: border-color 180ms ease, color 180ms ease;

  &:hover {
    color: #31dce8;
    border-color: rgba(49, 220, 232, 0.42);
  }
\`;

export const SectionHeader = styled.div\`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 18px;
  margin: 28px 0 15px;

  @media (max-width: 700px) {
    align-items: flex-start;
    flex-direction: column;
  }
\`;

export const SectionTitle = styled.h2\`
  display: flex;
  align-items: center;
  gap: 12px;
  color: #ffffff;
  font-size: 25px;

  &::before {
    content: "";
    width: 28px;
    height: 2px;
    border-radius: 999px;
    background: #31dce8;
    box-shadow: 0 0 10px rgba(49, 220, 232, 0.42);
  }
\`;

export const SectionNote = styled.p\`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #608fbd;
  font-size: 11px;

  &::before {
    content: "";
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #31dce8;
    box-shadow: 0 0 10px rgba(49, 220, 232, 0.6);
  }
\`;

export const ProjectsGrid = styled.div\`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;

  @media (max-width: 980px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
\`;

export const ProjectCard = styled.article\`
  border-radius: 13px;
  overflow: hidden;
  background: linear-gradient(180deg, rgba(7, 21, 39, 0.9), rgba(4, 14, 28, 0.95));
  border: 1px solid rgba(72, 173, 255, 0.19);
  box-shadow: 0 14px 36px rgba(0, 0, 0, 0.18);
  transition: transform 180ms ease, border-color 180ms ease;

  &:hover {
    transform: translateY(-3px);
    border-color: rgba(49, 220, 232, 0.36);
  }
\`;

export const ProjectImage = styled.div(({ variant }) => ({
  height: "175px",
  backgroundImage:
    "linear-gradient(180deg, rgba(3, 11, 22, 0.04), rgba(3, 11, 22, 0.18)), url(" +
    (variant === "petly"
      ? petly
      : variant === "weather"
        ? weather
        : variant === "portfolio"
          ? girl
          : taskBg) +
    ")",
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  borderBottom: "1px solid rgba(72, 173, 255, 0.14)",
}));

export const CardBody = styled.div\`
  padding: 16px;

  \${ProjectTitle} {
    font-size: 21px;
  }
\`;
