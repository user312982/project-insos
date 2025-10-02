import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Validasi environment variables
if (!supabaseUrl || !supabaseAnonKey) {
  const missingVars = [];
  if (!supabaseUrl) missingVars.push("NEXT_PUBLIC_SUPABASE_URL");
  if (!supabaseAnonKey) missingVars.push("NEXT_PUBLIC_SUPABASE_ANON_KEY");
  
  const errorMessage = `
╔════════════════════════════════════════════════════════════════════╗
║ ⚠️  SUPABASE ENVIRONMENT VARIABLES TIDAK DITEMUKAN                ║
╠════════════════════════════════════════════════════════════════════╣
║ Variabel yang hilang: ${missingVars.join(", ")}
║                                                                    ║
║ Untuk development (lokal):                                        ║
║ 1. Buat file .env.local di root project                           ║
║ 2. Tambahkan variabel berikut:                                    ║
║    NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co             ║
║    NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key                    ║
║                                                                    ║
║ Untuk production (Vercel):                                        ║
║ 1. Buka Vercel Dashboard → Project Settings                       ║
║ 2. Pilih Environment Variables                                    ║
║ 3. Tambahkan kedua variabel di atas                               ║
║ 4. Redeploy project                                               ║
║                                                                    ║
║ Dapatkan nilai dari: Supabase Dashboard → Settings → API          ║
╚════════════════════════════════════════════════════════════════════╝
  `.trim();
  
  console.error(errorMessage);
  
  // Throw error di production untuk menghentikan build
  if (process.env.NODE_ENV === "production") {
    throw new Error(`Missing Supabase environment variables: ${missingVars.join(", ")}`);
  }
}

export const supabase = createClient(
  supabaseUrl || "",
  supabaseAnonKey || ""
);
