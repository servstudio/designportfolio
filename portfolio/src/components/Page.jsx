import Head from "next/head"
import NavBar from "./NavBar"
import Footer from "./Footer"

function Page({ children }) {
  return (
    <>
      <Head>
        <title>Rich's Portfolio</title>
        <meta
          name="description"
          content="Professional service design portfolio"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/flavicon.png" />
      </Head>
      <header>
        <NavBar />
      </header>
      <main className="min-h-screen space-y-8">{children}</main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default Page
