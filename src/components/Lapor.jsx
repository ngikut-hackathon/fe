'use client';

import React, { useState } from 'react';
import Navbar from './Navbar';
import LaporToast from './LaporToast';
import Terkirim from './Terkirim';

const Lapor = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showToaster, setShowToaster] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const namaPelapor = e.target.namaPelapor.value;
    const topikLaporan = e.target.topikLaporan.value;
    const deskripsiLaporan = e.target.deskripsiLaporan.value;

    if (namaPelapor && topikLaporan && deskripsiLaporan) {
      setShowToaster(true);
      setIsSubmitted(true);

      setTimeout(() => {
        setShowToaster(false);
      }, 2000);
    } else {
      alert('Harap isi semua kolom.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center pt-20">
      <Navbar />

      {isSubmitted ? (
        <Terkirim />
      ) : (
        <div className="container mx-auto mt-10 p-10 bg-white rounded-2xl shadow-lg w-full max-w-4xl">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col space-y-6">
              {/* Form Fields Container */}
              <div className="flex flex-col md:flex-row md:space-x-8 text-left">
                {/* Left Column */}
                <div className="flex flex-col w-full md:w-1/2 space-y-4">
                  <div className="flex flex-col">
                    <label htmlFor="namaPelapor" className="text-lg font-semibold">Nama Pelapor</label>
                    <input
                      type="text"
                      id="namaPelapor"
                      name="namaPelapor"
                      placeholder="Masukkan Nama Pelapor"
                      className="mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-green-200"
                    />
                  </div>

                  <div className="flex flex-col">
                    <label htmlFor="topikLaporan" className="text-lg font-semibold">Topik Laporan</label>
                    <input
                      type="text"
                      id="topikLaporan"
                      name="topikLaporan"
                      placeholder="Masukkan Topik Laporan"
                      className="mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-green-200"
                    />
                  </div>
                </div>

                {/* Right Column */}
                <div className="flex flex-col w-full md:w-1/2">
                  <label htmlFor="deskripsiLaporan" className="text-lg font-semibold">Deskripsi Laporan</label>
                  <textarea
                    id="deskripsiLaporan"
                    name="deskripsiLaporan"
                    placeholder="Masukkan Deskripsi Laporan"
                    rows="12"
                    className="mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-green-200"
                  />
                </div>
              </div>

              {/* Submit Button Container */}
              <div className="flex justify-start">
                <button
                  type="submit"
                  className="py-3 px-10 md:-mt-12 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      )}

      {showToaster && (
        <LaporToast message="Laporan Berhasil dibuat." onClose={() => setShowToaster(false)} />
      )}
    </div>
  );
};

export default Lapor;