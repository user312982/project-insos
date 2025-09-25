"use client";

import CitizenForm from "@/components/CitizenForm";
import Link from "next/link";

export default function NewCitizenPage() {
  return (
    <div className="p-6">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-[#00633f]">Tambah Data Warga</h1>
        <Link
          href="/admin/citizens"
          className="text-[#00633f] hover:text-[#005435] font-medium"
        >
          &larr; Kembali
        </Link>
      </div>
      <div className="bg-white rounded-lg shadow-md p-6">
        <CitizenForm />
      </div>
    </div>
  );
}
