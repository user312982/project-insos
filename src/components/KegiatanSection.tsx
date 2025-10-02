'use client';

import { useState, useEffect } from 'react';
import { getAllKegiatan, Kegiatan } from '@/lib/db';
import Image from 'next/image';

// Helper function to get appropriate icon based on activity title/type
const getActivityIcon = (title: string): string => {
    const titleLower = title.toLowerCase();
    if (titleLower.includes('gotong') || titleLower.includes('bersih')) return '🤝';
    if (titleLower.includes('kajian') || titleLower.includes('pengajian')) return '📖';
    if (titleLower.includes('olahraga') || titleLower.includes('senam')) return '⚽';
    if (titleLower.includes('festival') || titleLower.includes('perayaan')) return '🎪';
    if (titleLower.includes('rapat') || titleLower.includes('pertemuan')) return '🏢';
    if (titleLower.includes('anak') || titleLower.includes('balita')) return '👶';
    if (titleLower.includes('lansia') || titleLower.includes('senior')) return '👴';
    if (titleLower.includes('kesehatan') || titleLower.includes('posyandu')) return '🏥';
    if (titleLower.includes('pendidikan') || titleLower.includes('belajar')) return '🎓';
    return '📅'; // default icon
};

// Helper function to get solid color - using one matching color for all
const getSolidColor = (index: number): string => {
    // Using consistent emerald/green color that matches the #0b5232 background theme
    return 'bg-emerald-700';
};

// Helper function to format date
const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString('id-ID', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
};

// Helper function to format time
const formatTime = (timeString: string): string => {
    return timeString.slice(0, 5); // Remove seconds if present
};

export default function KegiatanSection() {
    const [kegiatan, setKegiatan] = useState<Kegiatan[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchKegiatan = async () => {
            try {
                setLoading(true);
                const data = await getAllKegiatan();
                setKegiatan(data);
                setError(null);
            } catch (err) {
                console.error('Error fetching kegiatan:', err);
                setError('Gagal memuat data kegiatan');
            } finally {
                setLoading(false);
            }
        };

        fetchKegiatan();
    }, []);

    if (loading) {
        return (
            <section className="py-16 bg-[#0b5232] relative overflow-hidden" id="kegiatan">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <h2 className="text-4xl font-bold mb-12 text-center text-white">
                        Kegiatan & Program Masyarakat
                    </h2>
                    <div className="flex justify-center items-center min-h-[200px]">
                        <div className="rounded-full border border-white/20 bg-white/10 backdrop-blur-md p-8">
                            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    if (error) {
        return (
            <section className="py-16 bg-[#0b5232] relative overflow-hidden" id="kegiatan">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <h2 className="text-4xl font-bold mb-12 text-center text-white">
                        Kegiatan & Program Masyarakat
                    </h2>
                    <div className="text-center">
                        <div className="inline-block rounded-2xl border border-red-500/30 bg-red-500/10 backdrop-blur-md px-6 py-4">
                            <p className="text-red-400">{error}</p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    if (kegiatan.length === 0) {
        return (
            <section className="py-16 bg-[#0b5232] relative overflow-hidden" id="kegiatan">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <h2 className="text-4xl font-bold mb-12 text-center text-white">
                        Kegiatan & Program Masyarakat
                    </h2>
                    <div className="text-center">
                        <div className="inline-block rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md px-6 py-4">
                            <p className="text-gray-300">Belum ada kegiatan yang terdaftar</p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="py-16 bg-[#0b5232] relative overflow-hidden" id="kegiatan">
            {/* Background decorative elements */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
            <div className="absolute top-1/4 left-0 w-96 h-96 bg-green-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
            
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-white mb-4">
                        Kegiatan & Program Masyarakat
                    </h2>
                    <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                        Berbagai kegiatan dan program untuk mempererat silaturahmi dan meningkatkan kesejahteraan warga
                    </p>
                </div>
                
                <div className="relative">
                    {/* Timeline line with glass effect */}
                    <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-white/20 via-white/40 to-white/20"></div>
                    
                    <div className="space-y-12">
                        {kegiatan.map((activity, index) => (
                            <div key={activity.id} className={`relative flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                                
                                {/* Timeline dot with glow */}
                                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white rounded-full border-4 border-gray-900 z-10 shadow-lg shadow-white/50"></div>
                                
                                {/* Date badge with glass effect */}
                                <div className={`absolute left-1/2 transform -translate-x-1/2 ${index % 2 === 0 ? '-translate-y-16' : 'translate-y-16'} z-10`}>
                                    <div className="rounded-full border border-white/20 bg-white/10 backdrop-blur-md px-4 py-2 text-xs font-bold shadow-lg text-center max-w-[140px]">
                                        <div className="text-white">{formatDate(activity.tanggal).split(',')[0]}</div>
                                        <div className="text-[10px] text-white/70">{formatDate(activity.tanggal).split(',')[1]}</div>
                                    </div>
                                </div>
                                
                                {/* Content card with glass morphism */}
                                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                                    <div className="rounded-3xl border border-white/15 bg-white/10 backdrop-blur-lg overflow-hidden shadow-xl hover:shadow-2xl hover:bg-white/15 transition-all duration-300">
                                        {/* Header section with title */}
                                        {activity.gambar ? (
                                            <div className="relative h-48">
                                                <Image
                                                    src={activity.gambar}
                                                    alt={activity.judul}
                                                    fill
                                                    className="object-cover"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/40"></div>
                                                <div className="absolute inset-0 flex items-center justify-center p-6">
                                                    <h3 className="text-2xl font-bold text-white text-center drop-shadow-lg relative z-10">
                                                        {activity.judul}
                                                    </h3>
                                                </div>
                                            </div>
                                        ) : (
                                            /* Header with solid color and title */
                                            <div className={`${getSolidColor(index)} p-6 relative overflow-hidden`}>
                                                <div className="absolute inset-0 bg-white/10"></div>
                                                <div className="flex items-center justify-center relative z-10">
                                                    <h3 className="text-2xl font-bold text-white text-center drop-shadow-lg">
                                                        {activity.judul}
                                                    </h3>
                                                </div>
                                            </div>
                                        )}
                                        
                                        {/* Content */}
                                        <div className="p-6">
                                            <p className="text-gray-300 leading-relaxed mb-4">
                                                {activity.deskripsi}
                                            </p>
                                            
                                            {/* Event details with glass panels */}
                                            <div className="space-y-2">
                                                <div className="flex items-center rounded-lg border border-white/10 bg-white/5 px-3 py-2">
                                                    <span className="text-blue-400 mr-2">📅</span>
                                                    <span className="text-sm text-gray-300">{formatDate(activity.tanggal)}</span>
                                                </div>
                                                <div className="flex items-center rounded-lg border border-white/10 bg-white/5 px-3 py-2">
                                                    <span className="text-green-400 mr-2">🕐</span>
                                                    <span className="text-sm text-gray-300">{formatTime(activity.waktu)} WITA</span>
                                                </div>
                                                <div className="flex items-center rounded-lg border border-white/10 bg-white/5 px-3 py-2">
                                                    <span className="text-red-400 mr-2">📍</span>
                                                    <span className="text-sm text-gray-300">{activity.lokasi}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Empty space for the other side */}
                                <div className="w-5/12"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}