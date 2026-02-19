import { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  Image,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);

function PosterContainer() {
  const [first, setFirst] = useState<string>("");
  const [second, setSecond] = useState<string>("");

  const slogans = [
    {
      title: "Premium stone for every surface",
      body: "Granite, quartz, and marble countertops — sourced and installed across Maryland with precision and care.",
    },
    {
      title: "Fabrication & installation, done right",
      body: "From kitchen islands to bathroom vanities, we handle fabrication and professional installation so you get a flawless finish.",
    },
  ];

  useEffect(() => {
    const img = new (window as any).Image();
    img.src =
      "https://d3156eqod4r5bv.cloudfront.net/posterpics/artstone-fifth.jpg";
    img.onload = () => setFirst(img.src);

    const two = new (window as any).Image();
    two.src =
      "https://d3156eqod4r5bv.cloudfront.net/posterpics/artstone-fourth.jpg";
    two.onload = () => setSecond(two.src);
  }, []);

  const renderPosterSection = (
    flipped: boolean,
    picture: string,
    slogan: { title: string; body: string },
    index: number
  ) => {
    return (
      <MotionFlex
        key={index}
        justifyContent="space-between"
        alignItems="center"
        direction={{ base: "column", xl: flipped ? "row-reverse" : "row" }}
        gap={{ base: 6, xl: 12 }}
        py={{ base: 8, xl: 12 }}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-80px" }}
        variants={{
          initial: { opacity: 0, y: 32 },
          animate: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, delay: index * 0.1 },
          },
        }}
      >
        <Box
          w={{ base: "100%", xl: "42%" }}
          maxW={{ xl: "480px" }}
          flexShrink={0}
        >
          {picture ? (
            <Image
              borderRadius="2xl"
              h={{ base: 280, sm: 320, xl: 380 }}
              w="100%"
              src={picture}
              boxShadow="xl"
              objectFit="cover"
              alt="Artstone countertop or stone work"
            />
          ) : (
            <Skeleton
              baseColor="#f2f2f2"
              highlightColor="white"
              style={{
                height: "320px",
                width: "100%",
                borderRadius: "16px",
              }}
            />
          )}
        </Box>
        <Box w={{ base: "100%", xl: "48%" }} alignSelf="center">
          <Box
            borderLeftWidth="4px"
            borderLeftColor="gray.400"
            pl={5}
            py={1}
          >
            <Heading
              as="h2"
              size="lg"
              fontWeight={300}
              color="gray.800"
              mb={3}
              fontFamily="heading"
            >
              {slogan.title}
            </Heading>
            <Text
              fontFamily="heading"
              fontSize={{ base: "md", xl: "lg" }}
              fontWeight={300}
              color="gray.600"
              lineHeight="tall"
            >
              {slogan.body}
            </Text>
          </Box>
        </Box>
      </MotionFlex>
    );
  };

  return (
    <Box as="main"  minH="60vh">
      {/* Hero */}
      <Box
        pt={{ base: 10, xl: 16 }}
        pb={{ base: 8, xl: 6 }}
        px={{ base: 4, xl: 0 }}
      >
        <Container maxW="container.xl">
          <MotionBox
            textAlign="center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Heading
              as="h1"
              size={{ base: "xl", md: "2xl", xl: "2xl" }}
              fontWeight={300}
              color="gray.800"
              fontFamily="heading"
              lineHeight="tight"
              mb={3}
            >
              Natural stone. Crafted for your home.
            </Heading>
            <Text
              fontFamily="heading"
              fontSize={{ base: "lg", xl: "xl" }}
              fontWeight={300}
              color="gray.600"
              maxW="640px"
              mx="auto"
            >
              Premium granite, quartz & marble countertops in Maryland — expert fabrication and installation for kitchens and bathrooms.
            </Text>
          </MotionBox>
        </Container>
      </Box>

      {/* Poster sections */}
      <Container maxW="container.xl" px={{ base: 4, xl: 6 }}>
        {renderPosterSection(false, second, slogans[0], 0)}
        {renderPosterSection(true, first, slogans[1], 1)}
      </Container>

      {/* Mission / promise */}
      <Box py={{ base: 10, xl: 16 }} px={{ base: 4, xl: 0 }}>
        <Container maxW="container.md">
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            bg="white"
            borderRadius="2xl"
            p={{ base: 8, xl: 10 }}
            boxShadow="sm"
            borderWidth="1px"
            borderColor="gray.200"
          >
            <Heading
              as="h2"
              size="lg"
              fontWeight={300}
              color="gray.800"
              mb={4}
              fontFamily="heading"
            >
              Why Artstone
            </Heading>
            <Text
              fontFamily="heading"
              fontWeight={300}
              fontSize={{ base: "md", xl: "lg" }}
              color="gray.600"
              lineHeight="tall"
            >
              As a locally operated company serving homeowners across Maryland, we understand that your home is one of your most valuable investments. We specialize in high-quality granite, marble, and quartz countertops, delivering precise fabrication and professional installation you can trust. Our mission is simple — provide durable, elegant stone solutions at fair prices, with craftsmanship that stands the test of time.
            </Text>
          </MotionBox>
        </Container>
      </Box>
    </Box>
  );
}

export default PosterContainer;
