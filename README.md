# Day 16 Repo

Belajar CI/CD

# API ENDPOINT

# =========================

# ResumeFlow API Endpoints

# Base URL: /api/v1

# =========================

# AUTH

POST /api/v1/auth/register
POST /api/v1/auth/login

# USER

GET /api/v1/users/me

# RESUME

POST /api/v1/resumes
GET /api/v1/resumes
GET /api/v1/resumes/:id
PUT /api/v1/resumes/:id
DELETE /api/v1/resumes/:id
GET /api/v1/resumes/:id/export-pdf

# EDUCATION

POST /api/v1/resumes/:resumeId/educations
PUT /api/v1/educations/:id
DELETE /api/v1/educations/:id

# EXPERIENCE

POST /api/v1/resumes/:resumeId/experiences
PUT /api/v1/experiences/:id
DELETE /api/v1/experiences/:id

# SKILL

POST /api/v1/resumes/:resumeId/skills
DELETE /api/v1/skills/:id
