export default function AdministrasiSection() {
    return (
        <section className="py-16 bg-rt-light" id="kegiatan">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center text-rt-dark">
              Kegiatan Masyarakat
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-rt-medium">
                <h3 className="text-xl font-bold mb-4 text-rt-dark">
                  Event Mendatang
                </h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-rt-medium pl-4">
                    <h4 className="font-bold text-rt-dark">Gotong Royong</h4>
                    <p className="text-gray-600">Minggu, 20 September 2025</p>
                  </div>
                  <div className="border-l-4 border-rt-medium pl-4">
                    <h4 className="font-bold text-rt-dark">Pengajian Rutin</h4>
                    <p className="text-gray-600">Setiap Jumat Malam</p>
                  </div>
                </div>
              </div>
              {/* Tambah kolom kegiatan lain jika perlu */}
            </div>
          </div>
        </section>
    )
}