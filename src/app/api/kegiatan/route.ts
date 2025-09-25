import { NextResponse } from "next/server";
import {
  addKegiatan,
  getAllKegiatan,
  getKegiatanById,
  updateKegiatan,
  deleteKegiatan,
} from "@/lib/db";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const newKegiatan = await addKegiatan(data);
    return NextResponse.json(newKegiatan, { status: 201 });
  } catch (error) {
    console.error("Error adding kegiatan:", error);
    return NextResponse.json(
      { error: "Terjadi kesalahan saat menyimpan data" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const kegiatan = await getAllKegiatan();
    return NextResponse.json(kegiatan);
  } catch (error) {
    console.error("Error getting kegiatan:", error);
    return NextResponse.json(
      { error: "Terjadi kesalahan saat mengambil data" },
      { status: 500 }
    );
  }
}
