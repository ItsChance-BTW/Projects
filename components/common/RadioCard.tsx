interface RadioCardProps {
    text: string;
    selected: boolean;
    onClick: () => void;
    size: "S" | "M" | "L" | "XL" | "2XL";
    leftSVG?: { fill: string; path: string };
    rightSVG?: { fill: string; path: string };
    svgOnly?: { fill: string; path: string };
    disabled?: boolean;
}

const RadioCard: React.FC<RadioCardProps> = ({
    text,
    selected,
    onClick,
    size,
    leftSVG,
    rightSVG,
    svgOnly,
    disabled,
}) => {
    const sizeMap = {
        S: "gap-1 px-3 py-2",
        M: "gap-1 px-3.5 py-2.5",
        L: "gap-1.5 px-4 py-2.5",
        XL: "gap-1.5 px-5 py-3",
        "2XL": "gap-2.5 px-6 py-4",
    };

    let borderColor = "border-neutral-200";

    if (selected) {
        borderColor = "border-indigo-600";
    }

    if (svgOnly) {
        const { fill, path } = svgOnly;

        return (
            <button
                onClick={() => onClick}
                className={`flex items-center ${sizeMap[size]} text-neutral-900 bg-white border ${borderColor} rounded text-sm text-medium whitespace-nowrap cursor-pointer hover:bg-neutral-50 focus:bg-neutral-50 focus:ring focus:ring-[#444CE7]/[.12] focus:outline-none disabled:cursor-not-allowed disabled:bg-neutral-100 disabled:border-none disabled:text-neutral-400`}
                disabled={disabled}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill={fill}
                    width={20}
                    height={20}
                >
                    <path d={path}></path>
                </svg>
            </button>
        );
    }
    return (
        <button
            onClick={() => onClick}
            className={`flex items-center ${sizeMap[size]} text-neutral-900 bg-white border ${borderColor} rounded text-sm text-medium whitespace-nowrap cursor-pointer hover:bg-neutral-50 focus:bg-neutral-50 focus:ring focus:ring-[#444CE7]/[.12] focus:outline-none disabled:cursor-not-allowed disabled:bg-neutral-100 disabled:border-none disabled:text-neutral-400`}
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

export default RadioCard;
