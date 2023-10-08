import { Box, Text, Flex, Heading } from "@chakra-ui/react";
import Estimate from "@/components/Estimate";
import PageHead from "@/components/PageHead";
function ContactUs() {
  return (
    <Flex justifyContent="center" direction="column" w={"100vw"}>
      <PageHead title="Contact Us" />
      <Estimate />
    </Flex>
  );
}

export default ContactUs;
