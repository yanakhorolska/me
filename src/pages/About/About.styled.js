import styled from "@emotion/styled";
import bg from "../../images/Leonardo_Creative_dark_picture_with_some_lines_dots_abstractio_1.jpg";
import girl from "../../images/Leonardo_Diffusion_girlcat_with_headphones_and_laptop_digital_2.jpg";

export const AboutBox = styled.main`
  min-height: 100vh;
  background: url(${bg}) center / cover fixed;
  color: #eef6ff;
`;

export const Backdrop = styled.div`
  min-height: 100vh;
  background: linear-gradient(180deg, rgba(2, 10, 22, 0.9), rgba(2, 10, 22, 0.97));
`;

export const PageBox = styled.section`
  padding: 118px 0 64px;
`;

export const IntroGrid = styled.div`
  display: grid;
  grid-template-columns: 0.95fr 1.05fr;
  gap: 28px;
  margin-bottom: 24px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const Portrait = styled.div`
  min-height: 430px;
  border-radius: 18px;
  background: url(${girl}) center / cover no-repeat;
  border: 1px solid rgba(49, 220, 232, 0.22);
  box-shadow: 0 0 32px rgba(49, 220, 232, 0.08);
`;

export const IntroContent = styled.section`
  padding: 32px;
  border-radius: 18px;
  background: linear-gradient(180deg, rgba(7, 21, 39, 0.88), rgba(4, 14, 28, 0.92));
  border: 1px solid rgba(72, 173, 255, 0.18);
`;

export const Eyebrow = styled.p`
  color: #31dce8;
  font-size: 13px;
  font-weight: 600;
  margin-bottom: 12px;
`;

export const Title = styled.h1`
  font-size: clamp(48px, 6vw, 76px);
  line-height: 0.98;
  letter-spacing: -0.055em;
  color: #ffffff;
`;

export const Accent = styled.span`
  color: #31dce8;
`;

export const Role = styled.h2`
  margin: 12px 0 24px;
  color: #9eb4d5;
  font-size: clamp(19px, 2.3vw, 28px);
  font-weight: 500;
  letter-spacing: 0.06em;
`;

export const Text = styled.p`
  color: #c5d1df;
  line-height: 1.7;
  font-size: 16px;

  & + & {
    margin-top: 18px;
  }
`;

export const Traits = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  margin-top: 28px;

  @media (max-width: 680px) {
    grid-template-columns: 1fr;
  }
`;

export const TraitCard = styled.div`
  padding: 14px;
  border-radius: 12px;
  background: rgba(10, 27, 48, 0.78);
  border: 1px solid rgba(70, 183, 255, 0.18);
`;

export const TraitTitle = styled.h3`
  color: #ffffff;
  font-size: 14px;
`;

export const TraitText = styled.p`
  margin-top: 4px;
  color: #7184a0;
  font-size: 11px;
`;

export const SectionCard = styled.section`
  padding: 24px;
  margin-bottom: 24px;
  border-radius: 18px;
  background: linear-gradient(180deg, rgba(7, 21, 39, 0.88), rgba(4, 14, 28, 0.92));
  border: 1px solid rgba(72, 173, 255, 0.18);
`;

export const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  margin-bottom: 20px;

  @media (max-width: 680px) {
    align-items: flex-start;
    flex-direction: column;
  }
`;

export const SectionTitle = styled.h2`
  color: #ffffff;
  font-size: 24px;
`;

export const SectionNote = styled.p`
  color: #5f8fc8;
  font-size: 12px;
`;

export const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 1fr 0.82fr 0.82fr;
  gap: 14px;

  @media (max-width: 980px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 620px) {
    grid-template-columns: 1fr;
  }
`;

export const SkillGroup = styled.div`
  padding: 18px;
  border-radius: 14px;
  background: rgba(8, 22, 42, 0.76);
  border: 1px solid rgba(81, 167, 255, 0.14);
`;

export const SkillGroupTitle = styled.h3`
  margin-bottom: 14px;
  color: #ffffff;
  font-size: 16px;
`;

export const SkillList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 9px;
`;

export const SkillItem = styled.span`
  padding: 9px 11px;
  border-radius: 9px;
  background: rgba(17, 36, 61, 0.78);
  border: 1px solid rgba(82, 148, 233, 0.17);
  color: #c6d4e9;
  font-size: 12px;
`;

export const SoftSkills = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

export const SoftSkill = styled.span`
  padding: 11px 18px;
  border-radius: 999px;
  background: rgba(17, 36, 61, 0.78);
  border: 1px solid rgba(91, 182, 255, 0.28);
  color: #d8e6f7;
  font-size: 13px;
`;

export const BottomGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
  }

  ${SectionCard} {
    margin-bottom: 0;
  }
`;

export const FocusItem = styled.div`
  padding: 14px 16px;
  border-radius: 12px;
  background: rgba(10, 27, 48, 0.78);
  border: 1px solid rgba(70, 183, 255, 0.16);

  & + & {
    margin-top: 10px;
  }
`;

export const FocusTitle = styled.h3`
  color: #ffffff;
  font-size: 15px;
`;

export const FocusText = styled.p`
  margin-top: 4px;
  color: #7292b9;
  font-size: 12px;
`;
