import { supabase } from "@/utils/supabase"
// import { Tab } from "@headlessui/react"
import Link from "next/link"

export default function Projects({ projects }) {
  return (
    <>
      <header className="text-gray-800 bg-white max-w-60 h- ">
        <div className="container px-4 py-12 mx-auto mb-12 md:max-w-7xl md:pl-8 max-w-7xl">
          <h2 className="px-4 mx-auto text-6xl md:px-4 font-regular">
            Projects
          </h2>
        </div>
      </header>
      <div
        className={
          "container max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-auto gap-8 p-8 md:p-8"
        }
      >
        {projects.map((project) => (
          <Link key={project.id} href={`/${project.id}`}>
            <div className="flex flex-col h-full p-4 duration-300 ease-in-out bg-white rounded-md group hover:shadow-xl hover:-translate-y-4">
              <img
                className="object-cover w-full my-auto rounded-sm"
                src={project.key_img}
                alt={`${project.title} image`}
              ></img>
              <div className="pt-auto">
                <h2 className="text-xl font-medium text-gray-800 capitalize">
                  {project.title}
                </h2>
              </div>
              <div>
                <p
                  className="text-orange-800 cursor-pointer hover:font-bold hover:underline"
                  key={project.id}
                  href={`/${project.id}`}
                >
                  View Case Study{" "}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  )
}

export const getStaticProps = async () => {
  const { data: projects } = await supabase
    .from("projects")
    .select("*")
    .order("id", { ascending: true })

  return {
    props: {
      projects,
    },
  }
}
