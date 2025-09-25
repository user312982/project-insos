"use client";

import { useEffect, useState } from "react";
import type { CitizenStats } from "@/lib/db";

export default function DashboardStats() {
  const [stats, setStats] = useState<CitizenStats>({
    totalWarga: 0,
    totalLakiLaki: 0,
    totalPerempuan: 0,
  });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch("/api/citizens/stats");
        const result = await response.json();

        if (!response.ok || !result.success) {
          throw new Error(result.error || "Gagal mengambil data statistik");
        }

        setStats(result.data);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Gagal mengambil data statistik"
        );
      } finally {
        setIsLoading(false);
      }
    };

    fetchStats();
  }, []);

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 animate-pulse">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="bg-gray-100 p-6 rounded-lg h-32"></div>
        ))}
      </div>
    );
  }

  if (error) {
    return <div className="bg-red-50 text-red-600 p-4 rounded-md">{error}</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-medium text-gray-900">Total Warga</h3>
        <p className="mt-2 text-3xl font-bold text-[#00633f]">
          {stats.totalWarga}
        </p>
        <p className="mt-1 text-sm text-gray-500">Total penduduk terdaftar</p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-medium text-gray-900">Laki-laki</h3>
        <p className="mt-2 text-3xl font-bold text-[#00633f]">
          {stats.totalLakiLaki}
        </p>
        <p className="mt-1 text-sm text-gray-500">Total penduduk laki-laki</p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-medium text-gray-900">Perempuan</h3>
        <p className="mt-2 text-3xl font-bold text-[#00633f]">
          {stats.totalPerempuan}
        </p>
        <p className="mt-1 text-sm text-gray-500">Total penduduk perempuan</p>
      </div>
    </div>
  );
}
