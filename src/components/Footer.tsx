import type { ReactNode } from 'react';
import Image from 'next/image';

type LinkSection = {
  title: string;
  links: { label: string; href: string }[];
};

type ContactItem = {
  label: string;
  value: string;
  href?: string;
  icon: ReactNode;
};

type SocialLink = {
  name: string;
  href: string;
  label: string;
};

const linkSections: LinkSection[] = [
  {
    title: 'Unit Layanan',
    links: [
      { label: 'Administrasi Warga', href: '#administrasi' },
      { label: 'Fasilitas Lingkungan', href: '#fasilitas' },
      { label: 'Program Kegiatan', href: '#kegiatan' },
      { label: 'Peta Wilayah', href: '#lokasi' },
    ],
  },
  {
    title: 'Informasi',
    links: [
      { label: 'Sejarah RT 54', href: '#sejarah' },
      { label: 'Struktur Kepengurusan', href: '#struktur' },
      { label: 'Berita & Publikasi', href: '#kegiatan' },
      { label: 'Hubungi Pengurus', href: '#kontak' },
    ],
  },
  {
    title: 'Tentang Kami',
    links: [
      { label: 'Profil RT', href: '#home' },
      { label: 'Visi & Misi', href: '#home' },
      { label: 'Layanan Masyarakat', href: '#administrasi' },
      { label: 'Kemitraan', href: '#kegiatan' },
    ],
  },
];

const contactItems: ContactItem[] = [
  {
    label: 'Telepon',
    value: '+62 812-3456-7890',
    href: 'tel:+6281234567890',
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
        />
      </svg>
    ),
  },
  {
    label: 'Email',
    value: 'rt54@kelurahan.id',
    href: 'mailto:rt54@kelurahan.id',
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    label: 'Alamat',
    value: 'Jl. TB Simatupang No.22, RT 54/RW 08, Kel. Sukamaju, Kec. Pasar Minggu, Jakarta Selatan 12540',
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
  },
  {
    label: 'Jam Layanan',
    value: 'Senin - Jumat 08.00 - 17.00 WIB',
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M12 6v6l3 3"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
];

const socialLinks: SocialLink[] = [
  { name: 'WhatsApp', href: 'https://wa.me/089', label: 'WA' },
  { name: 'Instagram', href: 'https://instagram.com', label: 'IG' },
  { name: 'YouTube', href: 'https://youtube.com', label: 'YT' },
  { name: 'LinkedIn', href: 'https://linkedin.com', label: 'IN' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="kontak" className="bg-rt-dark text-white">
      <div className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/background/posyandu1.png"
            alt="Warga RT 54"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-rt-dark/85" aria-hidden="true" />
        </div>

        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="max-w-xl space-y-6">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/70">
                Bergabunglah Bersama Kami
              </p>
              <h2 className="text-3xl font-bold leading-tight sm:text-4xl">
                Jadilah bagian dari gerakan pelestari lingkungan dan pelayanan warga RT 54.
              </h2>
              <p className="text-base text-white/80 sm:text-lg">
                Kami berkolaborasi dengan masyarakat untuk menciptakan lingkungan hijau, aman, dan harmonis.
                Mari wujudkan kampung yang maju dan lestari bersama-sama.
              </p>
              <a
                href="#kegiatan"
                className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold tracking-wide text-white transition hover:bg-white/20"
              >
                Selengkapnya
              </a>
            </div>

            <div className="rounded-3xl border border-white/15 bg-white/10 p-8 shadow-xl backdrop-blur">
              <h3 className="text-xl font-semibold">Sekretariat RT 54 Sukamaju</h3>
              <p className="mt-2 text-sm text-white/75">
                Terbuka untuk konsultasi administrasi, koordinasi kegiatan warga, serta layanan informasi lingkungan.
              </p>

              <dl className="mt-6 space-y-5">
                {contactItems.map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white">
                      {item.icon}
                    </span>
                    <div className="text-white/90">
                      <dt className="text-xs font-semibold uppercase tracking-[0.3em] text-white/60">
                        {item.label}
                      </dt>
                      <dd className="mt-1 text-base font-medium">
                        {item.href ? (
                          <a href={item.href} className="hover:text-white">
                            {item.value}
                          </a>
                        ) : (
                          item.value
                        )}
                      </dd>
                    </div>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 bg-[#0B5232]">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-4">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Image
                  src="/logo.png"
                  alt="Logo RT 54"
                  width={64}
                  height={64}
                  className="h-16 w-16 rounded-full border border-white/20 bg-white/80 object-contain p-2"
                />
                <div>
                  <p className="text-lg font-semibold">RT 54 Kel. Sukamaju</p>
                  <p className="text-sm text-white/70">RW 08, Kec. Pasar Minggu</p>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-white/80">
                RT 54 hadir sebagai garda terdepan pelayanan publik di lingkungan Kelurahan Sukamaju. Kami memastikan
                keterlibatan warga dalam setiap program pembangunan, sosial, dan pelestarian lingkungan.
              </p>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-sm font-semibold uppercase tracking-wide text-white transition hover:border-white/60 hover:bg-white/10"
                  >
                    <span className="sr-only">{social.name}</span>
                    <span aria-hidden>{social.label}</span>
                  </a>
                ))}
              </div>
            </div>

            {linkSections.map((section) => (
              <div key={section.title}>
                <h3 className="text-xs font-semibold uppercase tracking-[0.3em] text-white/60">
                  {section.title}
                </h3>
                <ul className="mt-4 space-y-3 text-sm text-white/80">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <a href={link.href} className="transition hover:text-white">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-white/60 md:flex-row md:items-center md:justify-between">
            <p>© {currentYear} RT 54 Kelurahan Sukamaju. Hak cipta dilindungi.</p>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              <span>Whistleblowing System</span>
              <span>Transparansi Anggaran</span>
              <span>Layanan Informasi Publik</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
