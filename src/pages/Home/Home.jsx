import {
  HomeBg,
  TextBlock,
  MainHeader,
  SecondHeader,
  ContactButton,
  Backdrop,
  Icon,
  Span,
} from "./Home.styled.js";
import "../../animation.css";
import { ContainerBox } from "../../Components/Container/Container.styled.js";
import { ContactsModal } from "../../Components/ContactsModal/ContactsModal.jsx";
import { useState } from "react";
import svg from "../../images/hand-wave.svg";

export const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const onModalClick = () => {
    setIsModalOpen(true);
  };
  return (
    <HomeBg>
      <Backdrop>
        <ContainerBox>
          <TextBlock>
            <MainHeader>Hello</MainHeader>
            <Icon
              className="hand"
              src={svg}
              alt="hand"
              width="40"
              height="40"
            />
            <SecondHeader>Welcome to my Portfolio Website!</SecondHeader>
            <SecondHeader>
              I am a passionate <Span>Full-Stack Developer</Span>
            </SecondHeader>
            <SecondHeader>with a love for crafting</SecondHeader>
            <SecondHeader>innovative digital solutions.</SecondHeader>

            <ContactButton onClick={onModalClick}>Contact me</ContactButton>
          </TextBlock>
        </ContainerBox>
      </Backdrop>
      {isModalOpen && <ContactsModal />}
    </HomeBg>
  );
};
