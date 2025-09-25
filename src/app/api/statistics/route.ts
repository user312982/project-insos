import { NextResponse } from "next/server";
import { getCitizenStats } from "@/lib/db";

export async function GET() {
  try {
    const stats = await getCitizenStats();
    return NextResponse.json(stats);
  } catch (error) {
    console.error("Error getting citizen stats:", error);
    return NextResponse.json(
      { error: "Terjadi kesalahan saat mengambil data statistik" },
      { status: 500 }
    );
  }
}
