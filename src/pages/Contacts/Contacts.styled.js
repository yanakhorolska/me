import styled from "@emotion/styled";
import bg from "../../images/Default_background_image_for_website_dark_colors_digital_lapto_3_780e4ed4-ef8b-4835-be7c-27a872eccc39_1.jpg";

export const ContactsBox = styled.main`
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  color: #eef6ff;
  background:
    linear-gradient(180deg, rgba(2, 10, 22, 0.91), rgba(2, 10, 22, 0.97)),
    url(${bg}) center / cover fixed no-repeat;
`;

export const Backdrop = styled.div`
  min-height: 100vh;
  background:
    radial-gradient(circle at 74% 18%, rgba(31, 189, 255, 0.08), transparent 22%),
    radial-gradient(circle at 14% 60%, rgba(49, 220, 232, 0.04), transparent 24%);
`;

export const PageBox = styled.section`
  padding: 108px 0 60px;
`;

export const Hero = styled.section`
  position: relative;
  min-height: 350px;
  display: flex;
  align-items: center;
  margin-bottom: 26px;
  overflow: hidden;
  border-radius: 0 0 28px 28px;

  &::before {
    content: "";
    position: absolute;
    inset: 0 0 0 46%;
    background:
      linear-gradient(90deg, rgba(3, 15, 28, 0.9) 0%, rgba(3, 15, 28, 0.18) 26%, rgba(3, 15, 28, 0.08) 100%),
      url(${bg}) 76% center / cover no-repeat;
    opacity: 0.88;
    border-left: 1px solid rgba(55, 162, 237, 0.12);
  }

  &::after {
    content: "const ideas = connect();";
    position: absolute;
    right: 28px;
    top: 34px;
    color: rgba(65, 156, 218, 0.32);
    font-family: "Chivo Mono", monospace;
    font-size: 11px;
  }

  @media (max-width: 820px) {
    min-height: 300px;

    &::before {
      inset: 0;
      opacity: 0.36;
    }
  }
`;

export const HeroText = styled.div`
  position: relative;
  z-index: 2;
  width: min(620px, 56%);
  padding-left: 24px;

  @media (max-width: 820px) {
    width: min(620px, 100%);
    padding-right: 24px;
  }
`;

export const Eyebrow = styled.p`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  color: #31dce8;
  font-size: 13px;
  font-weight: 600;
  margin-bottom: 12px;

  &::before {
    content: "";
    width: 28px;
    height: 2px;
    border-radius: 999px;
    background: #31dce8;
    box-shadow: 0 0 12px rgba(49, 220, 232, 0.45);
  }
`;

export const Title = styled.h1`
  font-size: clamp(58px, 7vw, 92px);
  line-height: 0.95;
  letter-spacing: -0.06em;
  color: #ffffff;
`;

export const Accent = styled.span`
  color: #31dce8;
`;

export const Lead = styled.p`
  margin-top: 18px;
  max-width: 590px;
  color: #d8e3f2;
  font-size: 19px;
  line-height: 1.43;
`;

export const Text = styled.p`
  margin-top: 14px;
  color: #9fb0c7;
  line-height: 1.62;
  font-size: 14px;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 18px;
  align-items: start;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const Panel = styled.section`
  position: relative;
  padding: 22px;
  margin-bottom: 16px;
  border-radius: 14px;
  background: linear-gradient(180deg, rgba(7, 21, 39, 0.9), rgba(4, 14, 28, 0.94));
  border: 1px solid rgba(72, 173, 255, 0.2);
  box-shadow:
    inset 0 0 24px rgba(0, 190, 255, 0.025),
    0 18px 44px rgba(0, 0, 0, 0.22);

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 20px;
    width: 48px;
    height: 1px;
    background: #31dce8;
    box-shadow: 0 0 12px rgba(49, 220, 232, 0.42);
  }
`;

export const PanelTitle = styled.h2`
  color: #ffffff;
  font-size: 22px;
`;

export const PanelNote = styled.p`
  display: flex;
  align-items: center;
  gap: 7px;
  margin-top: 5px;
  color: #5f8fc1;
  font-size: 11px;

  &::before {
    content: "";
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #31dce8;
    box-shadow: 0 0 10px rgba(49, 220, 232, 0.6);
  }
`;

export const InfoCard = styled.div`
  margin-top: 12px;
  padding: 15px 16px;
  border-radius: 10px;
  background: rgba(9, 31, 54, 0.82);
  border: 1px solid rgba(79, 174, 255, 0.17);
  transition: border-color 180ms ease, transform 180ms ease;

  &:hover {
    transform: translateY(-1px);
    border-color: rgba(49, 220, 232, 0.34);
  }
`;

export const InfoLabel = styled.p`
  color: #5f8fc8;
  font-size: 11px;
  margin-bottom: 4px;
`;

export const InfoValue = styled.a`
  color: #eef6ff;
  font-size: 14px;
  text-decoration: none;

  &:hover {
    color: #31dce8;
  }
