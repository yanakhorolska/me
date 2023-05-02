import { ContainerBox } from "../../Components/Container/Container.styled";
import {
  AboutBox,
  PageBox,
  RoundBox,
  Img,
  TextBox,
  AboutSection,
  ServicesSection,
  ServicesHeader,
  TextHeader,
  TextDescription,
  StackBlock,
  StackHeader,
  StackItem,
} from "./About.styled";
import girl from "../../images/Leonardo_Creative_icon_of_person_dark_colors_black_blue_digit_3.png";

export const About = () => {
  return (
    <AboutBox>
      <PageBox>
        <ContainerBox>
          <AboutSection>
            <TextBox>
              <TextHeader>Who am i?</TextHeader>
              <TextDescription>
                Hello and welcome to my portfolio website! My name is Yana, and
                I am a full-stack developer with a passion for creating
                beautiful and functional websites and applications. I currently
                reside in Poland, though I am originally from Ukraine. I have
                extensive experience working on both individual and team
                projects. I completed a year-long course at GOIT, a Ukrainian
                programming school, where I honed my skills in full-stack
                development. Additionally, I pursued formal education at
                Cosinus, a Polish vocational school, where I studied to become a
                technician-informatician and web programmer. If you have any
                questions or would like to discuss a potential project, please
                don't hesitate to contact me.
              </TextDescription>
              <StackHeader>My technology stack</StackHeader>
              <StackBlock>
                <StackItem>html</StackItem>
                <StackItem>css</StackItem>
                <StackItem>javascript</StackItem>
                <StackItem>react</StackItem>
                <StackItem>typescript</StackItem>
                <StackItem>nodejs</StackItem>
                <StackItem>express</StackItem>
                <StackItem>mongodb</StackItem>
              </StackBlock>
            </TextBox>
            <RoundBox>
              <Img src={girl} alt="person" />
            </RoundBox>
          </AboutSection>
          <ServicesSection>
            <ServicesHeader>My services</ServicesHeader>
          </ServicesSection>
        </ContainerBox>
      </PageBox>
    </AboutBox>
  );
};
