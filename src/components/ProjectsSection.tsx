import { Box, Container, Heading, SimpleGrid } from "@chakra-ui/react";
import ProjectCard from "./ProjectCard";

export default function ProjectsSection() {
  return (
    <Box
      id="projects"
      bg="gray.50"
      py="12"
      px={{
        base: "4",
        md: "8",
      }}
    >
      <Container maxW="container.xl">
        <Heading as="h2" size="xl" mb="8">
          Projects
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <ProjectCard
            title="Project 1"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet urna et nunc."
            imageSrc="https://via.placeholder.com/300"
            imageAlt="Project 1"
          />
          <ProjectCard
            title="Project 2"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet urna et nunc."
            imageSrc="https://via.placeholder.com/300"
            imageAlt="Project 2"
          />
          <ProjectCard
            title="Project 3"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet urna et nunc."
            imageSrc="https://via.placeholder.com/300"
            imageAlt="Project 3"
          />
          <ProjectCard
            title="Project 4"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet urna et nunc."
            imageSrc="https://via.placeholder.com/300"
            imageAlt="Project 4"
          />
        </SimpleGrid>
      </Container>
    </Box>
  );
}
