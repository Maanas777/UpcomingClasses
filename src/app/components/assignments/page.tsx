// Assignments.js

import React from 'react';

const Assignments = () => {
  const assignments = [
    { title: 'Assignment 1', dueDate: '01/07/24' },
    { title: 'Assignment 2', dueDate: '10/07/24' },
  ];

  return (
    <div className="w-full max-w-xs px-6 py-6 mx-auto bg-white rounded-xl shadow-lg">
      <h6 className="mb-4 text-lg font-semibold text-gray-700">Assignments</h6>
      <ul className="space-y-4">
        {assignments.map((assignment, index) => (
          <li key={index} className="p-4 bg-gray-100 rounded-lg shadow-sm">
            <h5 className="text-md font-medium">{assignment.title}</h5>
            <p className="text-sm text-gray-500">Due: {assignment.dueDate}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Assignments;
