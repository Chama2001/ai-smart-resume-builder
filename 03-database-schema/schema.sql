-- Database Schema for AI Smart Resume & ATS Optimizer SaaS

CREATE DATABASE IF NOT EXISTS resume_optimizer_db;
USE resume_optimizer_db;

-- 1. Users Table
CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    full_name VARCHAR(150) NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 2. Resume Optimizations Table
CREATE TABLE IF NOT EXISTS resume_optimizations (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    target_job_title VARCHAR(200),
    raw_user_skills TEXT NOT NULL,
    target_job_description TEXT NOT NULL,
    ats_optimized_summary TEXT,
    matched_keywords TEXT,
    optimized_bullet_points TEXT,
    cover_letter_draft TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);
