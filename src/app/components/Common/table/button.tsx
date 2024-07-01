import React from 'react'

const button = ({text,handlClick}:{text:string,handlClick:()=>void}) => {
  return (
    <button onClick={handlClick} className="px-6 py-3 bg-white text-black font-semibold rounded-lg shadow-md hover:bg-gray-100 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition duration-150 ease-in-out transform hover:scale-105">
   {text}
  </button>
  )
}

export default button