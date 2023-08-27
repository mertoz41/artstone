import {
  Box,
  Image,
  Heading,
  Flex,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
} from "@chakra-ui/react";
import Link from "next/link";

function Header() {
  const renderPopoverButton = (title: string) => {
    const renderOptions = (type: string) => {
      const items =
        type === "stones"
          ? ["marble", "granite", "quartz"]
          : [
              "apron",
              "bar",
              "compliant",
              "double bowl",
              "duragranit",
              "handmade",
              "single bowl",
              "vanity",
            ];
      return (
        <PopoverBody w={"auto"}>
          {items.map((item: string, i: number) => (
            <Link
              href={`/${type}/${
                type === "sinks" && item === "double bowl"
                  ? "doublebowl"
                  : type === "sinks" && item === "single bowl"
                  ? "singlebowl"
                  : item
              }`}
              key={i}
            >
              <Heading
                textAlign={"center"}
                fontSize={19}
                fontWeight={300}
                textDecoration={"underline"}
                _hover={{
                  textDecoration: "none",
                }}
                cursor={"pointer"}
              >
                {item}
              </Heading>
            </Link>
          ))}
        </PopoverBody>
      );
    };
    return (
      <Popover trigger="hover">
        <PopoverTrigger>
          <Link href={`/${title}`}>
            <Heading
              fontSize={21}
              fontWeight={300}
              _hover={{
                textDecoration: "underline",
                textDecorationColor: "black",
                textDecorationThickness: 1,
              }}
              cursor={"pointer"}
            >
              {title}
            </Heading>
          </Link>
        </PopoverTrigger>
        <PopoverContent
          backgroundColor={"white"}
          borderWidth={1}
          borderColor="#e5e5e5"
          padding={15}
          borderRadius={20}
          boxShadow={"dark-lg"}
        >
          <PopoverArrow />
          {renderOptions(title)}
        </PopoverContent>
      </Popover>
    );
  };

  const renderNavigationButton = (title: string) => {
    return (
      <Link href={`/${title}`}>
        <Heading
          fontSize={21}
          fontWeight={300}
          _hover={{
            textDecoration: "underline",
            textDecorationColor: "black",
            textDecorationThickness: 1,
          }}
          cursor={"pointer"}
        >
          {title}
        </Heading>
      </Link>
    );
  };
  return (
    <Flex flexDirection={"column"} alignItems={"center"}>
      <Link href="/">
        <Image
          justifyContent={"center"}
          src="https://asmgstones.s3.amazonaws.com/posterpics/aslogo.jpg"
          boxSize={130}
        />
      </Link>
      <Heading textAlign={"center"} fontSize={36} fontWeight={"300"}>
        Artstone Marble & Granite
      </Heading>
      <Flex m="0 auto" justifyContent={"space-between"} w={"30%"}>
        {renderPopoverButton("stones")}

        {renderPopoverButton("sinks")}
        {renderNavigationButton("edges")}
        {renderNavigationButton("about")}
        {renderNavigationButton("gallery")}
        {renderNavigationButton("contact us")}
      </Flex>
    </Flex>
  );
}

export default Header;
