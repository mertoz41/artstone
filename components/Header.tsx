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
  const renderNavigationButton = (title: string) => (
    <Popover trigger="hover">
      <PopoverTrigger>
        <Heading
          fontSize={25}
          fontWeight={400}
          textDecoration={"underline"}
          _hover={{ textDecorationColor: "red" }}
          cursor={"pointer"}
        >
          {title}
        </Heading>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        {/* <PopoverHeader>Granite marble quartz!</PopoverHeader> */}
        <PopoverBody w={"auto"}>
          <Link href="/stones">
            <Heading
              textAlign={"center"}
              fontSize={25}
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
            fontSize={25}
            fontWeight={400}
            textDecoration={"underline"}
            _hover={{ textDecoration: "underline", textDecorationColor: "red" }}
            cursor={"pointer"}
          >
            marble
          </Heading>
          <Heading
            textAlign={"center"}
            fontSize={25}
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
  return (
    <Box justifyContent={"center"}>
      <Image m="0 auto" src="artstonelogo.jpg" boxSize={130} />
      <Heading textAlign={"center"}>Artstone Marble & Granite</Heading>
      <Flex m="0 auto" justifyContent={"space-between"} w={"30%"}>
        {renderNavigationButton("stones")}
        {renderSeparation()}
        {renderNavigationButton("sinks")}
        {renderSeparation()}
        {renderNavigationButton("edges")}
      </Flex>
    </Box>
  );
}

export default Header;
