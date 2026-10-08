import { useEffect, useState } from "react";
import {
  HomeBg,
  Backdrop,
  HeroLayout,
  Hero,
  Eyebrow,
  MainHeader,
  Accent,
  Role,
  Description,
  PersonalityRow,
  PersonalityPill,
  Status,
  StatusDot,
  Actions,
  PrimaryLink,
  ContactLink,
  Stack,
  StackLabel,
  StackItems,
  StackItem,
  VisualStage,
  ImageCard,
  CodeCard,
  EditorBar,
  WindowDot,
  EditorFilename,
  EditorBody,
  CodeLine,
  LineNumber,
  CodeKeyword,
  CodeVariable,
  CodeString,
  CodeComment,
  Cursor,
  BookNote,
} from "./Home.styled.js";
import { ContainerBox } from "../../Components/Container/Container.styled.js";

const phrases = [
  "build something meaningful",
  "keep learning and creating",
  "turn ideas into reality",
];

function useTypewriter(words) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (media.matches) {
      setText(words[0]);
      return undefined;
    }

    const currentWord = words[wordIndex];
    const finishedTyping = text === currentWord;
    const finishedDeleting = text === "";

    const timeout = window.setTimeout(
      () => {
        if (!isDeleting) {
          if (!finishedTyping) {
            setText(currentWord.slice(0, text.length + 1));
          } else {
            setIsDeleting(true);
          }
        } else {
          if (!finishedDeleting) {
            setText(currentWord.slice(0, text.length - 1));
          } else {
            setIsDeleting(false);
            setWordIndex((prev) => (prev + 1) % words.length);
          }
        }
      },
      finishedTyping && !isDeleting ? 1500 : isDeleting ? 45 : 85,
    );

    return () => window.clearTimeout(timeout);
  }, [text, wordIndex, isDeleting, words]);

  return text;
}

export const Home = () => {
  const typedIdea = useTypewriter(phrases);

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
                clean code, curiosity, and a love for the details.
              </Description>

              <PersonalityRow>
                <PersonalityPill>Book-inspired</PersonalityPill>
                <PersonalityPill>Curious mind</PersonalityPill>
                <PersonalityPill>Creative builder</PersonalityPill>
              </PersonalityRow>

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

            <VisualStage>
              <ImageCard />

              <CodeCard>
                <EditorBar>
                  <WindowDot color="#fb7185" />
                  <WindowDot color="#f6c56f" />
                  <WindowDot color="#34d399" />
                  <EditorFilename>yana.js</EditorFilename>
                </EditorBar>

                <EditorBody>
                  <CodeLine>
                    <LineNumber>01</LineNumber>
                    <CodeComment>{"// hello, world! ✨"}</CodeComment>
                  </CodeLine>

                  <CodeLine>
                    <LineNumber>02</LineNumber>
                    <span>
                      <CodeKeyword>const</CodeKeyword>{" "}
                      <CodeVariable>developer</CodeVariable> = {"{"}
                    </span>
                  </CodeLine>

                  <CodeLine>
                    <LineNumber>03</LineNumber>
                    <span>
                      name: <CodeString>"Yana"</CodeString>,
                    </span>
                  </CodeLine>

                  <CodeLine>
                    <LineNumber>04</LineNumber>
                    <span>
                      mindset: <CodeString>"always curious"</CodeString>,
                    </span>
                  </CodeLine>

                  <CodeLine>
                    <LineNumber>05</LineNumber>
                    <span>
                      loves: [<CodeString>"code"</CodeString>,{" "}
                      <CodeString>"books"</CodeString>,{" "}
                      <CodeString>"creating"</CodeString>],
                    </span>
                  </CodeLine>

                  <CodeLine>
                    <LineNumber>06</LineNumber>
                    <span>{"};"}</span>
                  </CodeLine>

                  <CodeLine>
                    <LineNumber>07</LineNumber>
                    <CodeComment>
                      {"// the next chapter starts here"}
                    </CodeComment>
                  </CodeLine>

                  <CodeLine>
                    <LineNumber>08</LineNumber>
                    <span>
                      <CodeKeyword>const</CodeKeyword>{" "}
                      <CodeVariable>nextChapter</CodeVariable> ={" "}
                      <CodeString>"{typedIdea}"</CodeString>
                      <Cursor />;
                    </span>
                  </CodeLine>

                  <CodeLine>
                    <LineNumber>09</LineNumber>
                    <CodeComment>
                      {"// imagination + persistence = progress"}
                    </CodeComment>
                  </CodeLine>
                </EditorBody>
              </CodeCard>

              <BookNote>
                <strong>Beyond the code / Bookish thoughts</strong>
                <p>
                  Every new chapter is a chance to create something different.
                </p>
                <small>...inspired by The Midnight Library</small>
              </BookNote>
            </VisualStage>
          </HeroLayout>
        </ContainerBox>
      </Backdrop>
    </HomeBg>
  );
};
