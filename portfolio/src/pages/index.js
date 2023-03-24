import { supabase } from "@/utils/supabase"
import Link from "next/link"

export default function Home({ projects }) {
  return (
    <>
      <div className="px-4 py-8 text-white bg-gray-800">
        <div className="container mx-auto">
          <h1 className="text-4xl">I am an end-to-end Service Designer.</h1>
          <p>
            My work weaves research, strategy, and design together solving
            complex problems.
          </p>
        </div>
      </div>
      <div
        className={
          "container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-3 gap-8 md:p-8 p-4"
        }
      >
        {projects.map((project) => (
          <Link key={project.id} href={`/${project.id}`}>
            <div className="flex flex-col p-4 duration-300 ease-in-out bg-white rounded-md stretch hover:shadow-md">
              <img
                className="object-cover w-full bg-auto rounded-sm min-h-3/5"
                src={project.key_img}
                alt={`${project.title} image`}
              ></img>
              <div className="pt-2">
                <h2 className="text-xl font-medium text-gray-800 capitalize">
                  {project.title}
                </h2>

                {/* <p className="text-sm text-black line-clamp-2">
                    {project.blurb}
                  </p> */}
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
