import Image from "next/image";

export default function FasilitasSection() {
  const facilities = [
    {
      title: "Musholla Al'Falah",
      description:
        "Pusat ibadah dan kegiatan keagamaan warga RT 54 dengan kapasitas 70 jamaah. Dilengkapi dengan AC.",
      image: "/fasilitas/masjid.jpg",
      bgColor: "bg-emerald-600",
      features: [
        "Sholat 5 waktu",
        "Pengajian rutin",
        "Kajian Islam",
        "Pelatihan mengaji",
      ],
    },
    {
      title: "Posyandu",
      description:
        "Fasilitas kesehatan terpadu untuk ibu dan anak dengan layanan pemeriksaan rutin, imunisasi, dan konseling gizi.",
      image: "/fasilitas/posyandu.jpg",
      bgColor: "bg-cyan-600",
      features: [
        "Pemeriksaan kesehatan",
        "Imunisasi balita",
        "Konseling gizi",
        "Senam lansia",
      ],
    },
    {
      title: "PAUD",
      description:
        "Pendidikan anak usia dini dengan kurikulum bermain sambil belajar untuk mengembangkan kreativitas dan karakter anak.",
      image: "/fasilitas/paud.png",
      bgColor: "bg-pink-600",
      features: [
        "Pembelajaran interaktif",
        "Permainan edukatif",
        "Seni dan kreativitas",
        "Pengembangan karakter",
      ],
    },
    {
      title: "Tempat Pemancingan",
      description:
        "Area rekreasi keluarga dengan kolam pemancingan yang nyaman untuk refreshing dan mempererat hubungan keluarga.",
      image: "/fasilitas/pemancingan.jpg",
      bgColor: "bg-orange-600",
      features: [
        "Kolam ikan lele",
        "Tempat duduk",
        "Area parkir",
        "Warung makan",
      ],
    },
    {
      title: "Lapangan",
      description:
        "Area serbaguna untuk kegiatan olahraga, bermain anak, dan berbagai acara warga yang mendukung aktivitas komunitas.",
      image: "/fasilitas/lapangan.png",
      bgColor: "bg-rose-600",
      features: [
        "Gawang sepak bola",
        "Tempat acara warga",
        "Tempat bermain anak",
        "Area jogging",
      ],
    },
  ];

  return (
    <section
      className="py-16 bg-[#0b5232] relative overflow-hidden"
      id="fasilitas"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Fasilitas RT 54
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Berbagai fasilitas lengkap untuk mendukung kehidupan bermasyarakat
            yang nyaman dan sejahtera
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((facility, index) => (
            <div
              key={index}
              className="group hover:scale-105 transition-all duration-300"
            >
              {/* Glass morphism card */}
              <div className="rounded-3xl border border-white/15 bg-white/10 backdrop-blur-lg shadow-xl hover:shadow-2xl hover:bg-white/15 transition-all duration-300 overflow-hidden h-full">
                {/* Header with image background and title */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={facility.image}
                    alt={facility.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30"></div>
                  {/* Title */}
                  <div className="absolute inset-0 flex items-center justify-center p-6">
                    <h3 className="text-2xl font-bold text-white text-center drop-shadow-lg relative z-10">
                      {facility.title}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {facility.description}
                  </p>

                  {/* Features list */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-white/80 mb-2">
                      Layanan:
                    </h4>
                    <ul className="space-y-1">
                      {facility.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-center text-sm text-gray-300"
                        >
                          <div className="w-2 h-2 bg-green-400 rounded-full mr-2 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
