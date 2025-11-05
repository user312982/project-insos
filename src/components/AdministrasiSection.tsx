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
    <section className="py-16 bg-white" id="administrasi">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-4 text-center text-red-500">
          Administrasi Penduduk
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Sistem digital yang berfungsi mempermudah pengelolaan data dan
          informasi terkait dengan kependudukan dan pendayagunaannya untuk
          pelayanan publik yang efektif dan efisien
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Total Penduduk */}
          <div className="text-center">
            <div
              className={`bg-red-500 text-white text-5xl font-bold p-6 rounded-lg shadow-lg mb-3 ${
                isLoading ? "animate-pulse" : ""
              }`}
            >
              {isLoading ? "-" : stats.totalWarga}
            </div>
            <h3 className="text-xl font-semibold text-gray-700">Penduduk</h3>
          </div>

          {/* Laki-laki */}
          <div className="text-center">
            <div
              className={`bg-red-500 text-white text-5xl font-bold p-6 rounded-lg shadow-lg mb-3 ${
                isLoading ? "animate-pulse" : ""
              }`}
            >
              {isLoading ? "-" : stats.totalLakiLaki}
            </div>
            <h3 className="text-xl font-semibold text-gray-700">Laki-Laki</h3>
          </div>

          {/* Perempuan */}
          <div className="text-center">
            <div
              className={`bg-red-500 text-white text-5xl font-bold p-6 rounded-lg shadow-lg mb-3 ${
                isLoading ? "animate-pulse" : ""
              }`}
            >
              {isLoading ? "-" : stats.totalPerempuan}
            </div>
            <h3 className="text-xl font-semibold text-gray-700">Perempuan</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
