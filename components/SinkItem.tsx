import { Image, Heading, Flex, Text, Button, Link } from "@chakra-ui/react";

function SinkItem({ type, name }: { type: string | any; name: string }) {
  return (
    <Flex margin={5} direction={"column"} padding={5}>
      <Image
        objectFit={"cover"}
        src={`https://asmgsinks.s3.amazonaws.com/${type}pics/${name}.jpg`}
        _hover={{ boxShadow: "xl" }}
        h={260}
        w={200}
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

export default SinkItem;
