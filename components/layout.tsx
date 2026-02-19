import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import Header from "./Header";
import Footer from "./Footer";
import PageHead from "./PageHead";

function Layout({ children }: { children: any }) {
  return (
    <Flex direction="column" minH="100vh">
      <PageHead>
        <meta name="description" content="Artstone Marble & Granite" />
      </PageHead>
      <Header />
      <Box as="main" flex="1">
        {children}
      </Box>
      <Footer />
    </Flex>
  );
}

export default Layout;
