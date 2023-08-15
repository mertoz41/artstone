import { Heading, Flex } from "@chakra-ui/react";
import StoneItem from "@/components/StoneItem";
function Marble() {
  const marbles: Array<string> = [
    "bianco-carrara-c-marble",
    "bianco-lasa-marble",
    "bianco-lasa-marble-honed",
    "bianco-lavinia-marble",
    "botticino-classico-marble",
    "botticino-fiorito-marble",
    "breccia-oniciata-marble",
    "breccia-oniciata-marble-honed",
    "calacatta-bianco-marble",
    "calacatta-latte-honed",
    "calacatta-vagli-marble",
    "calcite-blue-marble",
    "cielo-blue-leather",
    "crema-nuova-marble",
    "crema-valencia",
    "dark-emperador-marble",
    "emperador-gold-marble",
    "emperador-light-marble",
    "glaciers-marble",
    "graphite-marble",
    "graphite-marble-honed",
    "rainforest-brown-marble",
    "rainforest-green-marble",
    "rhino-white-marble",
    "river-blue",
    "valentino",
    "white-pearl-marble",
    "white-pearl-marble-honed",
  ];

  return (
    <Flex w={"100vw"} direction={"column"}>
      <Heading paddingY={30} fontWeight={25} textAlign={"center"}>
        Marble
      </Heading>

      <Flex
        w="90%"
        justifyContent={"space-between"}
        alignSelf={"center"}
        flexWrap={"wrap"}
      >
        {marbles.map((stone: any) => (
          <StoneItem type="marble" name={stone} />
        ))}
      </Flex>
    </Flex>
  );
}

export default Marble;
