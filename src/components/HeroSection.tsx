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
      height="100vh"
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
        <Heading
          fontSize={["6.375vw", "10.2vw", "13.225vw", "16.5vw"]}
          transform="scaleY(1.3)"
        >
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
          fontSize={["6.375vw", "10.2vw", "13.225vw", "18vw"]}
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
        justifyContent="flex-start"
        // make the vertical spaces between the boxes to be 1px
        paddingTop={12}
      >
        <Box border="1px solid black">
          <Text fontSize="50px" color="black">
            Hsinchu, Taiwan
          </Text>
        </Box>
        <Box
          display="flex"
          alignItems="center"
          border="1px solid black"
          padding="0px"
        >
          <Text fontSize="60px" fontWeight="extra-bold" color="black">
            •
          </Text>
          <Text fontSize="50px" color="black">
            Full Stack Dev.
          </Text>
        </Box>
        <Box display="flex" alignItems="center">
          <Text
            fontSize="60px"
            fontWeight="extra-bold"
            color="black"
            marginRight="10px"
          >
            •
          </Text>
          <Text fontSize="50px" color="black">
            Software Eng.
          </Text>
        </Box>
      </GridItem>

      <GridItem
        area="buttons"
        alignItems="center"
        justifyContent="space-between"
        paddingX="10"
      >
        <Link href="resume_view">
          <Button
            bg="black"
            _hover={{ bg: "gray" }}
            color="white"
            variant="solid"
            margin="inherit"
            borderRadius="3px"
            fontSize="32px"
          >
            view resume
          </Button>
        </Link>
      </GridItem>
      <ScrollArrow />
    </Grid>
  );
}
