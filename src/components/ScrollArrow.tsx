import { Box, keyframes } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { Link as ScrollLink } from "react-scroll";
import { useState, useEffect } from "react";

const rotate = keyframes`
    0%, 100% { transform: rotate(0); }
    50% { transform: rotate(20deg); }
`;

export default function ScrollArrow() {
  const [isVisible, setIsVisible] = useState(true);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        triggerFadeOut();
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const triggerFadeOut = () => {
    setIsFading(true);
    setTimeout(() => setIsVisible(false), 300);
  };

  const handleClick = () => {
    triggerFadeOut();
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      bottom="10px"
      width="100%"
      opacity={isFading ? 0 : 1}
      visibility={isFading ? "hidden" : "visible"} // Use visibility to hide but keep space
      transition="opacity 0.3s ease, visibility 0.3s ease"
    >
      <ScrollLink 
        to="about-me" 
        smooth={true} 
        duration={500} 
        offset={-70} 
        onClick={handleClick}
      >
        <ChevronDownIcon
          boxSize="50px"
          color="black"
          _hover={{
            animation: `${rotate} 0.5s infinite`,
          }}
        />
      </ScrollLink>
    </Box>
  );
}