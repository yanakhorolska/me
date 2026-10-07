import { useState } from "react";
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
  FormStatus,
  FooterCards,
  FooterCard,
  FooterTitle,
  FooterText,
} from "./Contacts.styled";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/meaeaglg";

export const Contacts = () => {
  const [submitStatus, setSubmitStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    setIsSubmitting(true);
    setSubmitStatus("");

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      form.reset();
      setSubmitStatus("success");
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <ContactsBox>
      <Backdrop>
        <PageBox>
          <ContainerBox>
            <Hero>
              <HeroText>
                <Eyebrow>Get in touch</Eyebrow>
                <Title>
                  Let's <Accent>Connect</Accent>
                </Title>
                <Lead>
                  I'm always open to new opportunities, interesting projects,
                  and meaningful collaborations.
                </Lead>
                <Text>
                  Whether you have a project idea, a job opportunity, or just
                  want to say hi — I'd love to hear from you.
                </Text>
              </HeroText>
            </Hero>

            <Grid>
              <div>
                <Panel>
                  <PanelTitle>Contact Information</PanelTitle>
                  <PanelNote>Here's how to reach me</PanelNote>
                  <InfoCard>
                    <div>
                      <InfoLabel>Location</InfoLabel>
                      <InfoValue>Olsztyn, Poland</InfoValue>
                    </div>
                  </InfoCard>
                  <InfoCard>
                    <div>
                      <InfoLabel>Email</InfoLabel>
                      <InfoValue href="mailto:yana.khorolska@protonmail.com">
                        yana.khorolska@protonmail.com
                      </InfoValue>
                    </div>
                  </InfoCard>
                </Panel>

                <Panel>
                  <PanelTitle>Social Links</PanelTitle>
                  <SocialGrid>
                    <SocialCard
                      href="https://github.com/yanakhorolska"
                      target="_blank"
                      rel="noreferrer"
                    >
                      GitHub
                    </SocialCard>
                    <SocialCard
                      href="https://www.linkedin.com/in/yana-khorolska"
                      target="_blank"
                      rel="noreferrer"
                    >
                      LinkedIn
                    </SocialCard>
                    <SocialCard href="mailto:yana.khorolska@protonmail.com">
                      Email
                    </SocialCard>
                  </SocialGrid>
                </Panel>

                <Availability>
                  <AvailabilityDot />
                  <div>
                    <AvailabilityTitle>Open to opportunities</AvailabilityTitle>
                    <AvailabilityText>
                      I'm looking for junior developer roles, exciting projects,
                      and creative collaborations.
                    </AvailabilityText>
                  </div>
                </Availability>
              </div>

              <Panel>
                <PanelTitle>Send a message</PanelTitle>
                <PanelNote>I usually reply within 1–2 days</PanelNote>
                <Text>
                  Have a project in mind, a collaboration idea, or a job
                  opportunity? Fill out the form below and I'll get back to you.
                </Text>

                <Form onSubmit={handleSubmit}>
                  <Label>
                    Name
                    <Input
                      type="text"
                      name="name"
                      placeholder="Your name..."
                      required
                    />
                  </Label>

                  <Label>
                    Email
                    <Input
                      type="email"
                      name="email"
                      placeholder="your@email.com"
                      required
                    />
                  </Label>

                  <Label>
                    Subject
                    <Input
                      type="text"
                      name="subject"
                      placeholder="What's this about?"
                      required
                    />
                  </Label>

                  <Label>
                    Message
                    <Message
                      name="message"
                      rows="6"
                      placeholder="Tell me about your project, idea, or opportunity..."
                      required
                    />
                  </Label>

                  <SendButton type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send message →"}
                  </SendButton>

                  {submitStatus === "success" && (
                    <FormStatus role="status" aria-live="polite">
                      Message sent successfully. Thank you!
                    </FormStatus>
                  )}

                  {submitStatus === "error" && (
                    <FormStatus className="error" role="alert">
                      Something went wrong. Please try again or contact me by email.
                    </FormStatus>
                  )}
                </Form>
              </Panel>
            </Grid>

            <FooterCards>
              <FooterCard>
                <FooterTitle>Collaboration</FooterTitle>
                <FooterText>
                  I enjoy working with creative people and bringing ideas to
                  life together.
                </FooterText>
              </FooterCard>
              <FooterCard>
                <FooterTitle>Frontend / Full-Stack Projects</FooterTitle>
                <FooterText>
                  I'm interested in modern web applications and real-world
                  challenges.
                </FooterText>
              </FooterCard>
              <FooterCard>
                <FooterTitle>Creative Problem Solving</FooterTitle>
                <FooterText>
                  I love turning ideas into practical solutions and learning
                  along the way.
                </FooterText>
              </FooterCard>
            </FooterCards>
          </ContainerBox>
        </PageBox>
      </Backdrop>
    </ContactsBox>
  );
};
