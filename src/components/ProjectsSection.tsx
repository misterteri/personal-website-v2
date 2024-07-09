import { Container, Heading, Grid, GridItem } from "@chakra-ui/react";
import ProjectCard from "./ProjectCard";

export default function ProjectsSection() {
  return (
    <Container maxW={"80%"} id="projects" paddingTop={"120px"}>
      <Heading textAlign={"left"} size={"3xl"}>
        Projects
      </Heading>
      <br />
      <br />
      <Grid
        gridTemplateColumns={{
          lg: "repeat(2,1fr)",
          sm: "repeat(1,1fr)",
        }}
      >
        <GridItem>
          <ProjectCard
            title="Spotify API"
            description="Taking data from Spotify API then find a similar songs that I would probably like."
            techStack="pandas, numpy, matplotlib, sklearn"
            language="Python"
            link="https://github.com/misterteri/spotify-api"
          />
        </GridItem>
        <GridItem>
          <ProjectCard
            title="Spotify API"
            description="Taking data from Spotify API then find a similar songs that I would probably like."
            techStack="pandas, numpy, matplotlib, sklearn"
            language="Python"
            link="https://github.com/misterteri/spotify-api"
          />
        </GridItem>
        <GridItem>
          <ProjectCard
            title="Spotify API"
            description="Taking data from Spotify API then find a similar songs that I would probably like."
            techStack="pandas, numpy, matplotlib, sklearn"
            language="Python"
            link="https://github.com/misterteri/spotify-api"
          />
        </GridItem>
        <GridItem>
          <ProjectCard
            title="Spotify API"
            description="Taking data from Spotify API then find a similar songs that I would probably like."
            techStack="pandas, numpy, matplotlib, sklearn"
            language="Python"
            link="https://github.com/misterteri/spotify-api"
          />
        </GridItem>
      </Grid>
    </Container>
  );
}
