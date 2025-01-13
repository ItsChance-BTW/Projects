"use client";

import { useState } from "react";

interface TextAreaProps {
    text: string;
    label: string;
    placeholder: string;
    charLimit: number;
    error?: string;
    disabled?: boolean;
}

const TextArea: React.FC<TextAreaProps> = ({
    text,
    label,
    placeholder,
    charLimit,
    error,
    disabled,
}) => {
    const [inputText, setInputText] = useState(text || "");
    let ringColor = "";
    let borderColor = "border-neutral-200";
    let hintStyle = "justify-end text-neutral-500";

    if (error) {
        ringColor = "ring-red-600";
        borderColor = "border-red-600";
        hintStyle = "justify-start text-red-600";
    }

    return (
        <div className="flex flex-col gap-1.5 text-sm">
            <div className="flex flex-col gap-1.5">
                <label className="text-neutral-700 font-medium" htmlFor="input-text">
                    {label}
                </label>
                <textarea
                    className={`px-3.5 py-3 w-full h-[108px] text-neutral-900 bg-neutral-50 border ${borderColor} rounded-lg resize-none focus:outline-none focus:ring ${ringColor} disabled:border-neutral-100 disabled:placeholder:text-neutral-400 disabled:cursor-not-allowed`}
                    id="input-text"
                    value={inputText}
                    maxLength={charLimit}
                    placeholder={placeholder}
                    disabled={disabled}
                    onChange={(e) => setInputText(e.target.value)}
                ></textarea>
            </div>
            <div className={`flex text-sm ${hintStyle}`}>
                {error ? (
                    <span>{error}</span>
                ) : (
                    <span>
                        {inputText.length}/{charLimit}
                    </span>
                )}
            </div>
        </div>
    );
};

export default TextArea;
