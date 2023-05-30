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
          "The most common way I have brought together cross-disciplinary teams to solve problems have been through leading them through a workshop employing bespoke activities designed to encourage participation and latteral thinking.",
      },
      {
        id: 3,
        header: "Storyboarding",
        content:
          "In my career the fastest way to understand a problem and communicate a solution has been through storytelling. This capability has allowed me to reflect the story a given concept will tell.",
      },
      {
        id: 4,
        header: "Service Blueprinting",
        content:
          "I use service blueprints to understand the current state of a service and to identify opportunities for improvement. I have also used them to communicate service gaps to stakeholders.",
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
        header: "Establish a Design System",
        content:
          "An ability to create a design system is how I have been able ensure a service is consistent and scalable.",
      },
      {
        id: 4,
        header: "Key Performance Metrics",
        content:
          "Shaping how a team considers success is a critical part of ensuring a service is meeting the needs of the people it serves. Understanding service performance has helped us identify opportunities for improvement and innovation as the service evolves.",
      },
      {
        id: 5,
        header: "Dev Support",
        content:
          "I believe that working with developers to ensure the vision of a given concept is realized is a key part of Service Design.",
      },
    ],
  })

  return (
    <div className="w-full px-2 sm:px-0">
      <Tab.Group>
        <Tab.List className="flex w-full p-1 mx-auto space-x-1 bg-gray-100 rounded-md">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  "w-full rounded-md py-2.5 text-md leading-5 text-gray-800 hover:bg-gray-900 hover:text-gray-50 hover:font-normal",
                  //   "ring-orange-400 ring-opacity-60 ring-offset-1 ring-offset-orange-400 focus:outline-none focus:ring-2",
                  selected
                    ? "shadow text-gray-600 bg-orange-300 font-bold"
                    : "text-gray-100 hover:bg-orange-300] hover:text-gray-800"
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
                "rounded-md bg-white p-4 space-y-4 "
                // "ring-offset-2 ring-offset-orange-600 focus:outline-none focus:ring-2"
              )}
            >
              <h3 className="text-center">Ways of Working</h3>

              <ul className="grid grid-gap-4 grid-col-1 md:grid-flow-row md:grid-cols-3 md:grid-gap-8">
                {phases.map((phase) => (
                  <li key={phase.id} className="relative p-3">
                    <h3 className="font-bold leading-5">{phase.header}</h3>
                    <p className="mt-2 text-sm text-gray-800">
                      <li>{phase.content}</li>
                    </p>
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
