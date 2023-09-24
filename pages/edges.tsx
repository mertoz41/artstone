import { Flex, Heading } from "@chakra-ui/react";
import CatalogItem from "@/components/CatalogItem";
import ItemWrapper from "@/components/ItemWrapper";
import PageHead from "@/components/PageHead";
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
      <PageHead title="Edges" />
      <Heading paddingY={30} fontWeight={25} textAlign={"center"}>
        Edges
      </Heading>

      <Heading paddingY={30} fontWeight={20} textAlign={"center"}>
        Basic
      </Heading>
      <Flex
        w="90%"
        justifyContent={"space-between"}
        alignSelf={"center"}
        flexWrap={"wrap"}
      >
        {edgeBook.basicEdges.map((stone: any, index: number) => (
          <ItemWrapper key={index}>
            <CatalogItem
              container={false}
              type="edges"
              kind={"edge"}
              name={stone}
            />
          </ItemWrapper>
        ))}
      </Flex>
      <Heading paddingY={30} fontWeight={20} textAlign={"center"}>
        Premium
      </Heading>
      <Flex
        w="90%"
        justifyContent={"space-between"}
        alignSelf={"center"}
        flexWrap={"wrap"}
      >
        {edgeBook.premiumEdges.map((stone: any, index: number) => (
          <ItemWrapper key={index}>
            <CatalogItem
              container={false}
              type="edges"
              kind={"edge"}
              name={stone}
            />
          </ItemWrapper>
        ))}
      </Flex>
      <Heading paddingY={30} fontWeight={20} textAlign={"center"}>
        Custom
      </Heading>
      <Flex
        w="90%"
        justifyContent={"space-between"}
        alignSelf={"center"}
        flexWrap={"wrap"}
      >
        {edgeBook.customEdges.map((stone: any, index: number) => (
          <ItemWrapper key={index}>
            <CatalogItem
              container={false}
              type="edges"
              kind={"edge"}
              name={stone}
            />
          </ItemWrapper>
        ))}
      </Flex>
    </Flex>
  );
}

export default Edges;
