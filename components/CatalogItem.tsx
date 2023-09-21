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
  }, []);
  return (
    <Flex margin={5} direction={"column"} padding={5}>
      {picture ? (
        <Image
          objectFit={"cover"}
          src={picture}
          _hover={{ boxShadow: "xl" }}
          h={pictureSizeDictionary[type].h}
          w={pictureSizeDictionary[type].w}
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
          w="60%"
          alignSelf={"center"}
          fontSize={18}
          textAlign={"center"}
          fontWeight={500}
          mb={5}
        >
          {name}
        </Heading>
      )}
    </Flex>
  );
}

export default CatalogItem;
