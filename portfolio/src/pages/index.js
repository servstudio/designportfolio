import { supabase } from "../utils/supabase.js"
import Head from "next/head"
import { Urbanist } from "next/font/google"
import Footer from "@/components/Footer"
import Header from "@/components/Header.jsx"
import Link from "next/link.js"
import Card from "@/components/Card.jsx"
// import Card from "@/components/Card.jsx"
// import Link from "next/link.js"

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
      <main className="relative min-h-screen">
        <Header />
        <div
          className={
            "container mx-auto grid grid-cols-1 md:grid-cols-2 md:grid-rows-auto gap-8 p-12 md:p-32"
          }
        >
          {projects.map((project) => (
            // Project Card
            <>
              <Link key={project.id} href={`/${project.id}`}>
                <div className="flex flex-col p-4 duration-300 ease-in-out hover:shadow-md">
                  <img
                    className="bg-center bg-cover rounded-sm"
                    src={project.key_img}
                    alt={`${project.title} image`}
                  ></img>
                  <div className="pt-2">
                    <h2 className="text-2xl text-black">{project.title}</h2>
                    <p className="text-sm text-black line-clamp-2">
                      {project.blurb}
                    </p>
                  </div>
                </div>
              </Link>
            </>
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
