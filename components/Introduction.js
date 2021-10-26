import {
  Text,
  Heading,
  Flex,
  useColorModeValue,
  HStack,
  Avatar,
  Box,
  Button,
} from "@chakra-ui/react";

import { EmailIcon } from "@chakra-ui/icons";
import { FaGithub } from "react-icons/fa";
import { IoDocumentSharp } from "react-icons/io5";

const Introduction = () => {
  const textColor = useColorModeValue("teal", "teal.200");
  const popColor = useColorModeValue("custom.700", "custom.200");
  const avatarColor = useColorModeValue("custom.700", "white");

  return (
    <>
      <Flex direction="column">
        <Heading mt="60" color={textColor}>
          Hi, I'm
        </Heading>

        <Flex justify="space-between" px="12" mt="-3" align="center">
          <Heading fontSize={["7xl", "8xl", "9xl", "9xl"]}>Hoang Le</Heading>
          <Avatar
            src="/mnn.jpg"
            name="Hoang Le"
            size="2xl"
            borderWidth="2px"
            borderColor={avatarColor}
          />
        </Flex>

        <Box
          borderRadius="lg"
          bg={popColor}
          align="center"
          p="2"
          mt="12"
          mx="12"
        >
          <Text fontSize="xl">I'm a Fullstack Developer based in Vietnam</Text>
        </Box>
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
        <Box
          borderRadius="lg"
          bg={popColor}
          align="center"
          p="2"
          mb="12"
          mx="12"
        >
          <Text fontSize="xl">
            Computer Sciene and Information System Technology
          </Text>
        </Box>

        <Heading>About Me</Heading>

        <Box
          borderRadius="lg"
          borderWidth="1px"
          borderColor={textColor}
          p="7"
          mt="5"
          mx="12"
        >
          <Text fontSize="xl">
            Hoang is a freelance and a full-stack developer based in Vietnam
            with a passion for building digital services/products. He has a
            knack for all things launching products, from planning and designing
            all the way to solving real-life problems with code. When not
            online, he loves haning out with his dog. Currently his main focuses
            are Web & Mobile Development, Open Source and Competitive
            Programming.
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
    </>
  );
};

export default Introduction;
