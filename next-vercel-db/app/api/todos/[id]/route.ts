import { NextResponse } from 'next/server';
import { ensureDatabase, pool } from '@/lib/db';

export const dynamic = 'force-dynamic';

export async function DELETE(_: Request, { params }: { params: { id: string } }) {
	await ensureDatabase();
	const id = Number(params.id);
	if (!Number.isInteger(id) || id <= 0) {
		return NextResponse.json({ error: 'ID tidak valid' }, { status: 400 });
	}
	await pool.query('DELETE FROM todos WHERE id = $1', [id]);
	return NextResponse.json({ ok: true });
}