import { Html, Head, Main, NextScript } from "next/document"

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Service Design Portfolio</title>
        <meta
          name="description"
          content="Richard Ekelman's professional service design portfolio."
        />
        <meta
          charSet="utf-8"
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <link rel="icon" href="../../public/flavicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Urbanist:ital,wght@0,200;0,400;0,600;0,800;1,400&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
