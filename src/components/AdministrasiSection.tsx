"use client";

import { useEffect, useState } from "react";

interface CitizenStats {
  totalWarga: number;
  totalLakiLaki: number;
  totalPerempuan: number;
}

export default function AdministrasiSection() {
  const [stats, setStats] = useState<CitizenStats>({
    totalWarga: 0,
    totalLakiLaki: 0,
    totalPerempuan: 0,
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch("/api/statistics");
        const data = await response.json();
        if (response.ok) {
          setStats(data);
        } else {
          console.error("Failed to fetch statistics:", data.error);
        }
      } catch (error) {
        console.error("Error fetching statistics:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchStats();
  }, []);

  return (
    <section
      className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden"
      id="administrasi"
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#00633f]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#00805a]/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#00633f]/70">
              Data Kependudukan
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#00633f]">
            Administrasi Penduduk
          </h2>
          <p className="text-center text-gray-600 mb-4 max-w-3xl mx-auto text-lg">
            Sistem digital yang berfungsi mempermudah pengelolaan data dan
            informasi terkait dengan kependudukan dan pendayagunaannya untuk
            pelayanan publik yang efektif dan efisien
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Total Penduduk */}
          <div className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#00633f] to-[#00805a] rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
            <div className="relative bg-white rounded-2xl p-8 shadow-lg border border-[#00633f]/10 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center justify-center mb-6">
                <div className="p-4 bg-gradient-to-br from-[#00633f] to-[#00805a] rounded-full">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
              </div>
              <div
                className={`text-6xl font-black text-[#00633f] mb-4 text-center ${
                  isLoading ? "animate-pulse" : ""
                }`}
              >
                {isLoading ? "-" : stats.totalWarga}
              </div>
              <h3 className="text-xl font-bold text-gray-800 text-center">
                Total Penduduk
              </h3>
              <p className="text-sm text-gray-500 text-center mt-2">
                Jiwa terdaftar
              </p>
            </div>
          </div>

          {/* Laki-laki */}
          <div className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#00633f] to-[#00805a] rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
            <div className="relative bg-white rounded-2xl p-8 shadow-lg border border-[#00633f]/10 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center justify-center mb-6">
                <div className="p-4 bg-gradient-to-br from-[#00633f] to-[#00805a] rounded-full">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
              </div>
              <div
                className={`text-6xl font-black text-[#00633f] mb-4 text-center ${
                  isLoading ? "animate-pulse" : ""
                }`}
              >
                {isLoading ? "-" : stats.totalLakiLaki}
              </div>
              <h3 className="text-xl font-bold text-gray-800 text-center">
                Laki-Laki
              </h3>
              <p className="text-sm text-gray-500 text-center mt-2">
                Penduduk pria
              </p>
            </div>
          </div>

          {/* Perempuan */}
          <div className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#00633f] to-[#00805a] rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
            <div className="relative bg-white rounded-2xl p-8 shadow-lg border border-[#00633f]/10 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center justify-center mb-6">
                <div className="p-4 bg-gradient-to-br from-[#00633f] to-[#00805a] rounded-full">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
              </div>
              <div
                className={`text-6xl font-black text-[#00633f] mb-4 text-center ${
                  isLoading ? "animate-pulse" : ""
                }`}
              >
                {isLoading ? "-" : stats.totalPerempuan}
              </div>
              <h3 className="text-xl font-bold text-gray-800 text-center">
                Perempuan
              </h3>
              <p className="text-sm text-gray-500 text-center mt-2">
                Penduduk wanita
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
