import {
  HomeBg,
  Hero,
  Eyebrow,
  MainHeader,
  Accent,
  Role,
  Description,
  Actions,
  PrimaryLink,
  ContactLink,
  Stack,
  StackLabel,
  StackItems,
  StackItem,
  Status,
  StatusDot,
  Backdrop,
} from "./Home.styled.js";
import { ContainerBox } from "../../Components/Container/Container.styled.js";

export const Home = () => {
  return (
    <HomeBg>
      <Backdrop>
        <ContainerBox>
          <Hero>
            <Eyebrow>Welcome</Eyebrow>
            <MainHeader>
              Hi, I&apos;m <Accent>Yana</Accent>
            </MainHeader>
            <Role>Front-End / Full-Stack Developer</Role>
            <Description>
              I build clean, user-friendly web applications with a love for turning
              ideas into practical digital products.
            </Description>
            <Description>
              I&apos;m always eager to learn new technologies and create meaningful
              solutions that make an impact.
            </Description>

            <Status>
              <StatusDot />
              Open to opportunities
            </Status>

            <Actions>
              <PrimaryLink to="/projects">View my projects</PrimaryLink>
              <ContactLink to="/contacts">Contact me</ContactLink>
            </Actions>

            <Stack>
              <StackLabel>Core stack</StackLabel>
              <StackItems>
                <StackItem>React</StackItem>
                <StackItem>Angular</StackItem>
                <StackItem>TypeScript</StackItem>
                <StackItem>Node.js</StackItem>
              </StackItems>
            </Stack>
          </Hero>
        </ContainerBox>
      </Backdrop>
    </HomeBg>
  );
};
