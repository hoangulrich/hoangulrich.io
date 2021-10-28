import {
  Box,
  Flex,
  Text,
  HStack,
  Button,
  Heading,
  useColorModeValue,
  SlideFade,
} from "@chakra-ui/react";
import { EmailIcon } from "@chakra-ui/icons";
import { FaGithub } from "react-icons/fa";
import { IoDocumentSharp } from "react-icons/io5";
import { GiCircle } from "react-icons/gi";

const About = () => {
  const textColor = useColorModeValue("teal", "teal.200");

  return (
    <Flex direction="column">
      <SlideFade
        in={true}
        direction="top"
        transition={{ enter: { duration: 0.4, delay: 0.2 } }}
      >
        <Heading>About Me</Heading>
      </SlideFade>

      <SlideFade
        in={true}
        direction="top"
        transition={{ enter: { duration: 0.4, delay: 0.2 } }}
      >
        <Box
          borderRadius="lg"
          borderWidth="1px"
          borderColor={textColor}
          p="7"
          mt="7"
          mx="12"
        >
          <Text fontSize="xl">
            I am a freelance and a full-stack developer based in Vietnam with a
            passion for building digital services/products. I have a knack for
            all things launching products, from planning and designing all the
            way to solving real-life problems with code. When not online, I love
            haning out with my dog. Currently my main focuses are{" "}
            <Box as="span" color={textColor}>
              {" "}
              Web & Mobile Development{" "}
            </Box>
            , Open Source and Competitive Programming.
          </Text>
        </Box>
      </SlideFade>

      <SlideFade
        in={true}
        direction="top"
        transition={{ enter: { duration: 0.4, delay: 0.2 } }}
      >
        <HStack mt="12" justify="center" spacing="7">
          <Button
            variant="outline"
            size="lg"
            colorScheme="teal"
            leftIcon={<FaGithub />}
          >
            Github
          </Button>
          <Button
            variant="outline"
            size="lg"
            colorScheme="teal"
            leftIcon={<EmailIcon />}
          >
            Email
          </Button>
          <Button
            variant="outline"
            size="lg"
            colorScheme="teal"
            leftIcon={<IoDocumentSharp />}
          >
            Resume
          </Button>
        </HStack>
      </SlideFade>
    </Flex>
  );
};

export default About;
