import {
  Box,
  Flex,
  Text,
  Stack,
  Button,
  Heading,
  useColorModeValue,
  SlideFade,
  HStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import { EmailIcon } from "@chakra-ui/icons";
import { FaGithub } from "react-icons/fa";
import { IoDocumentSharp } from "react-icons/io5";
import { GiCircle } from "react-icons/gi";
import Link from "next/link";

const About = () => {
  const textColor = useColorModeValue("teal", "teal.200");
  const buttonSize = useBreakpointValue({ base: "md", sm: "lg" });

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
          mx={["0", "12"]}
        >
          <Text fontSize={["lg", "lg", "xl"]}>
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
        <HStack
          mt={["7", "12"]}
          justify="center"
          spacing={["3", "7"]}
          // direction={["column", "row"]}
          // align="center"
        >
          <a href="https://github.com/hoangulrich" target="_blank">
            <Button
              variant="outline"
              // size="lg"
              size={buttonSize}
              colorScheme="teal"
              leftIcon={<FaGithub />}
            >
              Github
            </Button>
          </a>
          <Button
            variant="outline"
            // size={["sm", "md", "lg", "lg"]}
            size={buttonSize}
            colorScheme="teal"
            leftIcon={<EmailIcon />}
          >
            Email
          </Button>
          <Button
            variant="outline"
            // size="lg"
            size={buttonSize}
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
