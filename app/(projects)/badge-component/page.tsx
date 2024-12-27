import Badge from "@/components/common/Badge";

export default function Page() {
    return (
        <div className="flex justify-center items-center py-[200px]">
            <div className="flex flex-col gap-6 w-[200px]">
                <div className="flex items-center gap-6">
                    <Badge text="Label" size="S" style="Neutral" />
                    <Badge text="Label" size="M" style="Neutral" />
                    <Badge text="Label" size="L" style="Neutral" />
                </div>
                <div className="flex items-center gap-6">
                    <Badge text="Label" size="S" style="Error" />
                    <Badge text="Label" size="M" style="Error" />
                    <Badge text="Label" size="L" style="Error" />
                </div>
                <div className="flex items-center gap-6">
                    <Badge text="Label" size="S" style="Warning" />
                    <Badge text="Label" size="M" style="Warning" />
                    <Badge text="Label" size="L" style="Warning" />
                </div>
                <div className="flex items-center gap-6">
                    <Badge text="Label" size="S" style="Success" />
                    <Badge text="Label" size="M" style="Success" />
                    <Badge text="Label" size="L" style="Success" />
                </div>
                <div className="flex items-center gap-6">
                    <Badge text="Label" size="S" style="Brand" />
                    <Badge text="Label" size="M" style="Brand" />
                    <Badge text="Label" size="L" style="Brand" />
                </div>
            </div>
        </div>
    );
}
