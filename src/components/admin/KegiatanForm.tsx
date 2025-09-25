"use client";

import { useState } from "react";
import type { Kegiatan } from "@/lib/db";

interface KegiatanFormData
  extends Omit<Kegiatan, "id" | "createdAt" | "updatedAt"> {}

export default function KegiatanForm() {
  const [formData, setFormData] = useState<KegiatanFormData>({
    judul: "",
    deskripsi: "",
    tanggal: "",
    waktu: "",
    lokasi: "",
    gambar: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
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
      const response = await fetch("/api/kegiatan", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Terjadi kesalahan saat menyimpan data");
      }

      setSuccess(true);
      setFormData({
        judul: "",
        deskripsi: "",
        tanggal: "",
        waktu: "",
        lokasi: "",
        gambar: "",
      });
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Terjadi kesalahan saat menyimpan data"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label
          htmlFor="judul"
          className="block text-sm font-medium text-gray-700"
        >
          Judul Kegiatan
        </label>
        <input
          type="text"
          id="judul"
          name="judul"
          value={formData.judul}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required
        />
      </div>

      <div>
        <label
          htmlFor="deskripsi"
          className="block text-sm font-medium text-gray-700"
        >
          Deskripsi
        </label>
        <textarea
          id="deskripsi"
          name="deskripsi"
          value={formData.deskripsi}
          onChange={handleChange}
          rows={4}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required
        />
      </div>

      <div>
        <label
          htmlFor="tanggal"
          className="block text-sm font-medium text-gray-700"
        >
          Tanggal
        </label>
        <input
          type="date"
          id="tanggal"
          name="tanggal"
          value={formData.tanggal}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required
        />
      </div>

      <div>
        <label
          htmlFor="waktu"
          className="block text-sm font-medium text-gray-700"
        >
          Waktu
        </label>
        <input
          type="time"
          id="waktu"
          name="waktu"
          value={formData.waktu}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required
        />
      </div>

      <div>
        <label
          htmlFor="lokasi"
          className="block text-sm font-medium text-gray-700"
        >
          Lokasi
        </label>
        <input
          type="text"
          id="lokasi"
          name="lokasi"
          value={formData.lokasi}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required
        />
      </div>

      <div>
        <label
          htmlFor="gambar"
          className="block text-sm font-medium text-gray-700"
        >
          URL Gambar (opsional)
        </label>
        <input
          type="url"
          id="gambar"
          name="gambar"
          value={formData.gambar}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          placeholder="https://example.com/image.jpg"
        />
      </div>

      {error && (
        <div className="bg-red-50 text-red-600 p-3 rounded-md">{error}</div>
      )}

      {success && (
        <div className="bg-green-50 text-green-600 p-3 rounded-md">
          Kegiatan berhasil ditambahkan!
        </div>
      )}

      <div className="pt-4">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-[#00633f] text-white py-2 px-4 rounded-md hover:bg-[#005435] focus:outline-none focus:ring-2 focus:ring-[#00633f] focus:ring-offset-2 disabled:bg-[#00633f]/50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Menyimpan..." : "Simpan Kegiatan"}
        </button>
      </div>
    </form>
  );
}
