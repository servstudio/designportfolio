import { supabase } from "@/utils/supabase"

const ProjectDetails = ({ project }) => {
  console.log({ project })
  return (
    <div>
      <h1>{project.title}</h1>
      <p>{project.year}</p>
    </div>
  )
}

export const getStaticPaths = async () => {
  const { data: projects } = await supabase.from("project").select("id")

  const paths = projects.map(({ id }) => ({
    params: {
      id: id.toString(),
    },
  }))

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async ({ params: { id } }) => {
  const { data: project } = await supabase
    .from("project")
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
