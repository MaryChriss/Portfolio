import React, { useEffect } from "react";

interface ErrorModalProps {
    messages: string[];
    onClose: () => void;
    }

    const ErrorModal: React.FC<ErrorModalProps> = ({ messages, onClose }) => {
    useEffect(() => {
        const timer = setTimeout(onClose, 5000);
        return () => clearTimeout(timer);
    }, [onClose]);

    return (
        <div
            className="top-4 right-4 bg-white border-l-4 border-pink-300 text-black p-4 rounded-lg shadow-lg z-50 transition-transform animate-slideIn"
            >
        <div className="flex justify-between items-start">
            <div className="flex-1">
            <h3 className="font-semibold text-pink-500">Erro(s):</h3>
            <ul className="list-disc list-inside text-sm text-gray-700 mt-2">
                {messages.map((message, index) => (
                <li key={index}>{message}</li>
                ))}
            </ul>
            </div>

            <button
            onClick={onClose}
            className="relative ml-4 bg-red-600 text-white rounded-full h-8 w-8 flex items-center justify-center hover:bg-red-700 focus:outline-none"
            >
            ✕
            <svg
                className="absolute inset-0 h-8 w-8"
                viewBox="0 0 36 36"
            >

                <circle
                className="stroke-gray-300 fill-none stroke-2"
                cx="18"
                cy="18"
                r="16"
                />

                <circle
                className="stroke-white fill-none stroke-2 animate-countdown"
                cx="18"
                cy="18"
                r="16"
                style={{ strokeDasharray: 100, strokeDashoffset: 100 }}
                />
            </svg>
            </button>
        </div>
        </div>
    );
};

export default ErrorModal;
