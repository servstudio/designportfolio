import Head from "next/head"
import NavBar from "./NavBar"
import Footer from "./Footer"

function Page({ children }) {
  return (
    <>
      <Head>
        <title>Portfolio</title>
        <meta
          name="description"
          content="Professional service design portfolio"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <NavBar />
      </header>
      <main className="Urbanist.className p-8 min-h-screen">{children}</main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default Page
