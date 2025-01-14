"use client";

import RadioCard from "@/components/common/RadioCard";

export default function Page() {
    return (
        <div className="flex flex-col gap-8 justify-center items-center py-[200px]">
            <div className="flex flex-wrap justify-center items-center gap-x-4 md:gap-x-6 gap-y-3 md:gap-y-6 w-[300px] md:w-[448px] lg:w-[640px]">
                <RadioCard
                    text="Weekly"
                    selected={false}
                    onClick={() => {}}
                    size="S"
                    leftSVG={{
                        fill: "currentColor",
                        path: "M17 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H7V1H9V3H15V1H17V3ZM4 9V19H20V9H4ZM6 13H11V17H6V13Z",
                    }}
                />
                <RadioCard
                    text="Weekly"
                    selected={false}
                    onClick={() => {}}
                    size="M"
                />
                <RadioCard
                    text="Weekly"
                    selected={false}
                    onClick={() => {}}
                    size="L"
                    rightSVG={{
                        fill: "currentColor",
                        path: "M17 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H7V1H9V3H15V1H17V3ZM4 9V19H20V9H4ZM6 13H11V17H6V13Z",
                    }}
                />
                <RadioCard
                    text="Weekly"
                    selected={false}
                    onClick={() => {}}
                    size="XL"
                    leftSVG={{
                        fill: "currentColor",
                        path: "M17 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H7V1H9V3H15V1H17V3ZM4 9V19H20V9H4ZM6 13H11V17H6V13Z",
                    }}
                    rightSVG={{
                        fill: "currentColor",
                        path: "M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z",
                    }}
                />
                <RadioCard
                    text="Weekly"
                    selected={false}
                    onClick={() => {}}
                    size="2XL"
                    svgOnly={{
                        fill: "currentColor",
                        path: "M17 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H7V1H9V3H15V1H17V3ZM4 9V19H20V9H4ZM6 13H11V17H6V13Z",
                    }}
                />
            </div>
            <div className="flex flex-wrap justify-center items-center gap-x-4 md:gap-x-6 gap-y-3 md:gap-y-6 w-[300px] md:w-[448px] lg:w-[640px]">
                <RadioCard
                    text="Monthly"
                    selected={true}
                    onClick={() => {}}
                    size="S"
                    leftSVG={{
                        fill: "currentColor",
                        path: "M9 1V3H15V1H17V3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H7V1H9ZM20 11H4V19H20V11ZM8 14V16H6V14H8ZM18 14V16H10V14H18ZM7 5H4V9H20V5H17V7H15V5H9V7H7V5Z",
                    }}
                />
                <RadioCard
                    text="Monthly"
                    selected={true}
                    onClick={() => {}}
                    size="M"
                />
                <RadioCard
                    text="Monthly"
                    selected={true}
                    onClick={() => {}}
                    size="L"
                    rightSVG={{
                        fill: "currentColor",
                        path: "M9 1V3H15V1H17V3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H7V1H9ZM20 11H4V19H20V11ZM8 14V16H6V14H8ZM18 14V16H10V14H18ZM7 5H4V9H20V5H17V7H15V5H9V7H7V5Z",
                    }}
                />
                <RadioCard
                    text="Monthly"
                    selected={true}
                    onClick={() => {}}
                    size="XL"
                    leftSVG={{
                        fill: "currentColor",
                        path: "M9 1V3H15V1H17V3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H7V1H9ZM20 11H4V19H20V11ZM8 14V16H6V14H8ZM18 14V16H10V14H18ZM7 5H4V9H20V5H17V7H15V5H9V7H7V5Z",
                    }}
                    rightSVG={{
                        fill: "currentColor",
                        path: "M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z",
                    }}
                />
                <RadioCard
                    text="Monthly"
                    selected={true}
                    onClick={() => {}}
                    size="2XL"
                    svgOnly={{
                        fill: "currentColor",
                        path: "M9 1V3H15V1H17V3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H7V1H9ZM20 11H4V19H20V11ZM8 14V16H6V14H8ZM18 14V16H10V14H18ZM7 5H4V9H20V5H17V7H15V5H9V7H7V5Z",
                    }}
                />
            </div>
            <div className="flex flex-wrap justify-center items-center gap-x-4 md:gap-x-6 gap-y-3 md:gap-y-6 w-[300px] md:w-[448px] lg:w-[640px]">
                <RadioCard
                    text="Annually"
                    selected={false}
                    disabled={true}
                    onClick={() => {}}
                    size="S"
                    leftSVG={{
                        fill: "currentColor",
                        path: "M9 1V3H15V1H17V3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H7V1H9ZM20 11H4V19H20V11ZM7 5H4V9H20V5H17V7H15V5H9V7H7V5Z",
                    }}
                />
                <RadioCard
                    text="Annually"
                    selected={true}
                    disabled={true}
                    onClick={() => {}}
                    size="M"
                />
                <RadioCard
                    text="Annually"
                    selected={true}
                    disabled={true}
                    onClick={() => {}}
                    size="L"
                    rightSVG={{
                        fill: "currentColor",
                        path: "M9 1V3H15V1H17V3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H7V1H9ZM20 11H4V19H20V11ZM7 5H4V9H20V5H17V7H15V5H9V7H7V5Z",
                    }}
                />
                <RadioCard
                    text="Annually"
                    selected={true}
                    disabled={true}
                    onClick={() => {}}
                    size="XL"
                    leftSVG={{
                        fill: "currentColor",
                        path: "M9 1V3H15V1H17V3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H7V1H9ZM20 11H4V19H20V11ZM7 5H4V9H20V5H17V7H15V5H9V7H7V5Z",
                    }}
                    rightSVG={{
                        fill: "currentColor",
                        path: "M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z",
                    }}
                />
                <RadioCard
                    text="Annually"
                    selected={true}
                    disabled={true}
                    onClick={() => {}}
                    size="2XL"
                    svgOnly={{
                        fill: "currentColor",
                        path: "M9 1V3H15V1H17V3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H7V1H9ZM20 11H4V19H20V11ZM7 5H4V9H20V5H17V7H15V5H9V7H7V5Z",
                    }}
                />
            </div>
        </div>
    );
}
