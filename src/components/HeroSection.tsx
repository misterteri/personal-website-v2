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

export default function HeroSection() {
  return (
    <Grid
      height="100vh"
      templateAreas={`"name name"
                        "surname title"
                        "surname buttons"`}
      templateRows="auto auto auto"
      templateColumns="auto auto"
      gap="10px"
      padding="20px"
    >
      <GridItem
        area="name"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Heading fontSize="280px">MARCELINO</Heading>
      </GridItem>

      <GridItem
        area="surname"
        display="flex"
        alignItems="center"
        justifyContent="left"
      >
        <Heading fontSize="280px">GILBERT</Heading>
      </GridItem>

      <GridItem
        area="title"
        display="flex"
        flexDirection="column"
        alignItems="left"
        justifyContent="flex-start"
      >
        <Box>
          <Text fontSize="50px" color="black">
            Hsinchu, Taiwan
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
        zIndex={-1}
      >
        <Box>
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
        </Box>
      </GridItem>
    </Grid>
  );
}
