# GIA

Presentacion interactiva construida con React, Vite y Framer Motion.

## Requisitos

- Node.js 22
- npm 11 o compatible

## Desarrollo local

```bash
npm install
npm start
```

La app queda disponible en `http://127.0.0.1:5173`.

Tambien puedes usar:

```bash
npm run dev
```

## Build de produccion

```bash
npm run build
npm run preview
```

## Docker

```bash
docker build -t gia-main .
docker run --rm -p 5173:5173 gia-main
```
