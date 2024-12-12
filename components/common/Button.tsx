import React from "react";
import Link from "next/link";

interface ButtonProps {
    text: string;
    onClick: () => void;
    size: "M" | "L" | "XL" | "2XL";
    style:
        | "primary"
        | "secondary"
        | "tertiary"
        | "destructive"
        | "link"
        | "link-gray";
    href?: string;
    leftSVG?: { fill: string; path: string };
    rightSVG?: { fill: string; path: string };
    svgOnly?: { fill: string; path: string };
    disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
    text,
    onClick,
    size,
    style,
    href,
    leftSVG,
    rightSVG,
    svgOnly,
    disabled,
}) => {
    const buttonSizeMap = {
        M: "gap-1 px-3.5 py-2.5 text-sm",
        L: "gap-1.5 px-4 py-2.5 text-base",
        XL: "gap-1.5 px-5 py-3 text-base",
        "2XL": "gap-2.5 px-6 py-4 text-lg",
    };

    const linkSizeMap = {
        M: "gap-1 text-sm",
        L: "gap-1.5 text-base",
        XL: "gap-1.5 text-base",
        "2XL": "gap-2.5 text-lg",
    };

    const iconOnlySizeMap = {
        M: "px-2.5 py-2.5",
        L: "px-3 py-3",
        XL: "px-3.5 py-3.5",
        "2XL": "px-4 py-4",
    };

    const styleMap = {
        primary:
            "bg-indigo-700 text-white hover:bg-indigo-800 focus:bg-indigo-800 focus:ring focus:ring-[#444CE7]/[.12] focus:outline-none disabled:text-neutral-400 disabled:bg-neutral-100",
        secondary:
            "bg-white text-neutral-900 border border-neutral-200 hover:bg-neutral-50 focus:bg-neutral-50 focus:ring focus:ring-[#444CE7]/[.12] focus:outline-none disabled:text-neutral-400 disabled:bg-neutral-100",
        tertiary:
            "bg-transparent text-indigo-700 drop-shadow-none hover:bg-neutral-50 focus:bg-neutral-50 focus:ring focus:ring-[#444CE7]/[.12] focus:outline-none disabled:text-neutral-400 hover:disabled:bg-transparent",
        destructive:
            "bg-red-600 text-white hover:bg-red-700 focus:bg-red-700 focus:ring focus:ring-[#444CE7]/[.12] focus:outline-none disabled:text-neutral-400 disabled:bg-transparent disabled:drop-shadow-none hover:disabled:bg-transparent",
        link: "text-indigo-700 focus:ring focus:ring-[#444CE7]/[.12] focus:outline-none",
        "link-gray": "text-neutral-600 focus:ring focus:ring-[#444CE7]/[.12] focus:outline-none",
    };

    if (href) {
        if (svgOnly) {
            const { fill, path } = svgOnly;
    
            return (
                <Link
                    href={href}
                    className={`flex items-center ${linkSizeMap[size]} ${styleMap[style]} p-0 rounded cursor-pointer aria-disabled:cursor-not-allowed aria-disabled:text-neutral-400`}
                    aria-disabled={disabled}
                    tabIndex={disabled ? -1 : undefined}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill={fill}
                        width={17}
                        height={17}
                    >
                        <path d={path}></path>
                    </svg>
                </Link>
            );
        }

        return (
            <Link
                href={href}
                className={`flex items-center ${linkSizeMap[size]} ${styleMap[style]} p-0 text-medium whitespace-nowrap rounded cursor-pointer aria-disabled:cursor-not-allowed aria-disabled:text-neutral-400`}
                aria-disabled={disabled}
                tabIndex={disabled ? -1 : undefined}
            >
                {leftSVG ? (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill={leftSVG.fill}
                        width={17}
                        height={17}
                    >
                        <path d={leftSVG.path}></path>
                    </svg>
                ) : (
                    ""
                )}
                <p className="px-0.5">{text}</p>
                {rightSVG ? (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill={rightSVG.fill}
                        width={17}
                        height={17}
                    >
                        <path d={rightSVG.path}></path>
                    </svg>
                ) : (
                    ""
                )}
            </Link>
        );
    }

    if (svgOnly) {
        const { fill, path } = svgOnly;

        return (
            <button
                onClick={() => onClick}
                className={`flex items-center ${iconOnlySizeMap[size]} ${styleMap[style]} rounded drop-shadow cursor-pointer disabled:cursor-not-allowed`}
                disabled={disabled}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill={fill}
                    width={17}
                    height={17}
                >
                    <path d={path}></path>
                </svg>
            </button>
        );
    }

    return (
        <button
            onClick={() => onClick}
            className={`flex items-center ${buttonSizeMap[size]} ${styleMap[style]} text-medium whitespace-nowrap rounded drop-shadow cursor-pointer disabled:cursor-not-allowed`}
            disabled={disabled}
        >
            {leftSVG ? (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill={leftSVG.fill}
                    width={17}
                    height={17}
                >
                    <path d={leftSVG.path}></path>
                </svg>
            ) : (
                ""
            )}
            <p className="px-0.5">{text}</p>
            {rightSVG ? (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill={rightSVG.fill}
                    width={17}
                    height={17}
                >
                    <path d={rightSVG.path}></path>
                </svg>
            ) : (
                ""
            )}
        </button>
    );
};

export default Button;
