import { NextResponse } from "next/server";
import { getKegiatanById, updateKegiatan, deleteKegiatan } from "@/lib/db";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const kegiatan = await getKegiatanById(parseInt(params.id));
    if (!kegiatan) {
      return NextResponse.json(
        { error: "Kegiatan tidak ditemukan" },
        { status: 404 }
      );
    }
    return NextResponse.json(kegiatan);
  } catch (error) {
    console.error("Error getting kegiatan:", error);
    return NextResponse.json(
      { error: "Terjadi kesalahan saat mengambil data" },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const data = await request.json();
    await updateKegiatan(parseInt(params.id), data);
    return NextResponse.json({ message: "Kegiatan berhasil diupdate" });
  } catch (error) {
    console.error("Error updating kegiatan:", error);
    return NextResponse.json(
      { error: "Terjadi kesalahan saat mengupdate data" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    await deleteKegiatan(parseInt(params.id));
    return NextResponse.json({ message: "Kegiatan berhasil dihapus" });
  } catch (error) {
    console.error("Error deleting kegiatan:", error);
    return NextResponse.json(
      { error: "Terjadi kesalahan saat menghapus data" },
      { status: 500 }
    );
  }
}
