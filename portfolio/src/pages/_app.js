import "@/styles/globals.css"
import { Urbanist } from "next/font/google"
const ubanist = Urbanist({ subsets: ["latin"] })
import { Footer } from "../components/Footer"

export default function App({ Component, pageProps }) {
  return (
    <main className="'Urbanist.className">
      <Component {...pageProps} />
    </main>
  )
}
