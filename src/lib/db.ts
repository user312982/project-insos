import mysql from 'mysql2/promise';

// Konfigurasi database
const dbConfig = {
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '3306'),
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'rootpass',
  database: process.env.DB_NAME || 'db_insos',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
};

// Membuat connection pool
const pool = mysql.createPool(dbConfig);

// Fungsi untuk test koneksi
export async function testConnection(): Promise<boolean> {
  try {
    const connection = await pool.getConnection();
    console.log('✅ Koneksi ke database berhasil!');
    connection.release();
    return true;
  } catch (error) {
    console.error('❌ Gagal koneksi ke database:', error);
    return false;
  }
}

// Fungsi untuk mendapatkan informasi database
export async function getDatabaseInfo(): Promise<any> {
  try {
    const connection = await pool.getConnection();
    const [rows] = await connection.execute('SELECT VERSION() as version, DATABASE() as current_database');
    connection.release();
    return rows;
  } catch (error) {
    console.error('❌ Gagal mendapatkan informasi database:', error);
    throw error;
  }
}

// Export pool untuk digunakan di aplikasi
export default pool;
