import { NextResponse } from "next/server";
import { getCitizenByNik, updateCitizen, deleteCitizen } from "@/lib/db";
import type { Citizen } from "@/lib/db";

interface Params {
  nik: string;
}

// GET endpoint to fetch a single citizen's data
export async function GET(request: Request, { params }: { params: Params }) {
  try {
    const data = await getCitizenByNik(params.nik);

    if (!data) {
      return NextResponse.json(
        { success: false, error: "Data warga tidak ditemukan" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Error fetching citizen:", error);
    return NextResponse.json(
      { success: false, error: "Gagal mengambil data warga" },
      { status: 500 }
    );
  }
}

// PUT endpoint to update citizen data
export async function PUT(request: Request, { params }: { params: Params }) {
  try {
    const body: Partial<Citizen> = await request.json();

    // Only allow updating specific fields
    const allowedFields = [
      "nama",
      "agama",
      "jenis_kelamin",
      "status_perkawinan",
    ];
    const updateData = Object.fromEntries(
      Object.entries(body).filter(([key]) => allowedFields.includes(key))
    );

    if (Object.keys(updateData).length === 0) {
      return NextResponse.json(
        { success: false, error: "Tidak ada data yang diperbarui" },
        { status: 400 }
      );
    }

    const data = await updateCitizen(params.nik, updateData);
    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Error updating citizen:", error);
    return NextResponse.json(
      { success: false, error: "Gagal memperbarui data warga" },
      { status: 500 }
    );
  }
}

// DELETE endpoint to remove a citizen
export async function DELETE(request: Request, { params }: { params: Params }) {
  try {
    const citizen = await getCitizenByNik(params.nik);
    if (!citizen) {
      return NextResponse.json(
        { success: false, error: "Data warga tidak ditemukan" },
        { status: 404 }
      );
    }

    await deleteCitizen(params.nik);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error deleting citizen:", error);
    return NextResponse.json(
      { success: false, error: "Gagal menghapus data warga" },
      { status: 500 }
    );
  }
}
