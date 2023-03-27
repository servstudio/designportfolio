import React from "react"
import { supabase } from "@/utils/supabase"

export default function About({ resume }) {
  return (
    <>
      <div className="space-y-12 ">
        <header className="text-white bg-gray-800 max-w-60 ">
          <div className="container p-4 py-12 pl-4 mx-auto mb-12 md:max-w-7xl md:pl-8 max-w-7xl">
            <h2 className="mx-auto text-6xl font-regular">About</h2>
          </div>
        </header>
        <div className="container p-4 mx-auto mb-12 md:max-w-7xl">
          <div className="flex flex-col space-y-8 ">
            <div>
              <h2 className="mb-4 text-4xl font-regular">Resume</h2>
              <p className="w-4/5 md:w-1/2">
                My path has been unique, but I feel that has become a strength
                having worked both internally and externally.
              </p>
            </div>

            {/* Experience section */}
            <div className="flex flex-col md:flex-row md:space-y-8 md:flex-shrink">
              <div className="pb-12 space-y-4 md:w-6/12 md:mr-12">
                <h3 className="text-xl font-black">Experience</h3>

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
              <div className="flex flex-col space-y-8">
                <h3 className="text-xl font-black">Eductation</h3>
                <div>
                  <h4 className="mr-2 font-bold">MFA Service Design</h4>
                  <h4 className="">Savannah College of Art & Design</h4>
                </div>
                <div>
                  <h4 className="mr-2 font-bold">BA Psychology</h4>
                  <h4 className="">Montclair State University</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Belief section */}
      <div className="p-4 bg-gray-600 md:py-12 ">
        <div className="grid grid-cols-1 gap-4 py-8 mx-auto max-w-7xl md:grid-cols-3">
          <h2 className="text-4xl text-gray-100 md:col-span-3 font-regular">
            I believe...
          </h2>
          <div className="grid grid-cols-4 col-span-3 gap-4 text-xl md:grid-col-3 grid-rows-auto">
            <div className="flex col-span-4 md:col-span-1">
              <h3 className="p-4 text-white bg-gray-900 md:p-8">
                <span className="text-orange-300">
                  Service design is a team sport.
                </span>{" "}
                We get better when other push us and share what we are not able
                to see.
              </h3>
            </div>
            <div className="flex col-span-2 md:col-span-1">
              <h3 className="p-4 text-white bg-gray-900 md:p-8">
                Focus on the people you are trying to serve and the rest will
                follow.
              </h3>
            </div>
            <div className="flex col-span-4 md:col-span-1">
              <h3 className="p-4 text-gray-800 bg-orange-300 md:p-8">
                Set out to improve the experience you will generally save money,
                but set out to save money you generally ruin the experience.
              </h3>
            </div>

            <div className="flex col-span-4 md:col-span-1">
              <h3 className="p-4 text-white bg-gray-800 md:p-8">
                Great ideas can come from anyone. True collaboration is when
                everyone is working towards the best idea, not their idea.
              </h3>
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
