import DashboardStats from "@/components/admin/DashboardStats";

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
              <li>Mengelola data warga</li>
              <li>Mengelola informasi kegiatan</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Menu Cepat
            </h2>
            <div className="grid gap-3">
              <a
                href="/admin/citizens"
                className="block p-4 bg-gray-50 rounded-md hover:bg-gray-100 transition-colors"
              >
                <h3 className="text-[#00633f] font-medium">Data Warga</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Kelola data penduduk
                </p>
              </a>
              <a
                href="/admin/kegiatan"
                className="block p-4 bg-gray-50 rounded-md hover:bg-gray-100 transition-colors"
              >
                <h3 className="text-[#00633f] font-medium">Kegiatan</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Kelola informasi kegiatan
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
