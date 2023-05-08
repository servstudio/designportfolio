import Page from "@/components/Page"
import "@/styles/globals.css"
import "tailwindcss/tailwind.css"
import { Analytics } from "@vercel/analytics/react"

export default function App({ Component, pageProps }) {
  return (
    <>
      <Page>
        <Component {...pageProps} />
        <Analytics id="Z2Y6XZ5ZQZ" />
      </Page>
    </>
  )
}
