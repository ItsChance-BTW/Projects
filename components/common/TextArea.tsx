"use client";

import { useState } from "react";

interface TextAreaProps {
    text: string;
    label: string;
    placeholder: string;
    charLimit: number;
    hint?: string;
    error?: string;
    disabled?: boolean;
}

const TextArea: React.FC<TextAreaProps> = ({
    text,
    label,
    placeholder,
    charLimit,
    hint,
    error,
    disabled
}) => {
    const [inputText, setInputText] = useState(text || "");

    return (
        <div className="flex flex-col gap-1.5 text-sm">
            <div className="flex flex-col gap-1.5">
                <label className="text-neutral-700" htmlFor="input-text">
                    {label}
                </label>
                <textarea
                className="px-3.5 py-3 w-full h-[108px] text-neutral-900 bg-neutral-50 border border-neutral-200 rounded-lg resize-none focus:outline-none focus-ring disabled:border-neutral-100 disabled:placeholder:text-neutral-400"
                id="input-text"
                value={inputText}
                maxLength={charLimit}
                placeholder={placeholder}
                
                disabled={disabled}
                onChange={e => setInputText(e.target.value)}
                >
                </textarea>
            </div>
        </div>
    )
}

export default TextArea;