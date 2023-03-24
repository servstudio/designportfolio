import Page from "@/components/Page"
import "@/styles/globals.css"
import "tailwindcss/tailwind.css"

export default function App({ Component, pageProps }) {
  return (
    <>
      <Page>
        <Component {...pageProps} />
      </Page>
    </>
  )
}
