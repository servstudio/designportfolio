import { supabase } from "@/utils/supabase"
import Image from "next/image"
// import { Tab } from "@headlessui/react"
import Link from "next/link"
import { Z_FULL_FLUSH } from "zlib"

export default function Home({ projects }) {
  return (
    <>
      {/* =======Hero======= */}
      <div className="h-auto px-4 text-gray-800 bg-white">
        <div className="container items-center mx-auto max-w-7xl">
          <div className="flex items-center justify-center align-middle">
            <div className="flex-col px-4">
              <h1 className="text-4xl font-bold md:text-6xl">Rich Ekelman</h1>
              <p>Research, strategy, and design.</p>
            </div>

            <div className="w-3/4 h-auto md:w-1/2">
              <img
                className="object-cover w-full h-full"
                src="https://lngphvwiruyfwvdkclxc.supabase.co/storage/v1/object/public/images/images/hero-sketch.JPG"
              />
            </div>
          </div>
        </div>
      </div>

      {/* =======Featured======= */}
      <div className="container h-12 p-8 mx-auto my-8 max-w-7xl">
        <h2 className="text-4xl">Featured</h2>
        <p className="w-4/5 md:w-1/2">
          Select case studies from publicly released work.
        </p>
      </div>
      <div
        className={
          "container max-w-7xl mx-auto grid grid-cols-1 grid-row-2 md:grid-cols-2 md: lg:grid-cols-2 gap-8 p-8 md:p-8 lg:overflow-hidden"
        }
      >
        {projects.map((project) =>
          project.featured ? (
            <Link key={project.id} href={`/${project.id}`}>
              <div className="flex flex-col h-full p-4 duration-300 ease-in-out bg-white rounded-md hover:shadow-md">
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
                    className="text-orange-600 cursor-pointer hover:font-bold hover:underline"
                    key={project.id}
                    href={`/${project.id}`}
                  >
                    View Case Study{" "}
                  </p>
                </div>
              </div>
            </Link>
          ) : (
            ""
          )
        )}
      </div>

      {/* =======About Me======= */}
      <section
        id="About"
        className="flex px-8 py-16 text-white bg-gray-800 justify-content-center"
      >
        <div className="h-auto mx-auto max-w-7xl">
          <h2 className="mb-8 text-4xl md:hidden">About Me</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="flex flex-col justify-center w-3/4 mb-8 space-y-8 md:mb-0">
              <h2 className="mb-8 text-4xl">About Me</h2>
              <div className="">
                <h3 className="text-2xl font-bold">At Work</h3>
                <p>
                  I like to help make complex decisions feel easier to
                  understand. Ilike to to see the system by zooming in and out
                  as needed.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold">At Home</h3>
                <p>
                  Making pizza and bread from scratch is how I get away from the
                  screen. Our neighbors think my neopolitan pizza is the best in
                  the area. The dough takes three days to make, but it is worth
                  it.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold">At Play</h3>
                <p>
                  Our 7 year old rescue dog Duffy keeps me active. We like to
                  throw the frisbee and take weekend hikes in one of our 6 local
                  parks here in Wilmington, DE.
                </p>
              </div>
            </div>

            {/* Image Grid Gallery */}

            <div class="grid grid-cols-7 grid-row-3 gap-4">
              <div className="col-span-3 h-84">
                <img
                  className="object-cover w-full h-full"
                  src="https://lngphvwiruyfwvdkclxc.supabase.co/storage/v1/object/public/images/images/ACNM-miro.png"
                />
              </div>
              <div className="col-span-3">
                <img
                  className="object-cover w-full"
                  src="https://lngphvwiruyfwvdkclxc.supabase.co/storage/v1/object/public/images/images/IMG_0413.jpeg"
                />
              </div>
              <div className="col-span-3">
                <img
                  className="object-cover w-full h-full"
                  src="https://lngphvwiruyfwvdkclxc.supabase.co/storage/v1/object/public/images/images/X%20Lab%20Process%201"
                />
              </div>
              <div className="col-span-3">
                <img
                  className="object-cover"
                  src="https://lngphvwiruyfwvdkclxc.supabase.co/storage/v1/object/public/images/images/IMG_1754.JPG"
                />
              </div>
              {/* <div className="col-span-1">
                <img
                  className="object-fill w-full h-full"
                  src="https://lngphvwiruyfwvdkclxc.supabase.co/storage/v1/object/public/images/images/IMG_0413.jpeg"
                />
              </div> */}
            </div>
          </div>
        </div>
      </section>
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
