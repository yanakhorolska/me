import styled from "@emotion/styled";
import bg from "../../images/Leonardo_Creative_dark_picture_with_some_lines_dots_abstractio_1.jpg";
import girl from "../../images/Leonardo_Diffusion_girlcat_with_headphones_and_laptop_digital_2.jpg";

export const AboutBox = styled.main\`
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
    radial-gradient(circle at 18% 18%, rgba(30, 202, 255, 0.08), transparent 24%),
    radial-gradient(circle at 84% 46%, rgba(85, 81, 255, 0.055), transparent 26%);
\`;

export const PageBox = styled.section\`
  padding: 108px 0 60px;
\`;

export const IntroGrid = styled.div\`
  display: grid;
  grid-template-columns: minmax(360px, 0.88fr) minmax(0, 1.12fr);
  gap: 30px;
  align-items: stretch;
  margin-bottom: 28px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
\`;

export const Portrait = styled.div\`
  min-height: 470px;
  border-radius: 14px;
  background:
    linear-gradient(180deg, rgba(3, 13, 26, 0.03), rgba(3, 13, 26, 0.28)),
    url(\${girl}) center / cover no-repeat;
  border: 1px solid rgba(39, 190, 255, 0.3);
  box-shadow:
    0 0 0 1px rgba(31, 201, 255, 0.03),
    0 22px 58px rgba(0, 0, 0, 0.32);

  @media (max-width: 900px) {
    min-height: 430px;
  }
\`;

export const IntroContent = styled.section\`
  position: relative;
  padding: 18px 6px 0 10px;
  background: transparent;
  border: 0;

  &::after {
    content: "const ideas = create();";
    position: absolute;
    top: 8px;
    right: 8px;
    width: 95px;
    color: rgba(70, 153, 217, 0.28);
    font-family: "Chivo Mono", monospace;
    font-size: 11px;
    line-height: 1.55;
  }

  @media (max-width: 620px) {
    padding-right: 0;

    &::after {
      display: none;
    }
  }
\`;

export const Eyebrow = styled.p\`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  color: #32ddea;
  font-size: 13px;
  font-weight: 600;
  margin-bottom: 14px;

  &::before {
    content: "";
    width: 28px;
    height: 2px;
    background: #32ddea;
    border-radius: 999px;
    box-shadow: 0 0 12px rgba(50, 221, 234, 0.45);
  }
\`;

export const Title = styled.h1\`
  font-size: clamp(48px, 5.7vw, 72px);
  line-height: 0.98;
  letter-spacing: -0.055em;
  color: #ffffff;
\`;

export const Accent = styled.span\`
  color: #32ddea;
\`;

export const Role = styled.h2\`
  margin: 10px 0 24px;
  color: #a9bce0;
  font-size: clamp(19px, 2vw, 26px);
  font-weight: 400;
  letter-spacing: 0.09em;
\`;

export const Text = styled.p\`
  max-width: 690px;
  color: #c9d5e3;
  line-height: 1.68;
  font-size: 16px;

  & + & {
    margin-top: 18px;
  }
\`;

export const Traits = styled.div\`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  margin-top: 28px;

  @media (max-width: 680px) {
    grid-template-columns: 1fr;
  }
\`;

export const TraitCard = styled.div\`
  min-height: 70px;
  padding: 14px 16px;
  display: flex;
  align-items: center;
  border-radius: 11px;
  background: linear-gradient(180deg, rgba(8, 28, 50, 0.82), rgba(6, 21, 39, 0.9));
  border: 1px solid rgba(59, 163, 239, 0.2);
  box-shadow: inset 0 0 18px rgba(0, 190, 255, 0.025);
\`;

export const TraitTitle = styled.h3\`
  color: #f5f8ff;
  font-size: 14px;
\`;

export const TraitText = styled.p\`
  margin-top: 4px;
  color: #7289a8;
  font-size: 11px;
\`;

export const SectionCard = styled.section\`
  position: relative;
  padding: 24px 24px 22px;
  margin-bottom: 22px;
  border-radius: 14px;
  background: linear-gradient(180deg, rgba(6, 21, 39, 0.86), rgba(4, 15, 29, 0.91));
  border: 1px solid rgba(55, 157, 232, 0.19);
  box-shadow:
    inset 0 0 30px rgba(0, 183, 255, 0.025),
    0 18px 50px rgba(0, 0, 0, 0.18);

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 22px;
    width: 54px;
    height: 1px;
    background: #31dce8;
    box-shadow: 0 0 12px rgba(49, 220, 232, 0.42);
  }
\`;

export const SectionHeader = styled.div\`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  margin-bottom: 20px;

  @media (max-width: 680px) {
    align-items: flex-start;
    flex-direction: column;
  }
\`;

export const SectionTitle = styled.h2\`
  color: #ffffff;
  font-size: 23px;
  letter-spacing: -0.02em;
\`;

export const SectionNote = styled.p\`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #628fbd;
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

export const SkillsGrid = styled.div\`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;

  @media (max-width: 980px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 620px) {
    grid-template-columns: 1fr;
  }
\`;

export const SkillGroup = styled.div\`
  padding: 17px;
  border-radius: 12px;
  background: rgba(8, 27, 48, 0.78);
  border: 1px solid rgba(75, 154, 230, 0.16);
  min-height: 150px;
\`;

export const SkillGroupTitle = styled.h3\`
  margin-bottom: 13px;
  color: #f3f8ff;
  font-size: 15px;
\`;

export const SkillList = styled.div\`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
\`;

export const SkillItem = styled.span\`
  padding: 8px 10px;
  border-radius: 8px;
  background: rgba(13, 39, 66, 0.8);
  border: 1px solid rgba(78, 151, 225, 0.16);
  color: #c8d7e8;
  font-size: 11px;
  transition: border-color 180ms ease, transform 180ms ease;

  &:hover {
    transform: translateY(-1px);
    border-color: rgba(49, 220, 232, 0.38);
  }
\`;

export const SoftSkills = styled.div\`
  display: flex;
  flex-wrap: wrap;
  gap: 11px;
\`;

export const SoftSkill = styled.span\`
  padding: 10px 17px;
  border-radius: 999px;
  background: linear-gradient(180deg, rgba(17, 38, 64, 0.88), rgba(8, 25, 45, 0.9));
  border: 1px solid rgba(83, 163, 236, 0.27);
  color: #d9e7f6;
  font-size: 12px;
  box-shadow: inset 0 0 14px rgba(0, 183, 255, 0.025);
\`;

export const BottomGrid = styled.div\`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 22px;

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
  }

  \${SectionCard} {
    margin-bottom: 0;
  }
\`;

export const FocusItem = styled.div\`
  position: relative;
  padding: 13px 42px 13px 16px;
  border-radius: 10px;
  background: rgba(8, 28, 50, 0.8);
  border: 1px solid rgba(72, 158, 234, 0.16);

  & + & {
    margin-top: 9px;
  }

  &::after {
    content: "→";
    position: absolute;
    right: 16px;
    top: 50%;
    transform: translateY(-50%);
    color: #63a9de;
  }
\`;

export const FocusTitle = styled.h3\`
  color: #f7fbff;
  font-size: 14px;
\`;

export const FocusText = styled.p\`
  margin-top: 4px;
  color: #7394b9;
  font-size: 11px;
\`;
