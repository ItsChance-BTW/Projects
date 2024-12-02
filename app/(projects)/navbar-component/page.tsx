import Image from "next/image";

export default function Page() {
  return (
    <div className="bg-gradient-to-br from-[#F9FAFB] to-[#D2D6DB] h-screen">
      <div className="px-[112px] pt-4 h-[84px]">
        <main className="flex items-center place-content-between gap-[96px] py-3">
          <div>
            <Image
              src={"img/abstractly.svg"}
              height={32}
              width={112}
              alt="Brand Logo"
            />
          </div>
          <div className="hidden lg:flex items-center grow gap-8 text-neutral-600 ">
            <a
              className="px-0.5 hover:text-neutral-900 focus:text-neutral-900 focus:ring focus:ring-[#444CE7]/[.12] focus:rounded focus:outline-none"
              href=""
            >
              Home
            </a>
            <a
              className="px-0.5 hover:text-neutral-900 focus:text-neutral-900 focus:ring focus:ring-[#444CE7]/[.12] focus:rounded focus:outline-none"
              href=""
            >
              Features
            </a>
            <a
              className="px-0.5 hover:text-neutral-900 focus:text-neutral-900 focus:ring focus:ring-[#444CE7]/[.12] focus:rounded focus:outline-none"
              href=""
            >
              Pricing
            </a>
            <a
              className="px-0.5 hover:text-neutral-900 focus:text-neutral-900 focus:ring focus:ring-[#444CE7]/[.12] focus:rounded focus:outline-none"
              href=""
            >
              About us
            </a>
            <a
              className="px-0.5 hover:text-neutral-900 focus:text-neutral-900 focus:ring focus:ring-[#444CE7]/[.12] focus:rounded focus:outline-none"
              href=""
            >
              Contact
            </a>
          </div>
          <div className="hidden lg:flex gap-4 md:hidden">
                <a className="px-4 py-2.5 rounded text-neutral-900 bg-neutral-200" href="">Learn more</a>
                <a className="px-4 py-2.5 rounded text-white bg-indigo-700" href="">See pricing</a>
          </div>
          <i className="lg:hidden ri-menu-line text-neutral-600"></i>
        </main>
      </div>
    </div>
  );
}
