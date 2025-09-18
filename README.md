# 🚀 Personal Portfolio Website  

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)  
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)  
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)  
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)  
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)  
![Nodemailer](https://img.shields.io/badge/Nodemailer-339933?style=for-the-badge&logo=npm&logoColor=white)  

A modern and responsive **portfolio website** built with **Next.js, Tailwind CSS, and Aceternity UI**. It showcases my skills, projects, education, and provides a contact form integrated with **Nodemailer** for direct communication.  

---

## 📌 Features  

- **Hero Section**: Resume download option & introduction.  
- **About Section**: Brief background and skills overview.  
- **Tech Stack**: Showcasing technologies I work with.  
- **Projects Section**: Each project with live demo, GitHub repo, and description.  
- **Education Section**: Academic history with certificates.  
- **Contact Section**: Nodemailer-powered form to send messages directly to my email.  
- **Responsive Design**: Optimized for all devices using Tailwind CSS.  

---

## 🛠️ Tech Stack  

- **Frontend**: Next.js, React, Tailwind CSS, Aceternity UI  
- **Backend**: Next.js API routes  
- **Email Service**: Nodemailer (Gmail App Password)  
- **Deployment**: Vercel  

---

## 📂 Folder Structure  

```bash
portfolio/
│── app/                 # App router (Next.js 13+)
│   ├── api/             # API routes (e.g., contact form)
│   ├── page.tsx         # Homepage
│   ├── layout.tsx       # Global layout
│   └── globals.css      # Global styles
│
│── Components/          # Reusable React components (Hero, Projects, etc.)
│── Data/                # JSON & static data (projects, testimonials)
│── public/              # Static assets (resume, images, certificates)
│── lib/                 # Utility functions
│
├── package.json         # Dependencies & scripts
├── tsconfig.json        # TypeScript config
├── next.config.ts       # Next.js config
├── postcss.config.mjs   # Tailwind/PostCSS config
└── README.md            # Project documentation
