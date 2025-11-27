import Image from "next/image";

export default function StrukturSection() {
  return (
    <section className="relative w-full py-20" id="struktur">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/background/image.png"
          alt="Background Pattern"
          fill
          quality={100}
          priority
        />
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4 drop-shadow-lg">
            Struktur Pengurus Rukun Tetangga 054
          </h2>
          <p className="text-2xl text-white/90 drop-shadow-md">
            Kelurahan Karang Joang Balikpapan
          </p>
        </div>

        {/* Struktur Organisasi */}
        <div className="max-w-5xl mx-auto">
          {/* Ketua */}
          <div className="flex justify-center mb-10">
            <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-2xl overflow-hidden w-64 border-4 border-white/50 transform hover:scale-105 transition-all duration-300">
              {/* Konten */}
              <div className="p-5 text-center">
                <h3 className="text-lg font-bold mb-2 text-emerald-800">KETUA</h3>
                <p className="text-xl font-extrabold tracking-wide text-gray-800">KARDIYONO</p>
              </div>
            </div>
          </div>

          {/* Sekretaris & Bendahara */}
          <div className="flex justify-center gap-12 mb-10">
            {/* Sekretaris */}
            <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-xl overflow-hidden w-56 border-2 border-white/40 transform hover:scale-105 transition-all duration-300">
              {/* Konten */}
              <div className="p-4 text-center">
                <h3 className="text-base font-bold mb-1 text-emerald-800">SEKRETARIS</h3>
                <p className="text-sm font-bold text-gray-800">M. IMRON</p>
              </div>
            </div>

            {/* Bendahara */}
            <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-xl overflow-hidden w-56 border-2 border-white/40 transform hover:scale-105 transition-all duration-300">
              {/* Konten */}
              <div className="p-4 text-center">
                <h3 className="text-base font-bold mb-1 text-emerald-800">BENDAHARA</h3>
                <p className="text-sm font-bold text-gray-800">HALID WIDODO</p>
              </div>
            </div>
          </div>

          {/* Seksi-seksi */}
          <div className="mb-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              {/* Seksi Keamanan */}
              <div className="bg-white/85 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden border-2 border-white/30 transform hover:scale-105 transition-all duration-300 h-full">
                {/* Konten */}
                <div className="p-3 text-center">
                  <h3 className="text-xs font-bold mb-1 text-emerald-800">SEKSI KEAMANAN</h3>
                  <p className="text-[10px] font-semibold leading-tight text-gray-700">MOH. ISMA KHALUDIN HAMBI</p>
                </div>
              </div>

              {/* Seksi Pembangunan */}
              <div className="bg-white/85 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden border-2 border-white/30 transform hover:scale-105 transition-all duration-300 h-full">
                {/* Konten */}
                <div className="p-3 text-center">
                  <h3 className="text-xs font-bold mb-1 text-emerald-800">SEKSI PEMBANGUNAN</h3>
                  <p className="text-[10px] font-semibold leading-tight text-gray-700">HERI WAHYONO HADIANTO</p>
                </div>
              </div>

              {/* Seksi Agama */}
              <div className="bg-white/85 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden border-2 border-white/30 transform hover:scale-105 transition-all duration-300 h-full">
                {/* Konten */}
                <div className="p-3 text-center">
                  <h3 className="text-xs font-bold mb-1 text-emerald-800">SEKSI AGAMA</h3>
                  <p className="text-[10px] font-semibold leading-tight text-gray-700">DWI IMAWAN FERDINAND L. KOILAG</p>
                </div>
              </div>

              {/* Seksi Pemuda dan Olahraga */}
              <div className="bg-white/85 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden border-2 border-white/30 transform hover:scale-105 transition-all duration-300 h-full">
                {/* Konten */}
                <div className="p-3 text-center">
                  <h3 className="text-xs font-bold mb-1 text-emerald-800">SEKSI PEMUDA & OLAHRAGA</h3>
                  <p className="text-[10px] font-semibold leading-tight text-gray-700">BELY SUWONO RAHMAN HAKIM</p>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center gap-12">
              {/* Seksi PPA - Left */}
              <div className="bg-white/85 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden w-44 border-2 border-white/30 transform hover:scale-105 transition-all duration-300">
                {/* Konten */}
                <div className="p-3 text-center">
                  <h3 className="text-xs font-bold mb-1 text-emerald-800">SEKSI PPA</h3>
                  <p className="text-[10px] font-semibold leading-tight text-gray-700">Farikhatul Mu&apos;saidah</p>
                </div>
              </div>

              {/* Seksi PKK - Right */}
              <div className="bg-white/85 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden w-44 border-2 border-white/30 transform hover:scale-105 transition-all duration-300">
                {/* Konten */}
                <div className="p-3 text-center">
                  <h3 className="text-xs font-bold mb-1 text-emerald-800">SEKSI PKK</h3>
                  <p className="text-[10px] font-semibold leading-tight text-gray-700">LISAWATI</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
