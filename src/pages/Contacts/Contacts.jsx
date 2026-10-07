import { ContainerBox } from "../../Components/Container/Container.styled";
import {
  ContactsBox,
  Backdrop,
  PageBox,
  Hero,
  HeroText,
  Eyebrow,
  Title,
  Accent,
  Lead,
  Text,
  Grid,
  Panel,
  PanelTitle,
  PanelNote,
  InfoCard,
  InfoLabel,
  InfoValue,
  SocialGrid,
  SocialCard,
  Availability,
  AvailabilityDot,
  AvailabilityTitle,
  AvailabilityText,
  Form,
  Label,
  Input,
  Message,
  SendButton,
  ContactLink,
  FooterCards,
  FooterCard,
  FooterTitle,
  FooterText,
} from "./Contacts.styled";

export const Contacts = () => {
  return (
    <ContactsBox>
      <Backdrop>
        <PageBox>
          <ContainerBox>
            <Hero>
              <HeroText>
                <Eyebrow>Get in touch</Eyebrow>
                <Title>Let&apos;s <Accent>Connect</Accent></Title>
                <Lead>
                  I&apos;m always open to new opportunities, interesting projects,
                  and meaningful collaborations.
                </Lead>
                <Text>
                  Whether you have a project idea, a job opportunity, or just want to say hi —
                  I&apos;d love to hear from you.
                </Text>
              </HeroText>
            </Hero>

            <Grid>
              <div>
                <Panel>
                  <PanelTitle>Contact Information</PanelTitle>
                  <PanelNote>Here&apos;s how to reach me</PanelNote>
                  <InfoCard><div><InfoLabel>Location</InfoLabel><InfoValue>Olsztyn, Poland</InfoValue></div></InfoCard>
                  <InfoCard><div><InfoLabel>Email</InfoLabel><InfoValue href="mailto:yana.khorolska@protonmail.com">yana.khorolska@protonmail.com</InfoValue></div></InfoCard>
                  <InfoCard><div><InfoLabel>Phone</InfoLabel><InfoValue href="tel:+48574723442">+48 574 723 442</InfoValue></div></InfoCard>
                </Panel>

                <Panel>
                  <PanelTitle>Social Links</PanelTitle>
                  <SocialGrid>
                    <SocialCard href="https://github.com/yanakhorolska" target="_blank" rel="noreferrer">GitHub</SocialCard>
                    <SocialCard href="https://www.linkedin.com/in/yana-khorolska" target="_blank" rel="noreferrer">LinkedIn</SocialCard>
                    <SocialCard href="mailto:yana.khorolska@protonmail.com">Email</SocialCard>
                  </SocialGrid>
                </Panel>

                <Availability>
                  <AvailabilityDot />
                  <div>
                    <AvailabilityTitle>Open to opportunities</AvailabilityTitle>
                    <AvailabilityText>
                      I&apos;m looking for junior developer roles, exciting projects,
                      and creative collaborations.
                    </AvailabilityText>
                  </div>
                </Availability>
              </div>

              <Panel>
                <PanelTitle>Send a message</PanelTitle>
                <PanelNote>I usually reply within 1–2 days</PanelNote>
                <Text>
                  Have a project in mind, a collaboration idea, or a job opportunity?
                  Fill out the form below and I&apos;ll get back to you.
                </Text>
                <Form>
                  <Label>Name<Input type="text" placeholder="Your name..." /></Label>
                  <Label>Email<Input type="email" placeholder="your@email.com" /></Label>
                  <Label>Subject<Input type="text" placeholder="What's this about?" /></Label>
                  <Label>Message<Message rows="6" placeholder="Tell me about your project, idea, or opportunity..." /></Label>
                  <SendButton type="button">Send message →</SendButton>
                </Form>
                <SocialGrid>
                  <ContactLink href="https://github.com/yanakhorolska" target="_blank" rel="noreferrer">GitHub</ContactLink>
                  <ContactLink href="https://www.linkedin.com/in/yana-khorolska" target="_blank" rel="noreferrer">LinkedIn</ContactLink>
                  <ContactLink href="mailto:yana.khorolska@protonmail.com">Email</ContactLink>
                </SocialGrid>
              </Panel>
            </Grid>

            <FooterCards>
              <FooterCard><FooterTitle>Collaboration</FooterTitle><FooterText>I enjoy working with creative people and bringing ideas to life together.</FooterText></FooterCard>
              <FooterCard><FooterTitle>Frontend / Full-Stack Projects</FooterTitle><FooterText>I&apos;m interested in modern web applications and real-world challenges.</FooterText></FooterCard>
              <FooterCard><FooterTitle>Creative Problem Solving</FooterTitle><FooterText>I love turning ideas into practical solutions and learning along the way.</FooterText></FooterCard>
            </FooterCards>
          </ContainerBox>
        </PageBox>
      </Backdrop>
    </ContactsBox>
  );
};
