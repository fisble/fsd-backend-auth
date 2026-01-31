📌 Project Title

FSD Backend – Authentication Service

📖 Description

This is the backend service for the FSD Assignment Project.
It provides user authentication and authorization using JWT, MongoDB Atlas, and Express.js.
The backend is deployed on Render and exposes REST APIs consumed by the frontend application.

⚙️ Tech Stack

Node.js

Express.js

MongoDB Atlas

JWT (JSON Web Token)

bcrypt (Password hashing)

dotenv

CORS

✨ Features

User Registration

Secure Password Hashing

User Login with JWT Authentication

Role-based users (REQUESTER, AGENT)

MongoDB Atlas integration

RESTful API architecture

Deployed on Render

📂 Project Structure
fsd-backend-auth/
│── routes/
│   └── auth.js
│── models/
│   └── User.js
│── db.js
│── index.js
│── .env
│── package.json

🔐 Environment Variables

Create a .env file with:

MONGO_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_jwt_secret
PORT=10000

🚀 API Endpoints
🔹 Register User

POST

/api/auth/register


Body

{
  "name": "John",
  "email": "john@example.com",
  "password": "123456",
  "role": "REQUESTER"
}

🔹 Login User

POST

/api/auth/login


Body

{
  "email": "john@example.com",
  "password": "123456"
}

🛠️ Installation & Run (Local)
git clone https://github.com/fisble/fsd-backend-auth.git
cd fsd-backend-auth
npm install
npm start

🌍 Deployment

Backend is deployed on Render

🔗 Live URL:

https://fsd-backend-auth.onrender.com

👨‍💻 Author

Nikhilesh
Full Stack Development Assignment
