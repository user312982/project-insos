"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import AdminSidebar from "@/components/admin/AdminSidebar";

interface AdminLayoutProps {
  children: React.ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkAuth = () => {
      try {
        console.log("� Checking admin session...");

        // Cek apakah ada admin session cookie
        const cookies = document.cookie;
        const hasAdminSession = cookies.includes("admin-session=");

        console.log("Cookies:", cookies);
        console.log("Has admin session:", hasAdminSession);

        if (hasAdminSession) {
          console.log("✅ Admin session found - allowing access");
          setIsAuthenticated(true);
        } else {
          console.log("❌ No admin session - redirecting to home");
          setIsAuthenticated(false);
          router.replace("/");
        }
      } catch (error) {
        console.log("❌ Auth check failed:", error);
        setIsAuthenticated(false);
        router.replace("/");
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, [router]);

  // Show loading while checking authentication
  if (isLoading || isAuthenticated === null) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#00633f] mx-auto mb-4"></div>
          <p className="text-gray-600">Checking authentication...</p>
        </div>
      </div>
    );
  }

  // If not authenticated, show loading (redirect is in progress)
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#00633f] mx-auto mb-4"></div>
          <p className="text-gray-600">Redirecting to home...</p>
        </div>
      </div>
    );
  }

  // If authenticated, show admin layout
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
