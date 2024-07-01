import React from 'react'
import { ModalProps } from '@/types/components/button'

const Modal: React.FC<ModalProps> = ({ onConfirm, onClose })  => {
  return (
    <div
    className="fixed inset-0 flex items-center justify-center z-50 bg-gray-700 bg-opacity-50"

  >
    <div
      className="relative bg-white rounded-lg shadow-md"
      style={{
        // left: "50%",
        transform: "translateX(-50%)",
        maxWidth: "90%",
      }}
    >
      <div className="p-4">
        <h4 className="mb-4 text-lg font-semibold text-gray-800">
          Confirm Booking
        </h4>
        <p className="mb-4 text-gray-600">
          Are you sure you want to book this class?
        </p>
        <div className="flex justify-end">
          <button
            onClick={onConfirm}
            className="px-3 py-2 mr-2 text-white bg-blue-600 hover:bg-blue-700 rounded-md"
          >
            Yes
          </button>
          <button
            onClick={onClose}
            className="px-3 py-2 text-white bg-gray-600 hover:bg-gray-700 rounded-md"
          >
            No
          </button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Modal