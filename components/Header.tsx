import {
  Box,
  Image,
  Heading,
  Flex,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
} from "@chakra-ui/react";
import Link from "next/link";

function Header() {
  const renderStonesButton = (title: string) => (
    <Popover trigger="hover">
      <PopoverTrigger>
        <Heading
          fontSize={21}
          fontWeight={400}
          _hover={{ textDecoration: "underline", textDecorationColor: "black" }}
          cursor={"pointer"}
        >
          {title}
        </Heading>
      </PopoverTrigger>
      <PopoverContent
        backgroundColor={"white"}
        borderWidth={1}
        borderColor="#e5e5e5"
        padding={15}
        borderRadius={20}
        boxShadow={"dark-lg"}
      >
        <PopoverArrow />
        <PopoverBody w={"auto"}>
          <Link href="/stones">
            <Heading
              textAlign={"center"}
              fontSize={19}
              fontWeight={400}
              _hover={{
                textDecoration: "underline",
                textDecorationColor: "red",
              }}
              cursor={"pointer"}
            >
              granite
            </Heading>
          </Link>
          <Heading
            textAlign={"center"}
            fontSize={19}
            fontWeight={400}
            textDecoration={"underline"}
            _hover={{ textDecoration: "underline", textDecorationColor: "red" }}
            cursor={"pointer"}
          >
            marble
          </Heading>
          <Heading
            textAlign={"center"}
            fontSize={19}
            fontWeight={400}
            textDecoration={"underline"}
            _hover={{ textDecoration: "underline", textDecorationColor: "red" }}
            cursor={"pointer"}
          >
            quartz
          </Heading>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
  const renderSeparation = () => (
    <Heading fontSize={25} fontWeight={200} alignSelf={"center"}>
      |
    </Heading>
  );
  const renderNavigationButton = (title: string) => {
    return (
      <Heading
        fontSize={21}
        fontWeight={400}
        _hover={{ textDecoration: "underline", textDecorationColor: "black" }}
        cursor={"pointer"}
      >
        {title}
      </Heading>
    );
  };
  return (
    <Box justifyContent={"center"}>
      <Image m="0 auto" src="artstonelogo.jpg" boxSize={130} />
      <Heading textAlign={"center"} fontSize={36} fontWeight={"400"}>
        Artstone Marble & Granite
      </Heading>
      <Flex m="0 auto" justifyContent={"space-between"} w={"30%"}>
        {renderStonesButton("stones")}
        {renderNavigationButton("sinks")}
        {renderNavigationButton("edges")}
        {renderNavigationButton("about")}
        {renderNavigationButton("contact us")}
      </Flex>
    </Box>
  );
}

export default Header;
