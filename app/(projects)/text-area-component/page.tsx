import TextArea from "@/components/common/TextArea";

export default function Page() {
    return (
        <div className="flex justify-center py-[112px]">
            <div className="flex flex-col gap-12 w-[340px]">
                <TextArea
                    text=""
                    label="Description"
                    placeholder="Write your message..."
                    charLimit={500}
                />
            </div>
        </div>
    );
}
