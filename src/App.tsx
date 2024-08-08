import { ChakraProvider, theme } from "@chakra-ui/react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import Navbar from "./components/Navbar";
import { SkillsSection } from "./components/SkillsSection";
import Footer from "./components/Footer";
import ProjectsSection from "./components/ProjectsSection";
import SpotifyApi from "./pages/project-spotifyApi";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Navbar />
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <Footer />
      </Router>          
    </ChakraProvider>
  );
}

export default App;
