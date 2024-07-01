// components/TableRow.tsx
"use client";
import React, { useEffect, useState } from "react";
import { Instructor } from "@/types/components/table";
import { Clock } from "lucide-react";
import Button from "./button";
import BlueButton from "./blueButton";
import Modal from "./modal";

const TableRow = ({ instructor }: { instructor: Instructor }) => {
  const [timer, setTimer] = useState<number | null>(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleBookNowClick = () => {
    setIsPopupOpen(true);
  };

  const handlePopupClose = () => {
    setIsPopupOpen(false);
  };

  const handlePopupConfirm = () => {
    setIsPopupOpen(false);
    const initialTime = 60 * 60; // 1 hour in seconds
    setTimer(initialTime);
  };

  const isLive =
    new Date(instructor.date).getTime() <= new Date().getTime() &&
    instructor.live;

  useEffect(() => {
    if (timer !== null && timer > 0) {
      const interval = setInterval(() => {
        setTimer((prevTime) => (prevTime ? prevTime - 1 : 0));
      }, 1000);
      return () => clearInterval(interval); 
    }
  }, [timer]);

  return (
    <div className="table-row lg:table-row">
      <div className="table-cell p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
        <p className="mb-0 text-xs font-semibold leading-tight transition duration-300 ease-in-out">
          {instructor.subject}
          {isLive && (
            <span className="ml-2 inline-block px-1 py-0.5 text-xs font-semibold leading-none bg-red-700 text-white rounded-md animate-pulse scale-100 hover:scale-105">
              Live
            </span>
          )}
        </p>
      </div>
      <div className="table-cell p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
        <div className="flex px-2 py-1">
          <div>
            <img
              src={instructor.image}
              className="inline-flex items-center justify-center mr-4 text-sm text-white transition-all duration-200 ease-soft-in-out h-9 w-9 rounded-xl"
              alt={instructor.name}
            />
          </div>

          <div className="flex flex-col justify-center">
            <h6 className="mb-0 text-sm leading-normal">{instructor.name}</h6>
            <p className="mb-0 text-xs leading-tight text-slate-400 cursor-pointer">
              Additional Details
            </p>
          </div>
        </div>
      </div>

      <div className="table-cell p-2 text-sm leading-normal text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
  {isLive ? (
    <BlueButton />
  ) : (
    timer === null ? (
      <Button handlClick={handleBookNowClick} text="Book now" />
    ) : (
      <div className="flex items-center mt-2 text-xs font-bold leading-tight text-blue-500">
        <Clock className="w-4 h-4 mr-1" />{" "}
        <p>
          Time remaining: {Math.floor(timer / 60)}:
          {timer % 60 < 10 ? "0" : ""}
          {timer % 60}
        </p>
      </div>
    )
  )}
        {isPopupOpen && (
            <Modal onConfirm={handlePopupConfirm} onClose={handlePopupClose} />
        )}
      </div>
    </div>
  );
};

export default TableRow;
