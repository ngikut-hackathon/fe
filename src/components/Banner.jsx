'use client'

import React from 'react';

export default function Banner() {
    return (
        <div className="flex flex-wrap justify-center items-center gap-8 mx-auto max-w-7xl px-6 sm:py-8 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-16">
            <div className="mx-auto max-w-7xl px-6 sm:py-8 lg:flex lg:items-center lg:gap-x-10 lg:px-8 bg-gray-200 rounded-xl">
                <div className="mx-auto max-w-4xl lg:mx-0 lg:flex-auto">
                    <h1 className="max-w-lg text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl text-left">
                        Kamu lagi buru-buru?
                        MalangBot siap membantu!
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-gray-600 text-left">
                        Selamat datang di Sistem Informasi dan Gerakan Layanan Malang! Tempat mencurahkan segala isi hati tanpa perlu khawatir dan bingung lagi harus lapor kemana. Laporkan masalah anda!
                    </p>
                    <div className="mt-6 flex items-center gap-x-6">
                    <a
                        href="#"
                        className="rounded-md bg-gray-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Chat MalangBot
                    </a>
                    </div>
                </div>
                <div className="mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow">
                    <img alt="MalangBot" src="public/images/bot.png" className="w-48 h-auto mx-auto lg:w-60" />
                </div>
            </div>
        </div>
    )
}
