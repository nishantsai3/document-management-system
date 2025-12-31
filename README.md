# Document Management System (DMS)

## Overview
This project is a Document Management System (DMS) developed as part of an assignment submission.
It enables users to securely register, log in, upload documents, view their own documents, search, download, and delete them.
The application ensures proper authentication, authorization, and user-level data isolation.

## Features

### Authentication and Security
- User registration and login
- JWT-based authentication
- Protected routes
- HTTP interceptor for token handling
- Only authenticated users can access documents

### Document Management
- Upload documents (PDF and image formats)
- Store uploaded files on the server
- Save document metadata in MongoDB
- View only the logged-in user’s documents
- Search documents by name
- Download documents
- Delete documents (only by the document owner)

### Access Control
- Documents are linked to the user who uploaded them
- Users cannot view or delete documents belonging to others

## Technology Stack

### Frontend
- Angular (Standalone Components)
- Angular Router
- Angular HttpClient
- FormsModule
- CommonModule

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- Multer
- JSON Web Token (JWT)
- CORS

## Project Structure

Document-Management-System/
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── middleware/
│   │   ├── config/
│   │   ├── app.js
│   │   └── server.js
│   ├── uploads/
│   ├── package.json
│   └── .env
│
└── frontend/
    ├── src/
    │   └── app/
    │       ├── auth/
    │       ├── dashboard/
    │       ├── upload/
    │       ├── documents/
    │       ├── guards/
    │       └── interceptors/
    ├── angular.json
    └── package.json

## Prerequisites
- Node.js v18.x or later
- npm v9.x or later
- Angular CLI v17.x
- MongoDB v6.x (local or MongoDB Atlas)

## Local Setup Instructions

### Backend Setup
cd backend
npm install

Create a .env file:
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

Start backend:
npx nodemon src/server.js

Backend runs on http://localhost:5000

### Frontend Setup
cd frontend
npm install
ng serve

Frontend runs on http://localhost:4200

## API Endpoints

Authentication:
POST /api/auth/register
POST /api/auth/login

Documents:
POST /api/documents/upload
GET /api/documents/my
DELETE /api/documents/:id

## Author
Nishant Sai Vemishetti
Final Year Computer Science Engineering Student

## Conclusion
This project demonstrates a secure and scalable Document Management System using modern full-stack technologies.
