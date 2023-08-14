import { Image, Heading, Flex, Text, Button, Link } from "@chakra-ui/react";
function Granite() {
  const granites: Array<string> = [
    "african-persa",
    "african-rainbow",
    "alaska-white",
    "amarone",
    "audax-light",
    "azul-bahia",
    "azul-platino",
    "baltic-brown",
    "beta-white",
    "bianco-andino",
    "bianco-antico",
    "bianco-primata",
    "black-absolute",
    "black-cosmic",
    "black-forest",
    "black-galaxy",
    "blanc-du-blanc",
    "blanco-galia",
    "blue-dunes",
    "bordeaux",
    "branco-white-persa",
    "brazilian-black-brushed",
    "butterfly-beige",
    "butterfly-green",
    "caravelas",
    "colonial-cream",
    "crema-caramel",
    "crema-delicatus",
    "dallas-white",
    "delicatus",
    "delicatus-supreme",
    "fiesta-gold",
    "fortaleza-white",
    "giallo-fiorito",
    "giallo-napoli",
    "giallo-ornamental",
    "giallo-west",
    "golden-beach",
    "grey-goose",
    "gris-perla",
    "himalaya",
    "ice-blue-leather",
    "imperial-white",
    "ivory-brown",
    "ivory-fantasy",
    "jaguar",
    "kashmir-gold",
    "magma-gold",
    "maori",
    "monte-carlo",
    "monte-cristo",
    "moon-white",
    "new-caledonia",
    "new-venetian-gold",
    "new-viscon-white",
    "nilo-river",
    "peacock-green",
    "pitaya",
    "pitaya-polished",
    "rainforest-brown-marble-brushed",
    "rock-mountain",
    "royal-gold",
    "salinas-white",
    "santa-cecilia",
    "santa-cecilia-classico",
    "santa-cecilia-light",
    "sapphire-blue",
    "siena-bordeaux",
    "snow-flakes",
    "snowfall",
    "soft-yellow",
    "solarius",
    "splendor-white",
    "splendour-blue",
    "steel-grey",
    "sunset-gold",
    "tan-brown",
    "titanium",
    "ubatuba-gold",
    "ubatuba-green",
    "valle-nevado",
    "venetian-ice",
    "via-lactea",
    "vintage",
    "viscon-white",
    "vogue-white",
    "white-alamo",
    "white-g",
    "white-galaxy",
    "white-ice",
    "white-marfim",
    "white-napoli",
    "white-ornamental",
    "white-thunder",
    "white-tulum",
  ];
  const renderGranite = (name: string) => (
    <Flex flex={1} w={320} direction={"column"} cursor="pointer">
      <Image
        src={`/granitepics/${name}.png`}
        boxSize={250}
        alignSelf={"center"}
        boxShadow={"2xl"}
        mb={5}
      />
      <Heading fontSize={23} fontWeight={500} textAlign={"center"} mb={5}>
        {name}
      </Heading>
    </Flex>
  );
  return (
    <Flex h="100vh" w={"100vw"} direction={"column"} backgroundColor={"red"}>
      <Heading paddingY={30} fontWeight={25} textAlign={"center"}>
        Granite
      </Heading>

      <Flex w="90%" justifyContent={"space-between"} alignSelf={"center"}>
        {granites.map((stone: any) => renderGranite(stone))}
      </Flex>
    </Flex>
  );
}

export default Granite;
