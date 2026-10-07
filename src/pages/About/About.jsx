import { ContainerBox } from "../../Components/Container/Container.styled";
import {
  AboutBox,
  Backdrop,
  PageBox,
  IntroGrid,
  Portrait,
  IntroContent,
  Eyebrow,
  Title,
  Accent,
  Role,
  Text,
  Traits,
  TraitCard,
  TraitTitle,
  TraitText,
  SectionCard,
  SectionHeader,
  SectionTitle,
  SectionNote,
  SkillsGrid,
  SkillGroup,
  SkillGroupTitle,
  SkillList,
  SkillItem,
  SoftSkills,
  SoftSkill,
  BottomGrid,
  FocusItem,
  FocusTitle,
  FocusText,
} from "./About.styled";

const technicalSkills = [
  {
    title: "Frontend",
    items: [
      "HTML5",
      "CSS3",
      "SCSS/SASS",
      "Tailwind CSS",
      "Material UI",
      "JavaScript",
      "TypeScript",
      "React",
      "Angular",
    ],
  },
  {
    title: "State & Async",
    items: ["Redux Toolkit", "React Query", "RxJS", "NgRx"],
  },
  {
    title: "Backend & APIs",
    items: [
      "Node.js",
      "Express.js",
      "REST API",
      "OpenAPI",
      "Axios",
      "Joi",
      "Zod",
      "Postman",
    ],
  },
  {
    title: "Databases & Cloud",
    items: ["MongoDB", "PostgreSQL", "AWS"],
  },
  {
    title: "Testing & DevOps",
    items: ["Jest", "Docker", "Vercel"],
  },
  {
    title: "Tools",
    items: ["Git", "GitHub", "VS Code", "Figma"],
  },
];

const softSkills = [
  "Problem Solving",
  "Communication",
  "Teamwork",
  "Adaptability",
  "Fast Learning",
  "Attention to Detail",
  "Creativity",
  "Empathy",
  "Time Management",
];

const languages = [
  {
    language: "Ukrainian",
    level: "Native",
  },

  {
    language: "Polish",
    level: "Fluent",
  },
  {
    language: "English",
    level: "B1+ / improving toward C1",
  },
  {
    language: "Russian",
    level: "Native",
  },
];

export const About = () => {
  return (
    <AboutBox>
      <Backdrop>
        <PageBox>
          <ContainerBox>
            <IntroGrid>
              <Portrait />
              <IntroContent>
                <Eyebrow>About Me</Eyebrow>
                <Title>
                  Hi, I'm <Accent>Yana</Accent>
                </Title>
                <Role>Front-End / Full-Stack Developer</Role>
                <Text>
                  I'm a developer focused on building clean, user-friendly web
                  applications. I enjoy turning ideas into practical digital
                  products and continuously growing my skills in modern frontend
                  and backend technologies.
                </Text>
                <Text>
                  I'm curious by nature, always eager to learn new things, and I
                  love collaborating with people to create meaningful and
                  impactful projects.
                </Text>
                <Traits>
                  <TraitCard>
                    <div>
                      <TraitTitle>Clean Code</TraitTitle>
                      <TraitText>Always learning</TraitText>
                    </div>
                  </TraitCard>
                  <TraitCard>
                    <div>
                      <TraitTitle>Creative Mind</TraitTitle>
                      <TraitText>Turning ideas into reality</TraitText>
                    </div>
                  </TraitCard>
                  <TraitCard>
                    <div>
                      <TraitTitle>Team Player</TraitTitle>
                      <TraitText>Open to collaboration</TraitText>
                    </div>
                  </TraitCard>
                </Traits>
              </IntroContent>
            </IntroGrid>

            <SectionCard>
              <SectionHeader>
                <SectionTitle>Technical Skills</SectionTitle>
                <SectionNote>
                  Technologies I work with and enjoy using
                </SectionNote>
              </SectionHeader>
              <SkillsGrid>
                {technicalSkills.map((group) => (
                  <SkillGroup key={group.title}>
                    <SkillGroupTitle>{group.title}</SkillGroupTitle>
                    <SkillList>
                      {group.items.map((item) => (
                        <SkillItem key={item}>{item}</SkillItem>
                      ))}
                    </SkillList>
                  </SkillGroup>
                ))}
              </SkillsGrid>
            </SectionCard>

            <SectionCard>
              <SectionHeader>
                <SectionTitle>Soft Skills</SectionTitle>
                <SectionNote>
                  What helps me work and grow effectively
                </SectionNote>
              </SectionHeader>
              <SoftSkills>
                {softSkills.map((skill) => (
                  <SoftSkill key={skill}>{skill}</SoftSkill>
                ))}
              </SoftSkills>
            </SectionCard>

            <SectionCard>
              <SectionHeader>
                <SectionTitle>Languages</SectionTitle>
                <SectionNote>
                  Languages I use and continue developing
                </SectionNote>
              </SectionHeader>

              <SoftSkills>
                {languages.map(({ language, level }) => (
                  <SoftSkill key={language}>
                    {language} — {level}
                  </SoftSkill>
                ))}
              </SoftSkills>
            </SectionCard>

            <BottomGrid>
              <SectionCard>
                <SectionHeader>
                  <SectionTitle>Interests</SectionTitle>
                  <SectionNote>Things that inspire me</SectionNote>
                </SectionHeader>
                <SoftSkills>
                  {[
                    "Coding",
                    "Learning English",
                    "Digital Creativity",
                    "Personal Growth",
                    "Books",
                    "Cozy Creative Projects",
                    "Plants",
                    "Animals",
                    "Piano",
                  ].map((item) => (
                    <SoftSkill key={item}>{item}</SoftSkill>
                  ))}
                </SoftSkills>
              </SectionCard>

              <SectionCard>
                <SectionHeader>
                  <SectionTitle>Currently Growing In</SectionTitle>
                  <SectionNote>Areas I&apos;m focusing on now</SectionNote>
                </SectionHeader>
                <FocusItem>
                  <FocusTitle>Angular</FocusTitle>
                  <FocusText>
                    Deepening my knowledge and building real projects
                  </FocusText>
                </FocusItem>
                <FocusItem>
                  <FocusTitle>Node.js</FocusTitle>
                  <FocusText>
                    Exploring backend development and building APIs
                  </FocusText>
                </FocusItem>
                <FocusItem>
                  <FocusTitle>Full-Stack Development</FocusTitle>
                  <FocusText>Combining frontend and backend skills</FocusText>
                </FocusItem>
                <FocusItem>
                  <FocusTitle>English for IT</FocusTitle>
                  <FocusText>
                    Improving technical vocabulary and communication skills
                  </FocusText>
                </FocusItem>
              </SectionCard>
            </BottomGrid>
          </ContainerBox>
        </PageBox>
      </Backdrop>
    </AboutBox>
  );
};
