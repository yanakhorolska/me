import styled from "@emotion/styled";
import bg from "../../images/Default_background_image_for_website_dark_colors_digital_lapto_3_780e4ed4-ef8b-4835-be7c-27a872eccc39_1.jpg";

export const ContactsBox = styled.main`
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

export const Hero = styled.section`
  min-height: 320px;
  display: flex;
  align-items: center;
  margin-bottom: 28px;
`;

export const HeroText = styled.div`
  width: min(650px, 100%);
`;

export const Eyebrow = styled.p`
  color: #31dce8;
  font-size: 13px;
  font-weight: 600;
  margin-bottom: 14px;
`;

export const Title = styled.h1`
  font-size: clamp(58px, 8vw, 96px);
  line-height: 0.96;
  letter-spacing: -0.06em;
  color: #ffffff;
`;

export const Accent = styled.span`
  color: #31dce8;
`;

export const Lead = styled.p`
  margin-top: 22px;
  max-width: 620px;
  color: #d8e3f2;
  font-size: 20px;
  line-height: 1.45;
`;

export const Text = styled.p`
  margin-top: 16px;
  color: #9fb0c7;
  line-height: 1.65;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 0.92fr 1.08fr;
  gap: 20px;
  align-items: start;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const Panel = styled.section`
  padding: 24px;
  margin-bottom: 18px;
  border-radius: 18px;
  background: linear-gradient(180deg, rgba(7, 21, 39, 0.88), rgba(4, 14, 28, 0.92));
  border: 1px solid rgba(72, 173, 255, 0.2);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.28);
`;

export const PanelTitle = styled.h2`
  color: #ffffff;
  font-size: 24px;
`;

export const PanelNote = styled.p`
  margin-top: 5px;
  color: #5c91c4;
  font-size: 12px;
`;

export const InfoCard = styled.div`
  margin-top: 14px;
  padding: 16px;
  border-radius: 12px;
  background: rgba(10, 31, 54, 0.82);
  border: 1px solid rgba(79, 174, 255, 0.16);
`;

export const InfoLabel = styled.p`
  color: #5f8fc8;
  font-size: 12px;
  margin-bottom: 4px;
`;

export const InfoValue = styled.a`
  color: #eef6ff;
  font-size: 15px;
  text-decoration: none;

  &:hover {
    color: #31dce8;
  }
`;

export const SocialGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  margin-top: 16px;

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`;

export const SocialCard = styled.a`
  padding: 16px 14px;
  border-radius: 12px;
  background: rgba(10, 30, 52, 0.82);
  border: 1px solid rgba(79, 174, 255, 0.16);
  color: #dfeaf7;
  text-decoration: none;
  text-align: center;
  transition: 180ms ease;

  &:hover {
    border-color: rgba(49, 220, 232, 0.6);
    color: #31dce8;
    transform: translateY(-2px);
  }
`;

export const Availability = styled.section`
  display: flex;
  gap: 14px;
  align-items: flex-start;
  padding: 22px;
  border-radius: 18px;
  background: linear-gradient(180deg, rgba(7, 21, 39, 0.88), rgba(4, 14, 28, 0.92));
  border: 1px solid rgba(40, 232, 195, 0.38);
`;

export const AvailabilityDot = styled.span`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  margin-top: 5px;
  background: #28e8c3;
  box-shadow: 0 0 0 6px rgba(40, 232, 195, 0.08), 0 0 18px rgba(40, 232, 195, 0.7);
`;

export const AvailabilityTitle = styled.h3`
  color: #48edcf;
  font-size: 18px;
`;

export const AvailabilityText = styled.p`
  margin-top: 5px;
  color: #91a3ba;
  line-height: 1.5;
  font-size: 13px;
`;

export const Form = styled.form`
  display: grid;
  gap: 14px;
  margin-top: 22px;
`;

export const Label = styled.label`
  display: grid;
  gap: 7px;
  color: #dce7f5;
  font-size: 13px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 13px 14px;
  border-radius: 10px;
  border: 1px solid rgba(89, 177, 255, 0.24);
  outline: none;
  background: rgba(7, 24, 44, 0.9);
  color: #eef6ff;

  &:focus {
    border-color: rgba(49, 220, 232, 0.75);
    box-shadow: 0 0 0 3px rgba(49, 220, 232, 0.08);
  }
`;

export const Message = styled.textarea`
  width: 100%;
  padding: 13px 14px;
  border-radius: 10px;
  border: 1px solid rgba(89, 177, 255, 0.24);
  outline: none;
  resize: vertical;
  background: rgba(7, 24, 44, 0.9);
  color: #eef6ff;

  &:focus {
    border-color: rgba(49, 220, 232, 0.75);
    box-shadow: 0 0 0 3px rgba(49, 220, 232, 0.08);
  }
`;

export const SendButton = styled.button`
  min-height: 48px;
  border-radius: 10px;
  border: 1px solid #31dce8;
  background: linear-gradient(90deg, #0b7fd0, #16bdd1);
  color: #f8fdff;
  font-weight: 700;
  cursor: pointer;
  box-shadow: 0 0 24px rgba(49, 220, 232, 0.16);
`;

export const ContactLink = styled.a`
  padding: 12px 10px;
  text-align: center;
  border-radius: 10px;
  border: 1px solid rgba(79, 174, 255, 0.2);
  background: rgba(9, 26, 46, 0.82);
  color: #dce7f5;
  text-decoration: none;

  &:hover {
    color: #31dce8;
    border-color: rgba(49, 220, 232, 0.5);
  }
`;

export const FooterCards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  margin-top: 22px;

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`;

export const FooterCard = styled.div`
  padding: 22px;
  border-radius: 16px;
  background: linear-gradient(180deg, rgba(7, 21, 39, 0.88), rgba(4, 14, 28, 0.92));
  border: 1px solid rgba(72, 173, 255, 0.2);
`;

export const FooterTitle = styled.h3`
  color: #ffffff;
  font-size: 17px;
`;

export const FooterText = styled.p`
  margin-top: 8px;
  color: #8ea1b9;
  line-height: 1.55;
  font-size: 13px;
`;
