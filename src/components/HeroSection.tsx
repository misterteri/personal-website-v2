import {
  Box,
  Button,
  Grid,
  GridItem,
  Heading,
  Text,
  Link,
  keyframes,
} from "@chakra-ui/react";

import ScrollArrow from "./ScrollArrow";

// Keyframes for button animation
const pulse = keyframes`
  0% {
    transform: scale(1);
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  }
  50% {
    transform: scale(1.05);
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
  }
  100% {
    transform: scale(1);
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  }
`;

export default function HeroSection() {
  const resume_link =
    "https://drive.google.com/drive/folders/1inHi6Z3flpgHPHB_-3vE0nGrH2P7QfHJ?usp=drive_link";
  return (
    <Grid
      id="herosection"
      paddingTop={"7vh"}
      templateAreas={`"name name"
                        "surname title"
                        "surname buttons"`}
      templateRows="auto auto auto"
      templateColumns="auto auto"
      userSelect={"none"}
    >
      <GridItem
        area="name"
        display="flex"
        alignItems="center"
        justifyContent="center"
        userSelect={"none"}
      >
        <Heading fontSize="16.5vw" transform="scaleY(1.3)">
          MARCELINO
        </Heading>
      </GridItem>

      <GridItem
        area="surname"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Heading
          fontSize={["18vw", "18vw", "18vw", "18vw"]}
          transform="scaleY(1.3)"
          zIndex={-1}
        >
          GILBERT
        </Heading>
      </GridItem>

      <GridItem
        area="title"
        display="flex"
        flexDirection="column"
        alignItems="left"
        padding="1vw"
      >
        <Box>
          <Text fontSize="3vw" fontWeight={"bold"}>
            Hsinchu, Taiwan
          </Text>
        </Box>
        <Box display="flex">
          <Text fontSize="3vw">jr. fullstack</Text>
        </Box>
        <Box display="flex" alignItems="center">
          <Text fontSize="3vw">jr. data engineer</Text>
        </Box>
      </GridItem>

      <GridItem
        area="buttons"
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Link
          href={resume_link}
          _hover={{ filter: "invert(100%)" }}
          variant="solid"
          paddingInline={"1vw"}
          paddingBlockStart={"0.5vw"}
          paddingBlockEnd={"1vw"}
          borderRadius="5px"
          fontSize="3vw"
          animation={`${pulse} 2s infinite`}
          transition="transform 0.2s, box-shadow 0.2s"
        >
          view resume
        </Link>
      </GridItem>
      {/* <ScrollArrow /> */}
    </Grid>
  );
}
