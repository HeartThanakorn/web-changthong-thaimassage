# Deployment Guide

## Local Docker build

```bash
docker build -t chang-thong-thaimassage:latest .
docker run -p 8080:80 chang-thong-thaimassage:latest
```

## docker compose

```bash
docker compose up --build -d
```

## Environment variables

Set `VITE_SETMORE_URL` in `.env.production` before building:

```
VITE_SETMORE_URL=https://your-setmore.setmore.com
```

## VPS checklist

1. `git pull`
2. `npm install`
3. `npm run build`
4. `docker compose up --build -d`
5. Configure reverse proxy (Caddy/Nginx) to enforce HTTPS
6. Replace `/public/images` placeholders with licensed images before launch
7. Update Impressum/Datenschutz texts with final legal copy
