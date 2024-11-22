import Image from "next/image";

export default function Page() {
  return (
    <div className="bg-gradient-to-br from-[#F9FAFB] to-[#D2D6DB] h-screen py-[200px]">
      <div className="flex flex-col gap-10 w-[340px] h-[428px] bg-white mx-auto px-4 py-6 rounded-lg drop-shadow">
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
            <p className="text-sm text-neutral-600">
              Front End Engineer @ Microsoft
            </p>
          </div>
          <div>
            <p className="text-center text-neutral-600">
              I turn coffee into bugs which are fixed by someone else. Certified
              Stack Overflow and ChatGPT developer.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <button className="text-white bg-indigo-700 drop-shadow h-[44px] rounded">
            Contact me
          </button>
          <div className="flex justify-center gap-[16px] text-indigo-700">
            <button className="w-9 h-9">
              <i className="ri-github-fill"></i>
            </button>
            <button className="w-9 h-9">
              <i className="ri-linkedin-box-fill"></i>
            </button>
            <button className="w-9 h-9">
              <i className="ri-instagram-fill"></i>
            </button>
            <button className="w-9 h-9">
              <i className="ri-twitter-x-fill"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
