import { Flex, Box, useColorModeValue, Text, Divider } from "@chakra-ui/react";

const Footer = () => {
  const textColor = useColorModeValue("teal", "teal.200");

  return (
    <Flex mt="24" align="center" justifyContent="center" direction="column">
      <Divider />
      <Text mt="5">Design and Developed by Hoang Le.</Text>
      <Text mb="5">
        Build with{" "}
        <Box as="span" color={textColor}>
          Next.js
        </Box>{" "}
        &{" "}
        <Box as="span" color={textColor}>
          Chakra UI
        </Box>
        . Hosted on{" "}
        <Box as="span" color={textColor}>
          Vercel
        </Box>
        .
      </Text>
    </Flex>
  );
};

export default Footer;
