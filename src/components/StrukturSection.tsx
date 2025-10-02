import Image from "next/image";

export default function StrukturSection() {
    return (
<section className="py-16 bg-rt-light" id="struktur">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center text-rt-dark">
              Struktur RT54
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-6">
              {/* Ketua RT */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden text-center">
                {/* Foto */}
                <div className="relative w-full h-48">
                  <Image
                    src="/struktur/ketua-rt.png"
                    alt="Ketua RT"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Konten */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-rt-dark">Karyono</h3>
                  <p className="text-rt-medium">Ketua RT</p>
                </div>
              </div>

              {/* Tambahkan card struktur lain di sini */}
            </div>
          </div>
        </section>
    );
}