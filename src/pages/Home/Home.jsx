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
  ContactButton,
  Stack,
  StackLabel,
  StackItems,
  StackItem,
  Status,
  StatusDot,
  Backdrop,
} from "./Home.styled.js";
import { ContainerBox } from "../../Components/Container/Container.styled.js";
import { ContactsModal } from "../../Components/ContactsModal/ContactsModal.jsx";
import { useState } from "react";

export const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <HomeBg>
      <Backdrop>
        <ContainerBox>
          <Hero>
            <Eyebrow>Full-Stack Developer</Eyebrow>
            <MainHeader>
              Hi, I&apos;m <Accent>Yana</Accent>
            </MainHeader>
            <Role>Building thoughtful digital experiences.</Role>
            <Description>
              I create clean, responsive interfaces and practical web applications
              with a growing focus on full-stack development.
            </Description>

            <Actions>
              <PrimaryLink to="/projects">View my projects</PrimaryLink>
              <ContactButton onClick={() => setIsModalOpen(true)}>
                Contact me
              </ContactButton>
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

            <Status>
              <StatusDot />
              Open to opportunities
            </Status>
          </Hero>
        </ContainerBox>
      </Backdrop>

      {isModalOpen && (
        <ContactsModal onModal={() => setIsModalOpen(false)} />
      )}
    </HomeBg>
  );
};
