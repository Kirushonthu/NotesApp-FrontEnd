# NotesApp - Frontend

A responsive React frontend for the NotesApp full stack project.

## Live Demo
[https://notes-app-front-end.vercel.app](https://notes-app-front-end.vercel.app)

## Tech Stack

- React
- React Router DOM
- Tailwind CSS
- Vite
- Deployed on Vercel

## Features

- User Signup & Login
- JWT-based authentication
- Create, View, Edit, Delete notes
- Protected routes
- Responsive design with hamburger menu

## Getting Started

```bash
git clone https://github.com/Kirushonthu/NotesApp-FrontEnd.git
cd NotesApp-FrontEnd
npm install
npm run dev
```
VITE_API_URL=http://localhost:3047

## Folder Structure

NotesApp-FrontEnd/
├── public/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   └── ProtectedRoute.jsx
│   ├── pages/
│   │   ├── Login.jsx
│   │   ├── Signup.jsx
│   │   ├── Home.jsx
│   │   ├── Notes.jsx
│   │   ├── AddNote.jsx
│   │   └── About.jsx
│   ├── App.jsx
│   └── main.jsx
├── .env
├── .gitignore
├── index.html
├── package.json
├── vercel.json
└── vite.config.js

## Backend Repo

[https://github.com/Kirushonthu/NotesApp-BackEnd](https://github.com/Kirushonthu/NotesApp-BackEnd)

## Environment Variables

Create a `.env` file in the root:
