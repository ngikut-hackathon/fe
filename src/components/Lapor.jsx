'use client';

import React from 'react';
import Navbar from './Navbar';

const Lapor = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center pt-20">
      <Navbar />
      {/* Form Section */}
      <div className="container mx-auto mt-10 p-10 bg-white rounded-2xl shadow-lg w-full max-w-4xl">
        <form className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-8">
          {/* Left Column */}
          <div className="flex flex-col w-full md:w-1/2 space-y-4 text-left">
            {/* Nama Pelapor */}
            <div className="flex flex-col">
              <label htmlFor="namaPelapor" className="text-lg font-semibold">Nama Pelapor</label>
              <input
                type="text"
                id="namaPelapor"
                placeholder="Masukkan Nama Pelapor"
                className="mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-green-200"
              />
            </div>

            {/* Topik Laporan */}
            <div className="flex flex-col">
              <label htmlFor="topikLaporan" className="text-lg font-semibold">Topik Laporan</label>
              <input
                type="text"
                id="topikLaporan"
                placeholder="Masukkan Topik Laporan"
                className="mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-green-200"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-24">
              <button type="submit" className="w-max py-3 px-10 bg-black text-white font-semibold rounded-lg hover:bg-gray-800">
                Submit
              </button>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col w-full md:w-1/2 space-y-2 text-left">
            <label htmlFor="deskripsiLaporan" className="text-lg font-semibold">Deskripsi Laporan</label>
            <textarea
              id="deskripsiLaporan"
              placeholder="Masukkan Deskripsi Laporan"
              rows="12"
              className="mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-green-200"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Lapor;
