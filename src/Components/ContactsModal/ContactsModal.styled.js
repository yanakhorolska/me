import styled from "@emotion/styled";
import { FiX } from "react-icons/fi";
import { FiMail } from "react-icons/fi";

export const IconClose = styled(FiX)`
  fill: #008b8b;
  height: 25px;
  width: 25px;
`;

export const IconSend = styled(FiMail)`
  fill: #ffe4c4;
  height: 25px;
  width: 25px;
`;
export const ModalHeader = styled.h2`
  font-size: 30px;
  text-align: center;
`;
export const ModalInput = styled.input`
  border: 2px solid black;
  padding: 5px 10px;
  font-size: 15px;
  border-radius: 10px;
  font-family: "Chivo Mono", monospace;
`;
export const ModalMessage = styled.textarea`
  resize: none;
  border: 2px solid black;
  padding: 5px 10px;
  font-size: 15px;
  border-radius: 10px;
`;
export const ModalForm = styled.form`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
export const ModalLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
export const SendButton = styled.button`
  width: 80%;
  display: flex;
  gap: 15px;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  font-size: 20px;
  border-radius: 15px;
  outline: none;
  border: 2px solid #111;
  padding: 8px 20px;
  background-color: #d7f1f4;
  color: #111;
  cursor: pointer;
  font-family: "Chivo Mono", monospace;
  font-weight: 600;
  margin-top: 25px;
  transition: all 300ms linear;
  &:hover {
    background-color: #008b8b;
  }
`;

export const ButtonClose = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  border: none;
  outlined: none;
  background: transparent;
  cursor: pointer;
  padding: 5px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 2px solid transparent;
  border-radius: 50%;
  transition: border 300ms;
  &:hover {
    border: 2px solid black;
  }
`;

export const Backdrop = styled.div`
  position: fixed;
  transition: opacity 250ms, visibility 250ms;
  top: 0;
  background-color: rgba(0, 0, 0, 0.2);
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
}`;

export const ModalBox = styled.div`
  overflow: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(1);
  max-height: 100%;
  background-color: white;
  width: 400px;
  padding: 30px 50px;
  z-index: 105;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 20px;
`;
