import Image from "next/image";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-rt-lightest">
      <Navbar />
      <main>
        {/* Hero Section */}
      <section className="bg-rt-dark text-black py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Selamat Datang di RT54</h1>
          <p className="text-xl">Membangun Komunitas yang Harmonis dan Sejahtera</p>
        </div>
      </section>

      {/* Sejarah Section */}
      <section className="py-16" id="sejarah">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-rt-dark">Sejarah RT54</h2>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <p className="text-rt-dark leading-relaxed">
              RT54 telah berdiri sejak tahun [Tahun Berdiri] dan telah mengalami berbagai perkembangan signifikan.
              Bermula dari sebuah pemukiman kecil, kini telah berkembang menjadi kawasan yang modern dengan berbagai
              fasilitas lengkap untuk mendukung kesejahteraan warga.
            </p>
          </div>
        </div>
      </section>

      {/* Struktur RT Section */}
      <section className="py-16 bg-rt-light" id="struktur">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-rt-dark">Struktur RT54</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Ketua RT */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="w-24 h-24 rounded-full bg-rt-medium mx-auto mb-4"></div>
              <h3 className="text-xl font-bold text-rt-dark">Nama Ketua RT</h3>
              <p className="text-rt-medium">Ketua RT</p>
            </div>
            {/* Add more structure components */}
          </div>
        </div>
      </section>

      {/* Fasilitas Section */}
      <section className="py-16 bg-rt-lightest" id="fasilitas">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-rt-dark">Fasilitas</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Posyandu */}
            <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-rt-medium">
              <h3 className="text-xl font-bold mb-4">Posyandu</h3>
              <p className="text-gray-700">Layanan kesehatan terpadu untuk ibu dan anak</p>
            </div>

            {/* Yayasan */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Yayasan Pendidikan</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>TPA (Taman Pendidikan Al-Quran)</li>
                <li>PAUD/TK</li>
              </ul>
            </div>

            {/* Masjid */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Masjid</h3>
              <p className="text-gray-700">Tempat ibadah dan kegiatan keagamaan</p>
            </div>

            {/* Pemancingan */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Tempat Pemancingan</h3>
              <p className="text-gray-700">Area rekreasi untuk kegiatan memancing</p>
            </div>
          </div>
        </div>
      </section>

      {/* Kegiatan Section */}
      <section className="py-16 bg-gray-100" id="kegiatan">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Kegiatan Masyarakat</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Event Mendatang</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-bold">Gotong Royong</h4>
                  <p className="text-gray-600">Minggu, 20 September 2025</p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-bold">Pengajian Rutin</h4>
                  <p className="text-gray-600">Setiap Jumat Malam</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Peta Lokasi Section */}
      <section className="py-16" id="lokasi">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Peta Lokasi</h2>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="aspect-w-16 aspect-h-9 bg-gray-200">
               {<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1994.486300234818!2d116.879316002796!3d-1.179728333461346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sid!4v1757412383635!5m2!1sen!2sid" 
               width="1456" 
               height="538" 
               style={{ border: 0 }} 
               allowFullScreen={true} 
               loading="lazy" 
               referrerPolicy="no-referrer-when-downgrade"
               ></iframe>}
            </div>
          </div>
        </div>
      </section>

      {/* Kontak Section */}
      <section className="py-16 bg-gray-100" id="kontak">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Kontak</h2>
          <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg">
            <div className="space-y-4">
              <div className="flex items-center">
                <svg className="w-6 h-6 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <p className="text-gray-700">+62 XXX-XXXX-XXXX</p>
              </div>
              <div className="flex items-center">
                <svg className="w-6 h-6 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <p className="text-gray-700">rt54@email.com</p>
              </div>
              <div className="flex items-center">
                <svg className="w-6 h-6 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="text-gray-700">[Alamat lengkap RT54]</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    </div>
  );
}
