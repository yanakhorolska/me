import styled from "@emotion/styled";
import bg from "../../images/Leonardo_Diffusion_background_image_for_website_dark_colors_di_0.jpg";
import { FiMail } from "react-icons/fi";
import { IoIosPin } from "react-icons/io";
import { IoIosCall } from "react-icons/io";
import { MdAlternateEmail } from "react-icons/md";
import { IoMdPersonAdd } from "react-icons/io";
import { IoLogoInstagram } from "react-icons/io";
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
  background-color: rgba(255, 255, 255, 0.08);
  max-width: 1000px;
  max-height: 100%;
  margin: 0 auto 50px;
  border-radius: 10px;
  padding: 50px;
`;
export const SecondBox = styled.div`
  background-color: rgba(255, 255, 255, 0.08);
  max-width: 1000px;
  max-height: 100%;
  margin: 0 auto;
  border-radius: 10px;
  padding: 50px;
`;
export const BlockBox = styled.div`
  background-color: rgba(255, 255, 255, 0.08);
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
  background-color: rgba(255, 255, 255, 0.08);
  border-radius: 10px;
  padding: 10px;
  outline: none;
  border: none;
  font-size: 15px;
  color: #d7f1f4;
  transition: all 300ms linear;
  &:focus,
  :hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;
export const Message = styled.textarea`
  display: block;
  width: 400px;
  background-color: rgba(255, 255, 255, 0.08);
  border-radius: 10px;
  padding: 10px;
  outline: none;
  border: none;
  font-size: 15px;
  color: #d7f1f4;
  resize: none;
  transition: all 300ms linear;
  &:focus,
  :hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;
export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 5px;
  color: #d7f1f4;
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
`;

export const IconEmail = styled(MdAlternateEmail)`
  fill: rgba(255, 255, 255, 0.5);
  height: 40px;
  width: 40px;
  padding: 5px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
`;

export const IconPhone = styled(IoIosCall)`
  fill: rgba(255, 255, 255, 0.5);
  height: 40px;
  width: 40px;
  padding: 5px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
`;

export const IconSocials = styled(IoMdPersonAdd)`
  fill: rgba(255, 255, 255, 0.5);
  height: 40px;
  width: 40px;
  padding: 5px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
`;

export const IconInstagram = styled(IoLogoInstagram)`
  fill: rgba(255, 255, 255, 0.5);
  height: 30px;
  width: 30px;
  transition: all 300ms linear;
  &:focus,
  :hover {
    fill: #008b8b;
  }
`;

export const IconLinkedin = styled(IoLogoLinkedin)`
  fill: rgba(255, 255, 255, 0.5);
  height: 30px;
  width: 30px;
  transition: all 300ms linear;
  &:focus,
  :hover {
    fill: #008b8b;
  }
`;

export const IconGithub = styled(IoLogoGithub)`
  fill: rgba(255, 255, 255, 0.5);
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
  color: #d7f1f4;
  text-decoration: none;
  transition: all 300ms linear;
  &:hover {
    color: #008b8b;
  }
`;
