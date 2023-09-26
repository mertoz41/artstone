import { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Box, Flex, Heading, Text, Image } from "@chakra-ui/react";
function PosterContainer() {
  const slogans = [
    "Elevate Your Space with Timeless Elegance: Unveiling the Artistry of Granite, Quartz, and Marble Masterpieces.",
    "While we also supply faucets, sinks, and tiles, our specialty is kitchen and bathroom countertops, backsplashes, and vanities. As a local company in Alexandria, we understand how valuable your home is for you, and we strive to provide you the best stones to spruce it up. Our goal is to provide affordable countertop solutions for everyone in our community while also providing top-notch materials & installation service.",
  ];
  const [first, setFirst] = useState<string>("");
  const [second, setSecond] = useState<string>("");

  useEffect(() => {
    const img = new (window as any).Image();
    img.src =
      "https://asmg-bucket.s3.amazonaws.com/posterpics/artstone-fifth.jpg";
    img.onload = () => {
      setFirst(img.src);
    };
    const two = new (window as any).Image();
    two.src =
      "https://asmg-bucket.s3.amazonaws.com/posterpics/artstone-fourth.jpg";
    two.onload = () => {
      setSecond(two.src);
    };
  }, []);
  const renderPosterSection = (
    flipped: boolean,
    picture: string,
    slogan: string
  ) => {
    const renderTextSection = (slogan: any) => (
      <Box
        w={{ base: "100%", xl: "35%" }}
        alignSelf={"center"}
        marginY={{ base: 5, xl: 0 }}
      >
        <Text fontWeight={300} fontSize={19}>
          {slogan}
        </Text>
      </Box>
    );
    return (
      <Flex
        // mb={10}
        justifyContent={"space-around"}
        direction={{ base: "column", xl: "row" }}
      >
        {!flipped && renderTextSection(slogan)}
        {picture ? (
          <Image
            borderRadius={20}
            h={{ base: 350, xl: 320 }}
            src={picture}
            boxShadow={"dark-lg"}
            objectFit={"cover"}
            alt="poster-pic"
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
        {flipped && renderTextSection(slogan)}
      </Flex>
    );
  };
  return (
    <Box padding={{ base: 2, xl: 10 }} h={"auto"}>
      {renderPosterSection(false, second, slogans[0])}
      <Box display={{ base: "none", xl: "block" }}>
        {renderPosterSection(true, first, slogans[1])}
      </Box>
      <Box display={{ base: "block", xl: "none" }}>
        {renderPosterSection(false, first, slogans[1])}
      </Box>
    </Box>
  );
}

export default PosterContainer;
