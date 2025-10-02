import { useState } from "react";
import { supabase } from "@/lib/supabase";

interface CitizenFormData {
  nama: string;
  nik: string;
  agama: string;
  jenisKelamin: string;
  statusPerkawinan: string;
}

export default function CitizenForm() {
  const [formData, setFormData] = useState<CitizenFormData>({
    nama: "",
    nik: "",
    agama: "",
    jenisKelamin: "",
    statusPerkawinan: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    // Only allow numbers for NIK field
    if (name === "nik" && value !== "") {
      if (!/^\d+$/.test(value)) return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    setSuccess(false);

    // Validate NIK length
    if (formData.nik.length !== 16) {
      setError("NIK harus berjumlah 16 digit");
      setIsSubmitting(false);
      return;
    }

    // Validate NIK contains only numbers
    if (!/^\d+$/.test(formData.nik)) {
      setError("NIK hanya boleh berisi angka");
      setIsSubmitting(false);
      return;
    }

    try {
      // Convert field names to match database schema
      const dbData = {
        nama: formData.nama,
        nik: formData.nik,
        agama: formData.agama,
        jenis_kelamin: formData.jenisKelamin,
        status_perkawinan: formData.statusPerkawinan,
      };

      const { error } = await supabase.from("warga").insert([dbData]);

      if (error) {
        if (error.code === "23505") {
          throw new Error("NIK sudah terdaftar");
        }
        throw error;
      }

      setSuccess(true);
      setFormData({
        nama: "",
        nik: "",
        agama: "",
        jenisKelamin: "",
        statusPerkawinan: "",
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
          htmlFor="nama"
          className="block text-sm font-medium text-gray-700"
        >
          Nama Lengkap
        </label>
        <input
          type="text"
          id="nama"
          name="nama"
          value={formData.nama}
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
          name="nik"
          value={formData.nik}
          onChange={handleChange}
          maxLength={16}
          pattern="\d{16}"
          title="NIK harus berjumlah 16 digit angka"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#00633f] focus:ring-[#00633f]"
          required
        />
        <p className="mt-1 text-sm text-gray-500">
          NIK harus berjumlah tepat 16 digit angka
        </p>
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
          value={formData.agama}
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
          htmlFor="jenisKelamin"
          className="block text-sm font-medium text-gray-700"
        >
          Jenis Kelamin
        </label>
        <select
          id="jenisKelamin"
          name="jenisKelamin"
          value={formData.jenisKelamin}
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
          htmlFor="statusPerkawinan"
          className="block text-sm font-medium text-gray-700"
        >
          Status Perkawinan
        </label>
        <select
          id="statusPerkawinan"
          name="statusPerkawinan"
          value={formData.statusPerkawinan}
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
          Data berhasil disimpan!
        </div>
      )}

      <div className="pt-4">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-[#00633f] text-white py-2 px-4 rounded-md hover:bg-[#005435] focus:outline-none focus:ring-2 focus:ring-[#00633f] focus:ring-offset-2 disabled:bg-[#00633f]/50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Menyimpan..." : "Simpan Data"}
        </button>
      </div>
    </form>
  );
}
