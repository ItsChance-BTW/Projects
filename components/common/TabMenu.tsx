import React from "react";

interface Option {
    text: string;
    active: boolean;
    disabled: boolean;
    onClick: () => void;
}

interface TabMenuProps {
    options: Option[];
}

const TabMenu: React.FC<TabMenuProps> = ({ options }) => {
    const tabMenu = options.map((props) => {
        const { text, active, disabled, onClick } = props;
        let style = "text-neutral-600";

        if (active) {
            style = "text-neutral-900 border border-neutral-200 drop-shadow";
        }

        return (
            <button
                key={`tab-menu-${text}`}
                className={`flex px-4 py-2.5 ${style} rounded text-base font-medium hover:bg-neutral-50 focus:bg-neutral-50 focus:ring focus:outline-none disabled:cursor-not-allowed disabled:text-neutral-400`}
                onClick={() => onClick()}
                disabled={disabled}
            >
                <span className="px-0.5">{text}</span>
            </button>
        );
    });
    return <div className="flex gap-2">{tabMenu}</div>;
};

export default TabMenu;
