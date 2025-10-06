"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

export default function AdminSidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const [isLoggingOut, setIsLoggingOut] = useState(false);

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

  const handleLogout = async () => {
    setIsLoggingOut(true);
    try {
      await fetch("/api/auth/logout", {
        method: "POST",
      });
      router.push("/login");
      router.refresh();
    } catch (error) {
      console.error("Logout failed:", error);
    } finally {
      setIsLoggingOut(false);
    }
  };

  return (
    <div className="w-64 h-screen bg-[#00633f] fixed left-0 top-0 flex flex-col">
      <div className="p-4 border-b border-[#ffffff33]">
        <h2 className="text-xl font-semibold text-white">Admin Dashboard</h2>
      </div>

      <nav className="p-4 flex-1">
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

      {/* Logout Button */}
      <div className="p-4 border-t border-[#ffffff33]">
        <button
          onClick={handleLogout}
          disabled={isLoggingOut}
          className="w-full px-4 py-2 text-white bg-green-700 hover:bg-green-900 rounded transition-colors disabled:opacity-50"
        >
          {isLoggingOut ? "Logout..." : "Logout"}
        </button>
      </div>
    </div>
  );
}
