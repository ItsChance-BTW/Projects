import styles from "./page.module.css";
import Image from "next/image";

export default function Page() {
  return (
    <div className={`${styles.main}`}>
      {/* Container */}
      <div className="flex justify-center mx-auto pt-[200px]">
        {/* Card */}
        <div className="bg-white flex flex-col gap-4 p-[24px] rounded-lg w-[340px] h-[233px] text-base font-normal text-neutral-600">
          {/* Profile */}
          <div className="flex gap-4 h-[49px] w-full">
            <Image
              src={`/img/profile-thumbnail.png`}
              alt="Profile Image"
              width={48}
              height={48}
            />
            <div className="flex flex-col gap-px">
              <div className="neutral-900 h-7 text-[18px] font-semibold leading-7">
                Sarah Dole
              </div>
              <div className="text-neutral-600 h-5 text-[14px] leading-5">
                @sarahdole
              </div>
            </div>
          </div>
          <blockquote>
            <p>
              I&apos;ve been searching for high-quality abstract images for my design
              projects, and I&apos;m thrilled to have found this platform. The
              variety and depth of creativity are astounding!
            </p>
          </blockquote>
        </div>
      </div>
    </div>
  );
}
