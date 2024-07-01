// components/TableRow.tsx

"use client";
import React, { useEffect, useState } from "react";
import { Instructor } from "@/types/components/table";
import { Clock } from "lucide-react";
import Button from "./button";
import BlueButton from "./blueButton";
import Modal from "./modal";

const TableRow = ({ instructor }: { instructor: Instructor }) => {
  const [timer, setTimer] = useState<number | null>(null); // State for countdown timer
  const [isPopupOpen, setIsPopupOpen] = useState(false); // State for modal open/close

  // Open modal when 'Book Now' button is clicked
  const handleBookNowClick = () => {
    setIsPopupOpen(true);
  };

  // Close modal
  const handlePopupClose = () => {
    setIsPopupOpen(false);
  };

  // Confirm action and close modal, set initial timer (1 hour)
  const handlePopupConfirm = () => {
    setIsPopupOpen(false);
    const initialTime = 60 * 60; // 1 hour in seconds
    setTimer(initialTime);
  };

  // Determine if class is live based on current time and instructor's date
  const isLive =
    new Date(instructor.date).getTime() <= new Date().getTime() &&
    instructor.live;

  // Effect to decrement timer every second until it reaches 0
  useEffect(() => {
    if (timer !== null && timer > 0) {
      const interval = setInterval(() => {
        setTimer((prevTime) => (prevTime ? prevTime - 1 : 0));
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

  // Function to format the date and time as "21st June 4pm"
  const formatDateTime = (date: Date) => {
    const day = date.getDate();
    let suffix = "";
    switch (day) {
      case 1:
      case 21:
      case 31:
        suffix = "st";
        break;
      case 2:
      case 22:
        suffix = "nd";
        break;
      case 3:
      case 23:
        suffix = "rd";
        break;
      default:
        suffix = "th";
        break;
    }
    const month = date.toLocaleString("en-us", { month: "long" });
    let hours = date.getHours();
    const ampm = hours >= 12 ? "pm" : "am";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    const minutes = date.getMinutes();
    return `${day}${suffix} ${month} ${hours}:${minutes < 10 ? "0" + minutes : minutes}${ampm}`;
  };

  return (
    <div className="table-row lg:table-row">
      {/* Subject and live status */}
      <div className="table-cell p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
        <p className="mb-0 text-xs font-semibold leading-tight transition duration-300 ease-in-out">
          {instructor.subject}
          {isLive && (
            <span className="ml-2 inline-block px-1 py-0.5 text-xs font-semibold leading-none bg-red-700 text-white rounded-md animate-pulse scale-100 hover:scale-105">
              Live
            </span>
          )}
        </p>
        {/* Date and time */}
        <p className="text-xs text-gray-500 mt-1">
          {formatDateTime(new Date(instructor.date))}
        </p>
      </div>
      {/* Instructor information */}
      <div className="table-cell p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
        <div className="flex px-2 py-1">
          <div>
            {/* Instructor image */}
            <img
              src={instructor.image}
              className="inline-flex items-center justify-center mr-4 text-sm text-white transition-all duration-200 ease-soft-in-out h-9 w-9 rounded-xl"
              alt={instructor.name}
            />
          </div>

          <div className="flex flex-col justify-center">
            {/* Instructor name */}
            <h6 className="mb-0 text-sm leading-normal">{instructor.name}</h6>
            {/* Additional details link */}
            <p className="mb-0 text-xs leading-tight text-slate-400 cursor-pointer">
              Additional Details
            </p>
          </div>
        </div>
      </div>

      {/* Action buttons or timer */}
      <div className="table-cell p-2 text-sm leading-normal text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
        {isLive ? (
          // Display 'Join Now' button for live classes
          <BlueButton />
        ) : timer === null ? (
          // Display 'Book Now' button if timer is not set
          <Button handlClick={handleBookNowClick} text="Book now" />
        ) : (
          // Display countdown timer if timer is set
          <div className="flex items-center mt-2 text-xs font-bold leading-tight text-blue-500">
            <Clock className="w-4 h-4 mr-1" />{" "}
            <p>
              Time remaining: {Math.floor(timer / 60)}:
              {timer % 60 < 10 ? "0" : ""}
              {timer % 60}
            </p>
          </div>
        )}
        {/* Modal for booking confirmation */}
        {isPopupOpen && <Modal onConfirm={handlePopupConfirm} onClose={handlePopupClose} />}
      </div>
    </div>
  );
};

export default TableRow;
