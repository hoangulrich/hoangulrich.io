import { Text, Button, useColorMode, IconButton } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <IconButton
        colorScheme="teal"
        onClick={toggleColorMode}
        icon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
        aria-label="Dark Mode Switch"
      />
    </>
  );
};

export default ColorModeSwitch;
