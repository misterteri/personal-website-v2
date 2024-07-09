import {
  Box,
  Heading,
  Text,
  LinkBox,
  Badge,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
} from "@chakra-ui/react";

import { ExternalLinkIcon } from "@chakra-ui/icons";

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
        <LinkBox>
          <Link href={link} isExternal>
            View on GitHub <ExternalLinkIcon />
          </Link>
        </LinkBox>
      </CardFooter>
    </Card>
  );
}
