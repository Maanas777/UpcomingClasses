// components/Common/table/Checkbox.tsx
import React from 'react';

const Checkbox = ({ checked, onChange }: { checked: boolean; onChange: () => void }) => {
  return (
    <label className="inline-flex items-center mt-3">
      <input
        type="checkbox"
        className="form-checkbox h-5 w-5 text-blue-600"
        checked={checked}
        onChange={onChange}
      />
      <span className="ml-2 text-gray-700">Booked only</span>
    </label>
  );
};

export default Checkbox;
