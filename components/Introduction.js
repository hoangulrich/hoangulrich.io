import {
  Text,
  Heading,
  Flex,
  useColorModeValue,
  Avatar,
  Box,
  SlideFade,
} from "@chakra-ui/react";

const Introduction = () => {
  const textColor = useColorModeValue("teal", "teal.200");
  const popColor = useColorModeValue("custom.300", "custom.200");
  const avatarColor = useColorModeValue("custom.300", "white");

  return (
    <>
      <Flex direction="column">
        <SlideFade
          in={true}
          direction="top"
          transition={{ enter: { duration: 0.4, delay: 0.1 } }}
        >
          <Heading color={textColor}>Hi, I'm</Heading>
        </SlideFade>

        <SlideFade
          in={true}
          direction="top"
          transition={{ enter: { duration: 0.4, delay: 0.2 } }}
        >
          <Flex justify="space-between" px="12" mt="-3" align="center">
            <Heading fontSize={["6xl", "7xl", "8xl", "9xl"]}>Hoang Le</Heading>
            <Avatar
              src="/mnn.jpg"
              name="Hoang Le"
              size="2xl"
              borderWidth="2px"
              borderColor={avatarColor}
            />
          </Flex>
        </SlideFade>

        <SlideFade
          in={true}
          direction="top"
          transition={{ enter: { duration: 0.4, delay: 0.3 } }}
        >
          <Box
            borderRadius="lg"
            bg={popColor}
            align="center"
            p="2"
            mt="12"
            mx="12"
          >
            <Text fontSize="xl">
              I'm a Fullstack Developer based in Vietnam
            </Text>
          </Box>
        </SlideFade>
        <SlideFade
          in={true}
          direction="top"
          transition={{ enter: { duration: 0.4, delay: 0.4 } }}
        >
          <Box
            borderRadius="lg"
            bg={popColor}
            align="center"
            p="2"
            my="3"
            mx="12"
          >
            <Text fontSize="xl">Exploring opportunities and side projects</Text>
          </Box>
        </SlideFade>
        <SlideFade
          in={true}
          direction="top"
          transition={{ enter: { duration: 0.4, delay: 0.5 } }}
        >
          <Box borderRadius="lg" bg={popColor} align="center" p="2" mx="12">
            <Text fontSize="xl">
              Computer Sciene and Information System Technology
            </Text>
          </Box>
        </SlideFade>
      </Flex>
    </>
  );
};

export default Introduction;
