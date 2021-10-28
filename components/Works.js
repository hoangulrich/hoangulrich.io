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
  useColorModeValue,
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
import { ProjectsData } from "../data/ProjectsData";

const Works = () => {
  const textColor = useColorModeValue("teal", "teal.200");

  return (
    <Flex direction="column">
      <Heading>Some of my Works</Heading>

      <Grid
        mt="5"
        templateColumns={["1fr", "1fr", "1fr 1fr"]}
        gap={["3", "5", "5", "12"]}
        px={["0", "12"]}
      >
        {ProjectsData.map((project, i) => (
          <a href={project.link} target="_blank">
            <Box
              maxW="100%"
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              _hover={{
                borderColor: "teal",
                transform: "scale(1.01)",
                transition: "0.17s ease",
              }}
            >
              <Image
                width="100%"
                maxH="300"
                minH="300"
                objectFit="cover"
                src={project.image}
                alt={project.alt}
              />

              <Stack p="5">
                <Box fontWeight="semibold" as="h2" fontSize="xl" isTruncated>
                  {project.title}
                </Box>
                <HStack align="center">
                  {project.icons.map((icon, index) => (
                    <Tag px="2" size="md" colorScheme="teal">
                      <TagLeftIcon as={icon} />
                      <TagLabel>{project.iconLabels[index]}</TagLabel>
                    </Tag>
                  ))}
                </HStack>
                <Divider />
                <Box>{project.description}</Box>
              </Stack>
            </Box>
          </a>
        ))}
      </Grid>
    </Flex>
  );
};

export default Works;
