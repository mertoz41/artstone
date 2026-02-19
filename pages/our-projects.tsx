import {
    Box,
    Flex,
    Grid,
    Image,
    Spinner,
    useDisclosure,
    Heading,
  } from "@chakra-ui/react";
  import PageHead from "@/components/PageHead";
  import ImageModal from "@/components/ImageModal";
  import { useState, useEffect, useRef } from "react";
  
  import images from "@/data/previousWork.json";
  
  const BATCH_SIZE = 4;
  
  function OurProjects() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [visibleCount, setVisibleCount] = useState(BATCH_SIZE);
    const loaderRef = useRef<HTMLDivElement | null>(null);
  
    const openModal = (src: string) => {
      setSelectedImage(src);
      onOpen();
    };
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          const target = entries[0];
          if (target.isIntersecting) {
            setVisibleCount((prev) =>
              prev + BATCH_SIZE <= images.length
                ? prev + BATCH_SIZE
                : images.length
            );
          }
        },
        { threshold: 1 }
      );
  
      if (loaderRef.current) {
        observer.observe(loaderRef.current);
      }
  
      return () => {
        if (loaderRef.current) {
          observer.unobserve(loaderRef.current);
        }
      };
    }, []);
  
    const visibleImages = images.slice(0, visibleCount);
  
    return (
      <Flex justifyContent="center" direction="column">
        <PageHead
        title="Our Projects in Maryland"
        description="Explore recent granite, quartz, and marble countertop installations completed by Artstone Marble & Granite across Maryland."
        canonical="https://artstonemarble.com/our-projects"
        />        
        
    <Heading
        paddingY={{ base: 5, xl: 30 }}
        fontWeight={25}
        textAlign={"center"}
      >
        Our Projects
      </Heading>
        <Box w={{ base: "95%", xl: "75%" }} alignSelf="center" py={10}>
          <Grid
            templateColumns={{
              base: "repeat(1, 1fr)",
              md: "repeat(2, 1fr)",
            }}
            gap={6}
          >
            {visibleImages.map((src, index) => (
              <Box
                key={index}
                overflow="hidden"
                borderRadius="lg"
                cursor="pointer"
                onClick={() => openModal(src)}
                boxShadow="2xl"
                transition="box-shadow 0.3s ease"
                _hover={{ boxShadow: "xl" }}
              >
                <Image
                  src={src}
                  alt="Stone installation"
                  loading="lazy"
                  objectFit="cover"
                  w="100%"
                  h={{ base: "300px", md: "400px" }}
                  transition="transform 0.4s ease"
                  _hover={{ transform: "scale(1.05)" }}
                />
              </Box>
            ))}
          </Grid>
  
          {/* Loader trigger */}
          {visibleCount < images.length && (
            <Flex ref={loaderRef} justify="center" mt={10}>
              <Spinner size="lg" />
            </Flex>
          )}
  
          {selectedImage && (
            <ImageModal
              isOpen={isOpen}
              onClose={onClose}
              src={selectedImage}
              alt="Stone installation"
              size="large"
            />
          )}
        </Box>
      </Flex>
    );
  }
  
  export default OurProjects;
  