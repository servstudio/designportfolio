import Page from "@/components/Page"
import "@/styles/globals.css"
import "tailwindcss/tailwind.css"
import { Analytics } from "@vercel/analytics/react"

export default function App({ Component, pageProps }) {
  return (
    <>
      <Page>
        <Component {...pageProps} />

        <Analytics />
      </Page>
    </>
  )
}
