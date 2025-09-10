import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
	title: 'Next + Postgres',
	description: 'Simple Next.js + Postgres (Docker local, Vercel free)'
};

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="en">
			<body style={{ fontFamily: 'system-ui, sans-serif', margin: 0, padding: 24, background: '#0b1220', color: '#e6edf3' }}>
				<div style={{ maxWidth: 720, margin: '0 auto' }}>
					<h1 style={{ fontSize: 24, marginBottom: 16 }}>Next.js + PostgreSQL</h1>
					{children}
				</div>
			</body>
		</html>
	);
}