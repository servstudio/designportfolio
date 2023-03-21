import React from "react"
import { HandRaisedIcon, HeartIcon } from "@heroicons/react/24/solid"

function Footer() {
  return (
    <div className="bg-gray-800 w-full p-10 justify-center">
      <div className="grid grid-cols-2 grid-flow-col gap-8 justify-center text-center">
        <div className="flex align-baseline space-x-3">
          <p>Made by </p>
          <HandRaisedIcon className="h-6 w-6" /> <p>with</p>
          <HeartIcon className="h-6 w-6" />
          <p>in Wilmington, Delaware.</p>
        </div>
        <br></br>
        <p>Rich Ekelman 2022 All Rights Resevered.</p>
      </div>
    </div>
  )
}

export default Footer
