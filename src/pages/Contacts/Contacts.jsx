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
} from "./Contacts.styled";

export const Contacts = () => {
  return (
    <ContactsBox>
      <Backdrop>
        <PageBox>
          <ContainerBox>
            <Box>
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
              <Form>
                <MessageBox>
                  <MessagePart>
                    <Label>
                      Name:
                      <Input></Input>
                    </Label>
                    <Label>
                      Phone:
                      <Input></Input>
                    </Label>
                    <Label>
                      Email:
                      <Input></Input>
                    </Label>
                  </MessagePart>
                  <MessagePart>
                    <Label>
                      Message:
                      <Message rows="5"></Message>
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
