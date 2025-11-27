"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isManualScroll, setIsManualScroll] = useState(false);
  const [scrollTimeout, setScrollTimeout] = useState<NodeJS.Timeout | null>(
    null
  );

  // Function to handle smooth scrolling when clicking navigation links
  const handleNavClick = (id: string) => {
    // Set manual scroll mode to prevent scroll listener from changing active section
    setIsManualScroll(true);
    setActiveSection(id);

    const element = document.getElementById(id);
    if (element) {
      // Close mobile menu if open
      setIsOpen(false);

      // Scroll to the element with smooth behavior
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      // Clear any existing timeout
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }

      // Set a timeout to allow manual scrolling to complete before re-enabling automatic section detection
      // This duration should be long enough to complete the smooth scroll animation
      const timeout = setTimeout(() => {
        setIsManualScroll(false);
      }, 1000); // 1 second should be enough for most scroll animations

      setScrollTimeout(timeout);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      // Handle navbar background color on scroll
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Only update active section if not in manual scroll mode
      if (!isManualScroll) {
        // Handle active section based on scroll position
        const sections = [
          "home",
          "struktur",
          "fasilitas",
          "kegiatan",
          "lokasi",
          "kontak",
        ];

        const scrollPosition = window.scrollY + 100; // Adding offset for better UX

        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const { offsetTop, offsetHeight } = element;
            if (
              scrollPosition >= offsetTop &&
              scrollPosition < offsetTop + offsetHeight
            ) {
              setActiveSection(section);
              break;
            }
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      // Clear timeout on unmount to prevent memory leaks
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
    };
  }, [isManualScroll, scrollTimeout]);

  const navigation = [
    {
      name: "Home",
      href: "#home",
      id: "home",
    },
    {
      name: "Struktur",
      href: "#struktur",
      id: "struktur",
    },
    {
      name: "Fasilitas",
      href: "#fasilitas",
      id: "fasilitas",
    },
    {
      name: "Kegiatan",
      href: "#kegiatan",
      id: "kegiatan",
    },
    {
      name: "Lokasi",
      href: "#lokasi",
      id: "lokasi",
    },
    {
      name: "Kontak",
      href: "#kontak",
      id: "kontak",
    },
  ];

  return (
    <div className="min-h-full">
      <nav
        className={`fixed w-full transition-all duration-300 z-50 ${
          isScrolled ? "bg-white shadow-md" : "bg-white/95 backdrop-blur-md"
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            {/* Logo - Left Side */}
            <div className="flex-shrink-0">
              <a
                href="#home"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick("home");
                }}
                className="flex items-center space-x-2 group"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-[#00633f] rounded-lg blur-sm opacity-20 group-hover:opacity-30 transition-opacity"></div>
                  <span className="relative text-3xl font-black text-[#00633f] tracking-tight">
                    RT<span className="text-[#00805a]">54</span>
                  </span>
                </div>
              </a>
            </div>

            {/* Desktop Navigation - Centered */}
            <div className="hidden md:flex flex-1 justify-center">
              <div className="flex items-center space-x-1">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.id);
                    }}
                    className={`relative px-5 py-2.5 text-sm font-medium rounded-lg transition-all duration-300 ${
                      activeSection === item.id
                        ? "text-[#00633f] bg-[#00633f]/5"
                        : "text-gray-700 hover:bg-gray-50 hover:text-[#00633f]"
                    }`}
                    aria-current={
                      activeSection === item.id ? "page" : undefined
                    }
                  >
                    {item.name}
                    {activeSection === item.id && (
                      <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-[#00633f] rounded-full"></span>
                    )}
                  </a>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="flex md:hidden">
              <button
                type="button"
                className="relative inline-flex items-center justify-center rounded-lg p-2.5 text-gray-700 hover:bg-gray-100 hover:text-[#00633f] focus:outline-none focus:ring-2 focus:ring-[#00633f] transition-colors"
                onClick={() => setIsOpen(!isOpen)}
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } md:hidden border-t border-gray-100`}
        >
          <div className="space-y-1 px-4 py-4 bg-white">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.id);
                }}
                className={`${
                  activeSection === item.id
                    ? "bg-[#00633f] text-white"
                    : "text-gray-700 hover:bg-gray-50 hover:text-[#00633f]"
                } block rounded-lg px-4 py-3 text-base font-medium transition-all duration-200`}
                aria-current={activeSection === item.id ? "page" : undefined}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
}
