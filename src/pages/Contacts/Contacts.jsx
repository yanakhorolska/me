import { ContainerBox } from "../../Components/Container/Container.styled";
import { Backdrop, ContactsBox, PageBox } from "./Contacts.styled";

export const Contacts = () => {
  return (
    <ContactsBox>
      <Backdrop>
        <PageBox>
          <ContainerBox>Contacts</ContainerBox>
        </PageBox>
      </Backdrop>
    </ContactsBox>
  );
};
