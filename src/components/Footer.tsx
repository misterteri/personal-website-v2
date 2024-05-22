import { Flex, IconButton, Link } from "@chakra-ui/react";

import { FiGithub, FiLinkedin } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";

const Footer: React.FC = () => {
  const size = "2rem";
  const link = [
    {
      key: "github",
      icon: <FiGithub style={{ fontSize: size }} />,
      url: "https://github.com/misterteri",
    },
    {
      key: "linkedin",
      icon: <FiLinkedin style={{ fontSize: size }} />,
      url: "https://www.linkedin.com/in/marcelino-gilbert-07823621a",
    },
    {
      key: "email",
      icon: <MdOutlineMail style={{ fontSize: size }} />,
      url: "mailto:marcelinogilbert26@gmail.com",
    },
  ];

  return (
    <Flex
      as="footer"
      bottom="0"
      left="0"
      right="0"
      height="60px"
      align="center"
      justify="center"
      border="1px solid"
    >
      <Flex maxW="container.md">
        {link.map((item, index) => (
          <Link key={index} as="a" px={4} py={2} rounded={"md"} href={item.url}>
            <IconButton
              variant="ghost"
              icon={item.icon}
              aria-label={item.key}
              padding={1}
              fontWeight={"500"}
              _hover={{
                transition: "all 0.5s ease-in-out",
                transform: "scale(1.02) rotate(360deg)",
              }}
            />
          </Link>
        ))}
      </Flex>
      <Flex as="p" mt={2} fontWeight={"500"}>
        M. Gilbert © {new Date().getFullYear()}
      </Flex>
    </Flex>
  );
};

export default Footer;

// UNDERSTOOD
