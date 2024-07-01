'use client';

import React, { useState } from 'react';
import Instructors from '../../../../public/data/instructor';
import TableHeader from '../Common/table/tableheader'; 
import TableRow from '../Common/table/tablerow'; 
import MobileView from '../Common/table/mobile'; 
import Checkbox from '../Common/table/checkbox';

const InstructorTable = () => {
  const [booked, setBooked] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const handleCheckboxChange = () => {
    setBooked(!booked);
  };

  const filteredInstructors = booked
    ? Instructors.filter(instructor => instructor.isBooked)
    : Instructors;

  const totalPages = Math.ceil(filteredInstructors.length / itemsPerPage);
  const currentData = filteredInstructors.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="w-full px-6 py-6 mx-auto bg-slate-50 rounded-xl overflow-y-auto">
      <div className="flex flex-wrap -mx-3">
        <div className="flex-none w-full max-w-full px-3">
          <div className="relative flex flex-col min-w-0 mb-6 break-words bg-white border-0 border-transparent border-solid shadow-soft-xl rounded-2xl bg-clip-border">
            <div className="flex justify-between p-6 pb-0 mb-0 bg-white border-b-0 border-b-solid rounded-t-2xl border-b-transparent">
              <h6 className="text-lg font-semibold">Upcoming classes</h6>
              <Checkbox checked={booked} onChange={handleCheckboxChange} />
            </div>
            <div className="flex-auto px-0 pt-0 pb-2 overflow-y-auto hidden lg:block">
              <div className="table w-full mb-0 align-top border-gray-200 text-slate-500">
                <TableHeader />
                <div className="table-row-group">
                  {currentData.map((instructor, index) => (
                    <TableRow key={index} instructor={instructor} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="block lg:hidden">
        {filteredInstructors.map((instructor, index) => (
          <MobileView key={index} instructor={instructor} />
        ))}
      </div>
      {/* Pagination controls only visible on larger screens */}
      <div className="hidden lg:flex justify-center mt-4">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 mx-1 text-white bg-blue-500 rounded disabled:bg-gray-300"
        >
          Previous
        </button>
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={`px-4 py-2 mx-1 rounded ${
              currentPage === index + 1 ? 'bg-blue-700 text-white' : 'bg-blue-500 text-white'
            }`}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-4 py-2 mx-1 text-white bg-blue-500 rounded disabled:bg-gray-300"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default InstructorTable;
