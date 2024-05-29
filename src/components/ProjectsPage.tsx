import Footer from "./Footer";
import Navbar from "./Navbar";

import React from "react";
import {
  Box,
  Divider,
  Heading,
  HStack,
  Link,
  ListItem,
  Stack,
  Text,
  UnorderedList,
  Flex,
  ChakraProvider,
  theme,
} from "@chakra-ui/react";

export default function ProjectsPage(): JSX.Element {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <Box
        id="projects"
        paddingInline={4}
        paddingTop={20}
        paddingBottom={20}
        minHeight="100vh"
        display="flex"
        flexDirection="column"
        justifyContent="center"
      >
        <Heading as="h1" size="xl" textAlign="center">
          Projects
        </Heading>
        <Divider marginY={4} />
        <Stack spacing={4}>
          <Box>
            <Heading as="h2" size="lg">
              Project 1
            </Heading>
            <Text>
              This is a description of project 1. This is a description of
              project 1. This is a description of project 1. This is a
              description of project 1. This is a description of project 1.
            </Text>
          </Box>
          <Box>
            <Heading as="h2" size="lg">
              Project 2
            </Heading>
            <Text>
              This is a description of project 2. This is a description of
              project 2. This is a description of project 2. This is a
              description of project 2. This is a description of project 2.
            </Text>
          </Box>
          <Box>
            <Heading as="h2" size="lg">
              Project 3
            </Heading>
            <Text>
              This is a description of project 3. This is a description of
              project 3. This is a description of project 3. This is a
              description of project 3. This is a description of project 3.
            </Text>
          </Box>
        </Stack>
      </Box>

      <Footer />
    </ChakraProvider>
  );
}
