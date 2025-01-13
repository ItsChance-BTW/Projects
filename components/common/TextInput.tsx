"use client";

import { useState } from "react";

interface TextInputProps {
    text: string;
    label: string;
    placeholder: string;
    type: "text" | "email" | "number" | "file";
    hint?: string;
    error?: string;
    leftSVG?: { fill: string; path: string };
    rightSVG?: { fill: string; path: string };
    disabled?: boolean;
}

const TextInput: React.FC<TextInputProps> = ({
    text,
    label,
    placeholder,
    type,
    hint,
    error,
    leftSVG,
    rightSVG,
    disabled,
}) => {
    const [inputText, setInputText] = useState(text || "");
    let paddingLeft = "";
    let paddingRight = "";
    let ringColor = "";
    let svgColor = "text-neutral-400";
    let hintColor = "text-neutral-500";

    if (leftSVG) paddingLeft = "pl-[41px]";
    if (rightSVG) paddingRight = "pr-[38px]";
    if (error) {
        ringColor = "ring-red-600";
        svgColor = "text-red-600";
        hintColor = "text-red-600";
    }

    return (
        <div className="flex flex-col gap-1.5 text-sm">
            <div className="flex flex-col gap-1.5">
                <label htmlFor="input-text" className="text-neutral-700 font-medium">
                    {label}
                </label>
                <div className="relative">
                    {leftSVG ? (
                        <div className="text-neutral-400 absolute top-0 bottom-0 flex items-center pl-[14px]">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill={leftSVG.fill}
                                width={20}
                                height={20}
                            >
                                <path d={leftSVG.path}></path>
                            </svg>
                        </div>
                    ) : null}
                    <input
                        className={`px-3.5 py-2.5 ${paddingLeft} ${paddingRight} w-full text-neutral-900 bg-neutral-50 border border-neutral-200 rounded placeholder:text-neutral-500 focus:outline-none focus:ring ${ringColor} disabled:border-neutral-100 disabled:placeholder:text-neutral-400 disabled:cursor-not-allowed`}
                        id="input-text"
                        type={type}
                        placeholder={placeholder}
                        disabled={disabled}
                        aria-describedby="input-hint"
                        value={inputText}
                        onChange={(e) => setInputText(e.target.value)}
                    />
                    {rightSVG ? (
                        <div
                            className={`${svgColor} absolute top-0 bottom-0 right-0 flex items-center pr-[17px]`}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill={rightSVG.fill}
                                width={16}
                                height={16}
                            >
                                <path d={rightSVG.path}></path>
                            </svg>
                        </div>
                    ) : null}
                </div>
            </div>
            <div id="input-hint" className={`${hintColor}`}>
                {error ? error : hint}
            </div>
        </div>
    );
};

export default TextInput;
