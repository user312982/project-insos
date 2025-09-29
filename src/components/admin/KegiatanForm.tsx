"use client";

import { useState, useEffect } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import type { Kegiatan } from "@/lib/db";

interface KegiatanFormProps {
  editId?: number | null;
  onSuccess?: () => void;
}

export default function KegiatanForm({ editId, onSuccess }: KegiatanFormProps) {
  const supabase = createClientComponentClient();
  const [formData, setFormData] = useState<
    Omit<Kegiatan, "id" | "createdAt" | "updatedAt">
  >({
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

  useEffect(() => {
    const fetchKegiatan = async () => {
      if (editId) {
        setIsSubmitting(true);
        try {
          const { data, error } = await supabase
            .from("kegiatan")
            .select("*")
            .eq("id", editId)
            .single();

          if (error) throw error;
          if (data) {
            setFormData(data);
          }
        } catch (err) {
          setError(
            err instanceof Error ? err.message : "Gagal mengambil data kegiatan"
          );
        } finally {
          setIsSubmitting(false);
        }
      }
    };

    fetchKegiatan();
  }, [editId]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    setSuccess(false);

    try {
      let error;

      if (editId) {
        // Update existing kegiatan
        const { error: updateError } = await supabase
          .from("kegiatan")
          .update(formData)
          .eq("id", editId);
        error = updateError;
      } else {
        // Create new kegiatan
        const { error: insertError } = await supabase
          .from("kegiatan")
          .insert([formData]);
        error = insertError;
      }

      if (error) throw error;

      setSuccess(true);
      if (!editId) {
        setFormData({
          judul: "",
          deskripsi: "",
          tanggal: "",
          waktu: "",
          lokasi: "",
          gambar: "",
        });
      }

      if (onSuccess) {
        onSuccess();
      }
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
          {editId
            ? "Kegiatan berhasil diperbarui!"
            : "Kegiatan berhasil ditambahkan!"}
        </div>
      )}

      <div className="pt-4 flex space-x-4">
        <button
          type="button"
          onClick={() => {
            if (onSuccess) {
              onSuccess();
            }
          }}
          className="flex-1 bg-gray-100 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
        >
          Batal
        </button>
        <button
          type="submit"
          disabled={isSubmitting}
          className="flex-1 bg-[#00633f] text-white py-2 px-4 rounded-md hover:bg-[#005435] focus:outline-none focus:ring-2 focus:ring-[#00633f] focus:ring-offset-2 disabled:bg-[#00633f]/50 disabled:cursor-not-allowed"
        >
          {isSubmitting
            ? "Menyimpan..."
            : editId
            ? "Perbarui Kegiatan"
            : "Simpan Kegiatan"}
        </button>
      </div>
    </form>
  );
}
