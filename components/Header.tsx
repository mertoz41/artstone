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
  MenuButton,
  IconButton,
  MenuList,
  MenuItem,
  Menu,
} from "@chakra-ui/react";
import { HamburgerIcon, AddIcon } from "@chakra-ui/icons";

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
        <PopoverBody w="100%">
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
          borderWidth={1}
          w="auto"
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
  const getLinkTitle = (title: string) => {
    let linkTitle = title;
    if (title === "contact us") {
      linkTitle = title
        .split("")
        .filter((letter) => letter !== " ")
        .join("");
    }
    return linkTitle;
  };

  const renderNavigationButton = (title: string) => {
    return (
      <Link href={`/${getLinkTitle(title)}`}>
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
  const renderMenuItem = (title: string) => {
    return (
      <Link href={`/${getLinkTitle(title)}`}>
        <MenuItem>{title}</MenuItem>
      </Link>
    );
  };
  return (
    <Flex
      // flexDirection={{ base: "row", xl: "column" }}
      justifyContent={{ base: "space-between", xl: "center" }}
      alignItems={"center"}
      w={"50%"}
      m="0 auto"
    >
      <Link href="/">
        <Image
          justifyContent={"center"}
          src="https://d3156eqod4r5bv.cloudfront.net/posterpics/aslogo.jpg"
          boxSize={{ base: 70, xl: 130 }}
          alt="artstonelogo"
        />
      </Link>
      <Flex marginLeft={5} flexDirection={"column"}>
        <Heading
          textAlign={"center"}
          fontSize={{ sm: 23, xl: 36 }}
          fontWeight={"300"}
        >
          Artstone Marble & Granite
        </Heading>
        <Box display={{ base: "flex-end", xl: "none" }}>
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<HamburgerIcon />}
              size={"lg"}
              variant="outline"
            />
            <MenuList>
              {renderMenuItem("stones")}
              {renderMenuItem("sinks")}
              {renderMenuItem("edges")}
              {renderMenuItem("about")}
              {renderMenuItem("contact us")}
            </MenuList>
          </Menu>
        </Box>
        <Box
          m="0 auto"
          justifyContent={"space-between"}
          w={"100%"}
          display={{ sm: "none", xl: "flex" }}
        >
          {renderPopoverButton("stones")}
          {renderPopoverButton("sinks")}
          {renderNavigationButton("edges")}
          {renderNavigationButton("about")}
          {renderNavigationButton("contact us")}
        </Box>
      </Flex>
    </Flex>
  );
}

export default Header;
