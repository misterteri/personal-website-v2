import { Flex, Heading, Text, VStack } from "@chakra-ui/react";

export default function HeroSection(): JSX.Element {
  return (
    <section id="About Me">
      <Flex
        justifyContent="flex-end"
        padding="4"
        maxW={"80%"}
        margin={"auto"}
        gridTemplateColumns={{
          lg: "repeat(2,1fr)",
          md: "repeat(1,1fr)",
          sm: "repeat(1,1fr)",
        }}
        gap="30px"
      >
        <VStack alignItems="flex-end" spacing="4">
          <Heading textUnderlineOffset={20} textDecoration="underline">
            About Me
          </Heading>

          <Text fontSize="3xl" color="gray.500" marginBottom="4">
            Learn more about me
          </Text>

          <Text fontSize="xl" color="gray.500">
            I’m Gilbert, a software engineer with a passion for turning
            innovative ideas into solutions that make life easier and more
            enjoyable. With a keen interest in solving complex problems and
            sharing my knowledge, I aim to contribute positively to society
            through technology.
          </Text>
          <Text fontSize="xl" color="gray.500">
            I’m about to graduate with a degree in Computer Science from
            National Tsing Hua University (NTHU) in Taiwan, and I’m currently
            seeking opportunities as a software engineer or developer. My goal
            is to continuously hone my skills and share my experiences to
            inspire others.
          </Text>
          <Text fontSize="xl" color="gray.500">
            In my journey so far, I’ve developed a strong foundation in both
            front-end and back-end technologies, working on projects that range
            from web applications to system integrations. I believe in the power
            of collaboration and am always eager to learn and grow with my
            peers.
          </Text>
          <Text fontSize="xl" color="gray.500">
            Beyond coding, I’m an advocate for lifelong learning and enjoy
            reading, exploring new technologies, and engaging in activities that
            broaden my perspective. Through this website, I hope to showcase my
            work, share insights, and connect with like-minded professionals.
          </Text>
          <Text fontSize="xl" color="gray.500">
            Let’s build something amazing together!
          </Text>
        </VStack>
      </Flex>
    </section>
  );
}
