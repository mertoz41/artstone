import type { ReactElement, ReactNode } from "react";

import { ChakraProvider } from "@chakra-ui/react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import Layout from "@/components/layout";
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};
function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <Layout>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </Layout>
  );
}

export default MyApp;
