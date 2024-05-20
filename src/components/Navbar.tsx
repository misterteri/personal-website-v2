import { Box, HStack, Link, Spacer, Text } from "@chakra-ui/react";

export default function Navbar(): JSX.Element {
  return (
    <Box
      as="nav"
      position="fixed"
      display="flex"
      flexDirection={"row"}
      padding="4"
      backgroundColor="gray.400"
      width="full"
      minW="container.sm"
    >
      <Text fontSize="3xl" fontWeight="bold">
        /dev/gilbert
      </Text>
      <Spacer />
      <HStack spacing="4">
        <Box>
          <Link>
            <Text fontSize="2xl" _hover={{ borderBottom: "5px solid" }}>
              About Me
            </Text>
          </Link>
        </Box>
        <Box>
          <Link>
            <Text fontSize="2xl" _hover={{ borderBottom: "5px solid" }}>
              Skills
            </Text>
          </Link>
        </Box>
        <Box>
          <Link>
            <Text fontSize="2xl" _hover={{ borderBottom: "5px solid" }}>
              Projects
            </Text>
          </Link>
        </Box>
        <Box>
          <Link>
            <Text fontSize="2xl" _hover={{ borderBottom: "5px solid" }}>
              Contact
            </Text>
          </Link>
        </Box>
      </HStack>
    </Box>
  );
}
