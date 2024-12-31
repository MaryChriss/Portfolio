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
                <textarea className="w-96 h-60 border-t-pink-600 rounded-3xl text-base p-2
                xs:w-72 xs:h-56 
                xmd:w-80 xmd:h-56
                xlg:w-96 xlg:h-60 
                sm:w-96 sm:h-60
                md:w-96 md:h-60
                lg:w-96 lg:h-60 
                xl:w-80 xl:h-56
                2xl:w-96 2xl:h-60
                "
                    id={name}
                    name={name}
                    value={value}
                    onChange={onChange}
                    required={required}
                    placeholder={placeholder}
                />
            ) : (
                <input className="w-96 rounded-3xl border-t-pink-600 text-base p-1
                xs:w-72 
                xmd:w-80 
                xlg:w-96  
                sm:w-96 
                md:w-96 
                lg:w-96 
                xl:w-80
                2xl:w-96 
                "
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
