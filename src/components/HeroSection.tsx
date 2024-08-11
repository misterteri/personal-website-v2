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
      marginTop={"9vh"}
      templateAreas={`"name name"
                      "surname title"`}
      templateRows="auto auto "
      templateColumns="auto auto"
      userSelect={"none"}
    >
      <GridItem
        area="name"
        display="flex"
        
        // overflow="hidden"
      >
        <Heading fontSize="16.5vw" transform="scaleY(1.2)">
          MARCELINO
        </Heading>
      </GridItem>

      <GridItem
        area="surname"
        display="flex"
        alignItems="center" // Align items vertically
        justifyContent="center" // Align items horizontally
        
      >
        <Heading fontSize="17vw" transform="scaleY(1.2)" textAlign="center">
          GILBERT
        </Heading>
      </GridItem>

      <GridItem
        area="title"
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Box>
          <Text fontSize="3vw" fontWeight={"bold"} >
            Hsinchu, Taiwan
          </Text>
        </Box>
        <Box display="flex">
          <Text fontSize="3vw" textAlign="center">
            Software Engineer
          </Text>
        </Box>
        <Link
          href={resume_link}
          _hover={{ filter: "invert(100%)" }}
          variant="solid"
          paddingInline={"2vw"}
          paddingBlockStart={"1vw"}
          paddingBlockEnd={"1vw"}
          borderRadius="5px"
          fontSize="3vw"
          animation={`${pulse} 2s infinite`}
          transition="transform 0.2s, box-shadow 0.2s"
          bg="transparent"
          border="2px solid currentColor"
          color="black"
          mb="1vw"
        >
          View Resume
        </Link>
      </GridItem>
    </Grid>
  );
}
