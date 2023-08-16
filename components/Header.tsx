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
            <Link href={`/${type}/${item}`} key={i}>
              <Heading
                textAlign={"center"}
                fontSize={19}
                fontWeight={400}
                textDecoration={"underline"}
                _hover={{
                  textDecoration: "none",
                  // textDecorationColor: "red",
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
              fontWeight={400}
              _hover={{
                textDecoration: "underline",
                textDecorationColor: "black",
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
          {/* <PopoverBody w={"auto"}> */}
          {renderOptions(title)}
          {/* <Link href={`/${title}/granite`}>
              <Heading
                textAlign={"center"}
                fontSize={19}
                fontWeight={400}
                textDecoration={"underline"}
                _hover={{
                  textDecoration: "none",
                  // textDecorationColor: "red",
                }}
                cursor={"pointer"}
              >
                granite
              </Heading>
            </Link>
            <Link href="/stones/marble">
              <Heading
                textAlign={"center"}
                fontSize={19}
                textDecoration={"underline"}
                fontWeight={400}
                _hover={{
                  textDecoration: "none",
                  // textDecorationColor: "red",
                }}
                cursor={"pointer"}
              >
                marble
              </Heading>
            </Link>
            <Link href="/stones/quartz">
              <Heading
                textAlign={"center"}
                fontSize={19}
                fontWeight={400}
                textDecoration={"underline"}
                _hover={{
                  textDecoration: "none",
                  // textDecorationColor: "red",
                }}
                cursor={"pointer"}
              >
                quartz
              </Heading>
            </Link> */}
          {/* </PopoverBody> */}
        </PopoverContent>
      </Popover>
    );
  };
  const renderStonesButton = (title: string) => (
    <Popover trigger="hover">
      <PopoverTrigger>
        <Link href="/stones">
          <Heading
            fontSize={21}
            fontWeight={400}
            _hover={{
              textDecoration: "underline",
              textDecorationColor: "black",
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
        <PopoverBody w={"auto"}>
          <Link href="/stones/granite">
            <Heading
              textAlign={"center"}
              fontSize={19}
              fontWeight={400}
              textDecoration={"underline"}
              _hover={{
                textDecoration: "none",
                // textDecorationColor: "red",
              }}
              cursor={"pointer"}
            >
              granite
            </Heading>
          </Link>
          <Link href="/stones/marble">
            <Heading
              textAlign={"center"}
              fontSize={19}
              textDecoration={"underline"}
              fontWeight={400}
              _hover={{
                textDecoration: "none",
                // textDecorationColor: "red",
              }}
              cursor={"pointer"}
            >
              marble
            </Heading>
          </Link>
          <Link href="/stones/quartz">
            <Heading
              textAlign={"center"}
              fontSize={19}
              fontWeight={400}
              textDecoration={"underline"}
              _hover={{
                textDecoration: "none",
                // textDecorationColor: "red",
              }}
              cursor={"pointer"}
            >
              quartz
            </Heading>
          </Link>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );

  const renderNavigationButton = (title: string) => {
    return (
      <Heading
        fontSize={21}
        fontWeight={400}
        _hover={{ textDecoration: "underline", textDecorationColor: "black" }}
        cursor={"pointer"}
      >
        {title}
      </Heading>
    );
  };
  return (
    <Flex flexDirection={"column"} alignItems={"center"}>
      <Link href="/">
        <Image
          justifyContent={"center"}
          src="/artstonelogo.jpg"
          boxSize={130}
        />
      </Link>
      <Heading textAlign={"center"} fontSize={36} fontWeight={"400"}>
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
