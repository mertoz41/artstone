import { Box, Flex, Image, Text, Heading } from "@chakra-ui/react";
import Link from "next/link";

function Footer() {
  const renderCompanyStatement = () => (
    <Box flex={1} padding={5}>
      <Image h={65} src={"https://asmgstones.s3.amazonaws.com/posterpics/aslogo.jpg"} m="0 auto" mb={5} />
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
      <Flex flex={2}>
        <Box>
          <Link href={"/about"}>
            <Text
              _hover={{ textDecoration: "underline" }}
              fontWeight={400}
              fontSize={18}
              cursor={"pointer"}
            >
              About us
            </Text>
          </Link>
          <Text
            _hover={{ textDecoration: "underline" }}
            fontWeight={400}
            fontSize={18}
            cursor={"pointer"}
          >
            Blog
          </Text>
          <Link href={"/stones"}>
            <Text
              _hover={{ textDecoration: "underline" }}
              fontWeight={400}
              fontSize={18}
              cursor={"pointer"}
            >
              Stones
            </Text>
          </Link>
        </Box>
        <Box marginLeft={40}>
          <Link href={"/sinks"}>
            <Text
              _hover={{ textDecoration: "underline" }}
              fontWeight={400}
              fontSize={18}
              cursor={"pointer"}
            >
              Sinks
            </Text>
          </Link>
          <Link href={"/edges"}>
            <Text
              _hover={{ textDecoration: "underline" }}
              fontWeight={400}
              fontSize={18}
              cursor={"pointer"}
            >
              Edges
            </Text>
          </Link>
          <Text
            _hover={{ textDecoration: "underline" }}
            fontWeight={400}
            fontSize={18}
            cursor={"pointer"}
          >
            Contact Us
          </Text>
        </Box>
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
    <Box justifyContent={"center"}>
      <Flex direction={"column"} backgroundColor={"#f2f2f2"}>
        <Flex w={"70%"} alignSelf={"center"} justifyContent={"space-between"}>
          {renderCompanyStatement()}
          {renderLinks()}
          {renderAddress()}
        </Flex>
      </Flex>
      <Text margin={10} textAlign={"center"} fontSize={13}>
        ARTSTONE MARBLE & GRANITE 2023 © ALL RIGHTS RESERVED
      </Text>
    </Box>
  );
}

export default Footer;
