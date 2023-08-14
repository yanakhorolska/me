import { ContainerBox } from "../../Components/Container/Container.styled";
import {
  Backdrop,
  ContactsBox,
  PageBox,
  Box,
  BlockBox,
  SocialsBox,
  MessageBox,
  MessagePart,
  Form,
  SendButton,
  Label,
  Input,
  Message,
  IconSend,
  IconEmail,
  IconLocation,
  IconPhone,
  IconSocials,
  TextInfo,
  IconGithub,
  IconLinkedin,
  SecondBox,
  StickBox,
} from "./Contacts.styled";

export const Contacts = () => {
  return (
    <ContactsBox>
      <Backdrop>
        <PageBox>
          <ContainerBox>
            <Box>
              <StickBox></StickBox>
              <SocialsBox>
                <BlockBox>
                  <IconLocation />
                  <TextInfo
                    target="_blank"
                    href="https://goo.gl/maps/SfYm3QoTu9r2xmfKA"
                  >
                    Olsztyn, Poland
                  </TextInfo>
                </BlockBox>
                <BlockBox>
                  <IconEmail />
                  <TextInfo
                    target="_blank"
                    href="mailto:yana.khorolska@protonmail.com"
                  >
                    yana.khorolska@protonmail.com
                  </TextInfo>
                </BlockBox>
                <BlockBox>
                  <IconPhone />
                  <TextInfo target="_blank" href="tel:+48574723442">
                    +48 574 723 442
                  </TextInfo>
                </BlockBox>
                <BlockBox>
                  <IconSocials />
                  <TextInfo
                    target="_blank"
                    href="https://github.com/yanakhorolska"
                  >
                    <IconGithub />
                  </TextInfo>
                  {/* <TextInfo
                    target="_blank"
                    href="https://goo.gl/maps/SfYm3QoTu9r2xmfKA"
                  >
                    <IconInstagram />
                  </TextInfo> */}
                  <TextInfo
                    target="_blank"
                    href="https://www.linkedin.com/in/yana-khorolska"
                  >
                    <IconLinkedin />
                  </TextInfo>
                </BlockBox>
              </SocialsBox>
            </Box>

            <SecondBox>
              <StickBox></StickBox>
              <Form>
                <MessageBox>
                  <MessagePart>
                    <Label>
                      Name:
                      <Input type="text" required></Input>
                    </Label>
                    <Label>
                      Phone:
                      <Input type="text"></Input>
                    </Label>
                    <Label>
                      Email:
                      <Input type="email" required></Input>
                    </Label>
                  </MessagePart>
                  <MessagePart>
                    <Label>
                      Message:
                      <Message required rows="5"></Message>
                    </Label>
                  </MessagePart>
                </MessageBox>
                <SendButton>
                  Send Message
                  <IconSend />
                </SendButton>
              </Form>
            </SecondBox>
          </ContainerBox>
        </PageBox>
      </Backdrop>
    </ContactsBox>
  );
};
