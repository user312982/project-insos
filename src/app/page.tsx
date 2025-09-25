// app/page.tsx
import Navbar from "@/components/Navbar";
import ImageCarousel from "@/components/ImageCarousel";
import Image from "next/image";
import SejarahSection from "@/components/SejarahSection";
import StrukturSection from "@/components/StrukturSection";
import AdministrasiSection from "@/components/AdministrasiSection";
import KegiatanSection from "@/components/KegiatanSection";
import PetaSection from "@/components/PetaSection";
import Footer from "@/components/Footer";
import FasilitasSection from "@/components/FasilitasSection";
import HomeSection from "@/components/Home";
import VisiMisiSection from "@/components/VisiMisiSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-rt-lightest">
      <Navbar />
      <main className="pt-16">
        {/* Hero Section */}
        <ImageCarousel className="-mt-16" />

        {/* Home Section */}
        <HomeSection/>

        {/* Visi Misi Section */}
        <VisiMisiSection />

        {/* Struktur RT Section */}
        <StrukturSection />


        {/* Administrasi penduduk */}
        <AdministrasiSection />

        {/* Fasilitas Section */}
        <FasilitasSection />

        {/* Kegiatan Section */}
        <KegiatanSection />

        {/* Peta Lokasi Section */}
        <PetaSection />

        {/* Footer Section */}
        <Footer />
      </main>
    </div>
  );
}
