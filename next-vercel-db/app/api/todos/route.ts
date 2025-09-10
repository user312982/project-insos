import { NextResponse } from 'next/server';
import { ensureDatabase, pool } from '@/lib/db';

export const dynamic = 'force-dynamic';

export async function GET() {
	await ensureDatabase();
	const { rows } = await pool.query('SELECT id, content, created_at FROM todos ORDER BY created_at DESC');
	return NextResponse.json(rows);
}

export async function POST(request: Request) {
	await ensureDatabase();
	const body = await request.json().catch(() => null) as { content?: string } | null;
	const content = (body?.content ?? '').toString().trim();
	if (!content) {
		return NextResponse.json({ error: 'Content wajib diisi' }, { status: 400 });
	}
	const { rows } = await pool.query('INSERT INTO todos (content) VALUES ($1) RETURNING id, content, created_at', [content]);
	return NextResponse.json(rows[0], { status: 201 });
}