# Laravel + Next.js Starter Kit

A modern **full-stack starter kit** built with **Laravel (Backend API)** and **Next.js (Frontend App)**.
This starter kit provides a production-ready authentication system, server-side data fetching, and a clean project structure following modern best practices.

It is designed for developers who want to quickly start building scalable applications using **Laravel API + Next.js App Router**.

---

# 🚀 Features

### Authentication

- Laravel API authentication using **Laravel Sanctum**
- Secure cookie-based authentication
- Login / Register system
- Google OAuth login support
- Password reset flow
- Logout functionality

### User Management

- Update user profile
- Change password
- Secure authenticated routes

### Next.js Features

- Server-side data fetching
- Protected routes
- Cookie-based authentication handling
- API service layer for clean requests

### Security

- CSRF protection via Sanctum
- Secure authentication cookies
- API request interceptor

### Best Practices Included

- Clean folder architecture
- API abstraction layer
- Form validation
- Error handling
- Reusable components
- Separation of backend and frontend

---

# 📂 Project Structure

```
project-root
│
├── backend        # Laravel API
│
└── frontend       # Next.js application
```

### Backend (Laravel)

Handles:

- Authentication
- Database
- API endpoints
- Business logic

### Frontend (Next.js)

Handles:

- UI
- Server-side rendering
- API communication

---

# ⚙️ Installation Guide

## 1️⃣ Clone Repository

```bash
git clone https://github.com/fahim27/LARAVEL-NEXTJS-starter-kit
cd project-name
```

---

# 🖥 Backend Setup (Laravel)

Go to backend folder:

```bash
cd backend
```

Install dependencies:

```bash
composer update
```

Create environment file:

```bash
cp .env.example .env
```

Generate app key:

```bash
php artisan key:generate
```

Configure database in `.env`

Example:

```
DB_DATABASE=starterkit
DB_USERNAME=root
DB_PASSWORD=
```

Run migrations:

```bash
php artisan migrate
```

Run database seeder:

```bash
php artisan db:seed
```

Run backend server:

```bash
php artisan serve
```

Backend will run at:

```
http://127.0.0.1:8000
```

---

# 🌐 Frontend Setup (Next.js)

Open new terminal.

Go to frontend folder:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

Frontend will run at:

```
http://localhost:3000
```

---

# 🔐 Authentication Flow

This starter kit uses **Laravel Sanctum for SPA authentication**.

Flow:

1. User login from Next.js
2. Laravel validates credentials
3. Sanctum creates authentication session
4. Auth token stored in cookie
5. Next.js reads cookie for protected requests

---

# 🔑 Google Login Setup

1. Create Google OAuth credentials
2. Add credentials in `.env`

Example:

```
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
GOOGLE_REDIRECT_URL=
```

---

# 📧 Password Reset

The starter kit includes full password reset flow:

1. User requests reset link
2. Email verification
3. OTP verification
4. Password update

---

# 👤 User Features

Users can:

- Update profile information
- Change password
- Securely access protected pages

---

# 🧪 Database Seeder

This project includes sample **Post Factory data**.

Run:

```bash
php artisan db:seed
```

This will generate sample posts for testing server-side fetching.

---

# 📌 Development Tips

Recommended workflow:

```
Terminal 1 → Laravel API
Terminal 2 → Next.js Frontend
```

Run both servers simultaneously for development.

---

# 🛠 Tech Stack

Backend

- Laravel
- Laravel Sanctum
- MySQL

Frontend

- Next.js (App Router)
- Axios
- Formik
- Yup

---

# 📄 License

This project is open-source and available for personal and commercial use.

---

# ❤️ Contributing

Feel free to fork this project and improve it.
Pull requests are always welcome.
