import { ContainerBox } from "../../Components/Container/Container.styled";
import {
  AboutBox,
  Backdrop,
  PageBox,
  Box,
  IntroductionBox,
  IntroductionText,
  IntroductionSpan,
  IntroductionDescribe,
  StackBox,
  StackItem,
  IntroductionTitle,
  IntroductionImg,
  StackTitle,
  StackItemTitle,
} from "./About.styled";

export const About = () => {
  return (
    <AboutBox>
      <Backdrop>
        <PageBox>
          <ContainerBox>
            <Box>
              <IntroductionBox>
                <IntroductionImg></IntroductionImg>
                <IntroductionDescribe>
                  <IntroductionTitle>Who am i?</IntroductionTitle>
                  <IntroductionText>
                    Hello, I'm Yana, a passionate and dedicated{" "}
                    <IntroductionSpan>full-stack developer</IntroductionSpan>{" "}
                    with a flair for creating immersive digital experiences.
                    With a blend of technical expertise and creative
                    problem-solving, I craft solutions that seamlessly integrate
                    front-end and back-end functionalities. My journey in the
                    world of development has been an exciting exploration of the
                    ever-evolving landscape of technologies.
                  </IntroductionText>
                  <br />
                  <IntroductionText>
                    An enthusiastic developer with a knack for rapid learning
                    and adaptability. Proven ability to quickly grasp new
                    technologies and concepts, translating them into effective
                    solutions. Strong interpersonal skills, including effective
                    <IntroductionSpan> communication</IntroductionSpan>,{" "}
                    <IntroductionSpan>teamwork</IntroductionSpan>, and{" "}
                    <IntroductionSpan>
                      creative problem-solving
                    </IntroductionSpan>
                    . Committed to continuous growth and contributing to dynamic
                    development projects.
                  </IntroductionText>
                  <IntroductionText></IntroductionText>
                </IntroductionDescribe>
              </IntroductionBox>
              <StackBox>
                <StackTitle>My technology stack</StackTitle>
                <StackItem>
                  <StackItemTitle>HTML</StackItemTitle>
                </StackItem>
                <StackItem>
                  <StackItemTitle>CSS</StackItemTitle>
                </StackItem>
                <StackItem>
                  <StackItemTitle>JS</StackItemTitle>
                </StackItem>
                <StackItem>
                  <StackItemTitle>React.js</StackItemTitle>
                </StackItem>
                <StackItem>
                  <StackItemTitle>Node.js</StackItemTitle>
                </StackItem>
                <StackItem>
                  <StackItemTitle>Express.js</StackItemTitle>
                </StackItem>
                <StackItem>
                  <StackItemTitle>Vercel</StackItemTitle>
                </StackItem>
                <StackItem>
                  <StackItemTitle>MongoDb</StackItemTitle>
                </StackItem>
                <StackItem>
                  <StackItemTitle>TailwindCSS</StackItemTitle>
                </StackItem>
                <StackItem>
                  <StackItemTitle>Figma</StackItemTitle>
                </StackItem>
                <StackItem>
                  <StackItemTitle>Git</StackItemTitle>
                </StackItem>
                <StackItem>
                  <StackItemTitle>VS Code</StackItemTitle>
                </StackItem>
                <StackItem>
                  <StackItemTitle>Redux Toolkit</StackItemTitle>
                </StackItem>
                <StackItem>
                  <StackItemTitle>React Query</StackItemTitle>
                </StackItem>
                <StackItem>
                  <StackItemTitle>Sass</StackItemTitle>
                </StackItem>
              </StackBox>
            </Box>
          </ContainerBox>
        </PageBox>
      </Backdrop>
    </AboutBox>
  );
};
