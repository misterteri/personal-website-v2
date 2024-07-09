import {
  Box,
  Heading,
  Text,
  LinkOverlay,
  LinkBox,
  Button,
  Badge,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  effect,
} from "@chakra-ui/react";

import { ArrowForwardIcon } from "@chakra-ui/icons";

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string;
  language: string;
  link: string;
}

export default function ProjectCard({
  title,
  description,
  techStack,
  language,
  link,
}: ProjectCardProps) {
  return (
    <Card
      borderWidth="1px"
      borderRadius="10px"
      margin="10px"
      display="flex"
      flexDirection="column"
    >
      <CardHeader>
        <Heading size="md">{title}</Heading>
      </CardHeader>

      <Divider />
      <CardBody>
        <Text mb={4}>{description}</Text>
        <Box>
          <Badge colorScheme="teal" mr={2}>
            Tech Stack: {techStack}
          </Badge>
          <Badge colorScheme="purple">Language: {language}</Badge>
        </Box>
      </CardBody>
      <CardFooter>
        <Button
          rightIcon={<ArrowForwardIcon />}
          colorScheme="teal"
          variant="outline"
        >
          View Project
        </Button>
      </CardFooter>
    </Card>
  );
}
