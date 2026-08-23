# 📄 AI Smart Resume & ATS Optimizer SaaS

An enterprise-grade boilerplate designed to help job seekers bypass Applicant Tracking Systems (ATS). This platform uses AI to tailor user profiles and skills perfectly against specific Job Descriptions, generating ATS-optimized resumes and cover letters instantly.

## 🏛️ Architecture Stack
*   **Frontend UI:** Next.js 14, React, TypeScript, Tailwind CSS
*   **AI Engine (Backend):** Python, Flask, Google Gemini API
*   **Database:** Relational schema (MySQL) for secure user profile management
*   **Prompt Engineering:** Advanced structured prompts for HR & ATS keyword optimization

## 📂 Repository Structure
```text
ai-smart-resume-builder/
│
├── 01-nextjs-ui/                     # The SaaS Workspace
│   └── app/
│       └── page.tsx                  # ATS Resume Generator UI
│
├── 02-flask-ai-backend/              # The AI Core
│   ├── app.py                        # API Gateway
│   └── prompts/
│       └── resume_prompts.py         # ATS Optimization Prompts
│
└── 03-database-schema/               # Relational DB
    └── schema.sql                    # User and Resume Data Models
