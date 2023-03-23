import { supabase } from "@/utils/supabase"
import Link from "next/link"

export default function Home({ projects }) {
  return (
    <>
      <div
        className={
          "container mx-auto grid grid-cols-1 p-8 md:grid-cols-2 lg:grid-cols-3 md:grid-rows-auto gap-8 md:p-8"
        }
      >
        {projects.map((project) => (
          <Link key={project.id} href={`/${project.id}`}>
            <div className="flex flex-col p-4 duration-300 ease-in-out bg-white rounded-md stretch hover:shadow-md">
              <img
                className="object-cover w-full h-48 bg-gray-800 bg-auto rounded-sm"
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
