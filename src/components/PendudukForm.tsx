"use client";

import { useState } from 'react';

export default function PendudukForm() {
  const [nik, setNik] = useState("");
  const [nama, setNama] = useState("");
  const [nilaiAngka, setNilaiAngka] = useState<string>("");
  const [status, setStatus] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus(null);
    const parsed = Number(nilaiAngka);
    if (!nik || !nama || Number.isNaN(parsed)) {
      setStatus("Input tidak valid");
      return;
    }

    try {
      const res = await fetch("/api/penduduk", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nik, nama, nilai_angka: parsed }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "Gagal menyimpan");
      setStatus("Berhasil menyimpan data");
      setNik("");
      setNama("");
      setNilaiAngka("");
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Gagal menyimpan";
      setStatus(msg);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
      <div className="flex flex-col">
        <label className="mb-1">NIK</label>
        <input
          className="border rounded px-3 py-2"
          value={nik}
          onChange={(e) => setNik(e.target.value)}
          placeholder="Nomor Induk Kependudukan"
          required
        />
      </div>
      <div className="flex flex-col">
        <label className="mb-1">Nama</label>
        <input
          className="border rounded px-3 py-2"
          value={nama}
          onChange={(e) => setNama(e.target.value)}
          placeholder="Nama lengkap"
          required
        />
      </div>
      <div className="flex flex-col">
        <label className="mb-1">Nilai Angka</label>
        <input
          type="number"
          step="0.01"
          className="border rounded px-3 py-2"
          value={nilaiAngka}
          onChange={(e) => setNilaiAngka(e.target.value)}
          placeholder="Contoh: 87.5"
          required
        />
      </div>
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Simpan
      </button>
      {status && <p className="text-sm mt-2">{status}</p>}
    </form>
  );
}

