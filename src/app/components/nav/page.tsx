'use client'

import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";



const Page = () => {


const [toggle, settoggle] = useState(false)

const togglehandle=()=>{
    settoggle(!toggle)
}
    
  return (
    
    <div >
       
      <div className="container py-5 px-6">
        <ul className="flex flex-row justify-between">
          <li className="mr-auto font-bold text-2xl ">Dashboard</li>
          <div className="hidden md:flex space-x-8">
            <li className="text-sm text-gray-500 cursor-pointer">Blogs</li>
            <li className="text-sm text-gray-500 cursor-pointer">News</li>
            <li className="text-sm text-gray-500 cursor-pointer">Help center</li>
            <li className="text-sm text-gray-500 cursor-pointer">customer care</li>
          </div>
          <div className="md:hidden">
            <button onClick={togglehandle}>
             {toggle?<FaTimes/>:<FaBars/>}
            </button>
          </div>
        </ul>
      {toggle&&(
        <div className="md:hidden mt-4 space-y-2">
            <li className="text-sm text-gray-500 cursor-pointer">Blogs</li>
            <li className="text-sm text-gray-500 cursor-pointer">News</li>
            <li className="text-sm text-gray-500 cursor-pointer">Help center</li>
            <li className="text-sm text-gray-500 cursor-pointer">customer care</li>

        </div>


      )}

      </div>
    </div>
  );
};

export default Page;
