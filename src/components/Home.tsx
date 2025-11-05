import Image from "next/image";

export default function HomeSection() {
  return (
    <section className="py-16 bg-white" id="home">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-8 px-4">
        {/* Kiri: Foto dan Nama */}
        <div className="flex-1 flex flex-col items-center justify-center">
          <div className="relative w-64 h-80 mb-6">
            <Image
              src="/struktur/ketua-rt.png"
              alt="Ketua RT"
              fill
              className="object-cover"
            />
          </div>
          <h3 className="text-green-800 text-2xl font-bold text-center mb-1 tracking-wide">
            KARDIONO
          </h3>
          <p className="text-gray-500 text-center text-base">Ketua RT 54</p>
        </div>
        {/* Kanan: Sambutan dan Deskripsi */}
        <div className="flex-1 flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-6 leading-tight">
            Selamat Datang di RT 54 Karang Joang
          </h2>
          <p className="text-gray-700 mb-4">
            RT 54 Karang Joang hadir untuk melayani dan membangun kebersamaan
            warga. Dengan semangat gotong royong, kepedulian lingkungan, serta
            nilai kekeluargaan yang dijunjung tinggi, kami berkomitmen
            menjadikan RT ini sebagai lingkungan yang nyaman, aman, dan
            bermanfaat bagi seluruh warganya.
          </p>
          <p className="text-gray-700 mb-8">
            Seiring dengan perkembangan zaman, RT 54 berupaya menyesuaikan diri
            dengan dunia digital agar keterbukaan informasi dapat lebih mudah
            diakses oleh masyarakat. Website ini dirancang untuk memberikan
            informasi yang lengkap, transparan, serta bermanfaat mengenai
            kegiatan, program kerja, hasil capaian, dan kontribusi RT 54 bagi
            warga dan lingkungan sekitar.
          </p>
        </div>
      </div>
    </section>
  );
}
