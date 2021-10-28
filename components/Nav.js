import ColorModeSwitch from "./ColorModeSwitch";
import {
  Flex,
  Box,
  Button,
  Divider,
  HStack,
  useColorModeValue,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import styled from "@emotion/styled";
import { IoTriangleOutline } from "react-icons/io5";
import { HamburgerIcon } from "@chakra-ui/icons";

const Nav = () => {
  const textColor = useColorModeValue("teal", "teal.200");
  const popColor = useColorModeValue("custom.300", "custom.200");

  const StickNav = styled(Flex)`
    position: sticky;
    z-index: 10;
    top: 0;
    display: flex;
    flex-direction: column;
    /* background-color: #1a202c; */
    backdrop-filter: blur(70px);
    transition: height 0.5s, line-height 0.5s;
  `;

  return (
    <StickNav>
      <Flex my="5" px="10" justify="space-between" align="center">
        <Flex color={textColor} fontSize="3xl" align="center">
          <IoTriangleOutline />
        </Flex>

        <HStack spacing="7" display={["none", "none", "flex"]}>
          <Button colorScheme="teal" variant="ghost">
            Home
          </Button>
          <Button colorScheme="teal" variant="ghost">
            About
          </Button>
          <Button colorScheme="teal" variant="ghost">
            Works
          </Button>
          <Button colorScheme="teal" variant="ghost">
            Contact
          </Button>
        </HStack>

        <HStack>
          <ColorModeSwitch />
          <Menu>
            <MenuButton
              as={IconButton}
              icon={<HamburgerIcon />}
              colorScheme="teal"
              aria-label="Open Menu"
              display={["flex", "flex", "none", "none"]}
              variant="outline"
            />
            <MenuList bgColor={popColor}>
              <MenuItem>Home</MenuItem>
              <MenuItem>About</MenuItem>
              <MenuItem>Works</MenuItem>
              <MenuItem>Contact</MenuItem>
            </MenuList>
          </Menu>
        </HStack>
      </Flex>
      <Divider />
    </StickNav>
  );
};

export default Nav;
