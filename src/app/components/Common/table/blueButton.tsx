import React from "react";
import { LogIn } from 'lucide';

const BlueButton = () => {
  return (
    <button className="flex items-center px-6 py-3 text-white bg-blue-500 rounded-lg shadow-md hover:bg-blue-600 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition duration-150 ease-in-out transform hover:scale-105">
  Join Now 
  <img className="w-4 ml-1" src="https://cdn-icons-png.flaticon.com/512/152/152532.png" alt="" /> 
    </button>
  );
};

export default BlueButton;
