import React, { useEffect, useState } from 'react';
import { Instructor } from '@/types/components/table';
import { Clock } from 'lucide-react';
import Button from './button'; 
import BlueButton from './blueButton'; 
import MobileModal from './mobileModal';

const MobileView = ({ instructor }: { instructor: Instructor }) => {
  const [timer, setTimer] = useState<number | null>(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleBookNowClick = () => {
    setIsPopupOpen(true); // Open the modal when "Book now" button is clicked
  };

  const handlePopupClose = () => {
    setIsPopupOpen(false);
  };

  const handlePopupConfirm = () => {
    setIsPopupOpen(false);
    const initialTime = 60 * 60; // Example initial time (1 hour)
    setTimer(initialTime);
  };

  const isLive = new Date(instructor.date).getTime() <= new Date().getTime() && instructor.live;

  useEffect(() => {
    if (timer!== null && timer > 0) {
      const interval = setInterval(() => {
        setTimer((prevTime) => (prevTime? prevTime - 1 : 0));
      }, 1000);
      return () => clearInterval(interval); // Clear the interval on component unmount
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
    <div className="mb-6 bg-white p-4 rounded-xl shadow-md">
      <div className="flex items-center mb-2">
        <img
          src={instructor?.image}
          className="inline-flex items-center justify-center mr-4 text-sm text-white transition-all duration-200 ease-soft-in-out h-12 w-12 rounded-xl"
          alt={instructor?.name}
        />
        <div className="flex flex-col">
          <h6 className="mb-0 text-sm leading-normal font-bold">{instructor?.subject}</h6>
          <p className="text-xs text-gray-500">{formatDateTime(new Date(instructor.date))}</p>
          {isLive && (
            <span className="ml-2 inline-block px-0.5 py-0.25 text-xxs font-semibold leading-none bg-white-700 text-red-600 rounded-md animate-pulse scale-100 hover:scale-105">
              ● Live
            </span>
          )}
        </div>
      </div>
      <div className="mb-4">
        <p className="mb-0 text-xs font-semibold leading-tight">
          By {instructor?.name}
        </p>
      </div>
      <div className="text-center">
        {timer!== null? (
          <div className="flex items-center mt-2 text-xs font-bold leading-tight text-blue-600">
            <Clock className="w-4 h-4 mr-1 font-bold" />
            <p>
              {Math.floor(timer / 60)}:
              {timer % 60 < 10? '0' : ''}
              {timer % 60}
            </p>  
          </div>
        ) : (
          isLive? (
            <BlueButton /> // Show "Join now" button if instructor is live
          ) : (
            <Button handlClick={handleBookNowClick} text="Book now" /> // Show "Book now" button otherwise
          )
        )}
      </div>
      {isPopupOpen && (
        <MobileModal onConfirm={handlePopupConfirm} onClose={handlePopupClose} />
      )}
    </div>
  );
};

export default MobileView;
