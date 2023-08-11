import {
  Box,
  Text,
  Image,
  Heading,
  Flex,
  Divider,
  Center,
} from "@chakra-ui/react";
function Header() {
  const renderNavigationButton = (title: string) => (
    <Heading
      fontSize={25}
      fontWeight={400}
      textDecoration={"underline"}
      _hover={{ textDecorationColor: "red" }}
      cursor={"pointer"}
    >
      {title}
    </Heading>
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
