import { Box, Flex, Image, Text, Heading } from "@chakra-ui/react";

function Footer() {
  const renderCompanyStatement = () => (
    <Box flex={1} padding={5}>
      <Image h={65} src={"artstonelogo.jpg"} m="0 auto" mb={5} />
      <Text fontWeight={400} fontSize={18}>
        At Artstone Marble & Granite we strive to provide our customers with
        countertops and surfaces so stunning, they serve as unique works of art
        in your home.
      </Text>
    </Box>
  );
  const renderLinks = () => (
    <Flex
      flex={1}
      padding={10}
      justifyContent={"space-around"}
      flexDir={"column"}
    >
      <Heading flex={1} fontSize={22} fontWeight={500}>
        OUR COMPANY
      </Heading>
      <Flex flex={2} direction={"column"} justifyContent={"space-between"}>
        <Text
          _hover={{ textDecoration: "underline" }}
          fontWeight={400}
          fontSize={18}
          cursor={"pointer"}
        >
          About us
        </Text>

        <Text
          _hover={{ textDecoration: "underline" }}
          fontWeight={400}
          fontSize={18}
          cursor={"pointer"}
        >
          Blog
        </Text>
        <Text
          _hover={{ textDecoration: "underline" }}
          fontWeight={400}
          fontSize={18}
          cursor={"pointer"}
        >
          Stones
        </Text>
        <Text
          _hover={{ textDecoration: "underline" }}
          fontWeight={400}
          fontSize={18}
          cursor={"pointer"}
        >
          Contact Us
        </Text>
      </Flex>
    </Flex>
  );
  const renderAddress = () => (
    <Flex
      flex={1}
      padding={10}
      justifyContent={"space-around"}
      flexDir={"column"}
    >
      <Heading flex={1} fontSize={22} fontWeight={500}>
        ADDRESS
      </Heading>
      <Flex direction={"column"} justify={"space-between"} flex={2}>
        <Text fontWeight={400} fontSize={18} cursor={"pointer"}>
          5021 Seminary Rd Alexandria, VA, 22311
        </Text>

        <Text fontWeight={400} fontSize={18} cursor={"pointer"}>
          mertozka41@artstone.com
        </Text>
        <Text fontWeight={400} fontSize={18} cursor={"pointer"}>
          (703) 307-1376
        </Text>
      </Flex>
    </Flex>
  );
  return (
    <Flex w={"70%"} m="0 auto" justifyContent={"space-between"}>
      {renderCompanyStatement()}
      {renderLinks()}
      {renderAddress()}
    </Flex>
  );
}

export default Footer;
