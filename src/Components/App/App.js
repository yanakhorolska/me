import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import { Projects } from "../../pages/Projects/Projects";
import { About } from "../../pages/About/About";
import { Contacts } from "../../pages/Contacts/Contacts";

import { Layout } from "../Layout/Layout";
import { Home } from "../../pages/Home/Home";

export const App = () => {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contacts" element={<Contacts />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
