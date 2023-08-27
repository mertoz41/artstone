import { Heading, Flex } from "@chakra-ui/react";
import CatalogItem from "@/components/CatalogItem";
import { useRouter } from "next/router";

function Stone() {
  const router = useRouter();
  const stoneBook: any = {
    granite: [
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
    ],
    marble: [
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
    ],
    quartz: [
      "arabescato-quartz",
      "bianco-perlino-quartz",
      "calacatta-capraia-quartz",
      "calacatta-everest-quartz",
      "calacatta-gold-quartz",
      "calacatta-oro-quartz",
      "calacatta-raphael-IR-quartz",
      "calacatta-tuscany-quartz",
      "calacatta-v-quartz",
      "calacatta-venato-quartz",
      "cotton-white-IR-quartz",
      "galaxy-grey-quartz",
      "ice-white-IR-quartz",
      "ice-white-jumbo-quartz",
      "lavender-blue-quartz",
      "misterio-quartz",
      "silver-grey-quartz",
      "star-galaxy-quartz",
      "white-carrara-quartz",
      "white-galaxy-IR-quartz",
      "white-galaxy-jumbo-quartz",
      "white-galaxy-quartz",
      "white-ice-quartz",
      "white-snow-quartz",
    ],
  };

  return (
    <Flex w={"100vw"} direction={"column"}>
      <Heading paddingY={30} fontWeight={25} textAlign={"center"}>
        {router.query.stone}
      </Heading>

      <Flex
        w="90%"
        justifyContent={"space-between"}
        alignSelf={"center"}
        flexWrap={"wrap"}
      >
        {router.query.stone &&
          stoneBook[`${router.query.stone}`].map(
            (stone: any, index: number) => (
              <CatalogItem
                type="stones"
                key={index}
                kind={router.query.stone}
                name={stone}
              />
            )
          )}
      </Flex>
    </Flex>
  );
}

export default Stone;
