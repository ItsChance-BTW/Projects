import styles from "./page.module.css";
import Image from "next/image";

export default function Page() {
  return (
    <div className={`${styles.main}`}>
      <div className="flex justify-center items-center h-full">
        <div className="flex flex-col bg-white w-[340px] h-[504px] rounded-lg drop-shadow">
          <Image
            src={"/img/spacejoy.jpg"}
            alt="Blog Image"
            width={340}
            height={288}
            className="h-[288px] rounded-t-lg"
          />
          <div className="flex flex-col gap-3 px-4 py-6">
            <div className="flex flex-col h-[60px]">
              <div className="flex items-center w-[67px] h-6 px-2 py-0.5 bg-green-50 border border-green-200 rounded-full text-green-700 text-sm leading-5">
                Interior
              </div>
              <div className="font-semibold text-neutral-900 text-lg leading-7 ">
                Top 5 Living Room Inspirations
              </div>
            </div>
            <div className="flex flex-col items-start gap-6 h-[96px]">
              <div className="text-base leading-6 font-medium text-neutral-600">
                Curated vibrants colors for your living, make it pop & calm in
                the same time.
              </div>
              <div className="flex h-6 text-indigo-700">
                <button className="flex gap-1.5 hover:text-indigo-800 focus:text-indigo-800 focus:ring focus:rounded focus:ring-[#444CE7]/[.12]">
                  <p className="px-0.5">Read More</p>
                  <i className="ri-arrow-right-line w-5 h-5"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
