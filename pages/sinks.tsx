import { Image, Heading, Flex, Text, Button, Link } from "@chakra-ui/react";
function Stones() {
  const stoneTypes: Array<any> = [
    {
      image: "https://asmgsinks.s3.amazonaws.com/apronpics/as-apr2318.jpg",
      link: "/sinks/apron",
      title: "Apron",
    },
    {
      image: "https://asmgsinks.s3.amazonaws.com/barpics/as-415.jpg",
      link: "/sinks/bar",
      title: "Bar",
    },
    {
      image: "https://asmgsinks.s3.amazonaws.com/compliantpics/as-201ada.jpg",
      link: "/sinks/compliant",
      title: "Compliant",
    },
    {
      image: "https://asmgsinks.s3.amazonaws.com/doublebowlpics/as-2818.jpg",
      link: "/sinks/doublebowl",
      title: "Double Bowl",
    },
    {
      image: "https://asmgsinks.s3.amazonaws.com/duragranitpics/as-gr101.jpg",
      link: "/sinks/duragranit",
      title: "Duragranit",
    },
    {
      image: "https://asmgsinks.s3.amazonaws.com/handmadepics/as-hm1518.jpg",
      link: "/sinks/handmade",
      title: "Handmade",
    },
    {
      image: "https://asmgsinks.s3.amazonaws.com/singlebowlpics/as-2318.jpg",
      link: "/sinks/singlebowl",
      title: "Single Bowl",
    },
    {
      image: "https://asmgsinks.s3.amazonaws.com/vanitypics/as-202.jpg",
      link: "/sinks/vanity",
      title: "Vanity",
    },
  ];
  const renderStoneTypes = (title: string, image: string, link: string) => (
    <Link href={link}>
      <Flex
        flex={1}
        w={320}
        marginBottom={34}
        direction={"column"}
        cursor="pointer"
      >
        <Image
          src={image}
          boxSize={260}
          alignSelf={"center"}
          boxShadow={"2xl"}
          mb={5}
        />
        <Heading fontSize={23} fontWeight={500} textAlign={"center"} mb={5}>
          {title}
        </Heading>

        <Button marginTop={5} alignSelf={"center"}>
          Browse Selection
        </Button>
      </Flex>
    </Link>
  );
  return (
    <Flex w={"100vw"} direction={"column"}>
      <Heading paddingY={30} fontWeight={25} textAlign={"center"}>
        Sinks
      </Heading>
      <Flex
        w="90%"
        justifyContent={"space-between"}
        alignSelf={"center"}
        flexWrap={"wrap"}
      >
        {stoneTypes.map((stone: any) =>
          renderStoneTypes(stone.title, stone.image, stone.link)
        )}
      </Flex>
    </Flex>
  );
}

export default Stones;
