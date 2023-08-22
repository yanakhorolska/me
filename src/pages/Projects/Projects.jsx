import { ContainerBox } from "../../Components/Container/Container.styled";
import {
  ProjectsBox,
  Backdrop,
  PageBox,
  ProjectCard,
  ProjectDescr,
  ProjectTitle,
  ProjectText,
  ProjectLink,
  ProjectLinkBox,
  ProjectPetlyImgBox,
  ProjectWeatherImgBox,
  IconLink,
  BackdropImg,
  MoreButton,
} from "./Projects.styled";

export const Projects = () => {
  return (
    <ProjectsBox>
      <Backdrop>
        <PageBox>
          <ContainerBox>
            <ProjectCard>
              <MoreButton>+</MoreButton>

              <ProjectPetlyImgBox>
                <BackdropImg />
              </ProjectPetlyImgBox>

              <ProjectDescr>
                <ProjectTitle>Petly</ProjectTitle>
                <ProjectText>
                  As an accomplished Full-Stack Developer and former Team Lead,
                  I'm excited to present a comprehensive pet adoption platform
                  that I had the honor of leading during an advanced programming
                  course. This project serves as the crowning achievement of my
                  coding journey, highlighting my expertise in crafting
                  innovative digital solutions.
                </ProjectText>
                <ProjectLinkBox>
                  <IconLink />
                  <ProjectLink
                    target="_blank"
                    href="https://pets-front-end.vercel.app/"
                  >
                    https://pets-front-end.vercel.app/
                  </ProjectLink>
                </ProjectLinkBox>
                <ProjectLinkBox>
                  <IconLink />
                  <ProjectLink
                    target="_blank"
                    href="https://pets-back-end.vercel.app/"
                  >
                    https://pets-back-end.vercel.app/
                  </ProjectLink>
                </ProjectLinkBox>
              </ProjectDescr>
            </ProjectCard>
            <ProjectCard>
              <MoreButton>+</MoreButton>

              <ProjectWeatherImgBox>
                <BackdropImg />
              </ProjectWeatherImgBox>

              <ProjectDescr>
                <ProjectTitle>WeatherApp</ProjectTitle>
                <ProjectText>
                  This application is my personal project, developed entirely by
                  me. It showcases my web development skills and demonstrates my
                  ability to create valuable interactive solutions. The app
                  enables users to receive real-time weather updates for any
                  chosen location, highlighting my proficiency in API
                  integration. Additionally, users can access short-term weather
                  forecasts, enhancing daily planning efficiency.
                </ProjectText>

                <ProjectLinkBox>
                  <IconLink />
                  <ProjectLink
                    target="_blank"
                    href="https://yanakhorolska.github.io/weather--app/"
                  >
                    https://yanakhorolska.github.io/weather--app/
                  </ProjectLink>
                </ProjectLinkBox>
              </ProjectDescr>
            </ProjectCard>
            <ProjectCard></ProjectCard>
            <ProjectCard></ProjectCard>
            <ProjectCard></ProjectCard>
            <ProjectCard></ProjectCard>
          </ContainerBox>
        </PageBox>
      </Backdrop>
    </ProjectsBox>
  );
};
