import { Box, HStack, Link, Spacer, Text, Flex } from "@chakra-ui/react";

export default function Navbar(): JSX.Element {
  return (
    <Flex
      position="fixed"
      top="0"
      left="50%"
      transform="translateX(-50%)"
      maxW="container.xl"
      width="100%"
      paddingInline={4}
      height="60px" // Set a fixed height for the Navbar
      backdropFilter="blur(5px)" // Add backdrop filter to make the content slightly blurry
      zIndex={10} // Add z-index to make it appear above other elements
    >
      <Box
        // border="1px solid #e2e8f0"
        margin="auto"
        padding="2"
      >
        <Text fontSize="3xl" fontWeight="bold">
          /dev/gilbert
        </Text>
      </Box>
      <Spacer />
      <HStack spacing={8}>
        <Link href="#about-me">
          <Text fontSize="xl">About Me</Text>
        </Link>

        <Link href="#skills">
          <Text fontSize="xl">Skills</Text>
        </Link>
        <Link href="#projects">
          <Text fontSize="xl">Projects</Text>
        </Link>
        <Link href="#contact">
          <Text fontSize="xl">Contact</Text>
        </Link>
      </HStack>
    </Flex>
  );
}
