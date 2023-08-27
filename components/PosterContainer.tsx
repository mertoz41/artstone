import { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Box, Flex, Heading, Text, Image } from "@chakra-ui/react";
function PosterContainer() {
  const slogans = [
    {
      slogan:
        "Elevate Your Space with Timeless Elegance: Unveiling the Artistry of Granite, Quartz, and Marble Masterpieces.",
    },
    {
      slogan:
        "While we also supply faucets, sinks, and tiles, our specialty is kitchen and bathroom countertops, backsplashes, and vanities. As a local company in Alexandria, we understand how valuable your home is for you, and we strive to provide you the best stones to spruce it up. Our goal is to provide affordable countertop solutions for everyone in our community while also providing top-notch materials & installation service.",
    },
  ];
  const [first, setFirst] = useState<string>("");
  const [second, setSecond] = useState<string>("");

  useEffect(() => {
    const img = new (window as any).Image();
    img.src =
      "https://asmgstones.s3.amazonaws.com/posterpics/artstone-fifth.jpg";
    img.onload = () => {
      setFirst(img.src);
    };
    const two = new (window as any).Image();
    two.src =
      "https://asmgstones.s3.amazonaws.com/posterpics/artstone-fourth.jpg";
    two.onload = () => {
      setSecond(two.src);
    };
  }, []);
  const renderPosterSection = (flipped: boolean, picture: string) => {
    const renderTextSection = (slogan: any) => (
      <Box w={"35%"} alignSelf={"center"}>
        <Heading mb={5} fontWeight={300} fontSize={18}>
          {slogan.title && slogan.title}
        </Heading>
        <Text fontWeight={300} fontSize={19}>
          {slogan.slogan}
        </Text>
      </Box>
    );
    return (
      <Flex mb={10} justifyContent={"space-around"}>
        {!flipped && renderTextSection(slogans[0])}
        {picture ? (
          <Image
            borderRadius={20}
            h={320}
            src={picture}
            boxShadow={"dark-lg"}
          />
        ) : (
          <Skeleton
            baseColor="#f2f2f2"
            highlightColor="white"
            style={{
              height: "320px",
              width: "320px",
              borderRadius: "20px",
            }}
          />
        )}
        {flipped && renderTextSection(slogans[1])}
      </Flex>
    );
  };
  return (
    <Box padding={10} h={"auto"}>
      {renderPosterSection(false, first)}
      {renderPosterSection(true, second)}
    </Box>
  );
}

export default PosterContainer;
