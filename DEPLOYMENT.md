# Deployment Guide untuk Vercel

## 📋 Persiapan Sebelum Deploy

### 1. **Setup Environment Variables di Vercel**

Setelah connect repository ke Vercel, tambahkan environment variables berikut di **Project Settings → Environment Variables**:

```bash
NEXT_PUBLIC_SUPABASE_URL=https://upykdqrcrcfhgklczyhn.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVweWtkcXJjcmNmaGdrbGN6eWhuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg4MDU2NTcsImV4cCI6MjA3NDM4MTY1N30.8_EXhT14sD1P-qOZCHQl7s7LPFWQb1a4Xbfy5EqqaGk
```

**Catatan:** Pastikan kedua variable ditambahkan untuk **Production**, **Preview**, dan **Development** environments.

### 2. **Commit dan Push ke GitHub**

```bash
git add .
git commit -m "Fix build errors and prepare for Vercel deployment"
git push origin main
```

## 🚀 Deploy ke Vercel

### Opsi 1: Deploy via Vercel Dashboard

1. Login ke [Vercel Dashboard](https://vercel.com)
2. Click **"Add New"** → **"Project"**
3. Import repository GitHub Anda
4. Vercel akan auto-detect Next.js project
5. Tambahkan environment variables (lihat langkah 1)
6. Click **"Deploy"**

### Opsi 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI (jika belum)
npm i -g vercel

# Login ke Vercel
vercel login

# Deploy ke production
vercel --prod
```

## ✅ Checklist Sebelum Deploy

- [x] Build berhasil lokal (`npm run build`)
- [x] Environment variables sudah disiapkan
- [x] File `.env` tidak ter-commit (ada di `.gitignore`)
- [x] File `.env.example` ter-commit untuk dokumentasi
- [x] Dependencies deprecated sudah dihapus
- [x] TypeScript errors sudah diperbaiki

## 🔧 Troubleshooting

### Error: Missing environment variables

**Solusi:**
- Pastikan environment variables sudah ditambahkan di Vercel Dashboard
- Variable names harus **EXACT MATCH**: `NEXT_PUBLIC_SUPABASE_URL` dan `NEXT_PUBLIC_SUPABASE_ANON_KEY`

### Build Failed di Vercel

**Solusi:**
1. Check build logs di Vercel dashboard
2. Pastikan `package.json` dependencies sudah up-to-date
3. Test build lokal: `npm run build`

### Database Connection Error

**Solusi:**
- Verify Supabase credentials di environment variables
- Check Supabase project status di [Supabase Dashboard](https://app.supabase.com)

## 📝 Post-Deployment

Setelah deploy berhasil:

1. **Test website** di URL Vercel Anda
2. **Setup Custom Domain** (optional) di Project Settings → Domains
3. **Enable Analytics** di Project Settings → Analytics
4. **Monitor Performance** via Vercel Analytics dashboard

## 🔗 Useful Links

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Deployment Guide](https://nextjs.org/docs/deployment)
- [Supabase Documentation](https://supabase.com/docs)

---

**Need Help?**
- Vercel Support: https://vercel.com/support
- Next.js Discord: https://discord.gg/nextjs
