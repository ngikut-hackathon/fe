'use client'

import { ChevronRightIcon } from '@heroicons/react/20/solid'

export default function Hero() {
  return (
    <div className="bg-white">
      <div className="relative isolate pt-14 sm:p-10">
        <svg
          aria-hidden="true"
          className="absolute inset-0 -z-10 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
        >
          <defs>
            <pattern
              x="50%"
              y={-1}
              id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
              width={200}
              height={200}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)" width="100%" height="100%" strokeWidth={0} />
        </svg>
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-16 mt-4 sm:mt-32">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
            <h1 className="mt-10 max-w-lg text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl text-left">
              Dengan Satu Klik, Lapor Masalahmu
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 text-left">
              Selamat datang di Sistem Informasi dan Gerakan Layanan Malang! Tempat mencurahkan segala isi hati tanpa perlu khawatir dan bingung lagi harus lapor kemana. Laporkan masalah anda!
            </p>
            <div className="mt-6 flex items-center gap-x-6">
              <a
                href="/lapor"
                className="rounded-md bg-biruNgalam px-4 py-2 text-sm font-semibold text-white shadow-md hover:bg-gray-800 hover:text-white transition duration-200"
              >
                Laporin Rek
              </a>
            </div>
          </div>
          <div className="mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow">
            <img src="/public/images/hero.png" alt="Hero Image" className="w-full h-auto max-w-xs mx-auto sm:max-w-md lg:max-w-lg" />
          </div>
        </div>
      </div>
    </div>
  )
}
