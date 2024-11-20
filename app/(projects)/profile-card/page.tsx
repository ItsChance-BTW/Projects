import Image from "next/image";

export default function Page() {
  return (
    <div className="bg-gradient-to-br from-[#F9FAFB] to-[#D2D6DB] h-screen py-[200px]">
      <div className="flex gap-10 w-[340px] h-[428px] bg-white mx-auto px-4 py-6 rounded-lg drop-shadow">
        <div className="flex flex-col items-center gap-6 w-full h-[236px]">
          <div>
            <Image
              src={"/img/profile.png"}
              alt="Profile Image"
              width={64}
              height={64}
            />
          </div>
          <div className="flex flex-col gap-1 items-center h-[52px] w-full">
                <p className="text-lg font-medium text-neutral-900">Sarah Dole</p>
                <p className="text-sm text-neutral-600">Front End Engineer @ Microsoft</p>
          </div>
        </div>
      </div>
    </div>
  );
}
