import Navbar from "./Navbar";
import Footer from "./Footer";
import { Box, Container } from "@chakra-ui/react";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Box
      as="main"
      maxWidth={1000}
      mx="auto"
      minHeight="100vh"
      display="flex"
      flexDirection="column"
      justifyContent={"center"}
    >
      {/* <Seo /> */}
      <Navbar />

      <Container flexGrow={1} maxWidth={"container.md"} paddingTop="10">
        {/* <Global styles={prismStyles} /> */}
        {children}
      </Container>
      <Footer />
    </Box>
  );
};

export default Layout;
