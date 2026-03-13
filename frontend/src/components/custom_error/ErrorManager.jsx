"use client";
import React, { useEffect } from "react";
import toast from 'react-hot-toast';

export default function ErrorManager({ message, showPage = true }) {
  useEffect(() => {
    if (message) {
      if (Array.isArray(message)) {
        message.forEach((msg) => toast.error(msg));
      } else if (typeof message === 'object' && message !== null) {
        Object.values(message).forEach((msg) => toast.error(msg));
      } else {
        toast.error(message || "Internal Server Error");
      }
    }
  }, [message]);

  return !showPage ? "" : (
    <div className="d-flex py-5 justify-content-center align-items-center bg-light text-center">
      <div>
        <h1 className="display-1 fw-bold text-danger">500</h1>
        <h2 className="mb-3">
          {Array.isArray(message)
            ? message.join(', ')
            : typeof message === 'object' && message !== null
              ? Object.values(message).join(', ')
              : message || "Internal Server Error"
          }
        </h2>
        <p className="mb-4 text-secondary">
          Oops! Something went wrong on our side. Please try again later.
        </p>
      </div>
    </div>
  );
}