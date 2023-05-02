import styled from "@emotion/styled";

export const ContainerBox = styled.div`
  padding-left: 15px;
  padding-right: 15px;
  margin: 0 auto;
  position: relative;
  @media (max-width: 479px) {
    max-width: 480px;
  }
  @media (min-width: 480px) {
    width: 480px;
  }
  @media (min-width: 768px) {
    width: 768px;
  }
  @media (min-width: 1280px) {
    width: 1280px;
  }
`;
