import ColorModeSwitch from "./ColorModeSwitch";
import { Flex, Box, Button, Divider } from "@chakra-ui/react";
import styled from "@emotion/styled";

const Nav = () => {
  const StickNav = styled(Flex)`
    position: sticky;
    z-index: 10;
    top: 0;
    display: flex;
    flex-direction: column;
    /* background-color: #1a202c; */
    backdrop-filter: blur(30px);
    transition: height 0.5s, line-height 0.5s;
  `;

  return (
    <StickNav>
      <Flex my="5" px="10" justify="space-between">
        <Box>
          <Button mr="7" colorScheme="teal" variant="ghost">
            Home
          </Button>
          <Button colorScheme="teal" variant="ghost">
            About
          </Button>
        </Box>
        <Box>
          <ColorModeSwitch />
        </Box>
      </Flex>
      <Divider />
    </StickNav>
  );
};

export default Nav;
