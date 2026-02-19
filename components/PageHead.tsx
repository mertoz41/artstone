import Head from "next/head";

interface HeadProps {
  title?: string;
  description?: string;
  canonical?: string;
  children?: React.ReactNode;
}

function PageHead({
  title,
  description,
  canonical,
  children,
}: HeadProps) {
  const fullTitle = title
    ? `${title} | Artstone Marble & Granite`
    : "Artstone Marble & Granite | Granite & Quartz Countertops in Maryland";

  const metaDescription =
    description ||
    "Custom granite, quartz, and marble countertops in Maryland. Professional fabrication and installation for kitchens and bathrooms. Free estimates available.";

  return (
    <Head>
      <title>{fullTitle}</title>

      <meta name="description" content={metaDescription} />

      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />

      {canonical && <link rel="canonical" href={canonical} />}

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
