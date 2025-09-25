"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AdminSidebar() {
  const pathname = usePathname();

  const menuItems = [
    {
      href: "/admin",
      title: "Dashboard",
    },
    {
      href: "/admin/citizens",
      title: "Data Warga",
    },
    {
      href: "/admin/kegiatan",
      title: "Kegiatan",
    },
  ];

  return (
    <div className="w-64 h-screen bg-[#00633f] fixed left-0 top-0">
      <div className="p-4 border-b border-[#ffffff33]">
        <h2 className="text-xl font-semibold text-white">Admin Dashboard</h2>
      </div>
      <nav className="p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const isActive =
              item.href === "/admin"
                ? pathname === item.href
                : pathname.startsWith(item.href);
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`block px-4 py-3 rounded-md transition-colors ${
                    isActive
                      ? "bg-white text-[#00633f] font-semibold"
                      : "text-white hover:bg-[#ffffff1a]"
                  }`}
                >
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
