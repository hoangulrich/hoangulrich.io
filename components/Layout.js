import { Container, Flex, Stack } from "@chakra-ui/react";
import Nav from "./Nav";

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <Container maxW="container.xl">
        <Stack>{children}</Stack>
      </Container>
    </>
  );
};

export default Layout;
