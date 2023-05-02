import styled from "@emotion/styled";
import bg from "../../images/Leonardo_Diffusion_dark_picture_with_some_lines_dots_abstracti_1.jpg";

export const ProjectsBox = styled.div`
  background: url(${bg});
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  color: white;
`;
export const Backdrop = styled.div`
  height: 100vh;
  background-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 0.7) 40%,
    rgba(0, 0, 0, 0.6) 60%
  );
`;

export const PageBox = styled.section`
  padding: 150px 0px;
`;
