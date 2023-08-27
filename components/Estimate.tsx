import { Box, Flex, Heading, Text, Input, Button } from "@chakra-ui/react";

function Estimate() {
  return (
    <Flex  h={"auto"} direction={"column"} justify={"center"} marginBottom={10}>
      <Flex
        direction={"column"}
        alignSelf={"center"}
        borderRadius={"20"}
        w="70%"
        padding={10}
      >
        <Heading textAlign={"center"} fontSize={36} fontWeight={"300"} mb={10}>
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
        <Input p={5} mb={10} placeholder="Message" size="lg" />

        <Button alignSelf={"center"}>Get Free Estimate</Button>
      </Flex>
    </Flex>
  );
}

export default Estimate;
