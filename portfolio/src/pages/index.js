import Head from "next/head"
import Image from "next/image"
import { Inter } from "next/font/google"
import styles from "@/styles/Home.module.css"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.center}>
          <h1> Richard Ekelman's Portfolio</h1>
        </div>

        <div className={styles.grid}>
          <div className="card">
            {" "}
            <h2>Project Title Here</h2>
          </div>
          <div className="card">
            {" "}
            <h2>Project Title Here</h2>
          </div>
          <div className="card">
            {" "}
            <h2>Project Title Here</h2>
          </div>
        </div>
      </main>
    </>
  )
}
