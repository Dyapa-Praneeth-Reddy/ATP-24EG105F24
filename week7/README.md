# 📝 Full-Stack Blog Application

Welcome to the **Full-Stack Blog Application**! This is a robust, dynamic, and responsive MERN-stack web application built for creating, reading, and managing blog posts. It features a modern, beautiful user interface powered by React and Tailwind CSS, with a secure backend API built using Express and MongoDB.

## ✨ Features

- **User Authentication**: Secure sign-up, login, and logout capabilities using JSON Web Tokens (JWT) and HTTP-only cookies.
- **Create & Manage Posts**: Authenticated users can create, edit, and delete their own blog posts.
- **Read & Explore**: Browse a collection of blog posts published by different authors.
- **Responsive Design**: A fully responsive, mobile-friendly user interface that looks great on any device.
- **State Management**: Efficient global state management using Zustand.
- **Form Validation**: Robust client-side form handling and validation using React Hook Form.

## 🛠️ Technology Stack

### Frontend
- **React 19** - Component-based user interface library.
- **Vite** - Blazing fast frontend build tool.
- **Tailwind CSS 4** - Utility-first CSS framework for rapid styling.
- **Zustand** - Minimalist, fast, and scalable state management.
- **React Router 7** - Declarative routing for React applications.
- **React Hook Form** - Flexible and extensible forms with easy-to-use validation.
- **Axios** - Promise-based HTTP client for the browser and Node.js.
- **React Hot Toast** - Smoking hot notifications for React.

### Backend
- **Node.js & Express 5** - Fast, unopinionated, minimalist web framework.
- **MongoDB & Mongoose 9** - NoSQL database and elegant mongodb object modeling.
- **JWT (JSON Web Tokens)** - Secure transmission of information as a JSON object.
- **Bcryptjs** - Library to help hash passwords.
- **Cookie Parser** - Parse Cookie header and populate `req.cookies`.
- **Dotenv** - Loads environment variables from a `.env` file.

## 📂 Project Structure

```
BLOG-APP/
├── BLOG-APP BACKEND/        # Express server, MongoDB models, APIs, and middlewares
│   ├── APIs/                # Route controllers and endpoints
│   ├── middlewares/         # Custom Express middlewares (auth, etc.)
│   ├── models/              # Mongoose database schemas
│   ├── server.js            # Main entry point for the backend server
│   └── .env                 # Environment variables
│
└── BLOG-APP FRONTEND/       # React frontend application
    ├── src/                 # React components, pages, and hooks
    ├── public/              # Static assets
    ├── index.html           # Main HTML template
    ├── vite.config.js       # Vite configuration
    └── tailwind.config.js   # Tailwind CSS configuration
```

## 🚀 Getting Started

Follow these steps to get the application running locally on your machine.

### Prerequisites
- Node.js (v18 or higher recommended)
- MongoDB installed locally or a MongoDB Atlas URI

### 1. Clone the repository
```bash
git clone <your-repository-url>
cd BLOG-APP
```

### 2. Setup the Backend
1. Navigate to the backend directory:
   ```bash
   cd "BLOG-APP BACKEND"
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the root of the `BLOG-APP BACKEND` directory and add your environment variables:
   ```env
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   ```
4. Start the backend development server:
   ```bash
   npm start
   ```

### 3. Setup the Frontend
1. Open a new terminal and navigate to the frontend directory:
   ```bash
   cd "BLOG-APP FRONTEND"
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the frontend Vite development server:
   ```bash
   npm run dev
   ```

### 4. Explore the App
Open your browser and navigate to `http://localhost:5173` (or the port specified by Vite) to explore the blog application!

## 📜 License
This project is licensed under the ISC License.