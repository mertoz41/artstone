import { useState, useEffect } from "react";
import { Image, Heading, Flex } from "@chakra-ui/react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
function CatalogItem({
  kind,
  name,
  type,
  container,
}: {
  kind: string | any;
  name: string;
  type: string;
  container: boolean;
}) {
  const pictureSizeDictionary: any = {
    sinks: { h: 260, w: 200 },
    stones: { h: 240, w: 240 },
    edges: { h: 130, w: 220 },
  };
  const [picture, setPicture] = useState<string>("");
  useEffect(() => {
    const img = new (window as any).Image();
    img.src = `https://asmg${
      type === "sinks" ? "sinks" : "stones"
    }.s3.amazonaws.com/${kind}pics/${name}.${type === "sinks" ? "jpg" : "png"}`;
    img.onload = () => {
      setPicture(img.src);
    };
  }, [kind]);
  return (
    <Flex direction={"column"}>
      {picture ? (
        <Image
          objectFit={"cover"}
          src={picture}
          alt={`${type} picture`}
          _hover={{ boxShadow: "xl" }}
          h={{ xl: pictureSizeDictionary[type].h }}
          w={{ xl: pictureSizeDictionary[type].w }}
          alignSelf={"center"}
          boxShadow={"2xl"}
          mb={5}
        />
      ) : (
        <Skeleton
          baseColor="#f2f2f2"
          highlightColor="white"
          style={{
            height: pictureSizeDictionary[type].h,
            width: pictureSizeDictionary[type].w,
          }}
        />
      )}
      {!container && (
        <Heading
          w={"100%"}
          alignSelf={"center"}
          fontSize={{ base: 16, xl: 18 }}
          textAlign={"center"}
          fontWeight={300}
          mb={5}
        >
          {name}
        </Heading>
      )}
    </Flex>
  );
}

export default CatalogItem;
