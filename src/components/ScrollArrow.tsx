import { Box, keyframes } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

const rotate = keyframes`
    0%, 100% { transform: rotate(0); }
    50% { transform: rotate(20deg); }
`;

export default function ScrollArrow() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      bottom="10px"
      width="100%"
    >
      <ChevronDownIcon
        boxSize="50px"
        color="black"
        _hover={{
          animation: `${rotate} 0.5s infinite`,
        }}
      />
    </Box>
  );
}
