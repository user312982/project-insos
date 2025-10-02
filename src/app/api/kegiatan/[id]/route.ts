import { NextResponse } from "next/server";
import { getKegiatanById, updateKegiatan, deleteKegiatan } from "@/lib/db";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const kegiatan = await getKegiatanById(parseInt(id));
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
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const data = await request.json();
    await updateKegiatan(parseInt(id), data);
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
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    await deleteKegiatan(parseInt(id));
    return NextResponse.json({ message: "Kegiatan berhasil dihapus" });
  } catch (error) {
    console.error("Error deleting kegiatan:", error);
    return NextResponse.json(
      { error: "Terjadi kesalahan saat menghapus data" },
      { status: 500 }
    );
  }
}
