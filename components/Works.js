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
import {
  SiNextdotjs,
  SiReact,
  SiBootstrap,
  SiHtml5,
  SiCss3,
  SiStyledcomponents,
  SiJavascript,
} from "react-icons/si";

const Works = () => {
  return (
    <Flex direction="column">
      <Heading>Some of my Works</Heading>

      <Grid
        mt="5"
        templateColumns={["1fr", "1fr", "1fr 1fr"]}
        gap={["3", "5", "5", "12"]}
        px="12"
      >
        <Box maxW="100%" borderWidth="1px" borderRadius="lg" overflow="hidden">
          <Image
            width="100%"
            maxH="300"
            minH="300"
            objectFit="cover"
            src="crypto.PNG"
            alt="crypto"
          />

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
                <TagLeftIcon as={SiJavascript} />
                <TagLabel>Javascript</TagLabel>
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
          <Image
            width="100%"
            maxH="300"
            minH="300"
            objectFit="cover"
            src="Pizza.png"
            alt="pizza"
          />

          <Stack p="5">
            <Box fontWeight="semibold" as="h2" fontSize="xl" isTruncated>
              Antoine's Pizza Website
            </Box>
            <HStack align="center">
              <Tag px="2" size="md" colorScheme="teal">
                <TagLeftIcon as={SiReact} />
                <TagLabel>React</TagLabel>
              </Tag>
              <Tag px="2" size="md" colorScheme="teal">
                <TagLeftIcon as={SiStyledcomponents} />
                <TagLabel>Styled-components</TagLabel>
              </Tag>
            </HStack>
            <Divider />
            <Box>
              Front-end for Antoine's Pizza website, displaying Pizza of the
              day, Desserts and Side Menu.
            </Box>
          </Stack>
        </Box>

        <Box maxW="100%" borderWidth="1px" borderRadius="lg" overflow="hidden">
          <Image
            src="Shoesi.PNG"
            alt="shoe"
            width="100%"
            maxH="300"
            minH="300"
            objectFit="cover"
          />

          <Stack p="5">
            <Box fontWeight="semibold" as="h2" fontSize="xl" isTruncated>
              Shoesi's Store Website
            </Box>
            <HStack align="center">
              <Tag px="2" size="md" colorScheme="teal">
                <TagLeftIcon as={SiHtml5} />
                <TagLabel>Html</TagLabel>
              </Tag>
              <Tag px="2" size="md" colorScheme="teal">
                <TagLeftIcon as={SiCss3} />
                <TagLabel>Css</TagLabel>
              </Tag>
            </HStack>
            <Divider />
            <Box>
              Shoe Store Website displaying variety of deals and seasonal
              selection.
            </Box>
          </Stack>
        </Box>

        <Box maxW="100%" borderWidth="1px" borderRadius="lg" overflow="hidden">
          <Image
            src="bdo.PNG"
            alt="bdo"
            width="100%"
            maxH="300"
            minH="300"
            objectFit="cover"
          />

          <Stack p="5">
            <Box fontWeight="semibold" as="h2" fontSize="xl" isTruncated>
              Black Desert Enhancement Simulator
            </Box>
            <HStack align="center">
              <Tag px="2" size="md" colorScheme="teal">
                <TagLeftIcon as={SiReact} />
                <TagLabel>React</TagLabel>
              </Tag>
              <Tag px="2" size="md" colorScheme="teal">
                <TagLeftIcon as={SiBootstrap} />
                <TagLabel>Bootstrap</TagLabel>
              </Tag>
            </HStack>
            <Divider />
            <Box>
              An application simulates the item enhancement system from Black
              Desert Online.
            </Box>
          </Stack>
        </Box>
      </Grid>
    </Flex>
  );
};

export default Works;
