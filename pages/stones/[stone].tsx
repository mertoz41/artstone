import { Heading, Flex, Box } from "@chakra-ui/react";
import CatalogItem from "@/components/CatalogItem";
import { useRouter } from "next/router";
import ItemWrapper from "@/components/ItemWrapper";
import PageHead from "@/components/PageHead";
import { stoneBook } from "@/dictionaries/stoneBook";
function Stone() {
  const router = useRouter();
  return (
    <Flex w={"100vw"} direction={"column"}>
      <PageHead
        title="Marble, Granite & Quartz Countertops in Maryland"
        description="Browse our premium selection of granite, quartz, and marble countertop materials available for installation across Maryland. Custom fabrication and expert installation."
        canonical="https://artstonemarble.com/stones"
      />
      <Heading
        paddingY={{ base: 5, xl: 30 }}
        fontWeight={25}
        textAlign={"center"}
      >
        {router.query.stone}
      </Heading>

      <Flex
        w="90%"
        justifyContent={"space-around"}
        alignSelf={"center"}
        alignItems={"center"}
        flexWrap={"wrap"}
      >
        {router.query.stone &&
          stoneBook[`${router.query.stone}`].map(
            (stone: any, index: number) => (
              <ItemWrapper key={index}>
                <CatalogItem
                  container={false}
                  type="stones"
                  kind={router.query.stone}
                  name={stone}
                />
              </ItemWrapper>
            )
          )}
      </Flex>
    </Flex>
  );
}

export default Stone;
