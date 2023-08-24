import { Box } from "@chakra-ui/react";
import PosterContainer from "@/components/PosterContainer";
import Head from "next/head";
import Estimate from "@/components/Estimate";
function Home() {
  return (
    <Box w={"100vw"}>
      <Head>
        <title>Artstone Marble & Granite</title>
        <meta name="description" content="Mert Ozkaynak portfolio website" />
        {/* <meta
          name="google-site-verification"
          content="BdcSbbdl77EbnSO73TNDEkRqlOehHt5rPaegmW6vBKA"
        /> */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PosterContainer />
      <Estimate />
    </Box>
  );
}

export default Home;
