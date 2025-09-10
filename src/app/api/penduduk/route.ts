import { NextResponse } from 'next/server';
import pool from '@/lib/db';

type InsertBody = {
  nik?: string;
  nama?: string;
  nilai_angka?: number;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as InsertBody;
    const { nik, nama, nilai_angka } = body;

    if (!nik || !nama || typeof nilai_angka !== 'number') {
      return NextResponse.json(
        { error: 'Input tidak valid. Wajib: nik, nama, nilai_angka:number' },
        { status: 400 },
      );
    }

    const connection = await pool.getConnection();
    try {
      await connection.execute(
        `INSERT INTO penduduk (nik, nama, nilai_angka) VALUES (?, ?, ?)`,
        [nik, nama, nilai_angka],
      );
    } finally {
      connection.release();
    }

    return NextResponse.json({ ok: true });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

