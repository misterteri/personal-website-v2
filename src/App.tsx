import {
  ChakraProvider,
  Box,
  theme,
  Spacer,
  HStack,
  Text,
  Link,
  Grid,
  GridItem,
  Heading,
  Flex,
  Button,
  VStack,
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
        <section id="Introduction">
          <Grid
            paddingTop={"200px"}
            maxW={"80%"}
            id="hero"
            margin={"auto"}
            gridTemplateColumns={{
              lg: "repeat(2,1fr)",
              md: "repeat(1,1fr)",
              sm: "repeat(1,1fr)",
            }}
            gap="30px"
          >
            <GridItem
              display={"flex"}
              textAlign="left"
              alignItems={"center"}
              border={"1px solid"}
              borderRadius={"5px"}
            >
              <Box>
                <Heading
                  size={{ lg: "2xl", md: "2xl", sm: "2xl", base: "xl" }}
                  color="rgb(8, 111, 143)"
                  marginBottom={{ lg: "10px" }}
                >
                  Marcelino Gilbert
                </Heading>
                <Heading
                  fontWeight={"normal"}
                  size={{ lg: "xl", md: "xl", sm: "xl", base: "lg" }}
                  color="rgb(90,90,90)"
                  marginBottom={"16px"}
                >
                  Full Stack Web Developer
                </Heading>
                <Flex gap={"10px"} wrap={"wrap"} flexDirection="column">
                  <a href="resume_download">
                    <Button
                      bg={"rgb(1, 75, 97);"}
                      _hover={{ bg: "rgb(14, 129, 165)" }}
                      color="white"
                      variant={"solid"}
                      width="100px"
                      height={"40px"}
                      borderRadius="3px"
                      marginBottom={"10px"}
                      fontSize="16px"
                    >
                      Resume
                    </Button>
                  </a>
                  <a href="resume_view">
                    <Button
                      bg={"rgb(1, 75, 97);"}
                      _hover={{ bg: "rgb(14, 129, 165)" }}
                      color="white"
                      variant={"solid"}
                      width="120px"
                      height={"40px"}
                      borderRadius="3px"
                      marginBottom={"10px"}
                      fontSize="16px"
                    >
                      View Resume
                    </Button>
                  </a>
                </Flex>
              </Box>
            </GridItem>
          </Grid>
        </section>
        <section id="About Me">
          <Flex
            justifyContent="flex-end"
            padding="4"
            maxW={"80%"}
            margin={"auto"}
            gridTemplateColumns={{
              lg: "repeat(2,1fr)",
              md: "repeat(1,1fr)",
              sm: "repeat(1,1fr)",
            }}
            gap="30px"
          >
            <VStack
              alignItems="flex-end"
              border={"1px solid"}
              borderRadius={"5px"}
            >
              <Heading textUnderlineOffset={10} textDecoration="underline">
                About Me
              </Heading>

              <Text fontSize="3xl" color="gray.500" marginBottom="4">
                Learn more about me
              </Text>

              <Text fontSize="xl" color="gray.500">
                I’m Gilbert, a software engineer with a passion for turning
                innovative ideas into solutions that make life easier and more
                enjoyable. With a keen interest in solving complex problems and
                sharing my knowledge, I aim to contribute positively to society
                through technology.
              </Text>
              <Text fontSize="xl" color="gray.500">
                I’m about to graduate with a degree in Computer Science from
                National Tsing Hua University (NTHU) in Taiwan, and I’m
                currently seeking opportunities as a software engineer or
                developer. My goal is to continuously hone my skills and share
                my experiences to inspire others.
              </Text>
              <Text fontSize="xl" color="gray.500">
                In my journey so far, I’ve developed a strong foundation in both
                front-end and back-end technologies, working on projects that
                range from web applications to system integrations. I believe in
                the power of collaboration and am always eager to learn and grow
                with my peers.
              </Text>
              <Text fontSize="xl" color="gray.500">
                Beyond coding, I’m an advocate for lifelong learning and enjoy
                reading, exploring new technologies, and engaging in activities
                that broaden my perspective. Through this website, I hope to
                showcase my work, share insights, and connect with like-minded
                professionals.
              </Text>
              <Text fontSize="xl" color="gray.500">
                Let’s build something amazing together!
              </Text>
            </VStack>
          </Flex>
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
