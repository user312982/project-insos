## Development

1. Jalankan database lokal dengan Docker:

```bash
docker compose up -d
```

2. Salin `.env.local.example` menjadi `.env.local` dan sesuaikan jika perlu.

3. Jalankan aplikasi:

```bash
npm run dev
```

4. Buka halaman `/penduduk` untuk input data dan coba submit.

Adminer tersedia di `http://localhost:8080` (host: `db`, user: `app`, pass: `app_pass`, db: `db_insos`).

## API

- `POST /api/penduduk`
  - Body JSON: `{ "nik": string, "nama": string, "nilai_angka": number }`

## Deploy ke Vercel

- Vercel tidak meng-host database. Gunakan managed MySQL (mis. PlanetScale/AWS RDS/GCP Cloud SQL).
- Set `DB_HOST`, `DB_PORT`, `DB_USER`, `DB_PASSWORD`, `DB_NAME` di Vercel Project Settings.
- Driver yang digunakan adalah `mysql2` (TCP). Di lingkungan serverless, gunakan pooling atau pertimbangkan driver HTTP seperti `@planetscale/database` bila perlu.
