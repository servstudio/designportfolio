import { supabase } from "@/utils/supabase"

const ProjectDetails = ({ project }) => (
  <div>
    <h1 className="text-2xl">{project.title}</h1>
    <h1>{project.year}</h1>
  </div>
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
