# 🔧 Vercel Environment Variables Setup

## ⚠️ PENTING: Wajib Setup Sebelum Deploy!

Project ini **MEMERLUKAN** 2 environment variables dari Supabase untuk bisa berjalan.

---

## 📝 Langkah-langkah Setup di Vercel

### Step 1: Dapatkan Values dari Supabase

1. Buka **Supabase Dashboard**: https://app.supabase.com
2. Pilih project Anda
3. Klik **Settings** (⚙️) → **API**
4. Copy nilai berikut:

```
Project URL (Configuration):
https://upykdqrcrcfhgklczyhn.supabase.co

Project API keys → anon • public:
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVweWtkcXJjcmNmaGdrbGN6eWhuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg4MDU2NTcsImV4cCI6MjA3NDM4MTY1N30.8_E...
```

---

### Step 2: Tambahkan ke Vercel Dashboard

1. Buka **Vercel Dashboard**: https://vercel.com/dashboard
2. Pilih project `project-insos`
3. Klik **Settings** tab
4. Pilih **Environment Variables** di sidebar
5. Tambahkan kedua variabel:

#### Variable 1:
```
Name:  NEXT_PUBLIC_SUPABASE_URL
Value: https://upykdqrcrcfhgklczyhn.supabase.co
Environments: ☑️ Production  ☑️ Preview  ☑️ Development
```

#### Variable 2:
```
Name:  NEXT_PUBLIC_SUPABASE_ANON_KEY
Value: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVweWtkcXJjcmNmaGdrbGN6eWhuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg4MDU2NTcsImV4cCI6MjA3NDM4MTY1N30.8_E... (full key)
Environments: ☑️ Production  ☑️ Preview  ☑️ Development
```

6. Klik **Save**

---

### Step 3: Redeploy Project

Setelah menambahkan environment variables:

1. Pergi ke **Deployments** tab
2. Klik **kebab menu** (⋮) pada deployment terakhir
3. Pilih **Redeploy**
4. Tunggu build selesai

---

## 🐛 Troubleshooting

### Error: "supabaseUrl is required"

**Penyebab:** Environment variables belum ditambahkan atau salah nama.

**Solusi:**
1. Cek di Vercel Settings → Environment Variables
2. Pastikan nama variabel **PERSIS**:
   - ✅ `NEXT_PUBLIC_SUPABASE_URL` 
   - ❌ `SUPABASE_URL` (salah!)
   - ❌ `NEXT_PUBLIC_SUPABASE_URL ` (ada spasi!)

3. Pastikan Value tidak ada typo atau spasi ekstra
4. Redeploy setelah fix

---

### Error: "Invalid API key"

**Penyebab:** ANON_KEY salah atau tidak lengkap.

**Solusi:**
1. Pastikan copy **full key** dari Supabase (biasanya panjang ~200+ karakter)
2. Jangan ada enter/newline di tengah key
3. Copy langsung dari Supabase dashboard, jangan ketik manual

---

### Build Success tapi Error saat Buka Website

**Penyebab:** Environment variables hanya ada di satu environment.

**Solusi:**
1. Vercel Settings → Environment Variables
2. Edit setiap variable
3. Centang **semua environments**: Production, Preview, Development
4. Save dan Redeploy

---

## ✅ Cara Verifikasi Setup Berhasil

Setelah deploy, cek:

1. **Build Logs** tidak ada error "supabaseUrl is required"
2. **Runtime Logs** (Vercel Dashboard → Logs) tidak ada Supabase connection error
3. Website bisa dibuka dan tidak ada console error di browser

---

## 📌 Catatan Keamanan

- ✅ `NEXT_PUBLIC_*` variables **aman** untuk dipublic (akan di-bundle ke client)
- ✅ Anon key adalah public key, aman untuk expose
- ❌ **JANGAN** commit `.env.local` ke Git
- ❌ **JANGAN** share Service Role Key (key yang beda dari anon key)

---

## 🔗 Link Penting

- **Vercel Dashboard:** https://vercel.com/dashboard
- **Supabase Dashboard:** https://app.supabase.com
- **Dokumentasi Vercel Environment Variables:** https://vercel.com/docs/environment-variables

---

**Last Updated:** 2 Oktober 2025
