import { ChakraProvider, theme } from "@chakra-ui/react";

import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import Navbar from "./components/Navbar";
import { SkillsSection } from "./components/SkillsSection";
import Footer from "./components/Footer";
function App() {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <Footer />
    </ChakraProvider>
  );
}

export default App;
