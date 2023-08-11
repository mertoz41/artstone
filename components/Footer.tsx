import { Box, Flex, Image, Text, Heading } from "@chakra-ui/react";

function Footer() {
  const renderCompanyStatement = () => (
    <Box>
      <Image h={105} src={"artstonelogo.jpg"} />
      <Text>
        At Artstone Marble & Granite we strive to provide our customers with
        countertops and surfaces so stunning, they serve as unique works of art
        in your home.
      </Text>
    </Box>
  );
  const renderLinks = () => (
    <Box>
      <Heading>OUR COMPANY</Heading>
      <Text>About us</Text>
      <Text>Blog</Text>
      <Text>Stones</Text>
      <Text>Contact Us</Text>
    </Box>
  );
  const renderAddress = () => (
    <Box>
      <Heading>Address</Heading>
      <Text>5021 Seminary Rd</Text>
      <Text>Alexandria, VA</Text>
      <Text>22311</Text>
    </Box>
  );
  return (
    <Flex h="200" w={"100vw"} backgroundColor={"red"}>
      {renderCompanyStatement()}
      {renderLinks()}
      {renderAddress()}
    </Flex>
  );
}

export default Footer;
