import {
  Box,
  Button,
  Grid,
  GridItem,
  Heading,
  Text,
  Flex,
  Spacer,
  Link,
} from "@chakra-ui/react";

import ScrollArrow from "./ScrollArrow";

export default function HeroSection() {
  return (
    <Grid
      paddingTop={"10vh"}
      templateAreas={`"name name"
                        "surname title"
                        "surname buttons"`}
      templateRows="auto auto auto"
      templateColumns="auto auto"
      // gap="10px"
      // padding="20px"
    >
      <GridItem
        area="name"
        display="flex"
        alignItems="center"
        justifyContent="center"
        border="1px solid black"
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
        border="1px solid black"
      >
        <Heading
          fontSize={["18vw", "18vw", "18vw", "18vw"]}
          transform="scaleY(1.3)"
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
        <Box border="1px solid black">
          <Text fontSize="3vw" color="black" fontWeight={"bold"}>
            Hsinchu, Taiwan
          </Text>
        </Box>
        <Box display="flex" border="1px solid black">
          <Text fontSize="3vw" color="black">
            jr. fullstack
          </Text>
        </Box>
        <Box display="flex" alignItems="center" border="1px solid black">
          <Text fontSize="3vw" color="black">
            jr. data engineer
          </Text>
        </Box>
      </GridItem>

      <GridItem
        area="buttons"
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Link href="resume_view">
          <Button
            bg="black"
            _hover={{ bg: "gray" }}
            color="white"
            variant="solid"
            paddingInline={"1vw"}
            paddingBlockStart={"1.5vw"} // Modify padding top
            paddingBlockEnd={"2vw"} // Modify padding bottom
            borderRadius="5px"
            fontSize="3vw"
          >
            view resume
          </Button>
        </Link>
      </GridItem>
      <ScrollArrow />
    </Grid>
  );
}
