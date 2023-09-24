import { Flex, Heading, Box } from "@chakra-ui/react";

function ItemWrapper({ children }: { children: React.ReactNode }) {
  return (
    <Box
      w={{ base: "40%", xl: "20%" }}
      h={{ base: 220, xl: 300 }}
      margin={{ base: 0, xl: 5 }}
    >
      {children}
    </Box>
  );
}

export default ItemWrapper;
