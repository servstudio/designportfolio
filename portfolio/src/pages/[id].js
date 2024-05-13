import { supabase } from "@/utils/supabase"

const ProjectDetails = ({ project }) => (
  <>
    <div className="pb-12 space-y-12">
      <div
        className="bg-no-repeat h-96"
        style={{
          backgroundImage: `url(${project.key_img})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
        }}
      ></div>

      <div className="container px-8 py-8 mx-auto space-y-8 max-w-7xl">
        <h1 className="text-4xl">{project.title}</h1>
        <div className="flex space-x-1 ">
          <p>{project.company}</p>
          {/* <p className="mb-8">{project.year}</p> */}
        </div>

        <div className="flex flex-col lg:mb-8 md:flex-row md:justify-between">
          <div className="flex flex-col w-4/5 md:w-1/2">
            <div>
              <h3 className="text-xl font-gray-900">The Ask</h3>
              <p className="mb-8">{project.ask}</p>
            </div>
            <div className="">
              <h3 className="text-xl font-gray-900">Role</h3>
              <p className="mb-8">{project.role}</p>
            </div>
            <div>
              <h3 className="text-xl font-gray-900">Outcomes</h3>
              <ul className="ml-4 space-y-2 list-disc">
                <li>{project.outcome[0]}</li>
                <li>{project.outcome[1]}</li>
                <li>{project.outcome[2]}</li>
                <li>{project.outcome[3]}</li>
                <li>{project.outcome[4]}</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 md:w-1/4 md:mt-0">
            <div className="mb-8 ">
              <h3 className="text-xl font-gray-900 ">Methods</h3>
              <p>{project.methods}</p>
            </div>
            <div>
              <h3 className="text-xl font-gray-900">Tools</h3>
              <p>{project.tools}</p>
            </div>
          </div>
        </div>

        {/* Project images */}

        {project.process_img === null ? (
          ""
        ) : (
          <>
            <div
              className="mt-12 bg-no-repeat h-96"
              style={{
                backgroundImage: `url(${project.process_img[0]})`,
                backgroundSize: "contain",
                backgroundPosition: "center",
              }}
            ></div>

            <div
              className="mt-12 bg-no-repeat h-96"
              style={{
                backgroundImage: `url(${project.process_img[1]})`,
                backgroundSize: "contain",
                backgroundPosition: "center",
              }}
            ></div>
          </>
        )}

        <div className="w-full max-w-7xl md:w-4/5">
          <h3 className="text-xl font-gray-900">Key Learning</h3>
          <p>{project.keylearning}</p>
        </div>
      </div>
    </div>
  </>
)

export const getStaticPaths = async function () {
  const { data: projects, error } = await supabase.from("projects").select("id")
  const paths = projects.map((project) => ({
    params: { id: project.id.toString() },
  }))
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async ({ params: { id } }) => {
  const { data: project } = await supabase
    .from("projects")
    .select("*")
    .eq("id", id)
    .single()
  return {
    props: {
      project,
    },
  }
}

export default ProjectDetails
