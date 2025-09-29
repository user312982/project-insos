import DashboardStats from "@/components/admin/DashboardStats";
import RecentKegiatan from "@/components/admin/RecentKegiatan";

export default function AdminPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 mb-6">
          Ringkasan Data Warga
        </h1>
        <DashboardStats />
      </div>

      <div className="border-t border-gray-200 pt-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Info Section */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Informasi Umum
            </h2>
            <p className="text-gray-600">
              Selamat datang di dashboard admin. Di sini Anda dapat:
            </p>
            <ul className="mt-4 space-y-2 list-disc list-inside text-gray-600">
              <li>Melihat statistik penduduk</li>
              <li>
                <a
                  href="/admin/citizens"
                  className="text-[#00633f] hover:text-[#00805a]"
                >
                  Mengelola data warga
                </a>
              </li>
              <li>
                <a
                  href="/admin/kegiatan"
                  className="text-[#00633f] hover:text-[#00805a]"
                >
                  Mengelola informasi kegiatan
                </a>
              </li>
            </ul>
          </div>

          {/* Recent Activities */}
          <RecentKegiatan />
        </div>
      </div>
    </div>
  );
}
