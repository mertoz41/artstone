import Head from "next/head";
interface HeadProps {
  children?: React.ReactNode;
  title?: string | string[] | undefined;
}
function PageHead(props: HeadProps) {
  const { title, children } = props;
  return (
    <Head>
      <title>{title ? title + " - " : null}Artstone Marble & Granite</title>
      <link rel="icon" href="/images/favicon.ico" />
      <meta
        name="google-site-verification"
        content="gmOao_aMrsmc_M9glnb4oKykVqwL5QOeof2ipqI8eCU"
      />
      {children}
    </Head>
  );
}

export default PageHead;
