import { supabase } from "./supabase";

// Fungsi untuk test koneksi
export async function testConnection(): Promise<boolean> {
  try {
    const { error } = await supabase.from("warga").select("count");
    if (error) throw error;
    console.log("✅ Koneksi ke database berhasil!");
    return true;
  } catch (error) {
    console.error("❌ Gagal koneksi ke database:", error);
    return false;
  }
}

// Interface untuk data warga
export interface Citizen {
  id?: number;
  nama: string;
  nik: string;
  agama: string;
  jenis_kelamin: string;
  status_perkawinan: string;
  created_at?: Date;
  updated_at?: Date;
}

// Fungsi untuk menambah data warga
export async function addCitizen(
  data: Omit<Citizen, "id" | "created_at" | "updated_at">
): Promise<Citizen> {
  const { data: newCitizen, error } = await supabase
    .from("warga")
    .insert([data])
    .select()
    .single();

  if (error) {
    console.error("❌ Gagal menambah data warga:", error);
    throw error;
  }

  return newCitizen;
}

// Fungsi untuk mendapatkan semua data warga
export async function getAllCitizens(): Promise<Citizen[]> {
  const { data, error } = await supabase
    .from("warga")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("❌ Gagal mendapatkan data warga:", error);
    throw error;
  }

  return data;
}

// Fungsi untuk mendapatkan data warga berdasarkan NIK
export async function getCitizenByNik(nik: string): Promise<Citizen | null> {
  const { data, error } = await supabase
    .from("warga")
    .select("*")
    .eq("nik", nik)
    .single();

  if (error) {
    if (error.code === "PGRST116") {
      return null;
    }
    console.error("❌ Gagal mendapatkan data warga:", error);
    throw error;
  }

  return data;
}

// Fungsi untuk mengupdate data warga
export async function updateCitizen(
  nik: string,
  data: Partial<Omit<Citizen, "id" | "nik" | "created_at" | "updated_at">>
): Promise<Citizen> {
  const { data: updatedCitizen, error } = await supabase
    .from("warga")
    .update(data)
    .eq("nik", nik)
    .select()
    .single();

  if (error) {
    console.error("❌ Gagal mengupdate data warga:", error);
    throw error;
  }

  return updatedCitizen;
}

// Fungsi untuk menghapus data warga
export async function deleteCitizen(nik: string): Promise<void> {
  const { error } = await supabase.from("warga").delete().eq("nik", nik);

  if (error) {
    console.error("❌ Gagal menghapus data warga:", error);
    throw error;
  }
}

// Interface untuk data kegiatan
export interface Kegiatan {
  id?: number;
  judul: string;
  deskripsi: string;
  tanggal: string;
  waktu: string;
  lokasi: string;
  gambar?: string;
  created_at?: Date;
  updated_at?: Date;
}

// Fungsi untuk menambah kegiatan
export async function addKegiatan(
  data: Omit<Kegiatan, "id" | "created_at" | "updated_at">
): Promise<Kegiatan> {
  const { data: newKegiatan, error } = await supabase
    .from("kegiatan")
    .insert([data])
    .select()
    .single();

  if (error) {
    console.error("❌ Gagal menambah kegiatan:", error);
    throw error;
  }

  return newKegiatan;
}

// Fungsi untuk mendapatkan semua kegiatan
export async function getAllKegiatan(): Promise<Kegiatan[]> {
  const { data, error } = await supabase
    .from("kegiatan")
    .select("*")
    .order("tanggal", { ascending: false })
    .order("waktu", { ascending: false });

  if (error) {
    console.error("❌ Gagal mendapatkan data kegiatan:", error);
    throw error;
  }

  return data;
}

// Fungsi untuk mendapatkan kegiatan berdasarkan ID
export async function getKegiatanById(id: number): Promise<Kegiatan | null> {
  const { data, error } = await supabase
    .from("kegiatan")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    if (error.code === "PGRST116") {
      return null;
    }
    console.error("❌ Gagal mendapatkan data kegiatan:", error);
    throw error;
  }

  return data;
}

// Fungsi untuk mengupdate kegiatan
export async function updateKegiatan(
  id: number,
  data: Partial<Omit<Kegiatan, "id" | "created_at" | "updated_at">>
): Promise<void> {
  const { error } = await supabase.from("kegiatan").update(data).eq("id", id);

  if (error) {
    console.error("❌ Gagal mengupdate kegiatan:", error);
    throw error;
  }
}

// Fungsi untuk menghapus kegiatan
export async function deleteKegiatan(id: number): Promise<void> {
  const { error } = await supabase.from("kegiatan").delete().eq("id", id);

  if (error) {
    console.error("❌ Gagal menghapus kegiatan:", error);
    throw error;
  }
}

// Interface untuk statistik warga
export interface CitizenStats {
  totalWarga: number;
  totalLakiLaki: number;
  totalPerempuan: number;
}

// Interface untuk user admin
export interface User {
  id?: number;
  username: string;
  password?: string;
  role: string;
  created_at?: string;
  updated_at?: string;
}

// Fungsi untuk mendapatkan statistik warga
export async function getCitizenStats(): Promise<CitizenStats> {
  try {
    // Get total warga
    const { count: totalWarga, error: totalError } = await supabase
      .from("warga")
      .select("*", { count: "exact", head: true });

    if (totalError) throw totalError;

    // Get total laki-laki
    const { count: totalLakiLaki, error: maleError } = await supabase
      .from("warga")
      .select("*", { count: "exact", head: true })
      .eq("jenis_kelamin", "Laki-laki");

    if (maleError) throw maleError;

    // Get total perempuan
    const { count: totalPerempuan, error: femaleError } = await supabase
      .from("warga")
      .select("*", { count: "exact", head: true })
      .eq("jenis_kelamin", "Perempuan");

    if (femaleError) throw femaleError;

    return {
      totalWarga: totalWarga || 0,
      totalLakiLaki: totalLakiLaki || 0,
      totalPerempuan: totalPerempuan || 0,
    };
  } catch (error) {
    console.error("❌ Gagal mendapatkan statistik warga:", error);
    throw error;
  }
}

// ============ FUNGSI AUTHENTICATION ============

// Fungsi untuk login user
export async function loginUser(
  username: string,
  password: string
): Promise<User | null> {
  const { data, error } = await supabase
    .from("users")
    .select("*")
    .eq("username", username)
    .eq("password", password)
    .single();

  if (error) {
    if (error.code === "PGRST116") {
      return null; // User tidak ditemukan
    }
    console.error("❌ Gagal login:", error);
    throw error;
  }

  // Hapus password dari response untuk keamanan
  const { password: _, ...userWithoutPassword } = data;
  return userWithoutPassword;
}

// Fungsi untuk mendapatkan user berdasarkan ID
export async function getUserById(id: number): Promise<User | null> {
  const { data, error } = await supabase
    .from("users")
    .select("id, username, role, created_at, updated_at")
    .eq("id", id)
    .single();

  if (error) {
    if (error.code === "PGRST116") {
      return null;
    }
    console.error("❌ Gagal mendapatkan user:", error);
    throw error;
  }

  return data;
}
