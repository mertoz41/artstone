import { Heading, Flex } from "@chakra-ui/react";
import StoneItem from "@/components/StoneItem";
function Quartz() {
  const quartzs: Array<string> = [
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
  ];
  return (
    <Flex w={"100vw"} direction={"column"}>
      <Heading paddingY={30} fontWeight={25} textAlign={"center"}>
        Quartz
      </Heading>

      <Flex
        w="90%"
        justifyContent={"space-between"}
        alignSelf={"center"}
        flexWrap={"wrap"}
      >
        {quartzs.map((stone: any) => (
          <StoneItem type="quartz" name={stone} />
        ))}
      </Flex>
    </Flex>
  );
}

export default Quartz;
