import React from "react"

function Card() {
  return (
    <div className="flex flex-col col-span-2 p-8 bg-gray-800 rounded-md min-h-">
      <h2 className="mb-4 text-2xl font-black text-white">{title}</h2>
      <p className="line-clamp-2">{blurb}</p>
    </div>
  )
}

export default Card
