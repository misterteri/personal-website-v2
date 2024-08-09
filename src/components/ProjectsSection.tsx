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
            title="Personal Website"
            description="I made this website to document my journey in the tech field and share what I've been up to. "
            techStack="React, Chakra UI, Next.js"
            language="Typescript, CSS, html"
            link="https://github.com/misterteri/personal-websiteV2"
          />
        </GridItem>
        <GridItem>
          <ProjectCard
            title="ERP Dashboard"
            description="Check out our ERP dashboard! My friend and I created it to simplify business processes, offering an easy way to track everything from sales to stock levels."
            techStack="Django, PostgreSQL"
            language="Python, SQL"
            link="https://github.com/misterteri/erp"
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
            title="Shopping Cart"
            description="I built this shopping cart as my initial foray into web development. It’s a simple project that made learning how to build websites an enjoyable experience."
            techStack="JSX, React"
            language="Javascript"
            link="https://github.com/misterteri/Shopping-Cart"
          />
        </GridItem>
        <GridItem>
          <ProjectCard
            title="RAG Documents"
            description="This project involves building a Retrieval-Augmented Generation (RAG) system using EPUB documents as the data source. The workflow includes populating a Weaviate vector store with embeddings generated from the content of EPUB files, using a HuggingFace model for embedding extraction. Users can then query this system to retrieve relevant information from the stored documents, utilizing a Gradio interface for interaction and displaying the results."
            techStack="Gradio, Llama3, Weaviate, Ollama, HuggingFace"
            language="Python"
            link="https://github.com/misterteri/rag-docs"
          />
        </GridItem>
        <GridItem>
          <ProjectCard
            title="Image Search Engine"
            description="This project involves building a Retrieval-Augmented Generation (RAG) system using EPUB documents as the data source. The workflow includes populating a Weaviate vector store with embeddings generated from the content of EPUB files, using a HuggingFace model for embedding extraction. Users can then query this system to retrieve relevant information from the stored documents, utilizing a Gradio interface for interaction and displaying the results."
            techStack="Gradio, Llama3, Weaviate, Ollama, HuggingFace"
            language="Python"
            link="https://github.com/misterteri/rag-docs"
          />
        </GridItem>
      </Grid>
    </Container>
  );
}
