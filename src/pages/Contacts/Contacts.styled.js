import styled from "@emotion/styled";
import bg from "../../images/Default_background_image_for_website_dark_colors_digital_lapto_3_780e4ed4-ef8b-4835-be7c-27a872eccc39_1.jpg";

export const ContactsBox = styled.div`
  background-image: url(${bg});

  color: white;
  height: 100vh;
  background-position: center;
  background-size: 100vw;
`;
export const PageBox = styled.section`
  padding: 150px 0px;
`;
export const Backdrop = styled.div`
  height: 100%;
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.8) 20%,
    rgba(0, 0, 0, 0.7) 80%
  );
`;