`;

export const SocialGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 9px;
  margin-top: 14px;

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`;

export const SocialCard = styled.a`
  padding: 15px 12px;
  border-radius: 10px;
  background: rgba(10, 30, 52, 0.82);
  border: 1px solid rgba(79, 174, 255, 0.17);
  color: #dfeaf7;
  text-decoration: none;
  text-align: center;
  font-size: 13px;
  transition: transform 180ms ease, border-color 180ms ease, color 180ms ease;

  &:hover {
    border-color: rgba(49, 220, 232, 0.52);
    color: #31dce8;
    transform: translateY(-2px);
  }
`;

export const Availability = styled.section`
  display: flex;
  gap: 14px;
  align-items: flex-start;
  padding: 20px;
  border-radius: 14px;
  background: linear-gradient(180deg, rgba(7, 29, 39, 0.92), rgba(4, 20, 29, 0.94));
  border: 1px solid rgba(40, 232, 195, 0.42);
  box-shadow: inset 0 0 24px rgba(40, 232, 195, 0.025);
`;

export const AvailabilityDot = styled.span`
  width: 11px;
  height: 11px;
  border-radius: 50%;
  margin-top: 5px;
  background: #28e8c3;
  box-shadow: 0 0 0 6px rgba(40, 232, 195, 0.07), 0 0 16px rgba(40, 232, 195, 0.72);
`;

export const AvailabilityTitle = styled.h3`
  color: #48edcf;
  font-size: 17px;
`;

export const AvailabilityText = styled.p`
  margin-top: 5px;
  color: #91a3ba;
  line-height: 1.5;
  font-size: 12px;
`;

export const Form = styled.form`
  display: grid;
  gap: 13px;
  margin-top: 20px;
`;

export const Label = styled.label`
  display: grid;
  gap: 6px;
  color: #dce7f5;
  font-size: 12px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px 13px;
  border-radius: 9px;
  border: 1px solid rgba(89, 177, 255, 0.24);
  outline: none;
  background: rgba(7, 24, 44, 0.92);
  color: #eef6ff;
  transition: border-color 180ms ease, box-shadow 180ms ease;

  &::placeholder {
    color: #58708f;
  }

  &:focus {
    border-color: rgba(49, 220, 232, 0.72);
    box-shadow: 0 0 0 3px rgba(49, 220, 232, 0.07);
  }
`;

export const Message = styled.textarea`
  width: 100%;
  padding: 12px 13px;
  border-radius: 9px;
  border: 1px solid rgba(89, 177, 255, 0.24);
  outline: none;
  resize: vertical;
  background: rgba(7, 24, 44, 0.92);
  color: #eef6ff;
  transition: border-color 180ms ease, box-shadow 180ms ease;

  &::placeholder {
    color: #58708f;
  }

  &:focus {
    border-color: rgba(49, 220, 232, 0.72);
    box-shadow: 0 0 0 3px rgba(49, 220, 232, 0.07);
  }
`;

export const SendButton = styled.button`
  min-height: 46px;
  border-radius: 9px;
  border: 1px solid #31dce8;
  background: linear-gradient(90deg, #0b7fd0, #16bdd1);
  color: #f8fdff;
  font-weight: 700;
  cursor: pointer;
  box-shadow: 0 0 22px rgba(49, 220, 232, 0.16);
  transition: transform 180ms ease, box-shadow 180ms ease, opacity 180ms ease;

  &:hover:not(:disabled) {
    transform: translateY(-1px);
    box-shadow: 0 0 30px rgba(49, 220, 232, 0.25);
  }

  &:disabled {
    cursor: wait;
    opacity: 0.68;
  }
`;

export const FormStatus = styled.p`
  margin-top: 2px;
  padding: 10px 12px;
  border-radius: 9px;
  border: 1px solid rgba(40, 232, 195, 0.28);
  background: rgba(16, 81, 69, 0.22);
  color: #70efd4;
  font-size: 12px;
  line-height: 1.45;

  &.error {
    border-color: rgba(255, 108, 126, 0.3);
    background: rgba(105, 31, 43, 0.22);
    color: #ff9aaa;
  }
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
  gap: 14px;
  margin-top: 20px;

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`;

export const FooterCard = styled.div`
  position: relative;
  padding: 20px;
  border-radius: 13px;
  background: linear-gradient(180deg, rgba(7, 21, 39, 0.88), rgba(4, 14, 28, 0.94));
  border: 1px solid rgba(72, 173, 255, 0.19);
  box-shadow: 0 14px 34px rgba(0, 0, 0, 0.16);

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 18px;
    width: 38px;
    height: 1px;
    background: #31dce8;
  }
`;

export const FooterTitle = styled.h3`
  color: #ffffff;
  font-size: 16px;
`;

export const FooterText = styled.p`
  margin-top: 7px;
  color: #8ea1b9;
  line-height: 1.55;
  font-size: 12px;
`;
