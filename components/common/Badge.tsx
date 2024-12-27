interface LabelProps {
    text: string;
    size: "S" | "M" | "L";
    style: "Neutral" | "Error" | "Warning" | "Success" | "Brand";
}

const Label: React.FC<LabelProps> = ({ text, size, style }) => {
    const sizeMap = {
        S: "px-1.5 py-0.5 text-xs",
        M: "px-2 py-0.5 text-sm",
        L: "px-2.5 py-1 text-sm",
    };

    const styleMap = {
        Neutral: "text-neutral-600 bg-gray-50 border-neutral-200",
        Error: "text-red-600 bg-red-50 border-red-200",
        Warning: "text-amber-700 bg-amber-50 border-amber-200",
        Success: "text-green-700 bg-green-50 border-green-200",
        Brand: "text-indigo-700 bg-indigo-50 border-indigo-200",
    };

    return (
        <span className={`${sizeMap[size]} ${styleMap[style]} text-center border rounded-full`}>{text}</span>
    );
};

export default Label;
