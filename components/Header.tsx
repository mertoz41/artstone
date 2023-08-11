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
    <Heading fontSize={29}>{title}</Heading>
  );
  return (
    <Box justifyContent={"center"}>
      <Image m="0 auto" src="artstonelogo.jpg" boxSize={130} />
      <Heading textAlign={"center"}>Artstone Marble & Granite</Heading>
      <Flex m="0 auto" justifyContent={"space-between"} w={"50%"}>
        {renderNavigationButton("stones")}
        <Center height="50px">
          <Divider orientation="vertical" />
        </Center>
        {renderNavigationButton("sinks")}
        <Center height="50px">
          <Divider orientation="vertical" />
        </Center>
        {renderNavigationButton("edges")}
      </Flex>
    </Box>
  );
}

export default Header;
