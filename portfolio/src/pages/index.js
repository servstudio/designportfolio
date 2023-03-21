import { supabase } from "../utils/supabase.js"
import Head from "next/head"
import Image from "next/image"
import { Urbanist } from "next/font/google"
import Footer from "@/components/Footer"
import Header from "@/components/Header.jsx"
import Card from "@/components/Card.jsx"

const urbanist = Urbanist({ subsets: ["latin"] })

export default function Home({ projects }) {
  console.log({ projects })
  return (
    <>
      <Head>
        <title>Rich's Design Portfolio</title>
        <meta
          name="description"
          content="Professional service design portfolio"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="relative">
        <Header />
        <div
          className={
            "grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 md:grid-rows-auto gap-4 p-12 md:p-32"
          }
        >
          {projects.map((project) => (
            // <div className="flex flex-col bg-gray-800 p-8 min-h- rounded-md">
            //   <h2
            //     key={project.id}
            //     className="text-white font-black text-2xl mb-4"
            //   >
            //     {project.title}
            //   </h2>
            //   <p className="line-clamp-2">{project.blurb}</p>
            // </div>
            <Card key={project.id} project={project} />
          ))}
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export const getStaticProps = async () => {
  const { data: projects } = await supabase.from("projects").select("*")

  return {
    props: {
      projects,
    },
  }
}
