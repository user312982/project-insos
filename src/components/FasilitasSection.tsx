export default function AdministrasiSection() {
    return (
        <section className="py-16 bg-rt-lightest" id="fasilitas">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center text-rt-dark">
              Fasilitas
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Posyandu */}
              <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-rt-medium">
                <h3 className="text-xl font-bold mb-4 text-rt-dark">Posyandu</h3>
                <p className="text-gray-700">
                  Layanan kesehatan terpadu untuk ibu dan anak
                </p>
              </div>

              {/* Yayasan */}
              <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-rt-medium">
                <h3 className="text-xl font-bold mb-4 text-rt-dark">
                  Yayasan Pendidikan
                </h3>
                <ul className="list-disc list-inside text-gray-700">
                  <li>TPA (Taman Pendidikan Al-Quran)</li>
                  <li>PAUD/TK</li>
                </ul>
              </div>

              {/* Masjid */}
              <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-rt-medium">
                <h3 className="text-xl font-bold mb-4 text-rt-dark">Masjid</h3>
                <p className="text-gray-700">
                  Temat ibadah dan kegiatan keagamaan
                </p>
              </div>

              {/* Pemancingan */}
              <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-rt-medium">
                <h3 className="text-xl font-bold mb-4 text-rt-dark">
                  Tempat Pemancingan
                </h3>
                <p className="text-gray-700">
                  Area rekreasi untuk kegiatan memancing
                </p>
              </div>
            </div>
          </div>
        </section>
    )
}