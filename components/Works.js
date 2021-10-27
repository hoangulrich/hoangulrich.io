import {
  Heading,
  Box,
  Tag,
  Image,
  Flex,
  Grid,
  Stack,
  Divider,
  TagLabel,
  TagLeftIcon,
  HStack,
} from "@chakra-ui/react";
import { SiNextdotjs, SiReact } from "react-icons/si";

const Works = () => {
  return (
    <Flex direction="column">
      <Heading>Some of my Works</Heading>

      <Grid mt="5" templateColumns="1fr 1fr" gap="12" px="12">
        <Box maxW="100%" borderWidth="1px" borderRadius="lg" overflow="hidden">
          <Image src="mnn.jpg" alt="crypto" />

          <Stack p="5">
            <Box fontWeight="semibold" as="h2" fontSize="xl" isTruncated>
              Cryptocurrency Tracker
            </Box>
            <HStack align="center">
              <Tag px="2" size="md" colorScheme="teal">
                <TagLeftIcon as={SiNextdotjs} />
                <TagLabel>Nextjs</TagLabel>
              </Tag>
              <Tag px="2" size="md" colorScheme="teal">
                <TagLeftIcon as={SiReact} />
                <TagLabel>React</TagLabel>
              </Tag>
            </HStack>
            <Divider />
            <Box>
              A SPA keeps track of current market price, ATH and 24h percentage
              changes of the top 100 Cryptocurrencies.
            </Box>
          </Stack>
        </Box>

        <Box maxW="100%" borderWidth="1px" borderRadius="lg" overflow="hidden">
          <Image src="mnn.jpg" alt="crypto" />

          <Stack p="5">
            <Box fontWeight="semibold" as="h2" fontSize="xl" isTruncated>
              Cryptocurrency Tracker
            </Box>
            <HStack align="center">
              <Tag px="2" size="md" colorScheme="teal">
                <TagLeftIcon as={SiNextdotjs} />
                <TagLabel>Nextjs</TagLabel>
              </Tag>
              <Tag px="2" size="md" colorScheme="teal">
                <TagLeftIcon as={SiReact} />
                <TagLabel>React</TagLabel>
              </Tag>
            </HStack>
            <Divider />
            <Box>
              A SPA keeps track of current market price, ATH and 24h percentage
              changes of the top 100 Cryptocurrencies.
            </Box>
          </Stack>
        </Box>

        <Box maxW="100%" borderWidth="1px" borderRadius="lg" overflow="hidden">
          <Image src="mnn.jpg" alt="crypto" />

          <Stack p="5">
            <Box fontWeight="semibold" as="h2" fontSize="xl" isTruncated>
              Cryptocurrency Tracker
            </Box>
            <HStack align="center">
              <Tag px="2" size="md" colorScheme="teal">
                <TagLeftIcon as={SiNextdotjs} />
                <TagLabel>Nextjs</TagLabel>
              </Tag>
              <Tag px="2" size="md" colorScheme="teal">
                <TagLeftIcon as={SiReact} />
                <TagLabel>React</TagLabel>
              </Tag>
            </HStack>
            <Divider />
            <Box>
              A SPA keeps track of current market price, ATH and 24h percentage
              changes of the top 100 Cryptocurrencies.
            </Box>
          </Stack>
        </Box>

        <Box maxW="100%" borderWidth="1px" borderRadius="lg" overflow="hidden">
          <Image src="mnn.jpg" alt="crypto" />

          <Stack p="5">
            <Box fontWeight="semibold" as="h2" fontSize="xl" isTruncated>
              Cryptocurrency Tracker
            </Box>
            <HStack align="center">
              <Tag px="2" size="md" colorScheme="teal">
                <TagLeftIcon as={SiNextdotjs} />
                <TagLabel>Nextjs</TagLabel>
              </Tag>
              <Tag px="2" size="md" colorScheme="teal">
                <TagLeftIcon as={SiReact} />
                <TagLabel>React</TagLabel>
              </Tag>
            </HStack>
            <Divider />
            <Box>
              A SPA keeps track of current market price, ATH and 24h percentage
              changes of the top 100 Cryptocurrencies.
            </Box>
          </Stack>
        </Box>
      </Grid>
    </Flex>
  );
};

export default Works;
