'use client'

import React from 'react';

export default function Services() {
    return (
        <div className="flex flex-wrap justify-center items-center gap-8 mx-auto max-w-7xl px-6 sm:py-8 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-16">
            <div className="px-6">
                <p className="mx-auto px-6">
                    LAYANAN TERBAIK
                </p>
            </div>
            
            <h1>
                Permudah Hidupmu dengan SINGALAM
            </h1>
            <p>
                Selamat datang di Sistem Informasi dan Gerakan Layanan Malang! Tempat mencurahkan segala isi hati tanpa perlu khawatir dan bingung lagi harus lapor kemana. Laporkan masalah anda!
            </p>
            <div className="mx-auto max-w-7xl px-6 sm:py-8 lg:flex lg:items-center lg:gap-x-10 lg:px-8">
                <div className="mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow">
                    <img 
                    src="public/images/services.png">
                    </img>
                </div>
                <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
                    <div className="bg-gray-200 rounded-xl text-left p-4 sm:my-8">
                        <h6 className="text-2xl font-semibold">
                            Transparansi Laporan
                        </h6>
                        <p>
                            Lapor dengan mudah dan status laporan disajikan dengan transparan.
                        </p>
                    </div>
                    <div className="bg-gray-200 rounded-xl text-left p-4 sm:my-8">
                        <h6 className="text-2xl font-semibold">
                            Chatbot Responsif
                        </h6>
                        <p>
                            Tanyakan dan sampaikan keluhanmu!
                            MalangBot siap menjawab dengan cepat.
                        </p>
                    </div>
                    <div className="bg-gray-200 rounded-xl text-left p-4 sm:my-8">
                        <h6 className="text-2xl font-semibold">
                            Lihat Riwayat Laporan
                        </h6>
                        <p>
                            Kamu dapat melihat riwayat laporanmu dengan mudah no repot repot!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
