import { Box, Heading, Image, Text } from "@chakra-ui/react";

// Define the interface for the props
interface ProjectCardProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}
// Use the interface to type the props in the function definition
export default function ProjectCard({
  title,
  description,
  imageSrc,
  imageAlt,
}: ProjectCardProps) {
  return (
    <Box
      bg="white"
      shadow="md"
      borderRadius="md"
      p="6"
      maxW="sm"
      borderWidth="1px"
      overflow={"hidden"}
    >
      <Image src={imageSrc} alt={imageAlt} />
      <Heading as="h3" size="md" mt="4">
        {title}
      </Heading>
      <Text mt="2">{description}</Text>
    </Box>
  );
}
