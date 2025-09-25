"use client";

import KegiatanForm from "@/components/admin/KegiatanForm";

export default function AdminKegiatanPage() {
  return (
    <div>
      <div className="grid gap-6">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-semibold mb-4 text-[#00633f]">
            Tambah Kegiatan Baru
          </h2>
          <KegiatanForm />
        </div>
      </div>
    </div>
  );
}
