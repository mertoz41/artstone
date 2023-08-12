import { Box, Flex, Heading, Text, Image } from "@chakra-ui/react";
function PosterContainer() {
  const renderPosterSection = (flipped: boolean, picture: string) => {
    const renderTextSection = () => (
      <Box w={"30%"} alignSelf={"center"} m="0 auto">
        <Heading mb={5} fontWeight={500} fontSize={18}>
          SOMETHING ABOUT QUALITY MAYBE
        </Heading>
        <Text fontWeight={400} fontSize={15}>
          Our laptop sleeve is compact and precisely fits 13" devices. The
          zipper allows you to access the interior with ease, and the front
          pouch provides a convenient place for your charger cable.
        </Text>
      </Box>
    );
    return (
      <Flex mb={10} justifyContent={"space-between"}>
        {!flipped && renderTextSection()}
        <Image borderRadius={20} h={360} src={picture} boxShadow={"dark-lg"} />
        {flipped && renderTextSection()}
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
