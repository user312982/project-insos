-- Initialize schema for local development
-- This file is executed automatically by the MySQL Docker entrypoint on first run

USE db_insos;

CREATE TABLE IF NOT EXISTS penduduk (
  id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  nik VARCHAR(32) NOT NULL UNIQUE,
  nama VARCHAR(200) NOT NULL,
  nilai_angka DECIMAL(18,2) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

