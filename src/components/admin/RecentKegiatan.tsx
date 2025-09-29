"use client";

import { useEffect, useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import Link from "next/link";

interface Kegiatan {
  id: number;
  judul: string;
  tanggal: string;
  lokasi: string;
}

export default function RecentKegiatan() {
  const [kegiatan, setKegiatan] = useState<Kegiatan[]>([]);
  const [loading, setLoading] = useState(true);
  const supabase = createClientComponentClient();

  useEffect(() => {
    const fetchKegiatan = async () => {
      try {
        const today = new Date().toISOString().split("T")[0];

        // Get upcoming activities
        const { data: upcomingData, error: upcomingError } = await supabase
          .from("kegiatan")
          .select("id, judul, tanggal, lokasi")
          .gte("tanggal", today)
          .order("tanggal", { ascending: true })
          .limit(2);

        if (upcomingError) throw upcomingError;

        // Get latest activities
        const { data: latestData, error: latestError } = await supabase
          .from("kegiatan")
          .select("id, judul, tanggal, lokasi")
          .lt("tanggal", today)
          .order("tanggal", { ascending: false })
          .limit(2);

        if (latestError) throw latestError;

        // Combine and sort the data
        const combinedData = [
          ...(upcomingData || []),
          ...(latestData || []),
        ].slice(0, 2);

        setKegiatan(combinedData);
      } catch (error) {
        console.error("Error fetching activities:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchKegiatan();
  }, []);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("id-ID", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  if (loading) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          Kegiatan Mendatang
        </h2>
        <div className="animate-pulse space-y-4">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="h-16 bg-gray-100 rounded"></div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-900">
          Kegiatan Terkini
        </h2>
        <Link
          href="/admin/kegiatan"
          className="text-sm text-[#00633f] hover:text-[#00805a]"
        >
          Lihat Semua
        </Link>
      </div>
      {kegiatan.length === 0 ? (
        <p className="text-gray-500 text-center py-4">Tidak ada kegiatan</p>
      ) : (
        <div className="space-y-4">
          {kegiatan.map((item) => {
            const today = new Date().toISOString().split("T")[0];
            const isUpcoming = item.tanggal >= today;

            return (
              <div
                key={item.id}
                className={`flex flex-col space-y-1 p-4 rounded-lg ${
                  isUpcoming ? "bg-green-50" : "bg-gray-50"
                }`}
              >
                <h3 className="font-medium text-gray-900">{item.judul}</h3>
                <div className="text-sm text-gray-600">
                  <p className="flex items-center">
                    <span
                      className={`w-2 h-2 rounded-full mr-2 ${
                        isUpcoming ? "bg-green-500" : "bg-gray-400"
                      }`}
                    ></span>
                    {formatDate(item.tanggal)}
                  </p>
                  <p>{item.lokasi}</p>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
