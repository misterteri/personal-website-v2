import { Box, Flex, Text } from "@chakra-ui/react";

const Footer: React.FC = () => {
  return (
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
  );
};

export default Footer;
