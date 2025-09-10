import { Pool } from 'pg';

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
	// Allow undefined at build time; runtime must set it.
	console.warn('DATABASE_URL is not set. Define it in .env.local for local dev or Vercel envs.');
}

const shouldUseSSL = process.env.DATABASE_SSL === 'true' || !!process.env.VERCEL;

export const pool = new Pool({
	connectionString,
	ssl: shouldUseSSL ? { rejectUnauthorized: false } : false
});

let initPromise: Promise<void> | null = null;

async function initializeSchema(): Promise<void> {
	await pool.query(`
		CREATE TABLE IF NOT EXISTS todos (
			id SERIAL PRIMARY KEY,
			content TEXT NOT NULL,
			created_at TIMESTAMPTZ DEFAULT now()
		);
	`);
}

export async function ensureDatabase(): Promise<void> {
	if (!initPromise) {
		initPromise = initializeSchema();
	}
	return initPromise;
}