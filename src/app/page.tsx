import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <main className="relative isolate">
        <div className="absolute inset-x-0 top-0 h-96 bg-gradient-to-b from-gray-100"></div>
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-center lg:text-left">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                  Classical Persian Music Retreat
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Join Fared Shafinury for an immersive learning experience in Classical Persian Music
                  at our retreat center in Corpus Christi, Texas.
                </p>
                <div className="mt-10 flex items-center justify-center lg:justify-start gap-x-6">
                  <Link
                    href="/about"
                    className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Learn More
                  </Link>
                  <Link
                    href="/contact"
                    className="text-sm font-semibold leading-6 text-gray-900"
                  >
                    Contact Us <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden">
                <Image
                  src="/images/setar.jpg"
                  alt="Traditional Persian Setar"
                  width={320}
                  height={427}
                  className="w-full object-cover"
                  priority
                />
                <p className="mt-2 text-sm text-gray-500 text-center">
                  Image: Persian Setar (Credit: Wikimedia Commons)
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
