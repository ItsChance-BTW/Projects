"use client";

export default function Page() {
  return (
    <div className="bg-gradient-to-br from-[#F9FAFB] to-[#D2D6DB] h-screen p-4 grid grid-cols-4 gap-x-4">
      <footer className="col-span-4 flex flex-col gap-12 bg-white rounded drop-shadow-sm py-12">
        <div className="flex flex-col gap-8 px-4">
          <div className="flex flex-col gap-2">
            <p className="text-xl font-semibold text-neutral-900">
              Join our newsletter
            </p>
            <p className="text-neutral-600">
              We&apos;ll send you a nice letter once per week. No spam.
            </p>
          </div>
          <form action="" method="post" className="flex flex-col gap-4">
            <input
              className="text-sm text-neutral-500 bg-neutral-50 border border-neutral-200 rounded px-3.5 py-2.5"
              type="email"
              placeholder="Enter your email"
            />
            <button
              className="text-white text-sm font-medium bg-indigo-700 rounded px-3.5 py-2.5"
              type="submit"
            >
              Subscribe
            </button>
          </form>
        </div>
      </footer>
    </div>
  );
}
