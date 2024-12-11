'use client';

import Button from "@/components/common/Button";

export default function Page() {
  return (
    <div className="py-[112px] bg-white">
      <div className="flex flex-col gap-12 items-center">
        <div className="flex items-center gap-5">
          <Button
            text="Button CTA"
            onClick={() => {}}
            size={"M"}
            type={"primary"}
          />
          <Button
            text="Button CTA"
            onClick={() => {}}
            size={"L"}
            type={"primary"}
          />
          <Button
            text="Button CTA"
            onClick={() => {}}
            size={"XL"}
            type={"primary"}
          />
          <Button
            text="Button CTA"
            onClick={() => {}}
            size={"2XL"}
            type={"primary"}
          />
          <Button
            text="Button CTA"
            onClick={() => {}}
            size={"2XL"}
            type={"primary"}
            iconOnlySrc="img/star-line.svg"
          />
        </div>
      </div>
    </div>
  );
}
