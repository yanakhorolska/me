import { useEffect, useState } from "react";
import {
  HomeBg, Backdrop, HeroLayout, Hero, Eyebrow, MainHeader, Accent,
  Role, Description, Actions, PrimaryLink, ContactLink, Stack,
  StackLabel, StackItems, StackItem, Status, StatusDot, EditorScene,
  EditorWindow, EditorBar, WindowDot, EditorFilename, EditorBody,
  CodeLine, LineNumber, CodeKeyword, CodeVariable, CodeString,
  CodeComment, Cursor, BookNote,
} from "./Home.styled.js";
import { ContainerBox } from "../../Components/Container/Container.styled.js";

const rotatingIdeas = [
  "build something meaningful",
  "keep learning & exploring",
  "turn ideas into reality",
];

function useTypewriter(words) {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) {
      setText(words[0]);
      return undefined;
    }

    const current = words[index];
    const completed = text === current;
    const cleared = text === "";
    const delay = completed && !deleting ? 1600 : deleting ? 38 : 74;

    const timer = window.setTimeout(() => {
      if (completed && !deleting) {
        setDeleting(true);
      } else if (deleting && cleared) {
        setDeleting(false);
        setIndex((value) => (value + 1) % words.length);
      } else {
        setText(current.slice(0, text.length + (deleting ? -1 : 1)));
      }
    }, delay);

    return () => window.clearTimeout(timer);
  }, [text, index, deleting, words]);

  return text;
}

export const Home = () => {
  const typedIdea = useTypewriter(rotatingIdeas);

  return (
    <HomeBg>
      <Backdrop>
        <ContainerBox>
          <HeroLayout>
            <Hero>
              <Eyebrow>Welcome to my digital space</Eyebrow>
              <MainHeader>
                Hi, I&apos;m <Accent>Yana.</Accent>
              </MainHeader>
              <Role>Front-End / Full-Stack Developer</Role>
              <Description>
                I turn ideas into thoughtful digital experiences — combining
                clean code, a curious mind, and a love for the details.
              </Description>

              <Status>
                <StatusDot />
                Open to opportunities
              </Status>

              <Actions>
                <PrimaryLink to="/projects">Explore my projects →</PrimaryLink>
                <ContactLink to="/contacts">Let&apos;s connect</ContactLink>
              </Actions>

              <Stack>
                <StackLabel>Currently building with</StackLabel>
                <StackItems>
                  <StackItem>React</StackItem>
                  <StackItem>Angular</StackItem>
                  <StackItem>TypeScript</StackItem>
                  <StackItem>Node.js</StackItem>
                </StackItems>
              </Stack>
            </Hero>

            <EditorScene aria-label="Animated illustration of a code editor">
              <EditorWindow>
                <EditorBar>
                  <WindowDot color="#fa7185" />
                  <WindowDot color="#f5c36b" />
                  <WindowDot color="#54d5b1" />
                  <EditorFilename>yana.js</EditorFilename>
                </EditorBar>
                <EditorBody>
                  <CodeLine><LineNumber>01</LineNumber><CodeComment>// hello, world! ✨</CodeComment></CodeLine>
                  <CodeLine><LineNumber>02</LineNumber><CodeKeyword>const</CodeKeyword> <CodeVariable>developer</CodeVariable> = {"{"}</CodeLine>
                  <CodeLine><LineNumber>03</LineNumber>  name: <CodeString>&quot;Yana&quot;</CodeString>,</CodeLine>
                  <CodeLine><LineNumber>04</LineNumber>  mindset: <CodeString>&quot;always curious&quot;</CodeString>,</CodeLine>
                  <CodeLine><LineNumber>05</LineNumber>  loves: [<CodeString>&quot;code&quot;</CodeString>, <CodeString>&quot;books&quot;</CodeString>, <CodeString>&quot;creating&quot;</CodeString>],</CodeLine>
                  <CodeLine><LineNumber>06</LineNumber>{"};"}</CodeLine>
                  <CodeLine><LineNumber>07</LineNumber><CodeComment>// the next chapter starts here</CodeComment></CodeLine>
                  <CodeLine>
                    <LineNumber>08</LineNumber>
                    <span><CodeKeyword>const</CodeKeyword> <CodeVariable>nextChapter</CodeVariable> = <CodeString>&quot;{typedIdea}&quot;</CodeString><Cursor />;</span>
                  </CodeLine>
                  <CodeLine><LineNumber>09</LineNumber><CodeComment>// imagination + persistence = progress</CodeComment></CodeLine>
                </EditorBody>
              </EditorWindow>

              <BookNote>
                <strong>Beyond the code / Bookish thoughts</strong>
                <p>Every new chapter is a chance to create something different.</p>
                <small>My own words, inspired by The Midnight Library</small>
              </BookNote>
            </EditorScene>
          </HeroLayout>
        </ContainerBox>
      </Backdrop>
    </HomeBg>
  );
};
