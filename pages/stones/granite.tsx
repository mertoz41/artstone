import { Heading, Flex } from "@chakra-ui/react";
import StoneItem from "@/components/StoneItem";
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

  return (
    <Flex w={"100vw"} direction={"column"}>
      <Heading paddingY={30} fontWeight={25} textAlign={"center"}>
        Granite
      </Heading>

      <Flex
        w="90%"
        justifyContent={"space-between"}
        alignSelf={"center"}
        flexWrap={"wrap"}
      >
        {granites.map((stone: any) => (
          <StoneItem type="granite" name={stone} />
        ))}
      </Flex>
    </Flex>
  );
}

export default Granite;
