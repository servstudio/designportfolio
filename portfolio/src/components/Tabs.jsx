import { useState } from "react"
import { Tab } from "@headlessui/react"

function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}

export default function Example() {
  let [categories] = useState({
    Learn: [
      {
        id: 1,
        header: "Ethnographic Research",
        content:
          "I've written and conductied interviews with employyes and customers to understand their needs and pain points.",
      },
      {
        id: 2,
        header: "Workshop Fascilitation",
        content:
          "Workshops are a great way to realize alignment by encourages cross-functional teams to participate and think differently.",
      },
      {
        id: 3,
        header: "Storyboarding",
        content:
          "Storytelling has been the quickest way for me to understand problems and share solutions. It helps me envision the story that a concept will convey.",
      },
      {
        id: 4,
        header: "Service Blueprinting",
        content:
          "I use service blueprints to understand how a service currently works and find ways to make it better while visualizing opportunities for improvement.",
      },
      {
        id: 5,
        header: "Actor Network Mapping",
        content:
          "This approach to mapping to understand the relationships between actors in a given system helps identify opportunities for innovation and potential partnerships",
      },
      {
        id: 6,
        header: "Market Landscape Analysis",
        content:
          "I have used market landscape analysis to understand the competitive landscape of a given market and to identify opportunities for innovation.",
      },
    ],
    Experiment: [
      {
        id: 1,
        header: "Cognitive Walkthroughs",
        content:
          "Walking a group through every step of a service experience is a great way identify pain points and unseen opportunities.",
      },
      {
        id: 2,
        header: "Design Mockups",
        content:
          "Creating digital mockups are how I translate an idea into a concept that feels real enough to elicit better feedback.",
      },
      {
        id: 3,
        header: "Clickable Protoypes",
        content:
          "Created in Figma or Adobe XD, these are great for testing an idea quickly before too much time and money are spent on a given concept.",
      },
      {
        id: 4,
        header: "Experience Flow Diagrams",
        content:
          "These diagrams are a to understand the processes and decison points with a given service ecosytem to understand how to enable the happy path and service recovery without losing the ability to serve people at multiple levels.",
      },
      {
        id: 5,
        header: "Product Market Fit",
        content:
          "I like to use market metrics to understand the trade-offs, viability, and the addressable market for a given service.",
      },
    ],
    Implement: [
      {
        id: 1,
        header: "Design Documentation",
        content:
          "Many projects do not involved an interface, but if they do documentation is essential. I have found that creating documentation that is easy to understand and follow is the best way to ensure a service is implemented as intended.",
      },
      {
        id: 2,
        header: "Create a Roadmap",
        content:
          "All or nothing is an unrealistic mindset. I have found that creating a roadmap that prioritizes the most important features and capabilities is a great way to solve for the most important problems first without losing sight of the big picture.",
      },
      {
        id: 3,
        header: "Key Performance Metrics",
        content:
          "Shaping how a team considers success is a critical part of ensuring a service is meeting the needs of the people it serves. Understanding service performance has helped us identify opportunities for improvement and innovation as the service evolves.",
      },
      {
        id: 4,
        header: "Write Front-End Styles",
        content:
          "An ability to contribute code when needed is how I have been able to support scalable implementation.",
      },
      {
        id: 5,
        header: "Dev Support",
        content:
          "Working with developers by writing User Stories, creating and managing a backlog, or participating in agile rituals are ways I have worked to ensure the vision we created is realized as intended.",
      },
    ],
  })

  return (
    <div className="w-full px-2 sm:px-0">
      <Tab.Group>
        <Tab.List className="flex w-full p-1 mx-auto space-x-1">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  "w-full py-2.5 text-md leading-5 text-gray-100 hover:bg-gray-900 hover:text-gray-50 hover:font-normal",
                  "ring-orange-300 ring-opacity-30 ring-offset-1 ring-offset-orange-300 focus:outline-none focus:ring-2",
                  selected
                    ? "shadow text-orange-300 font-bold border-b-2 border-orange-300"
                    : "text-gray-100 hover:bg-orange-600] hover:text-gray-200"
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2 text-gray-800">
          {Object.values(categories).map((phases, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                "rounded-md p-4 space-y-4 "
                // "ring-offset-2 ring-offset-orange-600 focus:outline-none focus:ring-2"
              )}
            >
              <ul className="grid grid-gap-4 grid-col-1 md:grid-flow-row md:grid-cols-3 md:grid-gap-8">
                {phases.map((phase) => (
                  <li key={phase.id} className="relative p-3">
                    <h3 className="font-bold leading-5">{phase.header}</h3>
                    <p className="mt-2 text-sm">{phase.content}</p>
                  </li>
                ))}
              </ul>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}
