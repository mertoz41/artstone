import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import PageHead from "./PageHead";

function Layout({ children }: { children: any }) {
  return (
    <>
      <PageHead>
        <meta name="description" content="Artstone Marble & Granite" />
      </PageHead>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
