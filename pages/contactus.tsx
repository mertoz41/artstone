import { Box, Text, Flex, Heading } from "@chakra-ui/react";
import Estimate from "@/components/Estimate";
import PageHead from "@/components/PageHead";
function ContactUs() {
  return (
    <Flex justifyContent="center" direction="column" w={"100vw"}>
      <PageHead title="Contact Us" />
      {/*      
      <Heading paddingY={30} fontWeight={25} textAlign={"center"}>
        About
      </Heading>
      <Box w={{base: "90%", xl:"70%"}} mb={10} alignSelf={"center"}>
        <Text textAlign={"center"} fontSize={18} fontWeight={300}>
          At American Quartz & Granite we strive to provide our customers with
          countertops and surfaces so stunning, they serve as unique works of
          art in your home. We provide the highest level customer service by
          guiding you through the process of your project from start to finish.
          You’ll feel informed and confident about your material selections, and
          we’ll make sure you’re completely satisfied with the completed
          project.
        </Text>
        <Text mt={10} textAlign={"center"} fontSize={18} fontWeight={300}>
          We aim to be the most affordable stone surface supplier and service
          provider in the market without compromising the quality of the
          products or the service. This will involve achieving a delicate
          balance between price and quality, which we are willing to do for our
          clients to the best of our ability. We go the extra mile because we
          firmly believe that there would be no us without them, so clients
          deserve the best we can give them in all ways. We strive to work only
          with the most reputable and professional people in the industry. Our
          suppliers use the latest technologies to process or manufacture the
          stone and other products we offer to our clients. By being vigilant
          about the technology and quality that goes into our offerings, we can
          be assured that all our clients will be happy and satisfied with the
          value they get for their investment.
        </Text>
      </Box> */}
      <Estimate />
    </Flex>
  );
}

export default ContactUs;
