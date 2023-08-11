import { Box } from "@chakra-ui/react";
import Header from "@/components/Header";
import PosterContainer from "@/components/PosterContainer";
import Footer from "@/components/Footer";
function Home() {
  return (
    <Box h="100vh" w={"100vw"}>
      <Header />
      <PosterContainer />
      <Footer />
    </Box>
  );
}

export default Home;
