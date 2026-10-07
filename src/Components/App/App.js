import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "../Layout/Layout";
import { Home } from "../../pages/Home/Home";

const About = lazy(() =>
  import("../../pages/About/About").then((module) => ({
    default: module.About,
  }))
);

const Projects = lazy(() =>
  import("../../pages/Projects/Projects").then((module) => ({
    default: module.Projects,
  }))
);

const Contacts = lazy(() =>
  import("../../pages/Contacts/Contacts").then((module) => ({
    default: module.Contacts,
  }))
);

const PageFallback = () => <div className="page-fallback" />;

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="/about"
          element={
            <Suspense fallback={<PageFallback />}>
              <About />
            </Suspense>
          }
        />
        <Route
          path="/projects"
          element={
            <Suspense fallback={<PageFallback />}>
              <Projects />
            </Suspense>
          }
        />
        <Route
          path="/contacts"
          element={
            <Suspense fallback={<PageFallback />}>
              <Contacts />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
};

export default App;
