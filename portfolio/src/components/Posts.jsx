const posts = [
  {
    id: 1,
    title:
      "5 Reasons Storyboards Should Be Your First Service Design Prototype",
    href: "https://medium.com/seven-two-four/5-reasons-storyboards-should-be-your-first-service-design-prototype-34a377a64f0e",
    description:
      "Focus on the story, the service will come. Storyboards make for a more informed first prototype. They create an active way to transition from understanding the present to shaping the future.",
    imageUrl:
      "https://miro.medium.com/v2/resize:fit:2000/format:webp/1*1F-zdShghxgi8HOuJe-c1w.jpeg",
    date: "December 2017",
    datetime: "2017-12-21",
    href: "#",
    imageUrl:
      "https://miro.medium.com/v2/resize:fit:2000/format:webp/1*1F-zdShghxgi8HOuJe-c1w.jpeg",
  },
  {
    id: 2,
    title: "How Service Design Extends Other Disciplines",
    href: "#",
    description:
      "Service design is not different from other disciplines, but rather a cross-disciplinary extension.",
    imageUrl:
      "https://miro.medium.com/v2/resize:fit:2000/format:webp/1*1F-zdShghxgi8HOuJe-c1w.jpeg",
    date: "January 2019",
    datetime: "2019-01-31",
    href: "https://medium.com/seven-two-four/in-early-december-i-had-the-opportunity-to-speak-to-the-service-design-networks-community-in-d-c-4ca8a8dfac93",
    imageUrl:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 3,
    title: "Three Reasons Homegrown Service Design Might Be the Best Start",
    href: "#",
    description:
      "Service design is not different from other disciplines, but rather a cross-disciplinary extension.",
    imageUrl:
      "https://miro.medium.com/v2/resize:fit:2000/format:webp/1*1F-zdShghxgi8HOuJe-c1w.jpeg",
    date: "August 2017",
    datetime: "2017-08-30",
    href: "https://medium.com/@richekelman/three-reasons-homegrown-service-design-might-be-the-best-start-ff3ede9fa6be",
    imageUrl:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
]

export default function Posts() {
  return (
    <div className="py-24 sm:py-32">
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl text-gray-900 sm:text-4xl">Writing</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            My thoughts on design, research, and strategy.{" "}
          </p>
        </div>
        <div className="grid max-w-2xl grid-cols-1 mx-auto mt-16 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.id} className="">
              <div className="relative w-full">
                <img
                  src={post.imageUrl}
                  alt={`${post.title} image`}
                  className="aspect-[16/9] w-full rounded-md bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
              </div>
              <div className="flex flex-col items-baseline max-w-xl align-top">
                <div className="flex items-center mt-8 text-xs gap-x-4">
                  <time dateTime={post.datetime} className="">
                    {post.date}
                  </time>
                </div>
                <div className="items-stretch Flex">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-sky-700 dark:text-orange-400 group-hover:font-bold group-hover:underline">
                    <a href={post.href}>
                      <span className="absolute inset-0 mb-auto" />
                      {post.title}
                    </a>
                  </h3>
                  <p className="mt-4 leading-6 text-md line-clamp-3">
                    {post.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
