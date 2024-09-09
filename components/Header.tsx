import {
  Box,
  Image,
  Heading,
  Flex,
  MenuButton,
  IconButton,
  MenuList,
  MenuItem,
  Menu,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

import Link from "next/link";

function Header() {
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
      justifyContent={{ base: "space-between", xl: "center" }}
      alignItems={"center"}
      alignSelf={"center"}
      w={{ base: "100%", xl: "40%" }}
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
      <Flex
        flex={{ base: 1, xl: 1 }}
        marginLeft={5}
        flexDirection={{ base: "row", xl: "column" }}
      >
        <Heading
          textAlign={"center"}
          fontSize={{ sm: 23, xl: 36 }}
          fontWeight={"300"}
        >
          Artstone Marble & Granite
        </Heading>

        <Box
          m="0 auto"
          justifyContent={"space-between"}
          w={"100%"}
          display={{ sm: "none", xl: "flex" }}
        >
          {renderNavigationButton("stones")}
          {renderNavigationButton("sinks")}
          {renderNavigationButton("edges")}
          {renderNavigationButton("about")}
          {renderNavigationButton("contact us")}
        </Box>
      </Flex>
      <Box marginRight={2} display={{ base: "flex-end", xl: "none" }}>
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
    </Flex>
  );
}

export default Header;
