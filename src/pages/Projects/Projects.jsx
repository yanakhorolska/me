import { ContainerBox } from "../../Components/Container/Container.styled";
import {
  ProjectsBox,
  Backdrop,
  PageBox,
  Eyebrow,
  PageTitle,
  Accent,
  Intro,
  FeaturedCard,
  FeaturedImage,
  FeaturedContent,
  Badge,
  ProjectTitle,
  ProjectSubtitle,
  ProjectText,
  Tags,
  Tag,
  Actions,
  PrimaryLink,
  SecondaryLink,
  SectionHeader,
  SectionTitle,
  SectionNote,
  ProjectsGrid,
  ProjectCard,
  ProjectImage,
  CardBody,
} from "./Projects.styled";

const projects = [
  {
    title: "Petly",
    description: "Full-stack pet adoption platform created as a team project with a modern and user-friendly interface.",
    image: "petly",
    tags: ["React", "Redux", "Node.js", "MongoDB", "REST API"],
    demo: "https://pets-front-end.vercel.app/",
    github: "https://github.com/yanakhorolska",
  },
  {
    title: "Weather App",
    description: "A weather application with real-time forecasts, location search, and a clean responsive interface.",
    image: "weather",
    tags: ["React", "API", "CSS", "JavaScript"],
    demo: "https://yanakhorolska.github.io/weather--app/",
    github: "https://github.com/yanakhorolska",
  },
  {
    title: "Weekendly",
    description: "A project for planning or discovering weekend activities with a practical, user-friendly interface.",
    image: "weekendly",
    tags: ["React", "Tailwind", "Node.js", "REST API"],
    github: "https://github.com/yanakhorolska/Weekendly-App",
  },
  {
    title: "Portfolio Website",
    description: "Personal portfolio website presenting skills, projects, and developer growth in a clear way.",
    image: "portfolio",
    tags: ["React", "Responsive Design", "Vercel"],
    github: "https://github.com/yanakhorolska/me",
  },
];

export const Projects = () => {
  return (
    <ProjectsBox>
      <Backdrop>
        <PageBox>
          <ContainerBox>
            <Eyebrow>Portfolio</Eyebrow>
            <PageTitle>My <Accent>Projects</Accent></PageTitle>
            <Intro>
              Selected projects I&apos;ve built while learning and growing as a front-end and full-stack developer.
            </Intro>

            <FeaturedCard>
              <FeaturedImage />
              <FeaturedContent>
                <Badge>Featured Project</Badge>
                <ProjectTitle>TaskFlow</ProjectTitle>
                <ProjectSubtitle>Angular Task Manager</ProjectSubtitle>
                <ProjectText>
                  A task management application for organizing daily work, tracking progress,
                  and practicing modern Angular architecture.
                </ProjectText>
                <Tags>
                  {["Angular", "TypeScript", "RxJS", "Signals", "SCSS", "REST API"].map((tag) => <Tag key={tag}>{tag}</Tag>)}
                </Tags>
                <Actions>
                  <PrimaryLink href="https://github.com/yanakhorolska/task-flow" target="_blank" rel="noreferrer">GitHub</PrimaryLink>
                </Actions>
              </FeaturedContent>
            </FeaturedCard>

            <SectionHeader>
              <SectionTitle>More Projects</SectionTitle>
              <SectionNote>Exploring ideas, building solutions, and learning something new</SectionNote>
            </SectionHeader>

            <ProjectsGrid>
              {projects.map((project) => (
                <ProjectCard key={project.title}>
                  <ProjectImage variant={project.image} />
                  <CardBody>
                    <ProjectTitle>{project.title}</ProjectTitle>
                    <ProjectText>{project.description}</ProjectText>
                    <Tags>
                      {project.tags.map((tag) => <Tag key={tag}>{tag}</Tag>)}
                    </Tags>
                    <Actions>
                      {project.demo && <PrimaryLink href={project.demo} target="_blank" rel="noreferrer">Live Demo</PrimaryLink>}
                      <SecondaryLink href={project.github} target="_blank" rel="noreferrer">GitHub</SecondaryLink>
                    </Actions>
                  </CardBody>
                </ProjectCard>
              ))}
            </ProjectsGrid>
          </ContainerBox>
        </PageBox>
      </Backdrop>
    </ProjectsBox>
  );
};
