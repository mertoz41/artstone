import { Image, Heading, Flex, Text, Button, Link } from "@chakra-ui/react";

function StoneItem({ type, name }: { type: string; name: string }) {
  return (
    <Flex margin={5} direction={"column"} cursor="pointer" padding={5}>
      <Image
        objectFit={"cover"}
        src={`/${type}pics/${name}.png`}
        // boxSize={150}
        _hover={{ boxShadow: "xl" }}
        h={240}
        w={240}
        alignSelf={"center"}
        boxShadow={"2xl"}
        mb={5}
      />
      <Heading
        w="60%"
        alignSelf={"center"}
        fontSize={18}
        textAlign={"center"}
        fontWeight={500}
        mb={5}
      >
        {name}
      </Heading>
    </Flex>
  );
}

export default StoneItem;
