import {
  Box,
  Flex,
  Text,
  HStack,
  Button,
  Heading,
  useColorModeValue,
} from "@chakra-ui/react";
import { EmailIcon } from "@chakra-ui/icons";
import { FaGithub } from "react-icons/fa";
import { IoDocumentSharp } from "react-icons/io5";
import { GiCircle } from "react-icons/gi";

const About = () => {
  const textColor = useColorModeValue("teal", "teal.200");

  return (
    <Flex direction="column">
      <Heading>About Me</Heading>

      <Box
        borderRadius="lg"
        borderWidth="1px"
        borderColor={textColor}
        p="7"
        mt="7"
        mx="12"
      >
        <Text fontSize="xl">
          Hoang is a freelance and a full-stack developer based in Vietnam with
          a passion for building digital services/products. He has a knack for
          all things launching products, from planning and designing all the way
          to solving real-life problems with code. When not online, he loves
          haning out with his dog. Currently his main focuses are{" "}
          <Box as="span" color={textColor}>
            {" "}
            Web & Mobile Development{" "}
          </Box>
          , Open Source and Competitive Programming.
        </Text>
      </Box>

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
    </Flex>
  );
};

export default About;
