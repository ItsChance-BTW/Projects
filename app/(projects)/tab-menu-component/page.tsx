"use client";

import { useState } from "react";
import TabMenu from "@/components/common/TabMenu";

type options = {
    [key: string]: string;
}

export default function Page() {
    const [activeTab, setActiveTab] = useState("account");

    const textOutputs: options = {
        account:
            "The Account Management section provides a comprehensive view of your personal information and settings. Here, you can update your profile details, manage contact information, and customize your preferences to enhance your user experience.",
        security:
            "The Security Settings section is dedicated to protecting your account and personal data. Here, you can manage various security features to ensure your information remains safe and secure.",
        plan: "The Subscription Plan section provides details about your current plan and available upgrades. Here, you can review your plan’s benefits, manage billing information, and explore other subscription options to find the best fit for your needs.",
    };

    return (
        <div className="flex justify-center items-center py-[200px]">
            <div className="flex flex-col gap-6 w-[300px]">
                <TabMenu
                    options={[
                        {
                            text: "Account",
                            active: activeTab === 'account',
                            disabled: false,
                            onClick: () => setActiveTab("account"),
                        },
                        {
                            text: "Security",
                            active: activeTab === 'security',
                            disabled: false,
                            onClick: () => setActiveTab("security"),
                        },
                        {
                            text: "Plan",
                            active: activeTab === 'plan',
                            disabled: false,
                            onClick: () => setActiveTab("plan"),
                        },
                    ]}
                />
                <div className="text-neutral-900 text-medium">
                    <span>{textOutputs[activeTab]}</span>
                </div>
            </div>
        </div>
    );
}
