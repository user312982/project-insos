"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Citizen } from "@/lib/db";

export default function CitizenTablePage() {
  const [citizens, setCitizens] = useState<Citizen[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchCitizens();
  }, []);

  const supabase = createClientComponentClient();

  const fetchCitizens = async () => {
    try {
      setError(null);
      setIsLoading(true);

      const { data, error } = await supabase
        .from("warga")
        .select("*")
        .order("nama");

      if (error) {
        console.error("Error fetching citizens:", error);
        throw error;
      }

      setCitizens(data);
    } catch (err) {
      console.error("Error fetching citizens:", err);
      setError(
        err instanceof Error ? err.message : "Gagal mengambil data warga"
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (nik: string) => {
    if (!confirm("Apakah Anda yakin ingin menghapus data ini?")) {
      return;
    }

    try {
      const { error } = await supabase.from("warga").delete().eq("nik", nik);

      if (error) {
        throw error;
      }

      // Show success message
      alert("Data warga berhasil dihapus");

      // Refresh the data
      fetchCitizens();
    } catch (err) {
      alert(err instanceof Error ? err.message : "Gagal menghapus data warga");
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="text-lg text-gray-600">Loading...</div>
      </div>
    );
  }

  if (error) {
    return <div className="bg-red-50 text-red-600 p-4 rounded-md">{error}</div>;
  }

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-[#00633f]">Data Warga</h2>
        <Link
          href="/admin/citizens/new"
          className="bg-[#00633f] text-white px-4 py-2 rounded-md hover:bg-[#005435] transition-colors flex items-center gap-2"
        >
          <span>Tambah Warga</span>
        </Link>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full border rounded-lg overflow-hidden">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">
                Nama
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">
                NIK
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">
                Agama
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">
                Jenis Kelamin
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">
                Status Perkawinan
              </th>
              <th className="px-6 py-3 text-center text-sm font-medium text-gray-500">
                Aksi
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {citizens.map((citizen) => (
              <tr key={citizen.nik} className="hover:bg-gray-50">
                <td className="px-6 py-4 text-sm text-gray-900">
                  {citizen.nama}
                </td>
                <td className="px-6 py-4 text-sm text-gray-900">
                  {citizen.nik}
                </td>
                <td className="px-6 py-4 text-sm text-gray-900">
                  {citizen.agama}
                </td>
                <td className="px-6 py-4 text-sm text-gray-900">
                  {citizen.jenis_kelamin}
                </td>
                <td className="px-6 py-4 text-sm text-gray-900">
                  {citizen.status_perkawinan}
                </td>
                <td className="px-6 py-4 text-sm text-center space-x-2">
                  <Link
                    href={`/admin/citizens/edit/${citizen.nik}`}
                    className="text-[#00633f] hover:text-[#005435] font-medium"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(citizen.nik)}
                    className="text-red-600 hover:text-red-800 font-medium"
                  >
                    Hapus
                  </button>
                </td>
              </tr>
            ))}
            {citizens.length === 0 && (
              <tr>
                <td colSpan={6} className="px-6 py-4 text-center text-gray-500">
                  Tidak ada data warga
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
