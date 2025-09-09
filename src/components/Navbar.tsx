'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { 
      name: 'Sejarah', 
      href: '#sejarah',
      current: true
    },
    { 
      name: 'Struktur', 
      href: '#struktur',
      current: false
    },
    { 
      name: 'Fasilitas', 
      href: '#fasilitas',
      current: false
    },
    { 
      name: 'Kegiatan', 
      href: '#kegiatan',
      current: false
    },
    { 
      name: 'Lokasi', 
      href: '#lokasi',
      current: false
    },
    { 
      name: 'Kontak', 
      href: '#kontak',
      current: false
    },
  ];

  return (
    <div className="min-h-full">
      <nav className={`fixed w-full transition-all duration-300 z-50 ${
        isScrolled ? 'bg-[#556B2F] shadow-lg' : 'bg-[#556B2F]/50 backdrop-blur-sm'
      }`}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Image 
                  src="/logo.png" 
                  alt="RT54" 
                  width={32} 
                  height={32}
                  className="h-8 w-8" 
                />
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={`${
                        item.current
                          ? 'bg-rt-medium text-white'
                          : 'text-rt-lightest hover:bg-rt-medium/80 hover:text-white'
                      } rounded-md px-3 py-2 text-sm font-medium`}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-4 flex items-center md:ml-6">
                <button type="button" className="relative rounded-full p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                  <span className="absolute -inset-1.5"></span>
                  <span className="sr-only">View notifications</span>
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                  </svg>
                </button>

                {/* Profile dropdown */}
                <div className="relative ml-3">
                  <div>
                    <button 
                      type="button" 
                      className="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                      onClick={() => setIsOpen(!isOpen)}
                    >
                      <span className="absolute -inset-1.5"></span>
                      <span className="sr-only">Open user menu</span>
                      <Image
                        className="h-8 w-8 rounded-full"
                        src="/profile-placeholder.jpg"
                        alt=""
                        width={32}
                        height={32}
                      />
                    </button>
                  </div>
                  {isOpen && (
                    <div className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Your Profile</a>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Settings</a>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Sign out</a>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Mobile menu button*/}
            <div className="-mr-2 flex md:hidden">
              <button
                type="button"
                className="relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                onClick={() => setIsOpen(!isOpen)}
              >
                <span className="absolute -inset-0.5"></span>
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                  </svg>
                ) : (
                  <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
          <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`${
                  item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                } block rounded-md px-3 py-2 text-base font-medium`}
                aria-current={item.current ? 'page' : undefined}
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="border-t border-gray-700 pb-3 pt-4">
            <div className="flex items-center px-5">
              <div className="flex-shrink-0">
                <Image
                  className="h-10 w-10 rounded-full"
                  src="/profile-placeholder.jpg"
                  alt=""
                  width={40}
                  height={40}
                />
              </div>
              <div className="ml-3">
                <div className="text-base font-medium text-white">Admin RT</div>
                <div className="text-sm font-medium text-gray-400">admin@rt54.com</div>
              </div>
              <button
                type="button"
                className="relative ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                <span className="absolute -inset-1.5"></span>
                <span className="sr-only">View notifications</span>
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                </svg>
              </button>
            </div>
            <div className="mt-3 space-y-1 px-2">
              <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white">
                Your Profile
              </a>
              <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white">
                Settings
              </a>
              <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white">
                Sign out
              </a>
            </div>
          </div>
        </div>
      </nav>

    </div>
  );
}