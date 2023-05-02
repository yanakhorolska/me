import { ContainerBox } from "../../Components/Container/Container.styled";
import { ProjectsBox, Backdrop, PageBox } from "./Projects.styled";

export const Projects = () => {
  return (
    <ProjectsBox>
      <Backdrop>
        <PageBox>
          <ContainerBox>Projects</ContainerBox>
        </PageBox>
      </Backdrop>
    </ProjectsBox>
  );
};
