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
  { title: "Frontend", items: ["HTML5", "CSS3", "SCSS/SASS", "Tailwind CSS", "Material UI", "JavaScript", "TypeScript", "React"] },
  { title: "State & Data", items: ["Redux Toolkit", "React Query", "RxJS", "NgRx", "REST API"] },
  { title: "Backend", items: ["Node.js", "Express.js", "MongoDB"] },
  { title: "Tools", items: ["Git", "GitHub", "VS Code", "Postman", "Figma", "Vercel"] },
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
                <Title>Hi, I&apos;m <Accent>Yana</Accent></Title>
                <Role>Front-End / Full-Stack Developer</Role>
                <Text>
                  I&apos;m a developer focused on building clean, user-friendly web applications.
                  I enjoy turning ideas into practical digital products and continuously growing
                  my skills in modern frontend and backend technologies.
                </Text>
                <Text>
                  I&apos;m curious by nature, always eager to learn new things, and I love
                  collaborating with people to create meaningful and impactful projects.
                </Text>
                <Traits>
                  <TraitCard><div><TraitTitle>Clean Code</TraitTitle><TraitText>Always learning</TraitText></div></TraitCard>
                  <TraitCard><div><TraitTitle>Creative Mind</TraitTitle><TraitText>Turning ideas into reality</TraitText></div></TraitCard>
                  <TraitCard><div><TraitTitle>Team Player</TraitTitle><TraitText>Open to collaboration</TraitText></div></TraitCard>
                </Traits>
              </IntroContent>
            </IntroGrid>

            <SectionCard>
              <SectionHeader>
                <SectionTitle>Technical Skills</SectionTitle>
                <SectionNote>Technologies I work with and enjoy using</SectionNote>
              </SectionHeader>
              <SkillsGrid>
                {technicalSkills.map((group) => (
                  <SkillGroup key={group.title}>
                    <SkillGroupTitle>{group.title}</SkillGroupTitle>
                    <SkillList>
                      {group.items.map((item) => <SkillItem key={item}>{item}</SkillItem>)}
                    </SkillList>
                  </SkillGroup>
                ))}
              </SkillsGrid>
            </SectionCard>

            <SectionCard>
              <SectionHeader>
                <SectionTitle>Soft Skills</SectionTitle>
                <SectionNote>What helps me work and grow effectively</SectionNote>
              </SectionHeader>
              <SoftSkills>
                {softSkills.map((skill) => <SoftSkill key={skill}>{skill}</SoftSkill>)}
              </SoftSkills>
            </SectionCard>

            <BottomGrid>
              <SectionCard>
                <SectionHeader>
                  <SectionTitle>Interests</SectionTitle>
                  <SectionNote>Things that inspire me</SectionNote>
                </SectionHeader>
                <SoftSkills>
                  {["Web Development","UI/UX Design","Learning English","Digital Creativity","Books","Cozy Creative Projects","Technology Trends"].map((item) => <SoftSkill key={item}>{item}</SoftSkill>)}
                </SoftSkills>
              </SectionCard>

              <SectionCard>
                <SectionHeader>
                  <SectionTitle>Currently Growing In</SectionTitle>
                  <SectionNote>Areas I&apos;m focusing on now</SectionNote>
                </SectionHeader>
                <FocusItem><FocusTitle>Angular</FocusTitle><FocusText>Deepening my knowledge and building real projects</FocusText></FocusItem>
                <FocusItem><FocusTitle>Node.js</FocusTitle><FocusText>Exploring backend development and building APIs</FocusText></FocusItem>
                <FocusItem><FocusTitle>Full-Stack Development</FocusTitle><FocusText>Combining frontend and backend skills</FocusText></FocusItem>
                <FocusItem><FocusTitle>English for IT</FocusTitle><FocusText>Improving technical vocabulary and communication skills</FocusText></FocusItem>
              </SectionCard>
            </BottomGrid>
          </ContainerBox>
        </PageBox>
      </Backdrop>
    </AboutBox>
  );
};
