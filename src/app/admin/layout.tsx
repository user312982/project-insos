"use client";

import Link from "next/link";
import AdminSidebar from "@/components/admin/AdminSidebar";

interface AdminLayoutProps {
  children: React.ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  return (
    <div className="min-h-screen bg-white">
      <AdminSidebar />
      <div className="pl-64">
        <div className="p-6 border-b border-gray-200 bg-white shadow-sm">
          <a href="/admin" className="inline-block group">
            <h1 className="text-2xl font-semibold text-[#00633f] group-hover:text-[#00805a] transition-colors">
              Dashboard Admin
            </h1>
          </a>
        </div>
        <main className="p-8">{children}</main>
      </div>
    </div>
  );
}
