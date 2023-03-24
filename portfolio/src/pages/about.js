import React from "react"

function About() {
  return (
    <div className="space-y-8 ">
      <header className="bg-gray-800">
        <div className="grid w-full p-4 py-12 mx-auto bg-gray-800">
          <div className="container grid w-full grid-cols-1 gap-8 py-8 mx-auto bg-gray-800">
            <h1 className="text-6xl text-white">About Me</h1>
          </div>
        </div>
      </header>
      <section className="px-4">
        <div className="container grid grid-flow-row grid-cols-3 gap-8 mx-auto">
          <div className="col-span-2">
            <h2 className="mb-4 text-4xl font-regular">Resume</h2>
            <p>
              My path has been unique, but I feel that has become a strength
              having worked both internally and externally.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-gray-600">
        <div className="container grid w-full grid-cols-1 gap-4 py-8 mx-auto md:grid-cols-3">
          <h2 className="text-4xl text-gray-100 md:col-span-3 font-regular">
            I believe
          </h2>
          <div className="grid grid-cols-3 col-span-3 gap-4 text-xl grid-rows-auto">
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
            <div className="flex col-span-2 md:col-span-1">
              <h3 className="p-4 text-white bg-gray-900 md:p-8">
                The ones that make it complicated never get congratulated.
              </h3>
            </div>
            <div className="flex col-span-4 md:col-span-2">
              <h3 className="p-4 text-gray-800 bg-orange-300 md:p-8">
                When you set out to improve the experience you generally save
                money, but when you set out to save money you generally ruin the
                experience.
              </h3>
            </div>
            <div className="flex col-span-2 md:col-span-1">
              <h3 className="p-4 text-white bg-gray-900 md:p-8">
                Great ideas can come from anyone, even those without design
                expertise; some of my best work has been informed by their
                experience.
              </h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
