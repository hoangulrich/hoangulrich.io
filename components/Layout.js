import { Container, Flex, Stack } from "@chakra-ui/react";
import Nav from "./Nav";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <Container maxW="container.xl" mt={["20", "20", "36", "36"]}>
        <Stack spacing="24">{children}</Stack>
      </Container>
      <Footer />
    </>
  );
};

export default Layout;
