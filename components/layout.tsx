import Header from "./Header";
import Footer from "./Footer";
import Head from "next/head";
import { useRouter } from "next/router";

function Layout({ children }: { children: any }) {
  const router = useRouter();
  let splitted = router.asPath.split("/").filter((item) => item);
  return (
    <>
      <Head>
        <title>
          {router.isReady && splitted.length > 2
            ? splitted[2].charAt(0).toUpperCase() + splitted[2].slice(1) + " - "
            : splitted.length > 1
            ? splitted[1].charAt(0).toUpperCase() + splitted[1].slice(1) + " - "
            : null}
          Artstone Marble & Granite
        </title>
        <meta name="description" content="Mert Ozkaynak portfolio website" />
        <link rel="icon" href="/images/favicon.ico" />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
