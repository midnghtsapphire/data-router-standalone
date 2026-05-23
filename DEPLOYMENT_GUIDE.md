# Deployment Guide

## 1. Prerequisites

- Python 3.11+
- Node.js 20+
- Docker (optional)
- Vercel project for frontend test deployment

## 2. Environment setup

1. Copy `.env.example` to `.env`.
2. Replace placeholder values for database, JWT, Stripe, and OpenRouter keys.

## 3. Backend deployment

```bash
cd backend
pip install -r requirements.txt
uvicorn backend.main:app --host 0.0.0.0 --port 8002
```

## 4. Frontend deployment

```bash
cd frontend
npm install
npm run build
```

Deploy the built frontend to Vercel and set the API base URL to the backend service.

## 5. Docker option

```bash
docker compose up --build
```

## 6. Baseline validation

From the repository root:

```bash
npm test
npm run build
```
