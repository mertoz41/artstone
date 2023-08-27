import { Heading, Flex } from "@chakra-ui/react";
import { useRouter } from "next/router";
import CatalogItem from "@/components/CatalogItem";
export default function Sink() {
  const router = useRouter();
  const sinkBook: any = {
    apron: [
      "as-apr2318",
      "as-apr2718",
      "as-apr3018",
      "as-apr3117",
      "as-apr3118",
      "as-apr3218",
    ],
    bar: ["as-415", "as-1216", "as-1218", "as-1518", "as-1616", "as-1618"],
    compliant: ["as-201ada", "as-1613ada", "as-2318ada", "as-3117ada"],
    doublebowl: [
      "as-2818",
      "as-2918",
      "as-3117",
      "as-3117ld",
      "as-3120",
      "as-3120r",
      "as-3121",
      "as-3121r",
    ],
    duragranit: [
      "as-gr101",
      "as-gr102",
      "as-gr105",
      "as-gr106",
      "as-gr107",
      "as-gr115",
      "as-gr201",
      "as-gr201b",
      "as-gr201cr",
      "as-gr202",
      "as-gr202b",
      "as-gr202c",
      "as-gr202cld",
      "as-gr202d",
      "as-gr202e",
      "as-gr202f",
      "as-gr204",
      "as-gr204ld",
    ],
    handmade: [
      "as-hm1518",
      "as-hm2318",
      "as-hm2718",
      "as-hm3018",
      "as-hm3117",
      "as-hm3120",
      "as-hm3120r",
      "as-hm3121",
      "as-hm3121r",
      "as-hm3218",
    ],
    singlebowl: [
      "as-2318",
      "as-3118",
      "as-2321",
      "as-2718",
      "as-3218",
      "as-3018",
      "as-3221",
    ],
    vanity: [
      "as-202",
      "as-204",
      "as-205",
      "as-206",
      "as-1310",
      "as-1512",
      "as-1613",
      "as-1714",
    ],
  };
  return (
    <Flex w={"100vw"} direction={"column"}>
      <Heading paddingY={30} fontWeight={25} textAlign={"center"}>
        {router.query.sink}
      </Heading>

      <Flex
        w="90%"
        justifyContent={"space-between"}
        alignSelf={"center"}
        flexWrap={"wrap"}
      >
        {router.query.sink &&
          sinkBook[`${router.query.sink}`].map((sink: any, index: number) => (
            <CatalogItem
              key={index}
              type="sinks"
              kind={router.query.sink}
              name={sink}
            />
          ))}
      </Flex>
    </Flex>
  );
}
