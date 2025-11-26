# 🚀 Aditya Kumar – MERN Stack Portfolio Website with Admin Panel

A modern, responsive personal portfolio website built with the **MERN stack** (MongoDB, Express.js, React.js, Node.js) and Bootstrap. Features a professional frontend to showcase projects, skills, experience, and an **admin panel** for content management.

---

## ✨ Features

### 🌟 Frontend Features

* **Responsive Design** – Bootstrap-powered responsive layout for desktop and mobile
* **Modern UI/UX** – Clean design with animations and hover effects
* **Project Showcase** – Dynamic gallery with live demo & GitHub links
* **Contact Form** – Functional form with email integration
* **Skills Section** – Interactive tech stack display
* **About Section** – Professional summary and personal information
* **Resume Download** – Direct download link for CV
* **Hire Me Button** – Floating button for quick contact

### 🔧 Admin Panel Features

* **Secure Login** – JWT-based admin authentication
* **Project Management** – Add, edit, delete, and manage portfolio projects
* **Contact Management** – View and respond to messages
* **Profile Management** – Update personal info, skills, and experience
* **Dashboard Analytics** – Quick overview of portfolio activity

### 🛠️ Technical Features

* **RESTful API** – Structured endpoints for projects and messages
* **Image Upload** – Handle project images with preview support
* **Email Integration** – Automated notifications for contact form
* **Database Relations** – Optimized MongoDB schema design
* **Error Handling & Validation** – Robust handling of API requests
* **Security** – Password hashing, CORS protection, input sanitization

---

## 🏗️ Tech Stack

### Frontend

* **React.js** – Frontend library
* **Bootstrap 5** – Responsive design framework
* **React Router** – Client-side routing
* **Axios** – HTTP client for API requests

### Backend

* **Node.js** – Server runtime environment
* **Express.js** – Web framework
* **MongoDB** – Database
* **Mongoose** – ODM for MongoDB
* **JWT** – Authentication
* **Bcrypt** – Password hashing

### Tools & Libraries

* **Postman** – API testing
* **Cloudinary** – Image hosting
* **Render** – Deployment
* **Git & GitHub** – Version control

---

## 📁 Project Structure

```
MyPortfolio/
├── frontend/                  # React frontend
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/        # Reusable components (Navbar, Footer, Hero, Projects, TechStack)
│   │   ├── pages/             # Page components (Home, About, Projects, Contact, AdminDashboard)
│   │   ├── context/           # AuthContext
│   │   ├── utils/             # API utils
│   │   └── App.js
│   ├── package.json
│   └── README.md
├── server/                    # Node.js backend
│   ├── models/                # MongoDB models (User, Project, Contact)
│   ├── routes/                # API routes (auth, projects, contact)
│   ├── middleware/            # Auth, upload middleware
│   ├── utils/                 # Email & helper functions
│   ├── server.js
│   ├── package.json
│   └── .env
├── uploads/                   # Uploaded files
├── .gitignore
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

* Node.js (v14+)
* MongoDB (local or Atlas)
* npm or yarn

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/aditya-life/MyPortfolio.git
cd MyPortfolio
```

2. **Install backend dependencies**

```bash
cd server
npm install
```

3. **Install frontend dependencies**

```bash
cd ../frontend
npm install
```

4. **Configure Environment Variables** (`server/.env`)

```env
MONGODB_URI=mongodb://localhost:27017/portfolio
JWT_SECRET=your_jwt_secret
PORT=8000
```

5. **Start Application**

```bash
# Backend
cd server
npm run dev

# Frontend
cd ../frontend
npm run dev
```

6. **Access**

* Frontend: [http://localhost:5173](http://localhost:5173)
* Backend API: [http://localhost:8000](http://localhost:8000)
* Admin Panel: [http://localhost:5173/admin/dashboard](http://localhost:5173/admin/dashboard)

---

## 📱 Usage

### Visitors

* Browse projects with live demo & GitHub links
* View skills and experience
* Download resume
* Contact via floating Hire Me button

### Admin

* Login at `/admin/login`
* Manage projects and contact messages
* Update profile and skills

---

## 📝 API Endpoints

### Auth

* `POST /api/auth/login` – Admin login
* `GET /api/auth/user` – Get admin info

### Projects

* `GET /api/projects` – Get all projects
* `POST /api/projects` – Create project (auth required)
* `PUT /api/projects/:id` – Update project (auth required)
* `DELETE /api/projects/:id` – Delete project (auth required)

### Contact

* `POST /api/contact` – Submit message
* `GET /api/contact` – Get all messages (auth required)
* `PUT /api/contact/:id/read` – Mark message read (auth required)

---

## 🤝 Contributing

1. Fork the repo
2. Create a branch (`git checkout -b feature-name`)
3. Commit your changes (`git commit -m "Add feature"`)
4. Push to branch (`git push origin feature-name`)
5. Open a Pull Request

---

## 📧 Contact

* Email: [aditya12186@gmail.com](mailto:aditya12186@gmail.com)
* LinkedIn: [https://www.linkedin.com/in/aditya-life](https://www.linkedin.com/in/aditya-life)
* GitHub: [https://github.com/aditya-life](https://github.com/aditya-life)
* Twitter/X: [https://x.com/RISK_LO](https://x.com/RISK_LO)
* Instagram: [https://instagram.com/aadi_aditya](https://instagram.com/aadi_aditya)_
