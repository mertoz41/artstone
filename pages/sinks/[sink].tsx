import { Heading, Flex, Box } from "@chakra-ui/react";
import { useRouter } from "next/router";
import CatalogItem from "@/components/CatalogItem";
import ItemWrapper from "@/components/ItemWrapper";
import PageHead from "@/components/PageHead";
import { sinkBook } from "@/dictionaries/sinkBook";
export default function Sink() {
  const router = useRouter();

  return (
    <Flex w={"100vw"} direction={"column"}>
      {router.query.sink && <PageHead title={router.query.sink} />}
      <Heading paddingY={30} fontWeight={25} textAlign={"center"}>
        {router.query.sink}
      </Heading>

      <Flex
        w="90%"
        justifyContent={"space-between"}
        alignSelf={"center"}
        flexWrap={"wrap"}
      >
        {router.query.sink &&
          sinkBook[`${router.query.sink}`].map((sink: any, index: number) => (
            <ItemWrapper key={index}>
              <CatalogItem
                container={false}
                type="sinks"
                kind={router.query.sink}
                name={sink}
              />
            </ItemWrapper>
          ))}
      </Flex>
    </Flex>
  );
}
