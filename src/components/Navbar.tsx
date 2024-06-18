import { Box, HStack, Link, Spacer, Text, Flex } from "@chakra-ui/react";
import { Link as ScrollLink } from "react-scroll";
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
      height="7vh" // Set a fixed height for the Navbar
      backdropFilter="blur(5px)" // Add backdrop filter to make the content slightly blurry
      zIndex={10} // Add z-index to make it appear above other elements
    >
      <Box
        // border="1px solid #e2e8f0"
        margin="auto"
        padding="2"
      >
        <ScrollLink
          to="herosection"
          smooth={true} // Add smooth scrolling behavior
          duration={500} // Set the duration of the scroll animation
          offset={-70} // Adjust the scroll offset if needed
        >
          <Text fontSize="3xl" fontWeight="bold" cursor="pointer">
            /dev/gilbert
          </Text>
        </ScrollLink>
      </Box>
      <Spacer />
      <HStack spacing={4}>
        <ScrollLink to="about-me" smooth={true} duration={500} offset={-70}>
          <Box
            borderRadius="md"
            paddingInline={1}
            paddingBlockStart={1}
            paddingBlockEnd={2}
            _hover={{
              bg: "gray.100",
              transitionDuration: "0.3s",
            }}
          >
            <Text fontSize="xl" cursor="pointer">
              About Me
            </Text>
          </Box>
        </ScrollLink>

        <ScrollLink to="skills" smooth={true} duration={500} offset={-70}>
          <Box
            borderRadius="md"
            paddingInline={1}
            paddingBlockStart={1}
            paddingBlockEnd={2}
            _hover={{
              bg: "gray.100",
              transitionDuration: "0.3s",
            }}
          >
            <Text fontSize="xl" cursor="pointer">
              Skills
            </Text>
          </Box>
        </ScrollLink>
        <ScrollLink to="projects" smooth={true} duration={500} offset={-70}>
          <Box
            borderRadius="md"
            paddingInline={1}
            paddingBlockStart={1}
            paddingBlockEnd={2}
            _hover={{
              bg: "gray.100",
              transitionDuration: "0.3s",
            }}
          >
            <Text fontSize="xl" cursor="pointer">
              Projects
            </Text>
          </Box>
        </ScrollLink>
        <Link
          href="mailto:marcelinogilbert26@gmail.com"
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
