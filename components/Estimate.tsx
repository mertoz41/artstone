import { Box, Flex, Heading, Text, Input, Button } from "@chakra-ui/react";
function Estimate() {
  return (
    <Box padding={10} h={"auto"}>
      <Heading textAlign={"center"} fontSize={36} fontWeight={"300"} mb={10}>
        Schedule your free estimate today.
      </Heading>
      <Box>
        <Flex>
          <Input placeholder="Full name" />
          <Input placeholder="Phone" />
        </Flex>
        <Flex>
          <Input placeholder="Email" />

          <Input placeholder="Message" />
        </Flex>
        <Button>Get Free Estimate</Button>
      </Box>
    </Box>
  );
}

export default Estimate;
