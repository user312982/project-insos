import Image from 'next/image';

export default function VisiMisiSection() {
  return (
    <section className="relative w-full py-16 h-[800px]">
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
        {/* Visi Section */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Visi</h2>
            <h3 className="text-xl font-semibold text-white mb-2">
              Menjadi Perusahaan Pengelola Hutan Berkelanjutan dan Bermanfaat Bagi Masyarakat
            </h3>
            <p className="text-white">
              PERHUTANI mendedikasikan diri bagi Indonesia dengan kemampuan maksimal, 
              bersinergi dengan semua pihak, mengikuti perkembangan dunia, demi memegang teguh 
              kepercayaan yang diberikan.
            </p>
        </div>

        {/* Misi Section */}
        <div>
          <h2 className="text-4xl font-bold text-white mb-4">Misi</h2>
            <ul className="text-white list-disc pl-5 space-y-2">
              <li>Mengelola Sumberdaya Hutan Secara Lestari</li>
              <li>Peduli Kepada Kepentingan Masyarakat dan Lingkungan</li>
              <li>Mengoptimalkan Bisnis Kehutanan dengan Prinsip Good Corporate Governance</li>
            </ul>
        </div>
    </div>
    </section>
  );
};
