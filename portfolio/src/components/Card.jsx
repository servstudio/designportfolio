import React from "react"

function Card() {
  return (
    <div className="flex flex-col bg-gray-800 p-8 min-h- rounded-md col-span-2">
      <h2 className="text-white font-black text-2xl mb-4">{title}</h2>
      <p className="line-clamp-2">{blurb}</p>
    </div>
  )
}

export default Card
