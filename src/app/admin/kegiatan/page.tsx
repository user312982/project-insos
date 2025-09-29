"use client";

import { useState, useEffect } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import KegiatanForm from "@/components/admin/KegiatanForm";

interface Kegiatan {
  id: number;
  judul: string;
  deskripsi: string;
  tanggal: string;
  waktu: string;
  lokasi: string;
  gambar?: string;
}

export default function AdminKegiatanPage() {
  const [showForm, setShowForm] = useState(false);
  const [kegiatan, setKegiatan] = useState<Kegiatan[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState<number | null>(null);
  const supabase = createClientComponentClient();

  const fetchKegiatan = async () => {
    try {
      const { data, error } = await supabase
        .from("kegiatan")
        .select("*")
        .order("tanggal", { ascending: true });

      if (error) throw error;
      setKegiatan(data || []);
    } catch (error) {
      console.error("Error fetching activities:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchKegiatan();
  }, []);

  const handleDelete = async (id: number) => {
    if (confirm("Apakah Anda yakin ingin menghapus kegiatan ini?")) {
      try {
        const { error } = await supabase.from("kegiatan").delete().eq("id", id);

        if (error) throw error;
        fetchKegiatan();
      } catch (error) {
        console.error("Error deleting activity:", error);
      }
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("id-ID", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">Data Kegiatan</h1>
        <button
          onClick={() => setShowForm(!showForm)}
          className="inline-flex justify-center rounded-md border border-transparent bg-[#00633f] px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-[#00805a] focus:outline-none focus:ring-2 focus:ring-[#00633f] focus:ring-offset-2"
        >
          {showForm ? "Tutup Form" : "Tambah Kegiatan"}
        </button>
      </div>

      {showForm && (
        <div className="bg-white shadow-sm rounded-lg p-6 border border-gray-200">
          <h2 className="text-lg font-medium text-gray-900 mb-4">
            {editingId ? "Edit Kegiatan" : "Tambah Kegiatan Baru"}
          </h2>
          <KegiatanForm
            editId={editingId}
            onSuccess={() => {
              setShowForm(false);
              setEditingId(null);
              fetchKegiatan();
            }}
          />
        </div>
      )}

      <div className="bg-white shadow-sm rounded-lg overflow-hidden border border-gray-200">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  No
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Nama Kegiatan
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Tanggal
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Waktu
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Lokasi
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Deskripsi
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Aksi
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {loading ? (
                <tr>
                  <td colSpan={7} className="px-6 py-4 text-center">
                    Loading...
                  </td>
                </tr>
              ) : kegiatan.length === 0 ? (
                <tr>
                  <td colSpan={7} className="px-6 py-4 text-center">
                    Tidak ada data kegiatan
                  </td>
                </tr>
              ) : (
                kegiatan.map((item, index) => (
                  <tr key={item.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {index + 1}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {item.judul}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {formatDate(item.tanggal)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {item.waktu}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {item.lokasi}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      {item.deskripsi}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button
                        onClick={() => {
                          setEditingId(item.id);
                          setShowForm(true);
                        }}
                        className="text-indigo-600 hover:text-indigo-900 mr-4"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(item.id)}
                        className="text-red-600 hover:text-red-900"
                      >
                        Hapus
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
