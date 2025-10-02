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
          <p className="text-gray-500 text-center text-base">
            Ketua RT 54
          </p>
        </div>
        {/* Kanan: Sambutan dan Deskripsi */}
        <div className="flex-1 flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-6 leading-tight">
            Selamat Datang di Perum Perhutani
          </h2>
          <p className="text-gray-700 mb-4">
            64 tahun Perhutani telah melayani bangsa dan negara ini. Kemampuan, pengalaman, dan nilai-nilai luhur yang diperjuangkan telah membuat institusi ini tetap lestari sebagaimana hutan-hutan yang kami jaga.
          </p>
          <p className="text-gray-700 mb-8">
            Menyesuaikan diri dengan dunia yang makin cepat dan transparan, kami berkomitmen untuk turut terlibat dalam pada keterbukaan informasi pada publik. Media komunikasi digital ini menjadi usaha kami untuk terus beradaptasi dengan zaman. Sekaligus, website ini dirancang untuk memberi Anda informasi yang lengkap, padat, dan bermanfaat tentang proses, kinerja, hasil, dan sumbangsih kami, Perhutani, bagi Indonesia.
          </p>
        </div>
      </div>
    </section>
  );
}