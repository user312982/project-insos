"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import type { Citizen } from "@/lib/db";

interface EditCitizenFormProps {
  nik: string;
}

export default function EditCitizenForm({ nik }: EditCitizenFormProps) {
  const router = useRouter();
  const [formData, setFormData] = useState<Partial<Citizen>>({
    nama: "",
    agama: "",
    jenis_kelamin: "",
    status_perkawinan: "",
  });
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const fetchCitizen = async () => {
      try {
        const response = await fetch(`/api/citizens/${nik}`);
        const result = await response.json();

        if (!response.ok || !result.success) {
          throw new Error(result.error || "Gagal mengambil data warga");
        }

        setFormData(result.data);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Gagal mengambil data warga"
        );
      } finally {
        setIsLoading(false);
      }
    };

    fetchCitizen();
  }, [nik]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await fetch(`/api/citizens/${nik}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.error || "Gagal memperbarui data warga");
      }

      setSuccess(true);
      // Redirect back to the table view after successful update
      setTimeout(() => {
        router.push("/admin/citizens");
        router.refresh(); // Refresh the data
      }, 1500);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error updating data");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label
          htmlFor="nama"
          className="block text-sm font-medium text-gray-700"
        >
          Nama Lengkap
        </label>
        <input
          type="text"
          id="nama"
          name="nama"
          value={formData.nama || ""}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#00633f] focus:ring-[#00633f]"
          required
        />
      </div>

      <div>
        <label
          htmlFor="nik"
          className="block text-sm font-medium text-gray-700"
        >
          NIK
        </label>
        <input
          type="text"
          id="nik"
          value={nik}
          className="mt-1 block w-full rounded-md border-gray-300 bg-gray-50 shadow-sm"
          disabled
        />
      </div>

      <div>
        <label
          htmlFor="agama"
          className="block text-sm font-medium text-gray-700"
        >
          Agama
        </label>
        <select
          id="agama"
          name="agama"
          value={formData.agama || ""}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#00633f] focus:ring-[#00633f]"
          required
        >
          <option value="">Pilih Agama</option>
          <option value="Islam">Islam</option>
          <option value="Kristen">Kristen</option>
          <option value="Katolik">Katolik</option>
          <option value="Hindu">Hindu</option>
          <option value="Buddha">Buddha</option>
          <option value="Konghucu">Konghucu</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="jenis_kelamin"
          className="block text-sm font-medium text-gray-700"
        >
          Jenis Kelamin
        </label>
        <select
          id="jenis_kelamin"
          name="jenis_kelamin"
          value={formData.jenis_kelamin || ""}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#00633f] focus:ring-[#00633f]"
          required
        >
          <option value="">Pilih Jenis Kelamin</option>
          <option value="Laki-laki">Laki-laki</option>
          <option value="Perempuan">Perempuan</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="status_perkawinan"
          className="block text-sm font-medium text-gray-700"
        >
          Status Perkawinan
        </label>
        <select
          id="status_perkawinan"
          name="status_perkawinan"
          value={formData.status_perkawinan || ""}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#00633f] focus:ring-[#00633f]"
          required
        >
          <option value="">Pilih Status Perkawinan</option>
          <option value="Belum Kawin">Belum Kawin</option>
          <option value="Kawin">Kawin</option>
          <option value="Cerai Hidup">Cerai Hidup</option>
          <option value="Cerai Mati">Cerai Mati</option>
        </select>
      </div>

      {error && (
        <div className="bg-red-50 text-red-600 p-3 rounded-md mb-4">
          {error}
        </div>
      )}

      {success && (
        <div className="bg-green-50 text-green-600 p-3 rounded-md mb-4">
          Data berhasil diperbarui!
        </div>
      )}

      <div className="pt-4 flex space-x-4">
        <button
          type="button"
          onClick={() => router.push("/admin/citizens")}
          className="flex-1 bg-gray-100 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
        >
          Batal
        </button>
        <button
          type="submit"
          disabled={isSubmitting}
          className="flex-1 bg-[#00633f] text-white py-2 px-4 rounded-md hover:bg-[#005435] focus:outline-none focus:ring-2 focus:ring-[#00633f] focus:ring-offset-2 disabled:bg-[#00633f]/50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Menyimpan..." : "Simpan Perubahan"}
        </button>
      </div>
    </form>
  );
}
