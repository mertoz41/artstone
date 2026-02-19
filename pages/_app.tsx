import type { ReactElement, ReactNode } from "react";
import React, { useEffect } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import Layout from "@/components/layout";
import theme from "@/utilities/theme";
import { animated, useSpring } from "@react-spring/web";
import { useRouter } from "next/router";
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};
function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const router = useRouter();
  const [homeAnimation, animate] = useSpring(() => ({
    from: { opacity: 0 },
    to: { opacity: 1 },
  }));
  useEffect(() => {
    animate.start({
      from: { opacity: 0 },
      to: { opacity: 1 },
    });
    return () => {
      animate.start({
        from: { opacity: 1 },
        to: { opacity: 0 },
      });
    };
  }, [router.pathname]);
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <animated.div style={homeAnimation}>
          <Component {...pageProps} />
        </animated.div>
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
