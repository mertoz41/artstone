import { Heading, Flex, Text, Button, Link } from "@chakra-ui/react";
import CatalogItem from "@/components/CatalogItem";
import PageHead from "@/components/PageHead";
function Stones() {
  const stoneTypes: Array<any> = [
    {
      kind: "granite",
      name: "african-persa",
      description:
        "As one of the most durable countertops for the kitchen, granite is the ultimate choice for many homeowners. Available in different colors, it makes for a long-lasting companion in the kitchen.",
    },
    {
      kind: "marble",

      name: "bianco-carrara-c-marble",
      description:
        "As one of most premier natural stones, nothing spells luxury & elegance as well as marble countertops. They are prized for striking white color & beauty. They make for a perfect addition once sealed.",
    },
    {
      kind: "quartz",
      name: "arabescato-quartz",
      description:
        "As one of the most durable stones in the world, this engineered countertop is perfect for those who want a modern touch to their kitchen, and a countertop that’s super easy to maintain. Available in 100+ styles.",
    },
  ];
  const renderStoneTypes = (stone: any, i: number) => {
    return (
      <Link href={`/stones/${stone.kind}`} key={i}>
        <Flex
          flex={1}
          w={320}
          marginY={5}
          direction={"column"}
          alignSelf={"center"}
          cursor="pointer"
        >
          <CatalogItem
            type="stones"
            kind={stone.kind}
            name={stone.name}
            container={true}
          />

          <Heading fontSize={23} fontWeight={500} textAlign={"center"} mb={5}>
            {stone.kind.charAt(0).toUpperCase() + stone.kind.slice(1)}
          </Heading>
          <Text fontSize={14} fontWeight={400} textAlign={"center"}>
            {stone.description}
          </Text>
          <Button marginTop={5} alignSelf={"center"}>
            Browse Selection
          </Button>
        </Flex>
      </Link>
    );
  };
  return (
    <Flex direction={"column"}>
      <PageHead
          title="Granite, Quartz & Marble Countertops in Maryland"
          description="Browse our premium selection of granite, quartz, and marble countertop materials available for installation across Maryland. Custom fabrication and expert installation."
          canonical="https://artstonemarble.com/stones"
        />
      <Heading
        paddingY={{ base: 5, xl: 30 }}
        fontWeight={25}
        textAlign={"center"}
      >
         Granite, Quartz & Marble Countertops in Maryland
      </Heading>
      <Flex
        w="90%"
        direction={{ base: "column", xl: "row" }}
        justifyContent={"space-between"}
        alignItems={"center"}
        mb={5}
        alignSelf={"center"}
      >
        {stoneTypes.map((stone: any, index: number) =>
          renderStoneTypes(stone, index)
        )}
      </Flex>
    </Flex>
  );
}

export default Stones;
