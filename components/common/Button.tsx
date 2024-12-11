import React from "react";

interface ButtonProps {
    text: string;
    onClick: () => void;
    size: "M" | "L" | "XL" | "2XL";
    type: "primary" | "secondary" | "tertiary" | "destructive";
    leftIconSrc?: string;
    rightIconSrc?: string;
    iconOnlySrc?: string;
    disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
    text,
    onClick,
    size,
    type,
    leftIconSrc,
    rightIconSrc,
    iconOnlySrc,
    disabled,
}) => {
    const buttonSizeMap = {
        M: "gap-1 px-3.5 py-2.5 text-sm",
        L: "gap-1.5 px-4 py-2.5 text-base",
        XL: "gap-1.5 px-5 py-3 text-base",
        "2XL": "gap-2.5 px-6 py-4 text-lg",
    };

    const iconOnlySizeMap = {
        M: "px-2.5 py-2.5",
        L: "px-3 py-3",
        XL: "px-3.5 py-3.5",
        "2XL": "px-4 py-4",
    };

    const typeMap = {
        primary:
            "bg-indigo-700 text-white hover:bg-indigo-800 focus:bg-indigo-800 focus:ring focus:ring-[#444CE7]/[.12] focus:outline-none",
        secondary: "",
        tertiary: "",
        destructive: "",
    };

    if (iconOnlySrc) {
        return (
            <button
                onClick={() => onClick}
                className={`flex items-center ${iconOnlySizeMap[size]} ${typeMap[type]} rounded drop-shadow-sm cursor-pointer`}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    width={17}
                    height={17}
                >
                    <path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26ZM12.0006 15.968L16.2473 18.3451L15.2988 13.5717L18.8719 10.2674L14.039 9.69434L12.0006 5.27502L9.96214 9.69434L5.12921 10.2674L8.70231 13.5717L7.75383 18.3451L12.0006 15.968Z"></path>
                </svg>
            </button>
        );
    }

    return (
        <button
            onClick={() => onClick}
            className={`flex items-center ${buttonSizeMap[size]} ${typeMap[type]} text-medium whitespace-nowrap rounded drop-shadow-sm cursor-pointer`}
        >
            {text}
        </button>
    );
};

export default Button;
