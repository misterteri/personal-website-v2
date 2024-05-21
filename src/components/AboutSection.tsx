import { Flex, Heading, Text, VStack } from "@chakra-ui/react";

export default function HeroSection(): JSX.Element {
  return (
    <section id="about-me">
      <Flex
        justifyContent="flex-end"
        padding="4"
        maxW="container.md"
        margin={"auto"}
        gridTemplateColumns={{
          lg: "repeat(2,1fr)",
          md: "repeat(1,1fr)",
          sm: "repeat(1,1fr)",
        }}
        gap="30px"
        paddingTop={"100px"}
      >
        <VStack alignItems="flex-end" spacing="4">
          <Heading textUnderlineOffset={20} textDecoration="underline">
            About Me
          </Heading>

          <Text fontSize="3xl" color="gray.500" marginBottom="4">
            Learn more about me
          </Text>

          <Text fontSize="xl" color="gray.500">
            I'm Gilbert, a software engineer with a knack for turning ideas into
            solutions that make life easier and more fun. I love solving complex
            problems and sharing my knowledge to make a positive impact through
            technology.
          </Text>
          <Text fontSize="xl" color="gray.500">
            As a soon-to-be Computer Science graduate from National Tsing Hua
            University (NTHU) in Taiwan, I'm on the lookout for software
            engineering or developer roles. I'm passionate about honing my
            skills and sharing my journey to inspire others.
          </Text>
          <Text fontSize="xl" color="gray.500">
            I've built a solid foundation in both front-end and back-end
            technologies, working on projects from web apps to system
            integrations. I thrive on collaboration and am always eager to learn
            and grow with my peers.
          </Text>
          <Text fontSize="xl" color="gray.500">
            Outside of coding, I'm a lifelong learner who enjoys reading,
            exploring new tech, and engaging in activities that broaden my
            horizons. Through this website, I aim to showcase my work, share
            insights, and connect with like-minded professionals.
          </Text>
        </VStack>
      </Flex>
    </section>
  );
}
