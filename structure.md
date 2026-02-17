resumeflow/
│
├── backend/
│   ├── modules/
│   │   ├── auth/              # 👤 Member 1
│   │   │   ├── auth.routes.ts
│   │   │   ├── auth.controller.ts
│   │   │   └── auth.service.ts
│   │   │
│   │   ├── resume/            # 👤 Member 2
│   │   │   ├── resume.routes.ts
│   │   │   ├── resume.controller.ts
│   │   │   └── resume.service.ts
│   │   │
│   │   ├── pdf/               # 👤 Member 3
│   │   │   ├── pdf.routes.ts
│   │   │   ├── pdf.controller.ts
│   │   │   └── pdf.service.ts
│   │
│   ├── middlewares/
│   │   └── auth.middleware.ts
│   │
│   ├── prisma/
│   │   └── schema.prisma
│   │
│   └── server.ts
│
├── frontend/
│   ├── features/
│   │   ├── auth/              # 👤 Member 1
│   │   │   ├── pages/
│   │   │   ├── components/
│   │   │   └── api.ts
│   │   │
│   │   ├── resume/            # 👤 Member 2
│   │   │   ├── pages/
│   │   │   ├── components/
│   │   │   └── api.ts
│   │   │
│   │   ├── pdf/               # 👤 Member 3
│   │   │   ├── preview-page.tsx
│   │   │   └── download-button.tsx
│   │
│   ├── shared/
│   │   ├── ui/
│   │   └── hooks/
│   │
│   └── main.tsx
│
├── .env
├── package.json
└── README.md
