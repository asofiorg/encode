import { Head, Html, Main, NextScript } from "next/document";

const Document = () => {
  return (
    <Html lang="es">
      <Head>
        <meta charSet="utf-8" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@200;400;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
