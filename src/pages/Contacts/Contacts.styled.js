import styled from "@emotion/styled";
import bg from "../../images/Default_background_image_for_website_dark_colors_digital_lapto_3_780e4ed4-ef8b-4835-be7c-27a872eccc39_1.jpg";
import { FiMail } from "react-icons/fi";
import { IoIosPin } from "react-icons/io";
import { IoIosCall } from "react-icons/io";
import { MdAlternateEmail } from "react-icons/md";
import { IoMdPersonAdd } from "react-icons/io";

import { IoLogoLinkedin } from "react-icons/io";
import { IoLogoGithub } from "react-icons/io";

export const ContactsBox = styled.div`
  background-image: url(${bg});
  height: 100vh;
  background-position: center;
  background-size: 100vw;
`;
export const PageBox = styled.section`
  padding: 150px 0px 50px;
`;
export const Backdrop = styled.div`
  height: 100%;
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.8) 20%,
    rgba(0, 0, 0, 0.7) 80%
  );
`;
export const Box = styled.div`
  background-color: rgba(60, 60, 60, 0.2);
  box-shadow: 2px 2px 14px 5px rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
  max-width: 1000px;
  max-height: 100%;
  margin: 0 auto 50px;
  border-radius: 10px;
  padding: 50px;
  position: relative;
`;
export const SecondBox = styled.div`
  background-color: rgba(60, 60, 60, 0.2);
  backdrop-filter: blur(10px);
  box-shadow: 2px 2px 14px 5px rgba(0, 0, 0, 0.8);
  max-width: 1000px;
  max-height: 100%;
  margin: 0 auto;
  border-radius: 10px;
  padding: 50px;
  position: relative;
`;
export const StickBox = styled.div`
  width: 5px;
  background-color: #008b8b;
  max-height: 100%;
  top: 50px;
  bottom: 50px;
  position: absolute;
`;
export const BlockBox = styled.div`
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
  width: 400px;
  height: 70px;
  display: flex;
  padding: 15px;
  align-items: center;
  gap: 20px;
`;
export const SocialsBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;
export const MessageBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
`;
export const MessagePart = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const Form = styled.form``;
export const Input = styled.input`
  display: block;
  width: 400px;
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
  padding: 10px;
  outline: none;
  border: none;
  font-size: 15px;
  color: rgba(215, 241, 244, 0.9);
  transition: all 300ms linear;
  &:focus,
  :hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;
export const Message = styled.textarea`
  display: block;
  width: 400px;
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
  padding: 10px;
  outline: none;
  border: none;
  font-size: 15px;
  color: rgba(215, 241, 244, 0.9);
  resize: none;
  transition: all 300ms linear;
  &:focus,
  :hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;
export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 5px;
  color: rgba(215, 241, 244, 0.9);
`;
export const SendButton = styled.button`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  gap: 20px;
  align-items: center;
  border-radius: 10px;
  padding: 12px 20px;
  outline: none;
  border: none;
  cursor: pointer;
  font-size: 20px;
  font-weight: 600;
  background-color: rgba(255, 255, 255, 0.2);
  color: #111;
  transition: all 300ms linear;
  &:hover {
    background-color: #008b8b;
  }
`;
export const IconSend = styled(FiMail)`
  fill: #ffe4c4;
  height: 25px;
  width: 25px;
`;
export const IconLocation = styled(IoIosPin)`
  fill: rgba(255, 255, 255, 0.5);
  height: 40px;
  width: 40px;
  padding: 5px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.5);
`;

export const IconEmail = styled(MdAlternateEmail)`
  fill: rgba(255, 255, 255, 0.5);
  height: 40px;
  width: 40px;
  padding: 5px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.5);
`;

export const IconPhone = styled(IoIosCall)`
  fill: rgba(255, 255, 255, 0.5);
  height: 40px;
  width: 40px;
  padding: 5px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.5);
`;

export const IconSocials = styled(IoMdPersonAdd)`
  fill: rgba(255, 255, 255, 0.5);
  height: 40px;
  width: 40px;
  padding: 5px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.5);
`;

export const IconLinkedin = styled(IoLogoLinkedin)`
  fill: rgba(215, 241, 244, 0.9);
  height: 30px;
  width: 30px;
  transition: all 300ms linear;
  &:focus,
  :hover {
    fill: #008b8b;
  }
`;

export const IconGithub = styled(IoLogoGithub)`
  fill: rgba(215, 241, 244, 0.9);
  height: 30px;
  width: 30px;
  transition: all 300ms linear;
  &:focus,
  :hover {
    fill: #008b8b;
  }
`;
export const TextInfo = styled.a`
  font-size: 17px;
  color: rgba(215, 241, 244, 0.9);
  text-decoration: none;
  transition: all 300ms linear;
  &:hover {
    color: #008b8b;
  }
`;
