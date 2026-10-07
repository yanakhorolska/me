import { useEffect, useState } from "react";
import {
  HeaderBox,
  Brand,
  BrandMark,
  BrandName,
  LinksList,
  Link,
  Nav,
  NavRight,
  ThemePicker,
  ThemeDot,
} from "./Header.styled.js";

const themes = [
  {
    name: "Cyan",
    accent: "#31dce8",
    accent2: "#31bff1",
    accentDeep: "#0b7fd0",
    rgb: "49, 220, 232",
  },
  {
    name: "Violet",
    accent: "#9b7bff",
    accent2: "#7d6cff",
    accentDeep: "#5945d6",
    rgb: "155, 123, 255",
  },
  {
    name: "Pink",
    accent: "#ff6fb5",
    accent2: "#ec66e6",
    accentDeep: "#c84c91",
    rgb: "255, 111, 181",
  },
  {
    name: "Green",
    accent: "#43e6a9",
    accent2: "#35cfd0",
    accentDeep: "#188f7d",
    rgb: "67, 230, 169",
  },
  {
    name: "Orange",
    accent: "#ff9a5a",
    accent2: "#ff7168",
    accentDeep: "#c45d37",
    rgb: "255, 154, 90",
  },
];

const applyTheme = (theme) => {
  const root = document.documentElement;

  root.style.setProperty("--accent", theme.accent);
  root.style.setProperty("--accent-2", theme.accent2);
  root.style.setProperty("--accent-deep", theme.accentDeep);
  root.style.setProperty("--accent-rgb", theme.rgb);
};

export const Header = () => {
  const [activeTheme, setActiveTheme] = useState("Cyan");

  useEffect(() => {
    const savedTheme = localStorage.getItem("portfolio-theme");
    const theme = themes.find((item) => item.name === savedTheme) || themes[0];

    applyTheme(theme);
    setActiveTheme(theme.name);
  }, []);

  const handleThemeChange = (theme) => {
    applyTheme(theme);
    setActiveTheme(theme.name);
    localStorage.setItem("portfolio-theme", theme.name);
  };

  return (
    <HeaderBox>
      <Nav>
        <Brand to="/">
          <BrandMark>&lt;/&gt;</BrandMark>
          <BrandName>Yana</BrandName>
        </Brand>

        <NavRight>
          <LinksList>
            <Link to="/">Main</Link>
            <Link to="/about">About me</Link>
            <Link to="/projects">My projects</Link>
            <Link to="/contacts">Contacts</Link>
          </LinksList>

          <ThemePicker aria-label="Choose accent color">
            {themes.map((theme) => (
              <ThemeDot
                key={theme.name}
                type="button"
                title={theme.name}
                aria-label={`Use ${theme.name} theme`}
                aria-pressed={activeTheme === theme.name}
                $color={theme.accent}
                $active={activeTheme === theme.name}
                onClick={() => handleThemeChange(theme)}
              />
            ))}
          </ThemePicker>
        </NavRight>
      </Nav>
    </HeaderBox>
  );
};
