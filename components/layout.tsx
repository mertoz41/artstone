import Header from "./Header";
import Footer from "./Footer";
import Head from "next/head";
import { useRouter } from "next/router";
import { Box } from "@chakra-ui/react";
import PageHead from "./PageHead";

function Layout({ children }: { children: any }) {
  const router = useRouter();
  let splitted = router.asPath.split("/").filter((item) => item);
  return (
    <>
      <PageHead>
        <meta name="description" content="Mert Ozkaynak portfolio website" />
      </PageHead>

      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
