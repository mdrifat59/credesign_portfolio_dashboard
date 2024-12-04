import React, { useEffect } from 'react'

const Toast = ({ message, visible, onClose }) => {
    useEffect(() => {
        if (visible) {
          const timer = setTimeout(() => {
            onClose();
          }, 3000); // Auto close after 3 seconds
          return () => clearTimeout(timer);
        }
      }, [visible, onClose]);
    
      return (
        <div
          className={`fixed top-5 right-5 transition-transform duration-500 ${
            visible
              ? "translate-y-0 opacity-100"
              : "-translate-y-5 opacity-0 pointer-events-none"
          }`}
        >
          <div className="flex items-center gap-4 p-4 bg-green-500 text-white rounded-lg shadow-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12l2 2 4-4m5 5.286V15a9 9 0 10-6 8.485M12 9v3"
              />
            </svg>
            <span>{message}</span>
          </div>
        </div>
      );
}

export default Toast