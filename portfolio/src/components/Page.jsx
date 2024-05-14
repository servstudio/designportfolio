import Head from "next/head"
import NavBar from "./NavBar"
import Footer from "./Footer"
import React from "react"

function Page({ children }) {
  return (
    <>
      <Head>
        <title>Rich Ekelman Portfolio</title>
        <meta
          name="description"
          content="Professional service design portfolio"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="../public/flavicon.png" />
      </Head>
      <header>
        <NavBar />
      </header>
      <main className="min-h-screen Space-y-8 lg:space-y-6">{children}</main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default Page
