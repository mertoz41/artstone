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
      {children}
    </Head>
  );
}

export default PageHead;
