import Page from "@/components/Page"
import "@/styles/globals.css"
import { Urbanist } from "next/font/google"
const ubanist = Urbanist({ subsets: ["latin"] })

export default function App({ Component, pageProps }) {
  return (
    <Page>
      <Component {...pageProps} />
    </Page>
  )
}
