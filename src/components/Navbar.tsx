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
        <Link href="/">
          <Text fontSize="3xl" fontWeight="bold">
            /dev/gilbert
          </Text>
        </Link>
      </Box>
      <Spacer />
      <HStack spacing={4}>
        <Link
          href="#about-me"
          // border="1px solid #e2e8f0"
          borderRadius="md"
          paddingInline={1}
          paddingBlockStart={1} // Modify padding top
          paddingBlockEnd={2} // Modify padding bottom
          _hover={{
            bg: "gray.100",
            time: "0.3s",
          }}
        >
          <Text fontSize="xl">About Me</Text>
        </Link>

        <Link
          href="#skills" // border="1px solid #e2e8f0"
          borderRadius="md"
          paddingInline={1}
          paddingBlockStart={1} // Modify padding top
          paddingBlockEnd={2} // Modify padding bottom
          _hover={{
            bg: "gray.100",
            time: "0.3s",
          }}
        >
          <Text fontSize="xl">Skills</Text>
        </Link>
        <Link
          href="#projects" // border="1px solid #e2e8f0"
          borderRadius="md"
          paddingInline={1}
          paddingBlockStart={1} // Modify padding top
          paddingBlockEnd={2} // Modify padding bottom
          _hover={{
            bg: "gray.100",
            time: "0.3s",
          }}
        >
          <Text fontSize="xl">Projects</Text>
        </Link>
        <Link
          href="#contact" // border="1px solid #e2e8f0"
          borderRadius="md"
          paddingInline={1}
          paddingBlockStart={1} // Modify padding top
          paddingBlockEnd={2} // Modify padding bottom
          _hover={{
            bg: "gray.100",
            time: "0.3s",
          }}
        >
          <Text fontSize="xl">Contact</Text>
        </Link>
      </HStack>
    </Flex>
  );
}
