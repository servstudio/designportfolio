import React from "react"
import { supabase } from "@/utils/supabase"

export default function Resume({ resume }) {
  return (
    <>
      <div className="space-y-12 ">
        <header className=" max-w-60">
          <div className="container p-8 mx-auto mb-12 md:max-w-7xl">
            <h2 className="mx-auto text-6xl font-regular">Resume</h2>
          </div>
        </header>

        <div className="container px-8 pb-12 mx-auto md:max-w-7xl">
          <div className="flex flex-col">
            {/* Experience section */}
            <div className="flex flex-col md:flex-row md:flex-shrink">
              <div className="pb-12 space-y-4 md:w-6/12 md:mr-12">
                <h3 className="text-xl font-gray-900">Experience</h3>

                {resume.map((role) => (
                  <div key={role.id[0]} className="pb-4">
                    <div className="flex flex-col md:flex-row md:space-y-0">
                      <h4 className="mr-2 font-bold">{role.company}</h4>
                      <h4 className="">{role.title}</h4>
                    </div>
                    <p className="mb-4 text-md">
                      {role.start_date} - {role.end_date}
                    </p>
                    <p>{role.description}</p>
                  </div>
                ))}
              </div>

              {/* Education section */}
              <div className="flex flex-col mt-0">
                <h3 className="mb-4 text-xl font-gray-900">Education</h3>
                <div className="mb-8">
                  <h4 className="mr-2 font-bold">MFA Service Design</h4>
                  <h4 className="">Savannah College of Art & Design</h4>
                </div>
                <div className="mb-8">
                  <h4 className="mr-2 font-bold">BA Psychology</h4>
                  <h4 className="">Montclair State University</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export const getStaticProps = async () => {
  const { data: resume } = await supabase
    .from("resume")
    .select("*")
    .order("id", { ascending: true })

  return {
    props: {
      resume,
    },
  }
}
