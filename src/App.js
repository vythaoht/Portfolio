import { BrowserRouter } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import React, { Suspense } from "react";

const About = React.lazy(() => import("./Components/About"));
const Contact = React.lazy(() => import("./Components/Contact"));
const Footer = React.lazy(() => import("./Components/Footer"));
const Header = React.lazy(() => import("./Components/Header"));
const Introduce = React.lazy(() => import("./Components/Introduce"));
const Portfolio = React.lazy(() => import("./Components/Portfolio"));
const Resume = React.lazy(() => import("./Components/Resume"));
const Skills = React.lazy(() => import("./Components/Skills"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>loading...</div>}>
        <Header />
        <Introduce />
        <About />
        <Resume />
        <Skills />
        <Portfolio />
        <Contact />
        <Footer />
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
