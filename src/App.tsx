import {
  ChakraProvider,
  Box,
  theme,
  Spacer,
  HStack,
  Text,
  Link,
  Grid,
  GridItem,
  Heading,
  Flex,
  Button,
  VStack,
} from "@chakra-ui/react";

import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
function App() {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <Footer />
    </ChakraProvider>
  );
}

export default App;
