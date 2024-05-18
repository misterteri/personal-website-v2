import {
  ChakraProvider,
  Box,
  theme,
  Spacer,
  HStack,
  Text,
  Link,
} from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <header>
        <Box
          as="nav"
          display="flex"
          justifyContent="space-around"
          padding="4"
          backgroundColor="gray.400"
        >
          <Text fontSize="3xl" fontWeight="bold">
            {" "}
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
      </header>
      <main>
        <section id="about">
          <Box padding="8">
            <h2>About Me</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut
              perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
              velit.
            </p>
          </Box>
        </section>
      </main>

      <footer>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          padding="4"
          backgroundColor="gray.400"
        >
          <p>&copy; 2024 Gilbert</p>
          <a href="/github">Github</a>
          <a href="/linkedin">Linkedin</a>
          <a href="/mail">Mail</a>
        </Box>
      </footer>
    </ChakraProvider>
  );
}

export default App;
