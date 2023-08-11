import {
  Backdrop,
  ModalBox,
  IconClose,
  ButtonClose,
  ModalHeader,
  ModalForm,
  ModalInput,
  ModalMessage,
  ModalLabel,
  SendButton,
  IconSend,
} from "./ContactsModal.styled";
import React, { useCallback, useEffect } from "react";

export const ContactsModal = ({ onModal }) => {
  const onEscapePress = useCallback(
    (evt) => {
      if (evt.code === "Escape") {
        onModal();
      }
    },
    [onModal]
  );

  useEffect(() => {
    window.addEventListener("keydown", onEscapePress);
    return () => {
      window.removeEventListener("keydown", onEscapePress);
    };
  }, [onEscapePress]);

  const onBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
      onModal();
    }
  };
  return (
    <div>
      <Backdrop onClick={onBackdropClick}>
        <ModalBox>
          <ButtonClose onClick={onModal}>
            <IconClose />
          </ButtonClose>
          <ModalHeader>Let's talk</ModalHeader>
          <ModalForm>
            <ModalLabel>
              Name:
              <ModalInput name="name" placeholder="name..."></ModalInput>
            </ModalLabel>
            <ModalLabel>
              Email:
              <ModalInput name="email" placeholder="email..."></ModalInput>
            </ModalLabel>
            <ModalLabel>
              Phone:
              <ModalInput
                name="phone"
                placeholder="phone number..."
              ></ModalInput>
            </ModalLabel>
            <ModalLabel>
              Message:
              <ModalMessage
                name="message"
                placeholder="message..."
                rows="4"
              ></ModalMessage>
            </ModalLabel>

            <SendButton>
              Send message
              <IconSend />
            </SendButton>
          </ModalForm>
        </ModalBox>
      </Backdrop>
    </div>
  );
};
