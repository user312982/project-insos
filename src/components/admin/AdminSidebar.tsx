"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

export default function AdminSidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // mobile drawer state

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
    <>
      {/* Mobile hamburger button (visible on small screens) */}
      <button
        aria-label="Open menu"
        onClick={() => setIsOpen(true)}
        className="md:hidden fixed top-4 left-4 z-50 p-2 rounded bg-white/90 text-[#00633f] shadow"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* Mobile drawer */}
      {isOpen && (
        <div className="fixed inset-0 z-40 flex">
          {/* backdrop */}
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setIsOpen(false)}
          />

          <aside className="relative w-64 h-full bg-[#00633f] p-4 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-white">Admin</h2>
              <button
                aria-label="Close menu"
                onClick={() => setIsOpen(false)}
                className="p-1 rounded bg-white/10 text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <nav className="flex-1 overflow-auto">
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
                        onClick={() => setIsOpen(false)}
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

            <div className="mt-4">
              <button
                onClick={async () => {
                  await handleLogout();
                  setIsOpen(false);
                }}
                disabled={isLoggingOut}
                className="w-full px-4 py-2 text-white bg-green-700 hover:bg-green-900 rounded transition-colors disabled:opacity-50"
              >
                {isLoggingOut ? "Logout..." : "Logout"}
              </button>
            </div>
          </aside>
        </div>
      )}

      {/* Desktop sidebar */}
      <div className="hidden md:flex w-64 h-screen bg-[#00633f] fixed left-0 top-0 flex-col">
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
    </>
  );
}
