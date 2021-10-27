import { Container, Flex, Stack } from "@chakra-ui/react";
import Nav from "./Nav";

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <Container maxW="container.xl" mt={["20", "20", "36", "36"]}>
        <Stack spacing="24">{children}</Stack>
      </Container>
    </>
  );
};

export default Layout;
