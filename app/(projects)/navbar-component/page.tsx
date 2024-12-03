import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div className="bg-gradient-to-br from-[#F9FAFB] to-[#D2D6DB] h-screen">
      <header className="px-[112px] pt-4 h-[84px]">
        <div className="flex items-center place-content-between gap-[96px] py-3">
          <Image
            src={"img/abstractly.svg"}
            height={32}
            width={112}
            alt="Brand Logo"
          />
          <div className="hidden lg:flex items-center grow gap-8 text-neutral-600 whitespace-nowrap">
            <Link 
                href="/"
                className="px-0.5 hover:text-neutral-900 focus:text-neutral-900 focus:ring focus:ring-[#444CE7]/[.12] focus:rounded focus:outline-none"
            >
                Home
            </Link>
            <Link 
                href="/"
                className="px-0.5 hover:text-neutral-900 focus:text-neutral-900 focus:ring focus:ring-[#444CE7]/[.12] focus:rounded focus:outline-none"
            >
                Features
            </Link>
            <Link 
                href="/"
                className="px-0.5 hover:text-neutral-900 focus:text-neutral-900 focus:ring focus:ring-[#444CE7]/[.12] focus:rounded focus:outline-none"
            >
                Pricing
            </Link>
            <Link 
                href="/"
                className="px-0.5 hover:text-neutral-900 focus:text-neutral-900 focus:ring focus:ring-[#444CE7]/[.12] focus:rounded focus:outline-none"
            >
                About us
            </Link>
            <Link 
                href="/"
                className="px-0.5 hover:text-neutral-900 focus:text-neutral-900 focus:ring focus:ring-[#444CE7]/[.12] focus:rounded focus:outline-none"
            >
                Contact
            </Link>
          </div>
          <div className="hidden lg:flex gap-4 text-center">
            <a
              className="w-[125px] h-[44px] px-4 py-2.5 rounded text-neutral-900 bg-neutral-200"
              href=""
            >
              Learn more
            </a>
            <a
              className="w-[125px] h-[44px] px-4 py-2.5 rounded text-white bg-indigo-700"
              href=""
            >
              See pricing
            </a>
          </div>
          <i className="lg:hidden ri-menu-line text-neutral-600"></i>
        </div>
      </header>
      <nav className="flex flex-col place-content-between g-6 w-[359px] h-[812px] px-4 pt-8 pb-4 bg-white absolute top-0 lg:hidden">
        <div className="flex items-center place-content-between">
          <Image
            src={"img/abstractly.svg"}
            height={32}
            width={112}
            alt="Brand Logo"
          />
          <div>
            <i className="ri-close-line text-neutral-600"></i>
          </div>
        </div>
        <div className="flex flex-col gap-2 text-neutral-900 text-sm">

        </div>
      </nav>
    </div>
  );
}
