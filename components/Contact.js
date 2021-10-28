import {
  Flex,
  Heading,
  Box,
  Text,
  useColorModeValue,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Textarea,
} from "@chakra-ui/react";
import { IoTriangleOutline } from "react-icons/io5";

const Contact = () => {
  const textColor = useColorModeValue("teal", "teal.200");

  return (
    <Flex direction="column">
      <Heading>Contact</Heading>
      <Stack
        borderRadius="lg"
        borderWidth="1px"
        borderColor={textColor}
        p="7"
        mt="7"
        mx="12"
        alignItems="center"
        justifyContent="center"
        h="50vh"
        spacing="7"
      >
        <Flex color={textColor} fontSize="3xl" align="center">
          <IoTriangleOutline />
        </Flex>
        <FormControl px={["0", "7", "12", "48"]}>
          <Stack spacing="2">
            <FormLabel>Name</FormLabel>
            <Input size="lg" type="text" focusBorderColor={textColor} />
            <FormLabel>Subject</FormLabel>
            <Input size="lg" type="text" focusBorderColor={textColor} />
            <FormLabel>Email</FormLabel>
            <Input size="lg" type="email" focusBorderColor={textColor} />
            <FormLabel>Message</FormLabel>
            <Textarea type="text" focusBorderColor={textColor} />
            <Button mt="5" variant="solid" colorScheme="teal">
              Send
            </Button>
          </Stack>
        </FormControl>
      </Stack>
    </Flex>
  );
};

export default Contact;
