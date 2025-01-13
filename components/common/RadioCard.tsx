interface RadioCardProps {
    text: string;
    active: boolean;
    onClick: () => void;
    size: "S" | "M" | "L" | "XL" | "2XL";
    leftSVG?: { fill: string; path: string };
    rightSVG?: { fill: string; path: string };
    svgOnly?: { fill: string; path: string };
    disabled?: boolean;
}

const RadioCard: React.FC<RadioCardProps> = ({
    text,
    active,
    onClick,
    size,
    leftSVG,
    rightSVG,
    svgOnly,
    disabled,
}) => {
    if (svgOnly) {
        const { fill, path } = svgOnly;

        return (
            <button
                onClick={() => onClick}
                className="flex items-center text-medium whitespace-nowrap cursor-pointer disabled:cursor-not-allowed"
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
            className="flex items-center text-medium whitespace-nowrap cursor-pointer disabled:cursor-not-allowed"
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
