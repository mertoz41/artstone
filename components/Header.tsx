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
import { useRouter } from "next/router";

function Header() {
  const router = useRouter();
  const pathname = router.pathname;

  const getLinkTitle = (title: string) => {
    let linkTitle = title;
    if (title === "contact us") {
      linkTitle = "contact-us";
    }
    if (title === "our projects") {
      linkTitle = "our-projects";
    }
    return linkTitle;
  };

  const isActive = (title: string) => {
    const path = `/${getLinkTitle(title)}`;
    return pathname === path || pathname.startsWith(`${path}/`);
  };

  const renderNavigationButton = (title: string) => {
    const active = isActive(title);
    return (
      <Link href={`/${getLinkTitle(title)}`}>
        <Heading
          fontSize={21}
          fontWeight={300}
          textDecoration={active ? "underline" : undefined}
          textDecorationColor="black"
          textDecorationThickness="1px"
          _hover={{
            textDecoration: "underline",
            textDecorationColor: "black",
            textDecorationThickness: "1px",
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

  const renderDesktopHeader = () => {
    return(
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
      {renderNavigationButton("our projects")}
      {renderNavigationButton("contact us")}
    </Box>
    )
  }

  const renderMobileHeader = () => {
    return(
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
            {renderMenuItem("our projects")}
            {renderMenuItem("contact us")}
          </MenuList>
        </Menu>
      </Box>
    )
  }
  return (
    <Box position="sticky" top={0} zIndex={1000} bg="white" w="100%">
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
            fontWeight={"400"}
          >
            Artstone Marble & Granite
          </Heading>
          {renderDesktopHeader()}
        </Flex>
        {/* {renderMobileHeader()} */}
      </Flex>
    </Box>
  );
}

export default Header;
