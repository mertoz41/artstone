import { Box } from "@chakra-ui/react";
import PosterContainer from "@/components/PosterContainer";
import Estimate from "@/components/Estimate";
function Home() {
  return (
    <Box>
      <PosterContainer />
      <Estimate />
    </Box>
  );
}

export default Home;
