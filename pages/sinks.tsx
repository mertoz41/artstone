import { Heading, Flex, Button, Link } from "@chakra-ui/react";
import CatalogItem from "@/components/CatalogItem";
import PageHead from "@/components/PageHead";
function Stones() {
  const sinkTypes: Array<any> = [
    {
      name: "as-apr2318",
      kind: "apron",
    },
    {
      name: "as-415",
      kind: "bar",
    },
    {
      name: "as-201ada",
      kind: "compliant",
    },
    {
      name: "as-2818",
      kind: "doublebowl",
    },
    {
      name: "as-gr101",
      kind: "duragranit",
    },
    {
      name: "as-hm1518",
      kind: "handmade",
    },
    {
      name: "as-2318",
      kind: "singlebowl",
    },
    {
      name: "as-202",
      kind: "vanity",
    },
  ];
  const renderSinkType = (sink: any, i: number) => (
    <Link href={`/sinks/${sink.kind}`} key={i}>
      <Flex
        flex={1}
        w={320}
        marginBottom={34}
        direction={"column"}
        cursor="pointer"
      >
        <CatalogItem
          type="sinks"
          kind={sink.kind}
          name={sink.name}
          container={true}
        />

        <Heading fontSize={23} fontWeight={500} textAlign={"center"} mb={5}>
          {sink.kind.charAt(0).toUpperCase() + sink.kind.slice(1)}
        </Heading>

        <Button marginTop={5} alignSelf={"center"}>
          Browse Selection
        </Button>
      </Flex>
    </Link>
  );
  return (
    <Flex w={"100vw"} direction={"column"}>
      <PageHead title="Sinks" />
      <Heading paddingY={30} fontWeight={25} textAlign={"center"}>
        Sinks
      </Heading>
      <Flex
        w="90%"
        direction={{ base: "column", xl: "row" }}
        justifyContent={"space-between"}
        alignSelf={"center"}
        alignItems={"center"}
        flexWrap={"wrap"}
      >
        {sinkTypes.map((sink: any, i: number) => renderSinkType(sink, i))}
      </Flex>
    </Flex>
  );
}

export default Stones;
