import React from 'react'

function Marker({lat, lng}) {
  return (
    <div className="h-[1rem] w-[1rem] rounded-full bg-indigo-800 p-1 flex justify-center items-center">
        {lat} , {lng}
        <button className="h-[0.5rem] w-[0.5rem] rounded-full bg-yellow-800">

        </button>


    </div>
  )
}

export default Marker