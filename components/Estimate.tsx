import { Textarea, Flex, Heading, Input, Button } from "@chakra-ui/react";

function Estimate() {
  return (
    <Flex h={"auto"} direction={"column"} justify={"center"} marginY={5}>
      <Flex
        direction={"column"}
        alignSelf={"center"}
        borderRadius={"20"}
        w={{ base: "100&", xl: "70%" }}
        padding={{ base: 2, xl: 10 }}
      >
        <Heading textAlign={"center"} fontSize={33} fontWeight={"300"} mb={10}>
          Schedule your free estimate today.
        </Heading>
        <Flex justify={"space-between"}>
          <Input p={5} placeholder="Full name" />
          <Input p={5} marginLeft={5} marginBottom={5} placeholder="Phone" />
        </Flex>
        <Flex justify={"space-between"}>
          <Input p={5} placeholder="Email" />

          <Input p={5} marginLeft={5} marginBottom={5} placeholder="Location" />
        </Flex>
        <Textarea p={5} mb={10} placeholder="Message" size="lg" />

        <Button alignSelf={"center"}>Get Free Estimate</Button>
      </Flex>
    </Flex>
  );
}

export default Estimate;
