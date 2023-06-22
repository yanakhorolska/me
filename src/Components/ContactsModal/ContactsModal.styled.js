import styled from "@emotion/styled";

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
  width: 300px;
  padding: 30px 10px;
  z-index: 105;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 20px;
`;
