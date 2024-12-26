import React from "react";

interface InputProps {
    label: string;
    type: string;
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    required?: boolean;
    placeholder?: string;
    textarea?: boolean;
}

const Input: React.FC<InputProps> = ({ label, type, name, value, onChange, required = false, placeholder = "", textarea = false }) => {
    return (
        <div className="mt-4">
            <label className="flex justify-center mb-1 mt-7 font-bold text-lg" htmlFor={name}>{label}</label>
            {textarea ? (
                <textarea className="w-96 h-60 border-t-pink-600 rounded-3xl text-base p-2"
                    id={name}
                    name={name}
                    value={value}
                    onChange={onChange}
                    required={required}
                    placeholder={placeholder}
                />
            ) : (
                <input className="w-96 rounded-3xl border-t-pink-600 text-base p-1"
                    id={name}
                    type={type}
                    name={name}
                    value={value}
                    onChange={onChange}
                    required={required}
                    placeholder={placeholder}
                />
            )}
        </div>
    );
};

export default Input;
