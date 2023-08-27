import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "../src/pages/Home";
import Contact from "../src/pages/Contact";
import Experience from "../src/pages/Experience";
import Navbar from "../src/components/Navbar";
import { MySkills } from "../src/pages/MySkills";
import ErrorPage from "../src/pages/ErrorPage";
import Footer from "./pages/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route path="/" element={<Home />} />
            <Route path="/myskills" element={<MySkills />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/footer" element={<Footer  />} />
          </Route>
          <Route path="*" element={<ErrorPage />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
