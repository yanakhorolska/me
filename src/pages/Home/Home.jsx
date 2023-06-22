import {
  HomeBg,
  TextBlock,
  MainHeader,
  SecondHeader,
  ContactButton,
  Span,
  Backdrop,
} from "./Home.styled.js";
import { ContainerBox } from "../../Components/Container/Container.styled.js";
import { ContactsModal } from "../../Components/ContactsModal/ContactsModal.jsx";
import { useState } from "react";

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
            <MainHeader>
              Hello<Span>.</Span>
            </MainHeader>
            <SecondHeader>I am a fullstack developer and i can</SecondHeader>
            <SecondHeader>help you with your</SecondHeader>
            <SecondHeader>
              website or mobile application<Span>.</Span>
            </SecondHeader>

            <ContactButton onClick={onModalClick}>Contact me</ContactButton>
          </TextBlock>
        </ContainerBox>
      </Backdrop>
      {isModalOpen && <ContactsModal />}
    </HomeBg>
  );
};
