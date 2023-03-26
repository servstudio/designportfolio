import { supabase } from "@/utils/supabase"
import Link from "next/link"

export default function Home({ projects }) {
  return (
    <>
      <div className="px-4 py-8 text-white bg-gray-800">
        <div className="container mx-auto max-w-60ch">
          <h1 className="text-4xl">I am an end-to-end Service Designer.</h1>
          <p>
            My work weaves research, strategy, and design together solving
            complex problems.
          </p>
        </div>
      </div>
      <div
        className={
          "container max-w-60ch mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-3 gap-8 md:pt-8 pt-4"
        }
      >
        {projects.map((project) => (
          <Link key={project.id} href={`/${project.id}`}>
            <div className="flex flex-col h-full p-4 duration-300 ease-in-out bg-white rounded-md stretch hover:shadow-md">
              <img
                className="object-cover w-full mb-auto bg-auto rounded-sm"
                src={project.key_img}
                alt={`${project.title} image`}
              ></img>
              <div className="pt-auto">
                <h2 className="text-xl font-medium text-gray-800 capitalize">
                  {project.title}
                </h2>
              </div>
              <div>
                <Link
                  className="text-orange-300 hover:font-bold"
                  key={project.id}
                  href={`/${project.id}`}
                >
                  <p> View Case Study</p>
                </Link>
              </div>
            </div>
          </Link>
        ))}
      </div>
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
