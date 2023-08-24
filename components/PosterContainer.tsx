import { Box, Flex, Heading, Text, Image } from "@chakra-ui/react";
function PosterContainer() {
  const slogans = [
    {
      slogan:
        "Elevate Your Space with Timeless Elegance: Unveiling the Artistry of Granite, Quartz, and Marble Masterpieces.",
    },
    {
      title: "hodudududu",
      slogan:
        "While we also supply faucets, sinks, and tiles, our specialty is kitchen and bathroom countertops, backsplashes, and vanities. As a local company in Alexandria, we understand how valuable your home is for you, and we strive to provide you the best stones to spruce it up. Our goal is to provide affordable countertop solutions for everyone in our community while also providing top-notch materials & installation service.",
    },
  ];
  const renderPosterSection = (flipped: boolean, picture: string) => {
    const renderTextSection = (slogan: any) => (
      <Box w={"30%"} alignSelf={"center"} m="0 auto">
        <Heading mb={5} fontWeight={500} fontSize={18}>
          {slogan.title && slogan.title}
        </Heading>
        <Text fontWeight={300} fontSize={18}>
          {slogan.slogan}
        </Text>
      </Box>
    );
    return (
      <Flex mb={10} justifyContent={"space-between"}>
        {!flipped && renderTextSection(slogans[0])}
        <Image borderRadius={20} h={360} src={picture} boxShadow={"dark-lg"} />
        {flipped && renderTextSection(slogans[1])}
      </Flex>
    );
  };
  return (
    <Box padding={10} h={"auto"}>
      {renderPosterSection(false, "artstone-fifth.jpg")}
      {renderPosterSection(true, "sink-stone.jpg")}
    </Box>
  );
}

export default PosterContainer;
