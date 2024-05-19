import { Box, Button, Flex, Grid, GridItem, Heading } from "@chakra-ui/react";
import happyemoji from "../assets/happy-emoji.svg";

export default function HeroSection(): JSX.Element {
  return (
    <Grid
      templateColumns={{
        lg: "repeat(2,1fr)",
        md: "repeat(1,1fr)",
        sm: "repeat(1,1fr)",
      }}
      gap="30px"
      padding="4"
      maxW="80%"
      margin="auto"
      marginTop="60px" // Add a top margin to account for the fixed Navbar height
      //   border="1px solid #e2e8f0"
    >
      <GridItem display={"flex"} textAlign="left" alignItems={"center"}>
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
      <GridItem display={"flex"} justifyContent={"center"} maxW={"70%"}>
        <Box>
          <img src={happyemoji} alt="happy-emoji" />
        </Box>
      </GridItem>
    </Grid>
  );
}
