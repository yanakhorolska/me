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

export const Home = () => {
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

            <ContactButton>Contact me</ContactButton>
          </TextBlock>
        </ContainerBox>
      </Backdrop>
    </HomeBg>
  );
};
