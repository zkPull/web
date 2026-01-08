import { Button } from "../../ui/button";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="max-w-7xl mx-auto px-3 py-1 relative">
      <div className="absolute left-0 top-1 bottom-0 w-px bg-gray-200"></div>
      <div className="absolute right-0 top-1 bottom-0 w-px bg-gray-200"></div>
      <div className="absolute top-[-5] left-[-4] z-20">
        <div className="w-6 h-6">
          <div className="absolute top-0 left-1 w-6 h-2 border-l-2 border-t-2 border-black"></div>
        </div>
      </div>

      <div className="absolute bg-gray-200 top-[-5] w-[99%] flex items-center justify-center border border-gray-200"></div>

      <div className="absolute top-[-5] right-[-1] z-20">
        <div className="w-6 h-6">
          <div className="absolute top-0 right-0 w-6 h-2 border-r-2 border-t-2 border-black"></div>
        </div>
      </div>
      <div className="bg-white overflow-hidden border-t border-gray-300">
        <div className="relative h-[400px] md:h-[500px]">
          <Image
            src="/images/Background/bg-zkpull.png"
            alt="zkPull background"
            fill
            className="object-cover"
            priority
          />

          <div className="absolute top-16 left-6 z-10">
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              className="text-white drop-shadow-lg"
            >
              <path
                d="M20 2L22 18L38 20L22 22L20 38L18 22L2 20L18 18L20 2Z"
                fill="currentColor"
                fillOpacity="0.9"
              />
              <circle cx="20" cy="20" r="3" fill="currentColor" />
            </svg>
          </div>

          <div className="absolute top-16 right-6 z-10">
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              className="text-white drop-shadow-lg"
            >
              <path
                d="M20 2L22 18L38 20L22 22L20 38L18 22L2 20L18 18L20 2Z"
                fill="currentColor"
                fillOpacity="0.9"
              />
              <circle cx="20" cy="20" r="3" fill="currentColor" />
            </svg>
          </div>
        </div>

        <div className="px-8 py-12 bg-gray-50 relative">
          <div className="max-w-4xl">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4">
              Earn rewards through Pull Requests with{" "}
              <span className="italic text-gray-600">zkTLS</span>
            </h1>

            <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-8 max-w-2xl">
              The zkPull platform empowers open source contributors to earn
              rewards through validated Pull Requests and bug fixes. Powered by
              zero-knowledge TLS technology for secure, private, and fair
              validation on the Mantle blockchain.
            </p>

            <div className="flex items-center gap-3 mb-6">
              <Image
                src="/images/Logo/mantle-logo.png"
                alt="Mantle"
                width={120}
                height={36}
                className="opacity-80"
              />
              <span className="text-base text-gray-700 font-medium">
                Built on Mantle
              </span>
            </div>

            <div>
              <Button
                size="lg"
                className="bg-black hover:bg-gray-800 text-white px-10 py-4 text-lg font-medium cursor-pointer rounded-full"
              >
                <Link href="/issues">Start now</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
