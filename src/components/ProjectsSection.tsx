import { Box, Container, Heading, SimpleGrid, Button } from "@chakra-ui/react";
import ProjectCard from "./ProjectCard";
import Link from "next/link";

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
            title="Spotify API"
            description="In this project, I developed a data analysis pipeline for Spotify music data, encompassing data collection, preprocessing (handling missing values and normalization), and visualization using heatmaps. Key techniques included feature selection, model training, and correlation analysis, leveraging technologies like Python, Pandas, Numpy, and Scikit-learn. Visualization was achieved with Matplotlib and Seaborn, and data was accessed through the Spotify API."
            imageSrc="https://via.placeholder.com/300"
            imageAlt="Project 1"
          />
          <ProjectCard
            title="Web Mario"
            description="School's Project"
            imageSrc="https://via.placeholder.com/300"
            imageAlt="Project 2"
          />
          <ProjectCard
            title="ERP Dashboard"
            description="-"
            imageSrc="https://via.placeholder.com/300"
            imageAlt="Project 3"
          />
          <ProjectCard
            title="Weather App"
            description="-"
            imageSrc="https://via.placeholder.com/300"
            imageAlt="Project 4"
          />
        </SimpleGrid>
        <Link colorScheme="blue" size="lg" mt="8" as="a" href="/ProjectsPage">
          View More
        </Link>
      </Container>
    </Box>
  );
}
