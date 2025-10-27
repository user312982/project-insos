"use client";

import { useEffect, useState } from 'react';

type Todo = {
	id: number;
	content: string;
	created_at: string;
};

export default function TodoApp() {
	const [todos, setTodos] = useState<Todo[]>([]);
	const [content, setContent] = useState<string>('');
	const [loading, setLoading] = useState<boolean>(false);
	const [error, setError] = useState<string>('');

	async function loadTodos() {
		try {
			setLoading(true);
			const res = await fetch('/api/todos', { cache: 'no-store' });
			if (!res.ok) throw new Error('Gagal memuat data');
			const data = await res.json();
			setTodos(data);
		} catch (err: unknown) {
			setError(err instanceof Error ? err.message : 'Terjadi kesalahan');
		} finally {
			setLoading(false);
		}
	}

	useEffect(() => {
		loadTodos();
	}, []);

	async function addTodo(e: React.FormEvent) {
		e.preventDefault();
		if (!content.trim()) return;
		const body = { content: content.trim() };
		setContent('');
		const res = await fetch('/api/todos', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(body)
		});
		if (res.ok) {
			loadTodos();
		} else {
			setError('Gagal menambah todo');
		}
	}

	async function deleteTodo(id: number) {
		const res = await fetch(`/api/todos/${id}`, { method: 'DELETE' });
		if (res.ok) {
			setTodos((cur) => cur.filter((t) => t.id !== id));
		} else {
			setError('Gagal menghapus todo');
		}
	}

	return (
		<div>
			<p style={{ opacity: 0.8, marginBottom: 16 }}>
				Contoh simple: API + DB Postgres (Docker lokal, Vercel gratis)
			</p>
			<form onSubmit={addTodo} style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
				<input
					type="text"
					value={content}
					onChange={(e) => setContent(e.target.value)}
					placeholder="Tulis todo..."
					style={{ flex: 1, padding: 8, borderRadius: 6, border: '1px solid #2d3a58', background: '#101a2b', color: '#e6edf3' }}
				/>
				<button type="submit" style={{ padding: '8px 12px', borderRadius: 6, background: '#2f6feb', color: 'white', border: 'none' }}>
					Tambah
				</button>
			</form>
			{error && (
				<div style={{ background: '#2a1b1b', border: '1px solid #5c2e2e', padding: 8, borderRadius: 6, marginBottom: 12 }}>
					{error}
				</div>
			)}
			{loading ? (
				<p>Sedang memuat...</p>
			) : (
				<ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 8 }}>
					{todos.map((t) => (
						<li key={t.id} style={{ display: 'flex', alignItems: 'center', gap: 8, background: '#0f172a', border: '1px solid #1d2a44', padding: 8, borderRadius: 8 }}>
							<span style={{ flex: 1 }}>{t.content}</span>
							<button onClick={() => deleteTodo(t.id)} style={{ padding: '6px 10px', borderRadius: 6, background: '#9b1c1c', color: 'white', border: 'none' }}>
								Hapus
							</button>
						</li>
					))}
				</ul>
			)}
		</div>
	);
}