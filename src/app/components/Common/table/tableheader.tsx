// components/TableHeader.tsx
import React from 'react';

const TableHeader = () => {
  return (
    <div className="table-header-group">
      <div className="table-row">
        <div className="table-cell px-6 py-3 font-bold text-left uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">
          Class name
        </div>
        <div className="table-cell px-6 py-3 pl-2 font-bold text-left uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">
          Instructor
        </div>
        <div className="table-cell px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">
          Actions
        </div>
      </div>
    </div>
  );
};

export default TableHeader;
