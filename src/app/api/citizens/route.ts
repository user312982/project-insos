import { NextResponse } from "next/server";
import { addCitizen, getAllCitizens, getCitizenByNik } from "@/lib/db";

// GET endpoint to fetch all citizens
export async function GET() {
  try {
    console.log("Fetching all citizens...");
    const citizens = await getAllCitizens();
    console.log("Citizens fetched successfully:", citizens);

    if (!Array.isArray(citizens)) {
      console.error("Invalid data format - expected array:", citizens);
      throw new Error("Invalid data format");
    }

    return NextResponse.json({
      success: true,
      data: citizens,
    });
  } catch (error) {
    console.error("Error fetching citizens:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Gagal mengambil data warga",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const data = await request.json();

    // Validate NIK format
    if (!data.nik || data.nik.length !== 16) {
      return NextResponse.json(
        { error: "NIK harus berjumlah 16 digit" },
        { status: 400 }
      );
    }

    if (!/^\d{16}$/.test(data.nik)) {
      return NextResponse.json(
        { error: "NIK hanya boleh berisi angka" },
        { status: 400 }
      );
    }

    // Check if NIK already exists
    const existingCitizen = await getCitizenByNik(data.nik);
    if (existingCitizen) {
      return NextResponse.json(
        { error: "NIK sudah terdaftar" },
        { status: 400 }
      );
    }

    try {
      // Add new citizen
      const newCitizen = await addCitizen(data);
      return NextResponse.json(newCitizen, { status: 201 });
    } catch (error) {
      console.error("Error adding citizen:", error);
      // Check if it's a Supabase error
      if (
        error &&
        typeof error === "object" &&
        "code" in error &&
        "message" in error
      ) {
        const dbError = error as { code: string; message: string };
        return NextResponse.json(
          { error: `Database error: ${dbError.message}` },
          { status: 500 }
        );
      }
      return NextResponse.json(
        { error: "Terjadi kesalahan saat menyimpan data" },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Error processing request:", error);
    return NextResponse.json(
      { error: "Terjadi kesalahan saat memproses permintaan" },
      { status: 500 }
    );
  }
}
