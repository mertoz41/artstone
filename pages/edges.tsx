import { Flex, Heading } from "@chakra-ui/react";
import CatalogItem from "@/components/CatalogItem";
function Edges() {
  const edgeBook = {
    basicEdges: ["straight-edges", "round-top&bottom", "1:4-round", "bevel"],
    premiumEdges: [
      "full-bullnose",
      "half-bullnose",
      "demi-bullnose",
      "bevel-top&bottom",
    ],
    customEdges: [
      "cove",
      "ogee-bull",
      "cove-dupont",
      "flat-ogee",
      "ogee",
      "cove-ogee",
      "waterfall",
    ],
  };
  return (
    <Flex w={"100vw"} direction={"column"}>
      <Heading paddingY={30} fontWeight={25} textAlign={"center"}>
        Edges
      </Heading>

      <Flex
        w="90%"
        justifyContent={"space-between"}
        alignSelf={"center"}
        flexWrap={"wrap"}
      >
        {edgeBook.basicEdges.map((stone: any, index: number) => (
          <CatalogItem
            container={false}
            type="edges"
            key={index}
            kind={"edge"}
            name={stone}
          />
        ))}
        {edgeBook.premiumEdges.map((stone: any, index: number) => (
          <CatalogItem
            container={false}
            type="edges"
            key={index}
            kind={"edge"}
            name={stone}
          />
        ))}
        {edgeBook.customEdges.map((stone: any, index: number) => (
          <CatalogItem
            container={false}
            type="edges"
            key={index}
            kind={"edge"}
            name={stone}
          />
        ))}
      </Flex>
    </Flex>
  );
}

export default Edges;
