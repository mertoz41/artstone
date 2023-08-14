import { Image, Heading, Flex, Text, Button, Link } from "@chakra-ui/react";
function Stones() {
  const stoneTypes: Array<any> = [
    {
      image: "/granitepics/african-persa.png",
      link: "/stones/granite",
      title: "Granite",
      description:
        "As one of the most durable countertops for the kitchen, granite is the ultimate choice for many homeowners. Available in different colors, it makes for a long-lasting companion in the kitchen.",
    },
    {
      image: "/marblepics/bianco-carrara-c-marble.png",
      link: "/stones/marble",
      title: "Marble",
      description:
        "As one of most premier natural stones, nothing spells luxury & elegance as well as marble countertops. They are prized for striking white color & beauty. They make for a perfect addition once sealed.",
    },
    {
      image: "/quartzpics/arabescato-quartz.png",
      link: "/stones/quartz",
      title: "Quartz",
      description:
        "As one of the most durable stones in the world, this engineered countertop is perfect for those who want a modern touch to their kitchen, and a countertop that’s super easy to maintain. Available in 100+ styles.",
    },
  ];
  const renderStoneTypes = (
    title: string,
    description: string,
    image: string,
    link: string
  ) => (
    <Link href={link}>
      <Flex flex={1} w={320} direction={"column"} cursor="pointer">
        <Image
          src={image}
          boxSize={250}
          alignSelf={"center"}
          boxShadow={"2xl"}
          mb={5}
        />
        <Heading fontSize={23} fontWeight={500} textAlign={"center"} mb={5}>
          {title}
        </Heading>
        <Text fontSize={14} fontWeight={400} textAlign={"center"}>
          {description}
        </Text>
        <Button marginTop={5} alignSelf={"center"}>
          Browse Selection
        </Button>
      </Flex>
    </Link>
  );
  return (
    <Flex h="100vh" w={"100vw"} direction={"column"}>
      <Heading paddingY={30} fontWeight={25} textAlign={"center"}>
        Stones
      </Heading>
      <Flex w="90%" justifyContent={"space-between"} alignSelf={"center"}>
        {stoneTypes.map((stone: any) =>
          renderStoneTypes(
            stone.title,
            stone.description,
            stone.image,
            stone.link
          )
        )}
      </Flex>
    </Flex>
  );
}

export default Stones;
