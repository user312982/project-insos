import { NextResponse } from "next/server";
import { getCitizenStats } from "@/lib/db";

export async function GET() {
  try {
    const stats = await getCitizenStats();
    return NextResponse.json({ success: true, data: stats });
  } catch (error) {
    console.error("Error fetching citizen stats:", error);
    return NextResponse.json(
      { success: false, error: "Gagal mengambil data statistik" },
      { status: 500 }
    );
  }
}
